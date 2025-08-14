import React from 'react';
import { Target, Users, Award, BookOpen } from 'lucide-react';
import { websiteData } from '../data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface AboutPageProps {
    language: 'en' | 'hi';
}

const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
    const teamMembers = [
        {
            name: "Dr. Rajesh Kumar",
            position: { en: "President", hi: "अध्यक्ष" },
            department: { en: "Department of Mathematics", hi: "गणित विभाग" },
            experience: { en: "20+ years", hi: "20+ वर्ष" },
            education: { en: "Ph.D in Mathematics", hi: "गणित में पीएचडी" }
        },
        {
            name: "Dr. Priya Sharma",
            position: { en: "Vice President", hi: "उपाध्यक्ष" },
            department: { en: "Department of English", hi: "अंग्रेजी विभाग" },
            experience: { en: "15+ years", hi: "15+ वर्ष" },
            education: { en: "Ph.D in English Literature", hi: "अंग्रेजी साहित्य में पीएचडी" }
        },
        {
            name: "Prof. Ananda Kumar",
            position: { en: "Secretary", hi: "सचिव" },
            department: { en: "Department of Physics", hi: "भौतिकी विभाग" },
            experience: { en: "18+ years", hi: "18+ वर्ष" },
            education: { en: "Ph.D in Physics", hi: "भौतिकी में पीएचडी" }
        }
    ];

    return (
        <div className="min-h-screen py-16">
            <div className="w-full px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {websiteData.navigation.about[language]}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en'
                            ? 'Dedicated to serving the academic community and advancing educational excellence.'
                            : 'शैक्षणिक समुदाय की सेवा और शैक्षिक उत्कृष्टता को आगे बढ़ाने के लिए समर्पित।'
                        }
                    </p>
                </div>

                {/* Mission and Vision */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <Card className="border-l-4 border-l-orange-600">
                        <CardHeader>
                            <CardTitle className={`flex items-center text-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                <Target className="w-6 h-6 mr-3" />
                                {language === 'en' ? 'Our Mission' : 'हमारा मिशन'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className={`text-gray-700 text-lg leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {websiteData.about.mission[language]}
                            </p>
                            <ul className={`mt-4 space-y-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {language === 'en'
                                        ? 'Advocate for fair and transparent academic policies'
                                        : 'निष्पक्ष और पारदर्शी शैक्षणिक नीतियों की वकालत करना'
                                    }
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {language === 'en'
                                        ? 'Promote research and innovation in higher education'
                                        : 'उच्च शिक्षा में अनुसंधान और नवाचार को बढ़ावा देना'
                                    }
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {language === 'en'
                                        ? 'Ensure faculty welfare and professional development'
                                        : 'शिक्षक कल्याण और व्यावसायिक विकास सुनिश्चित करना'
                                    }
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-600">
                        <CardHeader>
                            <CardTitle className={`flex items-center text-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                <Users className="w-6 h-6 mr-3" />
                                {language === 'en' ? 'Our Vision' : 'हमारी दृष्टि'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className={`text-gray-700 text-lg leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {websiteData.about.vision[language]}
                            </p>
                            <ul className={`mt-4 space-y-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {language === 'en'
                                        ? 'Foster collaborative academic environment'
                                        : 'सहयोगी शैक्षणिक वातावरण को बढ़ावा देना'
                                    }
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {language === 'en'
                                        ? 'Bridge the gap between administration and faculty'
                                        : 'प्रशासन और शिक्षकों के बीच अंतर को पाटना'
                                    }
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {language === 'en'
                                        ? 'Uphold democratic values in university governance'
                                        : 'विश्वविद्यालय शासन में लोकतांत्रिक मूल्यों को बनाए रखना'
                                    }
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Values */}
                <div className="mb-16">
                    <h2 className={`text-3xl font-bold text-center text-gray-900 mb-12 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'Our Core Values' : 'हमारे मुख्य मूल्य'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                    <Award className="w-8 h-8 text-orange-600" />
                                </div>
                                <CardTitle className={language === 'hi' ? 'font-hindi' : ''}>
                                    {language === 'en' ? 'Excellence' : 'उत्कृष्टता'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en'
                                        ? 'Committed to achieving the highest standards in education and research.'
                                        : 'शिक्षा और अनुसंधान में उच्चतम मानकों को प्राप्त करने के लिए प्रतिबद्ध।'
                                    }
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                    <Users className="w-8 h-8 text-orange-600" />
                                </div>
                                <CardTitle className={language === 'hi' ? 'font-hindi' : ''}>
                                    {language === 'en' ? 'Collaboration' : 'सहयोग'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en'
                                        ? 'Working together to build a stronger academic community.'
                                        : 'एक मजबूत शैक्षणिक समुदाय बनाने के लिए मिलकर काम करना।'
                                    }
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                    <BookOpen className="w-8 h-8 text-orange-600" />
                                </div>
                                <CardTitle className={language === 'hi' ? 'font-hindi' : ''}>
                                    {language === 'en' ? 'Innovation' : 'नवाचार'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en'
                                        ? 'Embracing new ideas and approaches to enhance learning.'
                                        : 'सीखने को बढ़ाने के लिए नए विचारों और दृष्टिकोणों को अपनाना।'
                                    }
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Leadership Team */}
                <div>
                    <h2 className={`text-3xl font-bold text-center text-gray-900 mb-12 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'Our Leadership Team' : 'हमारी नेतृत्व टीम'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader className="text-center">
                                    <div className="mx-auto w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                        <span className="text-2xl font-bold text-orange-600">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <CardTitle className={`text-xl ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {member.name}
                                    </CardTitle>
                                    <CardDescription className={`text-orange-600 font-medium ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {member.position[language]}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-center space-y-2">
                                    <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {member.department[language]}
                                    </p>
                                    <p className={`text-sm text-gray-500 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Experience: ' : 'अनुभव: '}{member.experience[language]}
                                    </p>
                                    <p className={`text-sm text-gray-500 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {member.education[language]}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
