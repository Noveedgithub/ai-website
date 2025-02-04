import { Camera, Sparkles, Briefcase, Share2 } from 'lucide-react'

export function Features() {
  const features = [
    {
      name: 'Upload Any Photo',
      description: 'Simply upload a casual photo of yourself from any setting.',
      icon: Camera,
    },
    {
      name: 'AI Processing',
      description: 'Our advanced AI transforms your photo into a professional image.',
      icon: Sparkles,
    },
    {
      name: 'Professional Results',
      description: 'Get a polished, professional photo perfect for LinkedIn and other platforms.',
      icon: Briefcase,
    },
    {
      name: 'Social Media Integration',
      description: 'Update your profile picture across multiple platforms with just one click.',
      icon: Share2,
    },
  ]

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transform Your Image in Seconds
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI-powered tool turns your casual photos into professional headshots and updates your social media profiles.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

