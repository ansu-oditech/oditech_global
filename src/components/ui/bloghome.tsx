import React from 'react';

// Define our article data structure
interface Article {
  title: string;
  readTime: number;
  date: string;
  youtubeUrl?: string;
  image?: string;
}

const BlogHomepage: React.FC = () => {
  // Featured article data with YouTube URL
  const featuredArticle: Article = {
    title: "Top 10 ChatGPT Alternatives for Business Use in 2025",
    readTime: 36,
    date: "April 15, 2025",
    youtubeUrl: "https://www.youtube.com/embed/su9s2cZ81gc" // Dummy YouTube URL
  };

  // Other articles data
  const articles: Article[] = [
    {
      title: "Top 25 MVP Development Companies",
      readTime: 52,
      date: "March 24, 2025"
    },
    {
      title: "IoT Apps for Oil & Gas Industry – What's in It?",
      readTime: 12,
      date: "February 24, 2025"
    },
    {
      title: "Internet of Things in Logistics Development",
      readTime: 11,
      date: "February 20, 2025"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-5xl font-normal text-center mb-8">We have awesome <span className='text-vofox-blue'>stories</span> to tell you</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Featured article with YouTube embed instead of image */}
        <div className="md:w-1/2">
          <div className="w-full aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100">
            <iframe
              className="w-full h-full"
              src={featuredArticle.youtubeUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-normal mb-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer">{featuredArticle.title}</h2>
          <div className="flex items-center text-gray-500">
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" />
                <path d="M10 6a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 11V7a1 1 0 011-1z" />
              </svg>
              {featuredArticle.readTime} mins
            </span>
            <span className="mx-2">|</span>
            <span>{featuredArticle.date}</span>
          </div>
        </div>

        {/* List of other articles */}
        <div className="md:w-1/2">
          {articles.map((article, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-normal mb-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer">{article.title}</h2>
              <div className="flex items-center text-gray-500">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" />
                    <path d="M10 6a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 11V7a1 1 0 011-1z" />
                  </svg>
                  {article.readTime} mins
                </span>
                <span className="mx-2">|</span>
                <span>{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHomepage;