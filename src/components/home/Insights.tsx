import { Clock, ChevronRight } from 'lucide-react';

export default function InsightsPage() {
  return (
    <div className="font-sans">
      {/* Main container with light gray background */}
      <div className="bg-gray-50 min-h-screen">
        {/* Content container */}
        <div className="max-w-6xl mx-auto p-8">
          {/* Insights section with two columns */}
          <div className="flex border-t border-gray-200 pt-8">
            {/* Left column - Navigation */}
            <div className="w-1/3 pr-12 border-r border-gray-200">
              <h2 className="text-gray-700 uppercase text-sm font-semibold mb-8">INSIGHTS</h2>

              <nav className="space-y-6">
                <a href="#" className="block text-gray-800 hover:text-blue-500 text-2xl font-medium">
                  Whitepapers
                </a>
                <a href="#" className="block text-gray-800 hover:text-blue-500 text-2xl font-medium">
                  Blog
                </a>
              </nav>

              <div className="mt-40">
                <a href="#" className="flex items-center text-red-400 font-medium">
                  All Articles <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right column - Latest article */}
            <div className="w-2/3 pl-12">
              <h2 className="text-gray-700 uppercase text-sm font-semibold mb-8">LATEST ARTICLE</h2>

              <div className="flex space-x-8">
                {/* Award badge image */}
                <div className="w-1/3">
                  <div className="relative">
                    {/* Hexagon shape with border */}
                    <div className="bg-red-800 w-full aspect-square rounded-lg overflow-hidden relative">
                      {/* Outer border */}
                      <div className="absolute inset-2 border-2 border-white opacity-40"></div>

                      {/* Inner content */}
                      <div className="flex flex-col items-center justify-center h-full text-white p-4">
                        {/* Trophy icon */}
                        <div className="mb-2">
                          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                          </div>
                        </div>

                        {/* Top rated text */}
                        <div className="text-center mb-4">
                          <div className="flex items-center justify-center space-x-2 mb-1">
                            <div className="w-6 h-px bg-white"></div>
                            <p className="text-xs tracking-wider">TOP RATED</p>
                            <div className="w-6 h-px bg-white"></div>
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center mb-2 text-white">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="mx-1">★</span>
                          ))}
                        </div>

                        {/* Company description */}
                        <div className="text-center mt-2">
                          <p className="text-sm leading-tight">App Development</p>
                          <p className="text-sm leading-tight">Company</p>
                          <p className="text-xl font-bold mt-2">USA</p>
                        </div>
                      </div>

                      {/* Yellow ribbon */}
                      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
                        <div className="bg-yellow-400 py-1 px-4 text-center mx-auto">
                          <p className="text-lg">AppFirmsReview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article content */}
                <div className="w-2/3">
                  <h3 className="text-2xl font-bold text-gray-800 leading-tight mb-8">
                    FoxSolution Ranked Among Top Mobile App Development Companies in the USA by AppFirmsReview
                  </h3>

                  <div className="flex items-center text-gray-500 mt-24">
                    <Clock className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-lg">1 mins | April 25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}