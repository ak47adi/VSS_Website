import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { websiteData } from '../data/content';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface NewsPageProps {
    language: 'en' | 'hi';
}

const NewsPage: React.FC<NewsPageProps> = ({ language }) => {
    // Live relative time label state (updates every minute)
    const [now, setNow] = useState<Date>(new Date());
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 60_000);
        return () => clearInterval(id);
    }, []);

    // News items are sourced from websiteData.news
    const allNews = [...websiteData.news].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Bilingual relative time: Just now / X minutes ago / X hours ago / Yesterday / X days ago
    const formatRelativeTime = (isoDate: string): string => {
        const published = new Date(isoDate);
        const diffMs = now.getTime() - published.getTime();
        if (diffMs < 60_000) return language === 'en' ? 'Just now' : 'अभी';
        const diffMin = Math.floor(diffMs / 60_000);
        if (diffMin < 60) {
            if (language === 'en') return `${diffMin} minute${diffMin === 1 ? '' : 's'} ago`;
            return `${diffMin} मिनट पहले`;
        }
        const diffHr = Math.floor(diffMin / 60);
        if (diffHr < 24) {
            if (language === 'en') return `${diffHr} hour${diffHr === 1 ? '' : 's'} ago`;
            return `${diffHr} घंटे पहले`;
        }
        const diffDay = Math.floor(diffHr / 24);
        if (diffDay === 1) return language === 'en' ? 'Yesterday' : 'कल';
        return language === 'en' ? `${diffDay} days ago` : `${diffDay} दिन पहले`;
    };

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            'Academic': 'bg-blue-100 text-blue-800',
            'शैक्षणिक': 'bg-blue-100 text-blue-800',
            'Workshop': 'bg-green-100 text-green-800',
            'कार्यशाला': 'bg-green-100 text-green-800',
            'Infrastructure': 'bg-purple-100 text-purple-800',
            'बुनियादी ढांचा': 'bg-purple-100 text-purple-800',
            'Election': 'bg-orange-100 text-orange-800',
            'चुनाव': 'bg-orange-100 text-orange-800',
            'Welfare': 'bg-yellow-100 text-yellow-800',
            'कल्याण': 'bg-yellow-100 text-yellow-800'
        };
        return colors[category] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="min-h-screen py-16 bg-gray-50">
            <div className="w-full px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {websiteData.navigation.news[language]}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en'
                            ? 'Stay updated with the latest news, announcements, and developments from VSS.'
                            : 'वीएसएस से नवीनतम समाचार, घोषणाओं और विकास के साथ अपडेट रहें।'
                        }
                    </p>
                </div>

                {/* Latest News (single item) */}
                {allNews.length > 0 && (
                    <div className="mb-12">
                        <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Latest Update' : 'नवीनतम अपडेट'}
                        </h2>
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-l-orange-600">
                            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                                        <Calendar className="w-5 h-5 text-orange-600" />
                                        <span className="text-sm text-orange-600 font-medium">
                                            {new Date(allNews[0].date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    {(allNews[0] as any).category && (
                                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor((allNews[0] as any).category[language])}`}>
                                            {(allNews[0] as any).category[language]}
                                        </span>
                                    )}
                                </div>
                                <CardTitle className={`text-2xl ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {allNews[0].title[language]}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <p className={`text-gray-700 text-lg leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {allNews[0].content[language]}
                                </p>
                                <div className="mt-6 flex items-center justify-between">
                                    <div className="flex items-center text-orange-600">
                                        <Clock className="w-4 h-4 mr-2" />
                                        <span className="text-sm">
                                            {formatRelativeTime(allNews[0].date)}
                                        </span>
                                    </div>
                                    <Link to={`/news/${(allNews[0] as any).slug}`}>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="p-0 h-auto text-orange-600 hover:text-orange-700"
                                        >
                                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                                {language === 'en' ? 'Read more' : 'और पढ़ें'}
                                            </span>
                                            <ArrowRight className="inline ml-1 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
                {/* Newsletter Subscription (commented out for now) */}
                {false && (
                    <div className="mt-16">
                        <Card className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                            <CardContent className="p-8 text-center">
                                {/* ...newsletter UI... */}
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsPage;
