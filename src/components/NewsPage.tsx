import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { websiteData } from '../data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface NewsPageProps {
    language: 'en' | 'hi';
}

const NewsPage: React.FC<NewsPageProps> = ({ language }) => {
    const additionalNews = [
        {
            date: "2025-08-01",
            title: {
                en: "Academic Reforms Proposal Submitted",
                hi: "शैक्षणिक सुधार प्रस्ताव प्रस्तुत"
            },
            content: {
                en: "VSS has submitted a comprehensive proposal for academic reforms focusing on faculty development and student welfare.",
                hi: "वीएसएस ने शिक्षक विकास और छात्र कल्याण पर केंद्रित एक व्यापक शैक्षणिक सुधार प्रस्ताव प्रस्तुत किया है।"
            },
            category: {
                en: "Academic",
                hi: "शैक्षणिक"
            }
        },
        {
            date: "2025-07-25",
            title: {
                en: "Faculty Development Workshop Announced",
                hi: "शिक्षक विकास कार्यशाला की घोषणा"
            },
            content: {
                en: "A comprehensive workshop on modern teaching methodologies and research techniques will be conducted next month.",
                hi: "आधुनिक शिक्षण पद्धतियों और अनुसंधान तकनीकों पर एक व्यापक कार्यशाला अगले महीने आयोजित की जाएगी।"
            },
            category: {
                en: "Workshop",
                hi: "कार्यशाला"
            }
        },
        {
            date: "2025-07-20",
            title: {
                en: "Infrastructure Development Plan",
                hi: "बुनियादी ढांचा विकास योजना"
            },
            content: {
                en: "New plans for upgrading university infrastructure including libraries, laboratories, and digital facilities.",
                hi: "पुस्तकालय, प्रयोगशाला और डिजिटल सुविधाओं सहित विश्वविद्यालय के बुनियादी ढांचे के उन्नयन की नई योजनाएं।"
            },
            category: {
                en: "Infrastructure",
                hi: "बुनियादी ढांचा"
            }
        }
    ];

    const allNews = [...websiteData.news, ...additionalNews].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            'Academic': 'bg-blue-100 text-blue-800',
            'शैक्षणिक': 'bg-blue-100 text-blue-800',
            'Workshop': 'bg-green-100 text-green-800',
            'कार्यशाला': 'bg-green-100 text-green-800',
            'Infrastructure': 'bg-purple-100 text-purple-800',
            'बुनियादी ढांचा': 'bg-purple-100 text-purple-800',
            'Election': 'bg-orange-100 text-orange-800',
            'चुनाव': 'bg-orange-100 text-orange-800'
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

                {/* Featured News */}
                {allNews.length > 0 && (
                    <div className="mb-12">
                        <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Featured News' : 'मुख्य समाचार'}
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
                                <div className="mt-4 flex items-center text-orange-600">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span className="text-sm">
                                        {language === 'en' ? 'Just published' : 'अभी प्रकाशित'}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* All News */}
                <div>
                    <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'All Updates' : 'सभी अपडेट'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allNews.slice(1).map((news, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="w-4 h-4 text-orange-600" />
                                            <CardDescription className="text-orange-600 font-medium">
                                                {new Date(news.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US')}
                                            </CardDescription>
                                        </div>
                                        {(news as any).category && (
                                            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor((news as any).category[language])}`}>
                                                {(news as any).category[language]}
                                            </span>
                                        )}
                                    </div>
                                    <CardTitle className={`text-lg leading-tight ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {news.title[language]}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className={`text-gray-700 text-sm leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {news.content[language]}
                                    </p>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="mt-4 p-0 h-auto text-orange-600 hover:text-orange-700"
                                    >
                                        <span className={language === 'hi' ? 'font-hindi' : ''}>
                                            {language === 'en' ? 'Read more' : 'और पढ़ें'}
                                        </span>
                                        <ArrowRight className="ml-1 w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="mt-16">
                    <Card className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                        <CardContent className="p-8 text-center">
                            <h2 className={`text-2xl font-bold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Stay Updated with VSS'
                                    : 'वीएसएस के साथ अपडेट रहें'
                                }
                            </h2>
                            <p className={`text-orange-100 mb-6 max-w-2xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Subscribe to our newsletter to receive the latest updates, announcements, and important information directly in your inbox.'
                                    : 'नवीनतम अपडेट, घोषणाएं और महत्वपूर्ण जानकारी सीधे अपने इनबॉक्स में प्राप्त करने के लिए हमारे न्यूजलेटर की सदस्यता लें।'
                                }
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder={language === 'en' ? 'Enter your email' : 'अपना ईमेल दर्ज करें'}
                                    className="flex-1 px-4 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                                />
                                <Button
                                    variant="secondary"
                                    className="bg-white text-orange-600 hover:bg-orange-50"
                                >
                                    <span className={language === 'hi' ? 'font-hindi' : ''}>
                                        {language === 'en' ? 'Subscribe' : 'सदस्यता लें'}
                                    </span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
