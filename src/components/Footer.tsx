import React from 'react';
import { Link } from 'react-router-dom';
// Removed unused icon imports
import { websiteData } from '../data/content';

interface FooterProps {
    language: 'en' | 'hi';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
    const currentDate = new Date().toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US');

    return (
        <footer className="bg-gray-800 text-white mt-16">
            <div className="w-full px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Slogan */}
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <img
                                src="/banner/vss-logo-removebg.png"
                                alt={language === 'en' ? 'VSS Logo' : 'वीएसएस लोगो'}
                                className="h-12 sm:h-16 lg:h-20 w-auto object-contain drop-shadow"
                                loading="lazy" decoding="async"
                            />
                            {/* <div className="pt-1">
                <h3 className={`text-lg font-bold text-orange-400 ${language === 'hi' ? 'font-hindi' : ''}`}>
                  {language === 'en' ? 'Vishwavidyalaya Shikshak Sangh' : 'विश्वविद्यालय शिक्षक संघ'}
                </h3>
                <p className={`mt-2 text-gray-300 text-sm leading-snug ${language === 'hi' ? 'font-hindi' : ''}`}>
                  {websiteData.footer.slogan[language]}
                </p>
              </div> */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className={`text-lg font-semibold ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className={`text-gray-300 hover:text-orange-400 transition-colors ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {websiteData.navigation.about[language]}
                                </Link>
                            </li>
                            <li>
                                <Link to="/platform" className={`text-gray-300 hover:text-orange-400 transition-colors ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {websiteData.navigation.platform[language]}
                                </Link>
                            </li>
                            <li>
                                <Link to="/duta-elections" className={`text-gray-300 hover:text-orange-400 transition-colors ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {websiteData.navigation.candidates[language]}
                                </Link>
                            </li>
                            <li>
                                <Link to="/assurance" className={`text-gray-300 hover:text-orange-400 transition-colors ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {websiteData.navigation.assurance[language]}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h4 className={`text-lg font-semibold ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {websiteData.navigation.contact[language]}
                        </h4>
                        <div className="space-y-2 text-gray-300">
                            <p className={language === 'hi' ? 'font-hindi' : ''}>
                                {language === 'en' ? 'Email: ' : 'ईमेल: '}
                                <a
                                    href="mailto:vsskamleshdu@gmail.com"
                                    className="text-orange-400 hover:text-orange-300 underline transition-colors"
                                >
                                    vsskamleshdu@gmail.com
                                </a>
                            </p>
                            <p className={language === 'hi' ? 'font-hindi' : ''}>
                                {language === 'en' ? 'Phone: ' : 'फोन: '}
                                <a
                                    href="tel:+919810298704"
                                    className="text-orange-400 hover:text-orange-300 underline transition-colors"
                                >
                                    +91-9810298704
                                </a>
                            </p>
                            <p className={language === 'hi' ? 'font-hindi' : ''}>
                                {language === 'en'
                                    ? 'Address: Delhi University, Delhi'
                                    : 'पता: दिल्ली विश्वविद्यालय, दिल्ली'
                                }
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-300 text-sm">
                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                {websiteData.footer.ownership[language]}
                            </span>
                        </div>
                        <div className="text-gray-300 text-sm">
                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                {websiteData.footer.lastUpdated[language]} {currentDate}
                            </span>
                        </div>
                    </div>

                    {/* Accessibility Statement */}
                    <div className="mt-4 text-center">
                        <p className={`text-gray-400 text-sm ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en'
                                ? 'This website is designed to be accessible to all users and complies with WCAG 2.0 AA standards.'
                                : 'यह वेबसाइट सभी उपयोगकर्ताओं के लिए सुलभ होने के लिए डिज़ाइन की गई है और WCAG 2.0 AA मानकों का अनुपालन करती है।'
                            }
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
