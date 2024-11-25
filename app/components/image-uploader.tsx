'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { processImage } from '../actions/processImage'
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'

export function ImageUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreviewUrl(URL.createObjectURL(selectedFile))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    setIsProcessing(true)
    const formData = new FormData()
    formData.append('image', file)

    try {
      const result = await processImage(formData)
      if (result.success) {
        setProcessedImageUrl(result.processedImageUrl)
      }
    } catch (error) {
      console.error('Error processing image:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  const socialMediaPlatforms = [
    { name: 'Facebook', icon: Facebook },
    { name: 'LinkedIn', icon: Linkedin },
    { name: 'Twitter', icon: Twitter },
    { name: 'Instagram', icon: Instagram },
  ]

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
        {previewUrl && (
          <div className="mt-4">
            <Image src={previewUrl} alt="Preview" width={200} height={200} className="rounded-md mx-auto" />
          </div>
        )}
        <Button type="submit" disabled={!file || isProcessing} className="w-full">
          {isProcessing ? 'Processing...' : 'Transform Image'}
        </Button>
      </form>
      {processedImageUrl && (
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900">Processed Image</h3>
          <Image src={processedImageUrl} alt="Processed" width={400} height={400} className="rounded-md mt-2 mx-auto" />
          <div className="mt-4">
            <h4 className="text-md font-medium text-gray-900">Update your social media profiles</h4>
            <div className="flex justify-center space-x-4 mt-2">
              {socialMediaPlatforms.map((platform) => (
                <Button
                  key={platform.name}
                  variant="outline"
                  size="icon"
                  onClick={() => console.log(`Updating ${platform.name} profile picture`)}
                  title={`Update ${platform.name} profile picture`}
                >
                  <platform.icon className="h-4 w-4" />
                  <span className="sr-only">Update {platform.name} profile picture</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

