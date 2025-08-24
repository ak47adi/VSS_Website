import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { websiteData } from '../data/content';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface NewsDetailPageProps {
    language: 'en' | 'hi';
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ language }) => {
    const { slug } = useParams<{ slug: string }>();
    const item = websiteData.news.find((n: any) => n.slug === slug);

    if (!item) {
        return (
            <div className="min-h-screen py-16">
                <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
                    <p className={`text-center text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'News item not found.' : 'समाचार नहीं मिला।'}
                    </p>
                    <div className="mt-6 text-center">
                        <Link to="/news">
                            <Button variant="outline">
                                <ArrowLeft className="mr-2 w-4 h-4" />
                                <span className={language === 'hi' ? 'font-hindi' : ''}>
                                    {language === 'en' ? 'Back to News' : 'समाचार पर वापस जाएँ'}
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const dateFmt = new Date(item.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <div className="min-h-screen py-16 bg-gray-50">
            <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
                <Link to="/news">
                    <Button variant="link" className="p-0 text-orange-600">
                        <ArrowLeft className="mr-1 w-4 h-4" />
                        <span className={language === 'hi' ? 'font-hindi' : ''}>
                            {language === 'en' ? 'Back to all news' : 'सभी समाचारों पर वापस'}
                        </span>
                    </Button>
                </Link>

                <Card className="mt-4">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-orange-600 text-sm font-medium">
                                <Calendar className="w-4 h-4" />
                                <span>{dateFmt}</span>
                            </div>
                            {(item as any).category && (
                                <span className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
                                    {(item as any).category[language]
                                    }
                                </span>
                            )}
                        </div>
                        <CardTitle className={`text-3xl ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {item.title[language]}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={`prose max-w-none ${language === 'hi' ? 'font-hindi' : ''}`}>
                            <p className="text-gray-800 text-lg leading-relaxed">{item.content[language]}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default NewsDetailPage;
