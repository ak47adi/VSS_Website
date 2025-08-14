import React, { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap, Users, Scale, BookOpen, Heart, Briefcase } from 'lucide-react';
import { websiteData } from '../data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface PlatformPageProps {
    language: 'en' | 'hi';
}

const PlatformPage: React.FC<PlatformPageProps> = ({ language }) => {
    const [expandedSection, setExpandedSection] = useState<number | null>(null);

    const platformDetails = [
        {
            icon: Users,
            title: { en: "Faculty Welfare & Rights", hi: "शिक्षक कल्याण और अधिकार" },
            description: {
                en: "Comprehensive welfare measures for all faculty members",
                hi: "सभी शिक्षक सदस्यों के लिए व्यापक कल्याणकारी उपाय"
            },
            points: [
                {
                    en: "Timely promotions and transparent evaluation processes",
                    hi: "समय पर पदोन्नति और पारदर्शी मूल्यांकन प्रक्रिया"
                },
                {
                    en: "Fair compensation and regular salary reviews",
                    hi: "निष्पक्ष मुआवजा और नियमित वेतन समीक्षा"
                },
                {
                    en: "Enhanced medical and insurance benefits",
                    hi: "बेहतर चिकित्सा और बीमा लाभ"
                },
                {
                    en: "Improved working conditions and infrastructure",
                    hi: "बेहतर कार्य परिस्थितियां और बुनियादी ढांचा"
                },
                {
                    en: "Support for sabbatical and research leaves",
                    hi: "अवकाश और अनुसंधान छुट्टी के लिए समर्थन"
                }
            ]
        },
        {
            icon: GraduationCap,
            title: { en: "Academic Excellence & Research", hi: "शैक्षणिक उत्कृष्टता और अनुसंधान" },
            description: {
                en: "Promoting quality education and research opportunities",
                hi: "गुणवत्तापूर्ण शिक्षा और अनुसंधान के अवसरों को बढ़ावा देना"
            },
            points: [
                {
                    en: "Enhanced research funding and grant opportunities",
                    hi: "बेहतर अनुसंधान फंडिंग और अनुदान के अवसर"
                },
                {
                    en: "Modern laboratory and library facilities",
                    hi: "आधुनिक प्रयोगशाला और पुस्तकालय सुविधाएं"
                },
                {
                    en: "International collaboration and exchange programs",
                    hi: "अंतर्राष्ट्रीय सहयोग और एक्सचेंज कार्यक्रम"
                },
                {
                    en: "Technology integration in teaching and learning",
                    hi: "शिक्षण और सीखने में प्रौद्योगिकी एकीकरण"
                },
                {
                    en: "Professional development workshops and training",
                    hi: "व्यावसायिक विकास कार्यशालाएं और प्रशिक्षण"
                }
            ]
        },
        {
            icon: Scale,
            title: { en: "Democratic Governance & Transparency", hi: "लोकतांत्रिक शासन और पारदर्शिता" },
            description: {
                en: "Ensuring transparent and participatory decision-making",
                hi: "पारदर्शी और सहभागी निर्णय लेने को सुनिश्चित करना"
            },
            points: [
                {
                    en: "Faculty representation in all university committees",
                    hi: "सभी विश्वविद्यालय समितियों में शिक्षक प्रतिनिधित्व"
                },
                {
                    en: "Open communication channels with administration",
                    hi: "प्रशासन के साथ खुले संचार चैनल"
                },
                {
                    en: "Regular feedback and consultation mechanisms",
                    hi: "नियमित फीडबैक और परामर्श तंत्र"
                },
                {
                    en: "Transparent policy formulation and implementation",
                    hi: "पारदर्शी नीति निर्माण और कार्यान्वयन"
                },
                {
                    en: "Grievance redressal and dispute resolution systems",
                    hi: "शिकायत निवारण और विवाद समाधान प्रणाली"
                }
            ]
        },
        {
            icon: BookOpen,
            title: { en: "Curriculum & Innovation", hi: "पाठ्यक्रम और नवाचार" },
            description: {
                en: "Modernizing curriculum and embracing innovation",
                hi: "पाठ्यक्रम का आधुनिकीकरण और नवाचार को अपनाना"
            },
            points: [
                {
                    en: "Industry-relevant curriculum updates",
                    hi: "उद्योग-प्रासंगिक पाठ्यक्रम अपडेट"
                },
                {
                    en: "Flexible learning pathways and credit systems",
                    hi: "लचीले सीखने के मार्ग और क्रेडिट प्रणाली"
                },
                {
                    en: "Interdisciplinary programs and courses",
                    hi: "अंतःविषयक कार्यक्रम और पाठ्यक्रम"
                },
                {
                    en: "Skill development and employability enhancement",
                    hi: "कौशल विकास और रोजगार क्षमता बढ़ाना"
                },
                {
                    en: "Integration of emerging technologies in education",
                    hi: "शिक्षा में उभरती प्रौद्योगिकियों का एकीकरण"
                }
            ]
        },
        {
            icon: Heart,
            title: { en: "Student-Centric Approach", hi: "छात्र-केंद्रित दृष्टिकोण" },
            description: {
                en: "Putting students at the center of educational excellence",
                hi: "छात्रों को शैक्षणिक उत्कृष्टता के केंद्र में रखना"
            },
            points: [
                {
                    en: "Enhanced student support services",
                    hi: "बेहतर छात्र सहायता सेवाएं"
                },
                {
                    en: "Mentorship and counseling programs",
                    hi: "मेंटरशिप और काउंसलिंग कार्यक्रम"
                },
                {
                    en: "Career guidance and placement assistance",
                    hi: "करियर मार्गदर्शन और प्लेसमेंट सहायता"
                },
                {
                    en: "Inclusive education for all students",
                    hi: "सभी छात्रों के लिए समावेशी शिक्षा"
                },
                {
                    en: "Extracurricular and sports facilities",
                    hi: "पाठ्येतर और खेल सुविधाएं"
                }
            ]
        },
        {
            icon: Briefcase,
            title: { en: "Infrastructure & Resources", hi: "बुनियादी ढांचा और संसाधन" },
            description: {
                en: "Building world-class infrastructure and resources",
                hi: "विश्वस्तरीय बुनियादी ढांचे और संसाधनों का निर्माण"
            },
            points: [
                {
                    en: "Modern classrooms with smart technology",
                    hi: "स्मार्ट तकनीक के साथ आधुनिक कक्षाएं"
                },
                {
                    en: "Upgraded research laboratories and equipment",
                    hi: "उन्नत अनुसंधान प्रयोगशालाएं और उपकरण"
                },
                {
                    en: "Digital library and online resources",
                    hi: "डिजिटल लाइब्रेरी और ऑनलाइन संसाधन"
                },
                {
                    en: "Campus sustainability and green initiatives",
                    hi: "कैंपस स्थिरता और हरित पहल"
                },
                {
                    en: "Improved hostel and dining facilities",
                    hi: "बेहतर हॉस्टल और भोजन सुविधाएं"
                }
            ]
        }
    ];

    const toggleSection = (index: number) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    return (
        <div className="min-h-screen py-16">
            <div className="w-full px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {websiteData.platform.title[language]}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en'
                            ? 'Our comprehensive platform for transforming university education and faculty welfare.'
                            : 'विश्वविद्यालय शिक्षा और शिक्षक कल्याण को बदलने के लिए हमारा व्यापक प्लेटफॉर्म।'
                        }
                    </p>
                </div>

                {/* Platform Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {websiteData.platform.points.map((point, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-orange-600">
                            <CardHeader>
                                <CardTitle className={`text-orange-600 text-xl ${language === 'hi' ? 'font-hindi' : ''}`}>
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

                {/* Detailed Platform Sections */}
                <div className="space-y-6">
                    <h2 className={`text-3xl font-bold text-center text-gray-900 mb-12 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'Detailed Platform' : 'विस्तृत प्लेटफॉर्म'}
                    </h2>

                    {platformDetails.map((section, index) => {
                        const IconComponent = section.icon;
                        const isExpanded = expandedSection === index;

                        return (
                            <Card key={index} className="overflow-hidden">
                                <CardHeader
                                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                                    onClick={() => toggleSection(index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                                <IconComponent className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <CardTitle className={`text-xl text-gray-900 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                    {section.title[language]}
                                                </CardTitle>
                                                <CardDescription className={`${language === 'hi' ? 'font-hindi' : ''}`}>
                                                    {section.description[language]}
                                                </CardDescription>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon">
                                            {isExpanded ? (
                                                <ChevronUp className="w-5 h-5" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5" />
                                            )}
                                        </Button>
                                    </div>
                                </CardHeader>

                                {isExpanded && (
                                    <CardContent className="pt-0 pb-6">
                                        <div className="border-t pt-6">
                                            <ul className="space-y-3">
                                                {section.points.map((point, pointIndex) => (
                                                    <li key={pointIndex} className="flex items-start">
                                                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                            {point[language]}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                )}
                            </Card>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12 px-8 rounded-lg">
                    <h3 className={`text-3xl font-bold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'Join Us in This Journey' : 'इस यात्रा में हमारे साथ जुड़ें'}
                    </h3>
                    <p className={`text-xl mb-8 opacity-90 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en'
                            ? 'Together, we can transform university education and create a better future for all.'
                            : 'मिलकर, हम विश्वविद्यालय शिक्षा को बदल सकते हैं और सभी के लिए एक बेहतर भविष्य बना सकते हैं।'
                        }
                    </p>
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-white text-orange-600 border-white hover:bg-orange-50"
                    >
                        <span className={language === 'hi' ? 'font-hindi' : ''}>
                            {language === 'en' ? 'Learn More About VSS' : 'वीएसएस के बारे में और जानें'}
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PlatformPage;
