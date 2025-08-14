import React from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { websiteData } from '../data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface CandidatesPageProps {
    language: 'en' | 'hi';
}

const CandidatesPage: React.FC<CandidatesPageProps> = ({ language }) => {
    return (
        <div className="min-h-screen py-16 bg-gray-50">
            <div className="w-full px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {websiteData.navigation.candidates[language]}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en'
                            ? 'Meet our dedicated team of candidates committed to improving the academic environment.'
                            : 'शैक्षणिक वातावरण में सुधार के लिए प्रतिबद्ध हमारे समर्पित उम्मीदवारों की टीम से मिलें।'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {websiteData.candidates.map((candidate, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                                <div className="flex items-center space-x-4">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                                        <User className="w-12 h-12 text-orange-600" />
                                    </div>
                                    <div>
                                        <CardTitle className={`text-2xl ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {candidate.name}
                                        </CardTitle>
                                        <CardDescription className={`text-orange-100 text-lg ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {candidate.position[language]}
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className={`font-semibold text-gray-900 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Department' : 'विभाग'}
                                        </h3>
                                        <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {candidate.department[language]}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className={`font-semibold text-gray-900 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Biography' : 'जीवनी'}
                                        </h3>
                                        <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {candidate.bio[language]}
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4 border-t">
                                        <div className="flex items-center text-orange-600">
                                            <Mail className="w-4 h-4 mr-2" />
                                            <span className="text-sm">contact@vss.ac.in</span>
                                        </div>
                                        <div className="flex items-center text-orange-600">
                                            <Phone className="w-4 h-4 mr-2" />
                                            <span className="text-sm">+91-11-2766-xxxx</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <Card className="bg-orange-50 border-orange-200">
                        <CardContent className="p-8">
                            <h2 className={`text-2xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Join Our Movement for Change'
                                    : 'बदलाव के लिए हमारे आंदोलन में शामिल हों'
                                }
                            </h2>
                            <p className={`text-gray-700 mb-6 max-w-2xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Together, we can build a better academic environment for all faculty members and students.'
                                    : 'मिलकर, हम सभी शिक्षक सदस्यों और छात्रों के लिए एक बेहतर शैक्षणिक वातावरण का निर्माण कर सकते हैं।'
                                }
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:contact@vss.ac.in"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-700 transition-colors"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    <span className={language === 'hi' ? 'font-hindi' : ''}>
                                        {language === 'en' ? 'Contact Us' : 'हमसे संपर्क करें'}
                                    </span>
                                </a>
                                <a
                                    href="tel:+91-11-2766-xxxx"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 border border-orange-600 rounded-md font-medium hover:bg-orange-50 transition-colors"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    <span className={language === 'hi' ? 'font-hindi' : ''}>
                                        {language === 'en' ? 'Call Us' : 'हमें कॉल करें'}
                                    </span>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CandidatesPage;
