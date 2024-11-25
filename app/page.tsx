import Image from 'next/image'
import { ImageUploader } from './components/image-uploader'
import { Features } from './components/features'
import { HowItWorks } from './components/how-it-works'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">AI Image Processor</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border border-gray-200 rounded-lg shadow-lg bg-white overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image
                    className="h-48 w-full object-cover md:w-48"
                    src="/placeholder.svg?height=192&width=192"
                    alt="AI Image Processing"
                    width={192}
                    height={192}
                  />
                </div>
                <div className="p-8 flex items-center justify-center h-full">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Transform Your Photos</h2>
                    <p className="mt-2 text-gray-600 mb-4">Upload a casual photo and get a professional version instantly!</p>
                    <ImageUploader />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <Image
                    className="h-8 w-8 rounded-full"
                    src="/placeholder.svg?height=32&width=32"
                    alt="Upload"
                    width={32}
                    height={32}
                  />
                  <h3 className="ml-2 text-lg font-medium text-gray-900">1. Upload</h3>
                </div>
                <p className="mt-2 text-base text-gray-500">Upload your casual photo securely to our platform.</p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <Image
                    className="h-8 w-8 rounded-full"
                    src="/placeholder.svg?height=32&width=32"
                    alt="Process"
                    width={32}
                    height={32}
                  />
                  <h3 className="ml-2 text-lg font-medium text-gray-900">2. Process</h3>
                </div>
                <p className="mt-2 text-base text-gray-500">Our AI analyzes and enhances your photo professionally.</p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <Image
                    className="h-8 w-8 rounded-full"
                    src="/placeholder.svg?height=32&width=32"
                    alt="Download"
                    width={32}
                    height={32}
                  />
                  <h3 className="ml-2 text-lg font-medium text-gray-900">3. Download</h3>
                </div>
                <p className="mt-2 text-base text-gray-500">Get your professional photo ready for use on any platform.</p>
              </div>
            </div>
          </div>
          <Features />
          <HowItWorks />
        </div>
      </main>
    </div>
  )
}

