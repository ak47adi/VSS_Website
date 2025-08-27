import React, { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap, Users, Scale, BookOpen, Heart, Briefcase } from 'lucide-react';
import { websiteData } from '../data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface PlatformPageProps {
    language: 'en' | 'hi';
    setCurrentPage: (page: string) => void;
}

const PlatformPage: React.FC<PlatformPageProps> = ({ language, setCurrentPage }) => {
    const [expandedSection, setExpandedSection] = useState<number | null>(null);

    const platformDetails = [
        {
            icon: Users,
            title: { en: "Beyond Symbolic Representation: Real Faculty Welfare", hi: "प्रतीकात्मक प्रतिनिधित्व से आगे: वास्तविक शिक्षक कल्याण" },
            description: {
                en: "Moving beyond token gestures to substantial action for faculty rights and welfare",
                hi: "केवल प्रतीकात्मकता नहीं, ठोस कार्रवाई के माध्यम से शिक्षक अधिकार और कल्याण"
            },
            points: [
                {
                    en: "End to arbitrary delays in promotions - Data-driven transparent evaluation system",
                    hi: "पदोन्नति में मनमानी देरी का अंत - आंकड़ों पर आधारित पारदर्शी मूल्यांकन प्रणाली"
                },
                {
                    en: "Regularization of Ad-hoc and Guest Faculty with concrete timelines",
                    hi: "ठोस समयसीमा के साथ तदर्थ और अतिथि शिक्षकों का नियमितीकरण"
                },
                {
                    en: "Implementation of 7th Pay Commission recommendations without bureaucratic hurdles",
                    hi: "नौकरशाही बाधाओं के बिना 7वें वेतन आयोग की सिफारिशों का कार्यान्वयन"
                },
                {
                    en: "Legal intervention for faculty grievances - Not just committee formations",
                    hi: "शिक्षक शिकायतों के लिए कानूनी हस्तक्षेप - केवल संघ गठन नहीं"
                },
                {
                    en: "Comprehensive medical coverage including family members and retired faculty",
                    hi: "परिवारजनों और सेवानिवृत्त शिक्षकों सहित व्यापक चिकित्सा कवरेज"
                },
                {
                    en: "Democratic decision-making in faculty recruitment and evaluation processes",
                    hi: "शिक्षक भर्ती और मूल्यांकन प्रक्रियाओं में लोकतांत्रिक निर्णय लेना"
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
            title: { en: "Internal Democracy & Organizational Transparency", hi: "आंतरिक लोकतंत्र और संगठनात्मक पारदर्शिता" },
            description: {
                en: "Ensuring democracy within the organization - Not just talking about it externally",
                hi: "संगठन के भीतर लोकतंत्र सुनिश्चित करना - केवल बाहर इसकी बात नहीं करना"
            },
            points: [
                {
                    en: "Transparency at the innermost organizational levels - No centralized opacity",
                    hi: "संगठन के अंतरतम स्तर तक पारदर्शिता - कोई केंद्रीकृत अपारदर्शिता नहीं"
                },
                {
                    en: "Participatory decision-making with faculty input at every stage",
                    hi: "हर चरण में शिक्षक इनपुट के साथ सहभागी निर्णय लेना"
                },
                {
                    en: "Accountability mechanisms - Leaders answerable to members, not vice versa",
                    hi: "जवाबदेही तंत्र - नेता सदस्यों के प्रति जवाबदेह, इसके विपरीत नहीं"
                },
                {
                    en: "Regular audits of organizational finances and resource allocation",
                    hi: "संगठनात्मक वित्त और संसाधन आवंटन की नियमित ऑडिट"
                },
                {
                    en: "Equal representation for all social groups - Women, SC/ST, OBC, Minorities, Differently-abled",
                    hi: "सभी सामाजिक समूहों के लिए समान प्रतिनिधित्व - महिला, अनुसूचित जाति/जनजाति, ओबीसी, अल्पसंख्यक, दिव्यांग"
                },
                {
                    en: "Accessible communication channels - Every teacher can reach leadership directly",
                    hi: "सुलभ संचार चैनल - हर शिक्षक नेतृत्व तक सीधे पहुंच सकता है"
                }
            ]
        },
        {
            icon: BookOpen,
            title: { en: "Beyond Ideological Polarization: Problem-Focused Solutions", hi: "वैचारिक ध्रुवीकरण से आगे: समस्या-केंद्रित समाधान" },
            description: {
                en: "Focus on real faculty problems instead of getting entangled in ideological debates",
                hi: "वैचारिक बहसों में उलझने के बजाय वास्तविक शिक्षक समस्याओं पर ध्यान"
            },
            points: [
                {
                    en: "Concrete solutions for appointment delays and irregular recruitment processes",
                    hi: "नियुक्ति में देरी और अनियमित भर्ती प्रक्रियाओं के लिए ठोस समाधान"
                },
                {
                    en: "Systematic approach to promotion bottlenecks with timeline commitments",
                    hi: "समयसीमा प्रतिबद्धताओं के साथ पदोन्नति बाधाओं के लिए व्यवस्थित दृष्टिकोण"
                },
                {
                    en: "Evidence-based policy advocacy using data and research",
                    hi: "डेटा और अनुसंधान का उपयोग करके साक्ष्य-आधारित नीति वकालत"
                },
                {
                    en: "Reform of reservation policy implementation to ensure fairness",
                    hi: "निष्पक्षता सुनिश्चित करने के लिए आरक्षण नीति कार्यान्वयन में सुधार"
                },
                {
                    en: "Improved service conditions and academic freedom protection",
                    hi: "बेहतर सेवा शर्तें और शैक्षणिक स्वतंत्रता संरक्षण"
                },
                {
                    en: "Institutional dialogue mechanisms for sustainable long-term reforms",
                    hi: "स्थायी दीर्घकालिक सुधारों के लिए संस्थागत संवाद तंत्र"
                }
            ]
        },
        {
            icon: GraduationCap,
            title: { en: "Nation First, Teachers First Philosophy", hi: "राष्ट्र सर्वोपरि, शिक्षक प्रथम दर्शन" },
            description: {
                en: "Education dignity and teacher respect as the axis of national development",
                hi: "शिक्षा की गरिमा और शिक्षक सम्मान को राष्ट्रीय विकास की धुरी के रूप में"
            },
            points: [
                {
                    en: "Building strong, self-reliant, and ethical teacher community for strong India",
                    hi: "सशक्त भारत के लिए मजबूत, आत्मनिर्भर और नैतिक शिक्षक समुदाय का निर्माण"
                },
                {
                    en: "Moving beyond political loyalties to focus on educational excellence",
                    hi: "शैक्षणिक उत्कृष्टता पर ध्यान देने के लिए राजनीतिक वफादारी से आगे बढ़ना"
                },
                {
                    en: "Integration of nationalism with democratic values in university governance",
                    hi: "विश्वविद्यालय शासन में लोकतांत्रिक मूल्यों के साथ राष्ट्रवाद का एकीकरण"
                },
                {
                    en: "Teacher empowerment as foundation for national educational advancement",
                    hi: "राष्ट्रीय शैक्षणिक प्रगति के लिए शिक्षक सशक्तिकरण को आधार के रूप में"
                },
                {
                    en: "Promoting research and innovation aligned with national priorities",
                    hi: "राष्ट्रीय प्राथमिकताओं के साथ संरेखित अनुसंधान और नवाचार को बढ़ावा देना"
                },
                {
                    en: "Building bridges between traditional knowledge and modern education",
                    hi: "पारंपरिक ज्ञान और आधुनिक शिक्षा के बीच सेतु का निर्माण"
                }
            ]
        },
        {
            icon: Heart,
            title: { en: "Inclusive & Intersensitive Approach", hi: "समावेशी और अंतःसंवेदी दृष्टिकोण" },
            description: {
                en: "Equal participation for all social groups in the teacher movement",
                hi: "शिक्षक आंदोलन में सभी सामाजिक समूहों के लिए समान भागीदारी"
            },
            points: [
                {
                    en: "Special focus on women faculty welfare and gender equality in academia",
                    hi: "महिला शिक्षक कल्याण और शिक्षा जगत में लैंगिक समानता पर विशेष ध्यान"
                },
                {
                    en: "Comprehensive support for SC/ST/OBC faculty career advancement",
                    hi: "अनुसूचित जाति/जनजाति/ओबीसी शिक्षकों की करियर उन्नति के लिए व्यापक समर्थन"
                },
                {
                    en: "Protection and promotion of minority faculty rights and interests",
                    hi: "अल्पसंख्यक शिक्षकों के अधिकारों और हितों का संरक्षण और संवर्धन"
                },
                {
                    en: "Accessibility measures and support for differently-abled faculty members",
                    hi: "दिव्यांग शिक्षक सदस्यों के लिए पहुंच उपाय और समर्थन"
                },
                {
                    en: "Regularization pathway and equal treatment for temporary/guest faculty",
                    hi: "अस्थायी/गेस्ट शिक्षकों के लिए नियमितीकरण मार्ग और समान व्यवहार"
                },
                {
                    en: "Anti-discrimination policies and harassment prevention mechanisms",
                    hi: "भेदभाव-रोधी नीतियां और उत्पीड़न रोकथाम तंत्र"
                }
            ]
        },
        {
            icon: Briefcase,
            title: { en: "From Symbolic Politics to Concrete Action", hi: "प्रतीकात्मक राजनीति से ठोस कार्रवाई तक" },
            description: {
                en: "Moving beyond sloganeering to policy intervention and institutional reforms",
                hi: "नारेबाजी से आगे बढ़कर नीतिगत हस्तक्षेप और संस्थागत सुधारों की ओर"
            },
            points: [
                {
                    en: "Data-driven policy formulation based on actual faculty needs assessment",
                    hi: "वास्तविक शिक्षक आवश्यकताओं के आकलन पर आधारित डेटा-संचालित नीति निर्माण"
                },
                {
                    en: "Legal action and judicial intervention when administrative channels fail",
                    hi: "जब प्रशासनिक चैनल विफल हों तो कानूनी कार्रवाई और न्यायिक हस्तक्षेप"
                },
                {
                    en: "Structured dialogue with university administration for sustainable reforms",
                    hi: "स्थायी सुधारों के लिए विश्वविद्यालय प्रशासन के साथ संरचित संवाद"
                },
                {
                    en: "Timeline-bound implementation of promised reforms with regular monitoring",
                    hi: "नियमित निगरानी के साथ वादा किए गए सुधारों का समयबद्ध कार्यान्वयन"
                },
                {
                    en: "Building coalitions with progressive educational institutions nationwide",
                    hi: "देशव्यापी प्रगतिशील शैक्षणिक संस्थानों के साथ गठबंधन का निर्माण"
                },
                {
                    en: "Research-based advocacy for policy changes at state and national levels",
                    hi: "राज्य और राष्ट्रीय स्तर पर नीतिगत बदलावों के लिए अनुसंधान-आधारित वकालत"
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
                    <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en'
                            ? 'VSS is not just another organization. It is a serious reformist movement that challenges current organizational failures and provides concrete solutions for faculty welfare and educational excellence.'
                            : 'VSS केवल एक और संगठन नहीं है। यह एक गंभीर सुधारवादी आंदोलन है जो वर्तमान संगठनात्मक विफलताओं को चुनौती देता है और शिक्षक कल्याण और शैक्षणिक उत्कृष्टता के लिए ठोस समाधान प्रदान करता है।'
                        }
                    </p>
                    <div className={`mt-8 p-6 bg-orange-50 rounded-lg border-l-4 border-l-orange-600 max-w-4xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                        <p className="text-lg text-gray-800 font-medium">
                            {language === 'en'
                                ? '"A reformist and strong alternative that provides new direction - for teachers, for education, and for the nation."'
                                : '"एक सुधारवादी और मजबूत विकल्प जो नई दिशा प्रदान करता है - शिक्षकों के लिए, शिक्षा के लिए और राष्ट्र के लिए।"'
                            }
                        </p>
                    </div>
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

                {/* VSS Manifesto - Why We're Different */}
                <section className="mb-16">
                    <Card className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                        <CardHeader>
                            <CardTitle className={`text-center text-3xl mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? 'The VSS Difference: Beyond Traditional Politics' : 'VSS अंतर: पारंपरिक राजनीति से परे'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className={`text-xl font-semibold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'What Others Do' : 'दूसरे क्या करते हैं'}
                                    </h4>
                                    <ul className={`space-y-2 opacity-90 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        <li>• {language === 'en' ? 'Get trapped in ideological polarization' : 'वैचारिक ध्रुवीकरण में फंस जाते हैं'}</li>
                                        <li>• {language === 'en' ? 'Focus on political opportunism' : 'राजनीतिक अवसरवाद पर ध्यान देते हैं'}</li>
                                        <li>• {language === 'en' ? 'Practice centralized and opaque governance' : 'केंद्रीकृत और अपारदर्शी शासन का अभ्यास करते हैं'}</li>
                                        <li>• {language === 'en' ? 'Limited to symbolic representation' : 'प्रतीकात्मक प्रतिनिधित्व तक सीमित रहते हैं'}</li>
                                        <li>• {language === 'en' ? 'Engage in sloganeering without action' : 'कार्रवाई के बिना नारेबाजी में संलग्न होते हैं'}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className={`text-xl font-semibold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'What VSS Does' : 'VSS क्या करता है'}
                                    </h4>
                                    <ul className={`space-y-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        <li>• {language === 'en' ? 'Focus on real faculty problems' : 'वास्तविक शिक्षक समस्याओं पर ध्यान देता है'}</li>
                                        <li>• {language === 'en' ? 'Prioritize teacher welfare over politics' : 'राजनीति से ऊपर शिक्षक कल्याण को प्राथमिकता देता है'}</li>
                                        <li>• {language === 'en' ? 'Ensure democracy within organization' : 'संगठन के भीतर लोकतंत्र सुनिश्चित करता है'}</li>
                                        <li>• {language === 'en' ? 'Take concrete action with timelines' : 'समयसीमा के साथ ठोस कार्रवाई करता है'}</li>
                                        <li>• {language === 'en' ? 'Data-driven policy advocacy' : 'डेटा-संचालित नीति वकालत करता है'}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`mt-8 text-center p-4 bg-white/10 rounded-lg ${language === 'hi' ? 'font-hindi' : ''}`}>
                                <p className="text-lg font-medium">
                                    {language === 'en'
                                        ? 'VSS - National Democratic Teachers\' Front: Neither created for opposition nor just for elections. A serious reformist movement.'
                                        : 'VSS - राष्ट्रीय डेमोक्रेटिक टीचर्स फ्रंट: न तो विरोध के लिए बना है, न ही केवल चुनाव के लिए। एक गंभीर सुधारवादी आंदोलन।'
                                    }
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

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

                {/* Cast Your Valuable Vote Section */}
                <div className="mt-20 mb-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 px-8 rounded-lg">
                    <div className="text-center">
                        <h3 className={`text-3xl font-bold mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Cast Your Valuable Vote' : 'अपना बहुमूल्य मत डालें'}
                        </h3>
                        <p className={`text-blue-100 text-xl mb-8 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en'
                                ? 'Your participation matters. Exercise your democratic right and make your voice heard in shaping the future of academic excellence.'
                                : 'आपकी भागीदारी मायने रखती है। अपने लोकतांत्रिक अधिकार का प्रयोग करें और शैक्षणिक उत्कृष्टता के भविष्य को आकार देने में अपनी आवाज सुनाएं।'
                            }
                        </p>
                        <div className="bg-white bg-opacity-10 rounded-lg p-8 max-w-2xl mx-auto">
                            <div className={`text-2xl font-bold text-yellow-300 mb-3 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Thursday, 4th September, 2025'
                                    : 'गुरुवार, 4 सितंबर, 2025'
                                }
                            </div>
                            <div className={`text-blue-100 text-lg mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'From 10:00 AM to 5:00 PM'
                                    : 'सुबह 10:00 बजे से शाम 5:00 बजे तक'
                                }
                            </div>
                            <div className={`text-blue-100 font-medium ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Faculty of Arts and Satyakam Bhawan'
                                    : 'कला संकाय और सत्यकाम भवन'
                                }
                            </div>
                            <div className={`text-blue-100 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'University of Delhi'
                                    : 'दिल्ली विश्वविद्यालय'
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 mb-20 text-center bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12 px-8 rounded-lg">
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
                        onClick={() => setCurrentPage('about')}
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
