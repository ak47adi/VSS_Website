import React from 'react';
import { Calendar, Users, Target, ArrowRight } from 'lucide-react';
import { websiteData, electionTimeline } from '../data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface HomePageProps {
    language: 'en' | 'hi';
    setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ language, setCurrentPage }) => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center">
                        <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Welcome to VSS' : 'वीएसएस में आपका स्वागत है'}
                        </h1>
                        <p className={`text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {websiteData.header.subtitle[language]}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white text-orange-600 border-white hover:bg-orange-50"
                                onClick={() => setCurrentPage('platform')}
                            >
                                <span className={language === 'hi' ? 'font-hindi' : ''}>
                                    {language === 'en' ? 'Our Platform' : 'हमारी नीतियाँ'}
                                </span>
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="secondary"
                                onClick={() => setCurrentPage('candidates')}
                            >
                                <span className={language === 'hi' ? 'font-hindi' : ''}>
                                    {language === 'en' ? 'Meet Our Candidates' : 'हमारे उम्मीदवारों से मिलें'}
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-gray-50">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {websiteData.navigation.about[language]}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="border-l-4 border-l-orange-600">
                            <CardHeader>
                                <CardTitle className={`flex items-center ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    <Target className="w-6 h-6 mr-2 text-orange-600" />
                                    {language === 'en' ? 'Our Mission' : 'हमारा मिशन'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {websiteData.about.mission[language]}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-orange-600">
                            <CardHeader>
                                <CardTitle className={`flex items-center ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    <Users className="w-6 h-6 mr-2 text-orange-600" />
                                    {language === 'en' ? 'Our Vision' : 'हमारी दृष्टि'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {websiteData.about.vision[language]}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Election Timeline */}
            <section className="py-20">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Election Timeline' : 'चुनाव समयसीमा'}
                        </h2>
                        <p className={`text-xl text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Important dates and events' : 'महत्वपूर्ण तारीखें और घटनाएं'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {electionTimeline.map((item, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className={`flex items-center text-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        <Calendar className="w-5 h-5 mr-2" />
                                        {new Date(item.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US')}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className={`font-medium ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {item.event[language]}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest News Preview */}
            <section className="py-20 bg-gray-50">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Latest Updates' : 'नवीनतम अपडेट'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {websiteData.news.slice(0, 2).map((news, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardDescription className="text-orange-600 font-medium">
                                        {new Date(news.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US')}
                                    </CardDescription>
                                    <CardTitle className={language === 'hi' ? 'font-hindi' : ''}>
                                        {news.title[language]}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {news.content[language]}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Button
                            variant="outline"
                            onClick={() => setCurrentPage('news')}
                            className="border-orange-600 text-orange-600 hover:bg-orange-50"
                        >
                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                {language === 'en' ? 'View All News' : 'सभी समाचार देखें'}
                            </span>
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Platform Snapshot */}
            <section className="py-20">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {websiteData.platform.title[language]}
                        </h2>
                        <p className={`text-xl text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Our key commitments' : 'हमारी मुख्य प्रतिबद्धताएं'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {websiteData.platform.points.map((point, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-orange-600">
                                <CardHeader>
                                    <CardTitle className={`text-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {point.title[language]}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {point.description[language]}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Button
                            onClick={() => setCurrentPage('platform')}
                            className="bg-orange-600 hover:bg-orange-700"
                        >
                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                {language === 'en' ? 'Learn More About Our Platform' : 'हमारे प्लेटफॉर्म के बारे में और जानें'}
                            </span>
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
