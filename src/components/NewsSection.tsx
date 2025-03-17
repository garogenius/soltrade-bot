import React from 'react';
import { Newspaper, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsSectionProps {
  news: NewsItem[];
}

export const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <TrendingUp className="h-5 w-5 text-green-600" />;
      case 'negative':
        return <TrendingDown className="h-5 w-5 text-red-600" />;
      default:
        return <Minus className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Newspaper className="h-6 w-6 mr-2 text-blue-600" />
        Market News
      </h2>
      <div className="space-y-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.summary}</p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <span>{item.source}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(item.timestamp).toLocaleString()}</span>
                </div>
              </div>
              <div className="ml-4">{getSentimentIcon(item.sentiment)}</div>
            </div>
            <div className="mt-3">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};