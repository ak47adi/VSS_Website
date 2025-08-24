import React from 'react';
import { CheckCircle, Users, Award, Shield, GraduationCap, HeartHandshake } from 'lucide-react';
import { websiteData } from '../data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface AssurancePageProps {
    language: 'en' | 'hi';
}

const AssurancePage: React.FC<AssurancePageProps> = ({ language }) => {
    const assuranceData = websiteData.assurance;

    const getIcon = (index: number) => {
        const icons = [
            <Award className="w-6 h-6" />,
            <GraduationCap className="w-6 h-6" />,
            <Users className="w-6 h-6" />,
            <Shield className="w-6 h-6" />,
            <CheckCircle className="w-6 h-6" />,
            <HeartHandshake className="w-6 h-6" />
        ];
        return icons[index % icons.length];
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center">
                        <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {assuranceData.title[language]}
                        </h1>
                        <p className={`text-xl md:text-2xl opacity-90 max-w-4xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {assuranceData.subtitle[language]}
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Highlights */}
            <section className="py-16">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Key Commitments' : 'मुख्य प्रतिबद्धताएं'}
                        </h2>
                        <p className={`text-xl text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Our priority areas for immediate action' : 'तत्काल कार्रवाई के लिए हमारे प्राथमिकता क्षेत्र'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {assuranceData.points.map((point, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-orange-600">
                                <CardHeader>
                                    <CardTitle className={`flex items-center text-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        <span className="mr-3 text-orange-600">
                                            {getIcon(index)}
                                        </span>
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
                </div>
            </section>

            {/* Complete Assurance List */}
            <section className="py-16 bg-white">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Complete List of Assurances' : 'संकल्पों की पूरी सूची'}
                        </h2>
                        <p className={`text-xl text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Our detailed promises to the teaching community' : 'शिक्षक समुदाय के लिए हमारे विस्तृत वादे'}
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid gap-4">
                            {assuranceData.fullList.map((item, index) => (
                                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                                    <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-gray-800 leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {item[language]}
                                        </p>
                                    </div>
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 ml-3 mt-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-16 bg-gray-50">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Leadership Team' : 'नेतृत्व टीम'}
                        </h2>
                        <p className={`text-xl text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Meet the team members committed to these assurances' : 'इन संकल्पों के लिए प्रतिबद्ध टीम सदस्यों से मिलें'}
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {/* President Candidate */}
                        <Card className="mb-6 border-2 border-orange-200">
                            <CardHeader className="bg-orange-50">
                                <CardTitle className={`text-center text-2xl text-orange-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'DUTA President Candidate' : 'DUTA अध्यक्ष पद के उम्मीदवार'}
                                </CardTitle>
                                <CardDescription className={`text-center text-xl font-semibold text-gray-800 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {assuranceData.candidates.president[language]}
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        {/* Executive Members */}
                        <Card className="border-2 border-orange-200">
                            <CardHeader className="bg-orange-50">
                                <CardTitle className={`text-center text-xl text-orange-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'VSS Executive Committee Members' : 'VSS कार्यकारिणी के सदस्य'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {assuranceData.candidates.executiveMembers.map((member, index) => (
                                        <div
                                            key={index}
                                            className={`text-center p-4 bg-white rounded-lg shadow-sm ${assuranceData.candidates.executiveMembers.length === 3 && index === 2
                                                ? 'md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0'
                                                : ''
                                                }`}
                                        >
                                            <p className={`font-semibold text-gray-800 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {member[language]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Together for Change' : 'परिवर्तन के लिए एकजुट'}
                        </h2>
                        <p className={`text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en'
                                ? 'Join us in building a better future for the teaching community'
                                : 'शिक्षक समुदाय के लिए एक बेहतर भविष्य के निर्माण में हमारे साथ जुड़ें'
                            }
                        </p>
                        <div className="text-lg font-medium">
                            <p className={language === 'hi' ? 'font-hindi' : ''}>
                                {language === 'en' ? 'Vishwavidyalaya Shikshak Sangh (VSS)' : 'विश्वविद्यालय शिक्षक समिति (VSS)'}
                            </p>
                            <p className={`mt-2 opacity-90 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? 'DUTA Election 2025–2027' : 'DUTA चुनाव 2025–2027'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AssurancePage;
