import React from 'react';
import { User, Mail, Phone, Download } from 'lucide-react';
import { websiteData } from '../data/content';
import { Card, CardContent } from './ui/card';

interface CandidatesPageProps {
    language: 'en' | 'hi';
}

const CandidatesPage: React.FC<CandidatesPageProps> = ({ language }) => {
    return (
        <div className="min-h-screen py-16 bg-gray-50">
            <div className="w-full px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'VSS Members for DUTA Elections 2025-26' : 'DUTA चुनाव 2025-26 के लिए VSS सदस्य'}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en'
                            ? 'Meet our dedicated team members committed to improving the academic environment.'
                            : 'शैक्षणिक वातावरण में सुधार के लिए प्रतिबद्ध हमारे समर्पित टीम सदस्यों से मिलें।'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {websiteData.candidates.map((candidate, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                            {/* Mobile Layout: Image on top, details below */}
                            <div className="md:hidden">
                                {/* Portrait Image Section - Mobile */}
                                <div className="relative h-64 bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden">
                                    {candidate.image ? (
                                        <img
                                            src={candidate.image}
                                            alt={`${candidate.name} - ${candidate.position[language]}`}
                                            className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${candidate.name === 'Shailendra Pathak' ? 'object-top pt-2' : 'object-center'}`}
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
                                    ) : null}
                                    {/* Fallback placeholder */}
                                    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 hidden flex-col items-center justify-center text-white">
                                        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
                                            <User className="w-10 h-10" />
                                        </div>
                                        <p className="text-base font-semibold text-center px-4">
                                            {candidate.name}
                                        </p>
                                    </div>
                                    {/* Overlay with position */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                        <p className={`text-white text-sm font-medium ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {candidate.position[language]}
                                        </p>
                                    </div>
                                </div>

                                {/* Content Section - Mobile */}
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        {/* Name */}
                                        <div>
                                            <h3 className={`text-xl font-bold text-gray-900 mb-1 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {candidate.name}
                                            </h3>
                                        </div>

                                        {/* Department */}
                                        <div>
                                            <h4 className={`font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wide ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? 'Department' : 'विभाग'}
                                            </h4>
                                            <p className={`text-gray-600 text-sm ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {candidate.department[language]}
                                            </p>
                                        </div>

                                        {/* Biography */}
                                        <div>
                                            <h4 className={`font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wide ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? 'Biography' : 'जीवनी'}
                                            </h4>
                                            <p className={`text-gray-600 text-sm leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {candidate.bio[language]}
                                            </p>
                                        </div>

                                        {/* Contact Information */}
                                        <div className="pt-4 border-t border-gray-200">
                                            <h4 className={`font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? 'Contact' : 'संपर्क'}
                                            </h4>
                                            <div className="space-y-2">
                                                {candidate.email && (
                                                    <div className="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                                                        <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                                                        <a
                                                            href={`mailto:${candidate.email}`}
                                                            className="text-sm hover:underline break-all"
                                                        >
                                                            {candidate.email}
                                                        </a>
                                                    </div>
                                                )}
                                                {candidate.phone && (
                                                    <div className="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                                                        <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                                                        <a
                                                            href={`tel:+91-${candidate.phone}`}
                                                            className="text-sm hover:underline"
                                                        >
                                                            +91-{candidate.phone}
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </div>

                            {/* Desktop/Tablet Layout: Image left, details right */}
                            <div className="hidden sm:flex">
                                {/* Portrait Image Section - Desktop/Tablet (Left Side) */}
                                <div className="relative w-40 sm:w-48 md:w-56 lg:w-64 h-56 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden flex-shrink-0">
                                    {candidate.image ? (
                                        <img
                                            src={candidate.image}
                                            alt={`${candidate.name} - ${candidate.position[language]}`}
                                            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
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
                                    ) : null}
                                    {/* Fallback placeholder */}
                                    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 hidden flex-col items-center justify-center text-white">
                                        <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                                            <User className="w-12 h-12" />
                                        </div>
                                        <p className="text-lg font-semibold text-center px-4">
                                            {candidate.name}
                                        </p>
                                    </div>
                                </div>

                                {/* Content Section - Desktop/Tablet (Right Side) */}
                                <CardContent className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col justify-between min-h-56 sm:min-h-64 md:min-h-72 lg:min-h-80">
                                    <div className="space-y-2 sm:space-y-3 md:space-y-4 flex-1">
                                        {/* Name and Position */}
                                        <div>
                                            <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {candidate.name}
                                            </h3>
                                            <p className={`text-orange-600 font-semibold text-xs sm:text-sm md:text-base ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {candidate.position[language]}
                                            </p>
                                        </div>

                                        {/* Department */}
                                        <div>
                                            <h4 className={`font-semibold text-gray-700 mb-1 text-xs sm:text-xs md:text-sm uppercase tracking-wide ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? 'Department' : 'विभाग'}
                                            </h4>
                                            <p className={`text-gray-600 text-xs sm:text-xs md:text-sm ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {candidate.department[language]}
                                            </p>
                                        </div>

                                        {/* Biography */}
                                        <div>
                                            <h4 className={`font-semibold text-gray-700 mb-1 text-xs sm:text-xs md:text-sm uppercase tracking-wide ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {language === 'en' ? 'Biography' : 'जीवनी'}
                                            </h4>
                                            <p className={`text-gray-600 text-xs sm:text-xs md:text-sm leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {candidate.bio[language]}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="pt-2 sm:pt-3 md:pt-4 border-t border-gray-200 mt-2 sm:mt-3 md:mt-4">
                                        <h4 className={`font-semibold text-gray-700 mb-1 sm:mb-2 md:mb-3 text-xs sm:text-xs md:text-sm uppercase tracking-wide ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Contact' : 'संपर्क'}
                                        </h4>
                                        <div className="space-y-1 sm:space-y-1 md:space-y-2">
                                            {candidate.email && (
                                                <div className="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                                                    <Mail className="w-3 sm:w-3 md:w-4 h-3 sm:h-3 md:h-4 mr-2 flex-shrink-0" />
                                                    <a
                                                        href={`mailto:${candidate.email}`}
                                                        className="text-xs sm:text-xs md:text-sm hover:underline break-all"
                                                    >
                                                        {candidate.email}
                                                    </a>
                                                </div>
                                            )}
                                            {candidate.phone && (
                                                <div className="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                                                    <Phone className="w-3 sm:w-3 md:w-4 h-3 sm:h-3 md:h-4 mr-2 flex-shrink-0" />
                                                    <a
                                                        href={`tel:+91-${candidate.phone}`}
                                                        className="text-xs sm:text-xs md:text-sm hover:underline"
                                                    >
                                                        +91-{candidate.phone}
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Gallery Section */}
                <div className="mt-16">
                    <div className="text-center mb-8">
                        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Team Gallery' : 'टीम गैलरी'}
                        </h2>
                        <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en'
                                ? 'Meet our dedicated team members working together for academic excellence'
                                : 'शैक्षणिक उत्कृष्टता के लिए मिलकर काम करने वाले हमारे समर्पित टीम सदस्यों से मिलें'
                            }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            <img
                                src="/candidates/gallery-section-1.jpeg"
                                alt={language === 'en' ? 'Team Gallery Image 1' : 'टीम गैलरी छवि 1'}
                                className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-300"
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
                            {/* Fallback placeholder */}
                            <div className="w-full h-56 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-br from-orange-400 to-orange-600 hidden flex-col items-center justify-center text-white">
                                <div className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                                    <User className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10" />
                                </div>
                                <p className="text-sm sm:text-lg md:text-xl font-semibold text-center px-4">
                                    {language === 'en' ? 'Team Gallery' : 'टीम गैलरी'}
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            <img
                                src="/candidates/gallery-section-2.jpeg"
                                alt={language === 'en' ? 'Team Gallery Image 2' : 'टीम गैलरी छवि 2'}
                                className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-300"
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
                            {/* Fallback placeholder */}
                            <div className="w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-blue-400 to-blue-600 hidden flex-col items-center justify-center text-white">
                                <div className="w-16 md:w-20 h-16 md:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                                    <User className="w-8 md:w-10 h-8 md:h-10" />
                                </div>
                                <p className="text-lg md:text-xl font-semibold text-center px-4">
                                    {language === 'en' ? 'Team Gallery' : 'टीम गैلरी'}
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>

                {/* Voter List Download Section */}
                <div className="mt-16">
                    <Card className="bg-white border border-orange-200">
                        <CardContent className="p-8 text-center">
                            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-3 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? 'Know Our Voters' : 'हमारे मतदाताओं को जानें'}
                            </h2>
                            <p className={`text-gray-600 text-lg mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Download the official DUTA Voter List (2025–27).'
                                    : 'DUTA की आधिकारिक मतदाता सूची (2025–27) डाउनलोड करें।'}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/DUTA_Voter_List_2025-27.pdf"
                                    download="DUTA_Voter_List_2025-27.pdf"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    <span className={language === 'hi' ? 'font-hindi' : ''}>
                                        {language === 'en' ? 'Download Voter List (PDF)' : 'मतदाता सूची डाउनलोड करें (PDF)'}
                                    </span>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Cast Your Valuable Vote Section */}
                <div className="mt-16">
                    <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0">
                        <CardContent className="p-8 text-center">
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Cast Your Valuable Vote'
                                    : 'अपना बहुमूल्य वोट डालें'
                                }
                            </h2>
                            <p className={`text-blue-100 text-lg mb-6 max-w-2xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Your participation matters. Exercise your democratic right and make your voice heard.'
                                    : 'आपकी भागीदारी मायने रखती है। अपने लोकतांत्रिक अधिकार का प्रयोग करें और अपनी आवाज सुनाएं।'
                                }
                            </p>
                            <div className={`text-2xl font-bold text-yellow-300 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
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
                            <div className={`text-blue-100 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Faculty of Arts and Satyakam Bhawan, University of Delhi'
                                    : 'कला संकाय और सत्यकाम भवन, दिल्ली विश्वविद्यालय'
                                }
                            </div>
                        </CardContent>
                    </Card>
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
                                    href="mailto:vsskamleshdu@gmail.com"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-700 transition-colors"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    <span className={language === 'hi' ? 'font-hindi' : ''}>
                                        {language === 'en' ? 'Contact Us' : 'हमसे संपर्क करें'}
                                    </span>
                                </a>
                                <a
                                    href="tel:+91-9810298704"
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
