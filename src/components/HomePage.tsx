import {  Users, Target, ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { websiteData } from '../data/content';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface HomePageProps {
    language: 'en' | 'hi';
    setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ language, setCurrentPage }) => {



    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="relative min-h-[90vh] sm:min-h-screen overflow-hidden bg-[linear-gradient(to_bottom,#ea580c_0%,#1e40af_100%)] sm:bg-[linear-gradient(to_right,#1e40af_8%,#ea580c_35%,#ea580c_65%,#1e40af_92%)]">
                {/* Sun rays + color glows (only on tablets/desktops) */}
                <div className="absolute inset-0 pointer-events-none hidden sm:block">
                    {/* Subtle sun rays emanating from center */}
                    <div className="absolute inset-0 opacity-20 bg-[repeating-conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.14)_0deg,rgba(255,255,255,0.14)_5deg,transparent_5deg,transparent_15deg)]"></div>

                    {/* Central orange glow (expanded) */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vw] bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.55)_0%,rgba(251,146,60,0.30)_50%,transparent_85%)]"></div>

                    {/* Blue fading points at sides (reduced) */}
                    <div className="absolute -left-[12%] top-1/2 -translate-y-1/2 w-[35vw] h-[35vw] bg-[radial-gradient(circle_at_left,rgba(30,64,175,0.25),transparent_50%)]"></div>
                    <div className="absolute -right-[12%] top-1/2 -translate-y-1/2 w-[35vw] h-[35vw] bg-[radial-gradient(circle_at_right,rgba(30,64,175,0.25),transparent_50%)]"></div>
                </div>

                {/* VSS Logo Background (hidden on mobile) */}
                <div className="absolute inset-0 hidden sm:flex items-center justify-center opacity-5">
                    <img
                        src="/banner/vss-logo.png"
                        alt="VSS Logo"
                        className="w-96 h-96 object-contain"
                        loading="lazy" decoding="async"
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-20 min-h-[90vh] sm:min-h-screen flex items-center py-4 sm:py-12 md:py-16 lg:py-0">
                    <div className="w-full px-4 sm:px-6 lg:px-12">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:items-center">
                                {/* Left Content - VSS Details (Top on mobile) */}
                                <div className="text-white order-1 lg:order-1">
                                    <div className="mb-4 sm:mb-6 md:mb-8">
                                        <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm md:text-lg font-medium mb-3 sm:mb-4 md:mb-6 border border-white/30">
                                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                                {websiteData.header.title[language]}
                                            </span>
                                        </div>

                                        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-8 leading-tight ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en'
                                                ? 'Empowering Academic Excellence'
                                                : 'शैक्षणिक उत्कृष्टता को सशक्त बनाना'
                                            }
                                        </h1>

                                        <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl mb-3 sm:mb-4 md:mb-6 font-light opacity-95 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {websiteData.header.subtitle[language]}
                                        </p>

                                        <p className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 md:mb-10 opacity-90 leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en'
                                                ? 'Join the movement that puts faculty welfare first. Together, we are building a stronger, more democratic, and transparent academic future for Delhi University.'
                                                : 'उस आंदोलन में शामिल हों जो शिक्षक कल्याण को प्राथमिकता देता है। मिलकर हम दिल्ली विश्वविद्यालय के लिए एक मजबूत, अधिक लोकतांत्रिक और पारदर्शी शैक्षणिक भविष्य का निर्माण कर रहे हैं।'
                                            }
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                                        <Button
                                            size="default"
                                            className="bg-white text-orange-600 hover:bg-orange-50 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 shadow-lg hover:shadow-xl transition-all duration-200"
                                            onClick={() => setCurrentPage('platform')}
                                        >
                                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                                {language === 'en' ? 'Our Vision & Platform' : 'हमारी दृष्टि और नीतियां'}
                                            </span>
                                        </Button>

                                        <Button
                                            size="default"
                                            variant="outline"
                                            className="bg-white text-orange-600 hover:bg-orange-50 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 shadow-lg hover:shadow-xl transition-all duration-200"
                                            onClick={() => setCurrentPage('duta-elections')}
                                        >
                                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                                {language === 'en' ? 'Meet Our Leadership' : 'हमारे नेतृत्व से मिलें'}
                                            </span>
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Content - Key Stats/Highlights (Bottom on mobile) */}
                                <div className="space-y-3 sm:space-y-4 md:space-y-6 order-2 lg:order-2">
                                    <div className="bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 border border-white/20 shadow-lg transform transition-all duration-300 hover:scale-105">
                                        <div className="text-center">
                                            <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2 md:mb-4 text-white ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? 'Proven Leadership' : 'सिद्ध नेतृत्व'}
                                            </h3>
                                            <p className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en'
                                                    ? 'Dedicated service to the academic community'
                                                    : '15+ वर्ष शैक्षणिक समुदाय की समर्पित सेवा'
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 border border-white/20 shadow-lg transform transition-all duration-300 hover:scale-105">
                                        <div className="text-center">
                                            <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2 md:mb-4 text-white ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? 'Faculty First' : 'शिक्षक प्राथमिकता'}
                                            </h3>
                                            <p className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en'
                                                    ? 'Every policy designed with faculty welfare at its core'
                                                    : 'हर नीति शिक्षक कल्याण को केंद्र में रखकर बनाई गई'
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 border border-white/20 shadow-lg transform transition-all duration-300 hover:scale-105">
                                        <div className="text-center">
                                            <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2 md:mb-4 text-white ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? 'Transparent Governance' : 'पारदर्शी शासन'}
                                            </h3>
                                            <p className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en'
                                                    ? 'Democratic processes with full accountability'
                                                    : 'पूर्ण जवाबदेही के साथ लोकतांत्रिक प्रक्रियाएं'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section with Enhanced Content */}
            <section className="py-24 bg-gray-50 cv-auto">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {websiteData.navigation.about[language]}
                        </h2>
                        <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en'
                                ? 'Building a stronger academic community through democratic representation, transparent governance, and comprehensive faculty welfare initiatives.'
                                : 'लोकतांत्रिक प्रतिनिधित्व, पारदर्शी शासन और व्यापक शिक्षक कल्याण पहलों के माध्यम से एक मजबूत शैक्षणिक समुदाय का निर्माण।'
                            }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <Card className="border-l-4 border-l-orange-600 shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <CardTitle className={`flex items-center text-2xl ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    <Target className="w-8 h-8 mr-3 text-orange-600" />
                                    {language === 'en' ? 'Our Mission' : 'हमारा मिशन'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`text-gray-700 text-lg leading-relaxed mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {websiteData.about.mission[language]}
                                </p>
                                <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en'
                                        ? 'We work tirelessly to ensure that every faculty member has access to fair opportunities, transparent processes, and the support needed to excel in their academic careers.'
                                        : 'हम अथक परिश्रम करते हैं यह सुनिश्चित करने के लिए कि हर शिक्षक सदस्य को निष्पक्ष अवसर, पारदर्शी प्रक्रियाएं और अपने शैक्षणिक करियर में उत्कृष्टता के लिए आवश्यक सहायता मिले।'
                                    }
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <CardTitle className={`flex items-center text-2xl ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    <Users className="w-8 h-8 mr-3 text-blue-600" />
                                    {language === 'en' ? 'Our Vision' : 'हमारी दृष्टि'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`text-gray-700 text-lg leading-relaxed mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {websiteData.about.vision[language]}
                                </p>
                                <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en'
                                        ? 'Through collaborative efforts and inclusive policies, we aim to create an environment where innovation thrives and every voice is heard and valued.'
                                        : 'सहयोगात्मक प्रयासों और समावेशी नीतियों के माध्यम से, हमारा लक्ष्य एक ऐसा वातावरण बनाना है जहां नवाचार फले-फूले और हर आवाज सुनी और महत्व दी जाए।'
                                    }
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Key Highlights */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className={`text-2xl font-bold text-center mb-8 text-gray-800 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Why Choose VSS?' : 'VSS क्यों चुनें?'}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-orange-50 rounded-xl">
                                <h4 className={`font-bold text-lg mb-2 text-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'Proven Track Record' : 'सिद्ध ट्रैक रिकॉर्ड'}
                                </h4>
                                <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en'
                                        ? 'Years of dedicated service with tangible results'
                                        : 'वर्षों की समर्पित सेवा के साथ मूर्त परिणाम'
                                    }
                                </p>
                            </div>
                            <div className="text-center p-6 bg-blue-50 rounded-xl">
                                <h4 className={`font-bold text-lg mb-2 text-blue-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'Faculty First Approach' : 'शिक्षक प्राथमिकता दृष्टिकोण'}
                                </h4>
                                <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en'
                                        ? 'Every decision prioritizes faculty welfare and growth'
                                        : 'हर निर्णय शिक्षक कल्याण और विकास को प्राथमिकता देता है'
                                    }
                                </p>
                            </div>
                            <div className="text-center p-6 bg-green-50 rounded-xl">
                                <h4 className={`font-bold text-lg mb-2 text-green-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'Transparent Governance' : 'पारदर्शी शासन'}
                                </h4>
                                <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en'
                                        ? 'Open communication and accountable leadership'
                                        : 'खुला संचार और जवाबदेह नेतृत्व'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Election Timeline - Commented out for future use */}
            {/* <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Election Timeline' : 'चुनाव समयसीमा'}
                        </h2>
                        <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' 
                                ? 'Stay informed about important dates and make sure your voice is heard in this democratic process'
                                : 'महत्वपूर्ण तारीखों के बारे में जानकारी रखें और सुनिश्चित करें कि इस लोकतांत्रिक प्रक्रिया में आपकी आवाज सुनाई दे'
                            }
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-300 h-full hidden md:block"></div>
                            
                            <div className="space-y-8">
                                {electionTimeline.map((item, index) => (
                                    <div key={index} className="relative">
                                        <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                                            
                                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                                    <CardHeader className="pb-3">
                                                        <div className="flex items-center justify-center md:hidden mb-3">
                                                            <Calendar className="w-6 h-6 text-orange-600 mr-2" />
                                                        </div>
                                                        <CardTitle className={`text-2xl text-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                            <Calendar className="w-6 h-6 mr-2 hidden md:inline" />
                                                            {new Date(item.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', {
                                                                weekday: 'long',
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            })}
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <p className={`text-lg font-semibold text-gray-800 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                            {item.event[language]}
                                                        </p>
                                                        {index === electionTimeline.length - 2 && (
                                                            <div className={`mt-3 text-sm text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                                {language === 'en' 
                                                                    ? 'Voting from 10:00 AM to 5:00 PM at Faculty of Arts and Satyakam Bhawan'
                                                                    : 'सुबह 10:00 बजे से शाम 5:00 बजे तक कला संकाय और सत्यकाम भवन में मतदान'
                                                                }
                                                            </div>
                                                        )}
                                                    </CardContent>
                                                </Card>
                                            </div>
                                            
                                            <div className="hidden md:block w-5/12"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Enhanced Our Assurance Highlights */}
            <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 cv-auto">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {websiteData.assurance.title[language]}
                        </h2>
                        <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {websiteData.assurance.subtitle[language]}
                        </p>
                        <div className="mt-8 inline-flex items-center px-6 py-3 bg-orange-100 rounded-full">
                            <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                            <span className={`text-orange-800 font-medium ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? '18 Concrete Commitments' : '18 ठोस प्रतिबद्धताएं'}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                        {websiteData.assurance.points.map((assurance, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border-t-4 border-t-orange-600 bg-white">
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between">
                                        <CardTitle className={`text-xl text-orange-600 leading-tight ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {assurance.title[language]}
                                        </CardTitle>
                                        <div className="ml-2 text-orange-600">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className={`text-gray-700 leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {assurance.description[language]}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Featured Promise */}
                    <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white text-center shadow-2xl">
                        <h3 className={`text-3xl font-bold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Our Special Promise' : 'हमारा विशेष वादा'}
                        </h3>
                        <p className={`text-xl mb-6 opacity-90 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en'
                                ? 'Old Pension Scheme (OPS) for all faculty members - A commitment we will fulfill'
                                : 'सभी शिक्षक सदस्यों के लिए पुरानी पेंशन योजना (OPS) - एक प्रतिबद्धता जिसे हम पूरा करेंगे'
                            }
                        </p>
                        <div className="flex justify-center items-center space-x-4">
                            <Shield className="w-8 h-8" />
                            <span className={`text-2xl font-bold ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? 'Guaranteed' : 'गारंटीशुदा'}
                            </span>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => setCurrentPage('assurance')}
                            className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-4"
                        >
                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                {language === 'en' ? 'View All Our Assurances' : 'हमारे सभी संकल्प देखें'}
                            </span>
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Enhanced Platform Snapshot */}
            <section className="py-24 bg-white cv-auto">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {websiteData.platform.title[language]}
                        </h2>
                        <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en'
                                ? 'Our comprehensive approach to transforming academic excellence through three core pillars of change'
                                : 'परिवर्तन के तीन मुख्य स्तंभों के माध्यम से शैक्षणिक उत्कृष्टता को बदलने के लिए हमारा व्यापक दृष्टिकोण'
                            }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {websiteData.platform.points.map((point, index) => (
                            <div key={index} className="relative">
                                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-200 border-t-4 border-t-orange-600 bg-white">
                                    <CardHeader className="relative pb-6">
                                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                            {index + 1}
                                        </div>
                                        <CardTitle className={`text-2xl text-orange-600 mt-6 leading-tight ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {point.title[language]}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pb-8">
                                        <p className={`text-gray-700 text-lg leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {point.description[language]}
                                        </p>
                                        <div className="mt-6">
                                            <div className="inline-flex items-center text-orange-600 font-medium">
                                                <CheckCircle className="w-5 h-5 mr-2" />
                                                <span className={language === 'hi' ? 'font-hindi' : ''}>
                                                    {language === 'en' ? 'Priority Focus Area' : 'प्राथमिकता फोकस क्षेत्र'}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 mb-8">
                            <h3 className={`text-xl sm:text-2xl font-bold mb-4 text-gray-800 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? 'Detailed Policy Framework' : 'विस्तृत नीति ढांचा'}
                            </h3>
                            <p className={`text-sm sm:text-base md:text-lg text-gray-600 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Explore our comprehensive platform that addresses every aspect of academic life, from research funding to infrastructure development.'
                                    : 'हमारे व्यापक प्लेटफॉर्म का अन्वेषण करें जो अनुसंधान फंडिंग से लेकर बुनियादी ढांचे के विकास तक शैक्षणिक जीवन के हर पहलू को संबोधित करता है।'
                                }
                            </p>
                            <Button
                                size="lg"
                                onClick={() => setCurrentPage('platform')}
                                className="bg-orange-600 hover:bg-orange-700 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 w-full sm:w-auto"
                            >
                                <span className={`${language === 'hi' ? 'font-hindi' : ''} text-center`}>
                                    {language === 'en' ? 'Explore Our Complete Platform' : 'हमारा संपूर्ण प्लेटफॉर्म देखें'}
                                </span>
                                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Your President Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 cv-auto">
                <div className="w-full px-4 sm:px-6 lg:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? 'Meet Our Presidential Candidate' : 'हमारे अध्यक्ष पद के उम्मीदवार से मिलें'}
                            </h2>
                            <p className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Leading the vision for DUTA\'s future with dedication, experience, and commitment to academic excellence'
                                    : 'समर्पण, अनुभव और शैक्षणिक उत्कृष्टता की प्रतिबद्धता के साथ DUTA के भविष्य की दृष्टि का नेतृत्व'
                                }
                            </p>
                        </div>

                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
                            <div className="flex flex-col lg:flex-row">
                                {/* Image Section */}
                                <div className="w-full lg:w-2/5 relative">
                                    <div className="aspect-[4/3] lg:aspect-[3/4] relative overflow-hidden group">
                                        <img
                                            src="/candidates/kamlesh-raghuvanshi.jpeg"
                                            alt="Dr. Kamlesh Kumar Raghuvanshi - DUTA Presidential Candidate"
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy" decoding="async"
                                            onError={(e) => {
                                                const target = e.currentTarget;
                                                target.style.display = 'none';
                                                const fallback = target.nextElementSibling as HTMLElement;
                                                if (fallback) {
                                                    fallback.style.display = 'flex';
                                                    fallback.classList.remove('hidden');
                                                }
                                            }}
                                        />
                                        {/* Fallback */}
                                        <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 hidden flex-col items-center justify-center text-white">
                                            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                                                <Users className="w-8 sm:w-10 h-8 sm:h-10" />
                                            </div>
                                            <div className="text-sm sm:text-lg font-semibold px-4 leading-snug text-left sm:text-center">
                                                {language === 'en' ? (
                                                    <>
                                                        <span className="block sm:inline">DUTA Presidential Candidate</span>
                                                        
                                                        
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="block sm:inline">DUTA अध्यक्ष पद के उम्मीदवार</span>
                                                        
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        {/* Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2 sm:p-4 lg:hidden">
                                            <h3 className={`text-white text-base sm:text-xl font-extrabold leading-snug drop-shadow ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                Dr. Kamlesh Kumar Raghuvanshi
                                            </h3>
                                            <div className={`mt-1 inline-flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-orange-600/90 backdrop-blur-sm shadow-lg border border-orange-300/40 text-white text-xs sm:text-base font-bold tracking-wide whitespace-normal break-words text-left sm:text-center leading-tight max-w-[85%] mx-0 sm:mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? (
                                                    <>
                                                        <span className="block sm:inline">DUTA Presidential Candidate</span>
                                                        
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="block sm:inline">DUTA अध्यक्ष पद के उम्मीदवार</span>
                                                        
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full lg:w-3/5 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                                    <div className="space-y-4 sm:space-y-6">
                                        {/* Name and Title - Hidden on mobile (shown in overlay) */}
                                        <div className="hidden lg:block">
                                            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                Dr. Kamlesh Kumar Raghuvanshi
                                            </h3>
                                            <div className={`text-base sm:text-lg lg:text-xl text-orange-600 font-semibold ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? (
                                                    <>
                                                        <span className="block sm:inline">DUTA Presidential Candidate</span>
                                                        
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="block sm:inline">DUTA अध्यक्ष पद के उम्मीदवार</span>
                                                        
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* Department */}
                                        <div>
                                            <h4 className={`text-sm sm:text-base font-semibold text-gray-700 mb-2 uppercase tracking-wide ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? 'Department' : 'विभाग'}
                                            </h4>
                                            <p className={`text-base sm:text-lg text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en'
                                                    ? 'Department of Computer Science, Ramanujan College'
                                                    : 'कंप्यूटर साइंस विभाग, रामानुजन कॉलेज'
                                                }
                                            </p>
                                        </div>

                                        {/* Experience */}
                                        <div>
                                            <h4 className={`text-sm sm:text-base font-semibold text-gray-700 mb-2 uppercase tracking-wide ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? 'Experience' : 'अनुभव'}
                                            </h4>
                                            <p className={`text-base sm:text-lg text-gray-600 leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en'
                                                    ? 'Assistant Professor with extensive experience in computer science and academic administration. Committed to faculty welfare and institutional development.'
                                                    : 'कंप्यूटर साइंस और शैक्षणिक प्रशासन में व्यापक अनुभव वाले सहायक प्रोफेसर। शिक्षक कल्याण और संस्थागत विकास के लिए प्रतिबद्ध।'
                                                }
                                            </p>
                                        </div>

                                        {/* Vision */}
                                        <div>
                                            <h4 className={`text-sm sm:text-base font-semibold text-gray-700 mb-2 uppercase tracking-wide ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? 'Vision' : 'दृष्टि'}
                                            </h4>
                                            <p className={`text-base sm:text-lg text-gray-600 leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en'
                                                    ? 'Building a stronger, more transparent, and faculty-first academic environment where every educator can thrive and excel.'
                                                    : 'एक मजबूत, अधिक पारदर्शी और शिक्षक-प्राथमिकता वाला शैक्षणिक वातावरण बनाना जहां हर शिक्षक फल-फूल सके और उत्कृष्टता प्राप्त कर सके।'
                                                }
                                            </p>
                                        </div>

                                        {/* Contact Button */}
                                        <div className="pt-4 sm:pt-6">
                                            <Button
                                                onClick={() => setCurrentPage('duta-elections')}
                                                className="bg-orange-600 hover:bg-orange-700 text-white transition-colors duration-200 w-full sm:w-auto"
                                            >
                                                <span className={language === 'hi' ? 'font-hindi' : ''}>
                                                    {language === 'en' ? 'Learn More About Our Leadership' : 'हमारे नेतृत्व के बारे में और जानें'}
                                                </span>
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feedback Invitation Section */}
            <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white cv-auto">
                <div className="w-full px-6 lg:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? 'Share Your Feedback' : 'अपना सुझाव साझा करें'}
                            </h2>
                            <p className={`text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Your suggestions help us refine our agenda, policies, and on-ground actions. Tell us what matters most to you and your college.'
                                    : 'आपके सुझाव हमारे एजेंडा, नीतियों और जमीनी कार्यों को बेहतर बनाते हैं। हमें बताएं कि आपके और आपके कॉलेज के लिए क्या सबसे महत्वपूर्ण है।'}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-white/10 rounded-lg p-6">
                                <div className="flex items-start">
                                    <CheckCircle className="w-6 h-6 mt-1 mr-3 text-white" />
                                    <div>
                                        <h3 className={`font-semibold text-white mb-1 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Shape Our Agenda' : 'हमारे एजेंडा को आकार दें'}
                                        </h3>
                                        <p className={`text-white/85 text-sm ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Guide priorities with real faculty needs.' : 'वास्तविक शिक्षक आवश्यकताओं से प्राथमिकताएं तय करें।'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-6">
                                <div className="flex items-start">
                                    <CheckCircle className="w-6 h-6 mt-1 mr-3 text-white" />
                                    <div>
                                        <h3 className={`font-semibold text-white mb-1 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Improve Policies' : 'नीतियों में सुधार'}
                                        </h3>
                                        <p className={`text-white/85 text-sm ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Make governance transparent and responsive.' : 'शासन को पारदर्शी और संवेदनशील बनाएं।'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-6">
                                <div className="flex items-start">
                                    <CheckCircle className="w-6 h-6 mt-1 mr-3 text-white" />
                                    <div>
                                        <h3 className={`font-semibold text-white mb-1 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Drive Real Change' : 'वास्तविक बदलाव लाएं'}
                                        </h3>
                                        <p className={`text-white/85 text-sm ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Turn ideas into action for every campus.' : 'हर कैंपस के लिए विचारों को कार्रवाई में बदलें।'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button
                                size="lg"
                                onClick={() => {
                                    try { sessionStorage.setItem('scrollToFeedback', '1'); } catch { }
                                    setCurrentPage('contact');
                                }}
                                className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8 py-4"
                            >
                                <span className={language === 'hi' ? 'font-hindi' : ''}>
                                    {language === 'en' ? 'Submit Your Feedback' : 'अपना सुझाव भेजें'}
                                </span>
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simplified Cast Your Vote Section */}
            {/* <section className="py-20 bg-blue-700 text-white">
                <div className="w-full px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-lg text-base font-medium mb-6">
                            <Vote className="w-5 h-5 mr-2" />
                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                {language === 'en' ? 'DUTA Elections 2025' : 'DUTA चुनाव 2025'}
                            </span>
                        </div>

                        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Cast Your Vote' : 'अपना वोट डालें'}
                        </h2>

                        <p className={`text-lg md:text-xl mb-8 text-blue-100 leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en'
                                ? 'Exercise your democratic right and participate in shaping the future of faculty welfare and academic excellence.'
                                : 'अपने लोकतांत्रिक अधिकार का प्रयोग करें और शिक्षक कल्याण तथा शैक्षणिक उत्कृष्टता के भविष्य को आकार देने में भाग लें।'
                            }
                        </p>

                     
                        <div className="bg-white/10 rounded-lg p-6 mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                                    <h3 className={`font-semibold mb-1 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Election Date' : 'चुनाव तिथि'}
                                    </h3>
                                    <p className="text-blue-200">September 4, 2025</p>
                                </div>
                                <div>
                                    <Clock className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                                    <h3 className={`font-semibold mb-1 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Voting Hours' : 'मतदान समय'}
                                    </h3>
                                    <p className="text-blue-200">10 AM - 5 PM</p>
                                </div>
                                <div>
                                    <MapPin className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                                    <h3 className={`font-semibold mb-1 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Voting Venues' : 'मतदान केंद्र'}
                                    </h3>
                                    <p className="text-blue-200 text-sm">Faculty of Arts & Satyakam Bhawan</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-600 rounded-lg p-6">
                            <h3 className={`text-xl font-bold mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? 'Every Vote Matters' : 'हर वोट मायने रखता है'}
                            </h3>
                            <p className={`text-orange-100 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Your participation will help shape the future of DUTA and ensure faculty welfare remains our top priority.'
                                    : 'आपकी भागीदारी DUTA के भविष्य को आकार देने में मदद करेगी और यह सुनिश्चित करेगी कि शिक्षक कल्याण हमारी शीर्ष प्राथमिकता बनी रहे।'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Final Call to Action */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="w-full px-6 lg:px-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Ready to Make a Difference?' : 'अंतर लाने के लिए तैयार हैं?'}
                        </h2>
                        <p className={`text-xl text-gray-300 mb-12 leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en'
                                ? 'Join us in our mission to transform academic excellence. Together, we can build a stronger, more democratic, and transparent educational environment.'
                                : 'शैक्षणिक उत्कृष्टता को बदलने के हमारे मिशन में हमारे साथ जुड़ें। मिलकर हम एक मजबूत, अधिक लोकतांत्रिक और पारदर्शी शैक्षणिक वातावरण बना सकते हैं।'
                            }
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                onClick={() => setCurrentPage('contact')}
                                className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4 transition-colors duration-200"
                            >
                                <span className={language === 'hi' ? 'font-hindi' : ''}>
                                    {language === 'en' ? 'Get In Touch' : 'संपर्क करें'}
                                </span>
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => setCurrentPage('duta-elections')}
                                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-lg px-8 py-4 transition-all duration-200"
                            >
                                <span className={language === 'hi' ? 'font-hindi' : ''}>
                                    {language === 'en' ? 'Meet Our Leadership' : 'हमारे नेतृत्व से मिलें'}
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
