import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Compassionate Guidance During Difficult Times</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We understand the challenges you face. Our platform helps you navigate funeral planning with ease and dignity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/search" className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold text-lg transition">
              Find Service Providers
            </Link>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-semibold text-lg transition">
              Start Planning
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How We Can Help</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Planning Checklists</h3>
            <p className="text-gray-600">
              Comprehensive guides and checklists to help you manage all aspects of funeral planning.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Financial Assistance</h3>
            <p className="text-gray-600">
              Access micro-financing options to help cover immediate funeral expenses.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Service Provider Directory</h3>
            <p className="text-gray-600">
              Find and compare local funeral homes, cemeteries, and related services.
            </p>
          </div>
        </div>
      </div>

      {/* Service Providers Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Find Service Providers</h2>
              <p className="text-gray-700 mb-6">
                Our directory includes funeral homes, cemeteries, florists, and other services in your area. Compare options, read reviews, and connect directly with providers.
              </p>
              <Link href="/search" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-semibold inline-block transition">
                Search Directory
              </Link>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-4">Service Categories</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Funeral Homes
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cemeteries
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cremation Services
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Memorial Services
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Grief Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How We&apos;ve Helped Others</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Sarah Thompson</h4>
                <p className="text-gray-600 text-sm">Los Angeles, CA</p>
              </div>
            </div>
            <p className="text-gray-700">
              &ldquo;This platform made the overwhelming process of planning my father&apos;s funeral much more manageable. The checklists and provider directory were invaluable resources during a difficult time.&rdquo;
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Michael Rodriguez</h4>
                <p className="text-gray-600 text-sm">Chicago, IL</p>
              </div>
            </div>
            <p className="text-gray-700">
              &ldquo;Being able to compare funeral homes in my area helped me find the right provider for my mother&apos;s service. The financial assistance options also helped our family during this unexpected time.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">We&apos;re Here to Help</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let us guide you through the funeral planning process with compassion and expertise.
          </p>
          <Link href="/search" className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold inline-block transition">
            Find Service Providers
          </Link>
        </div>
      </div>
    </div>
  );
}
