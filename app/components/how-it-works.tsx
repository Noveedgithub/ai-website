import Image from 'next/image'

export function HowItWorks() {
  const steps = [
    {
      title: 'Upload Your Photo',
      description: 'Choose a casual photo of yourself from any setting.',
      image: '/placeholder.svg?height=200&width=200',
    },
    {
      title: 'AI Processing',
      description: 'Our advanced AI analyzes and transforms your photo.',
      image: '/placeholder.svg?height=200&width=200',
    },
    {
      title: 'Get Professional Results',
      description: 'Download your new professional headshot.',
      image: '/placeholder.svg?height=200&width=200',
    },
    {
      title: 'Update Social Media',
      description: 'Instantly update your profile picture across multiple platforms.',
      image: '/placeholder.svg?height=200&width=200',
    },
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple 4-Step Process
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Transform your casual photo into a professional headshot and update your social media profiles in just four easy steps.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                    <span className="text-lg font-medium">{index + 1}</span>
                  </div>
                  <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{step.description}</p>
                </div>
                <div className="mt-4">
                  <Image src={step.image} alt={step.title} width={200} height={200} className="mx-auto rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

