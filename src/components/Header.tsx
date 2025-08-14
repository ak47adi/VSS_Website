import React from 'react';
import { Globe } from 'lucide-react';
import { websiteData } from '../data/content';
import { Button } from './ui/button';

interface HeaderProps {
    language: 'en' | 'hi';
    setLanguage: (lang: 'en' | 'hi') => void;
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, currentPage, setCurrentPage }) => {
    // removed mobile menu (navigation now centered)
    // converter removed; only language toggle retained

    const navigationItems = [
        { key: 'home', label: websiteData.navigation.home },
        { key: 'about', label: websiteData.navigation.about },
        { key: 'platform', label: websiteData.navigation.platform },
        { key: 'candidates', label: websiteData.navigation.candidates },
        { key: 'news', label: websiteData.navigation.news },
        { key: 'resources', label: websiteData.navigation.resources },
        { key: 'contact', label: websiteData.navigation.contact },
    ];

    return (
        <header className="bg-white shadow-lg border-b-4 border-orange-600 sticky top-0 z-50 w-full">
            {/* Top Header with Logo and Title */}
            <div className="bg-[#0d4864] text-white">
                <div className="w-full flex flex-col lg:flex-row items-stretch">
                    {/* Logo (shrunk) */}
                    <div className="flex items-center justify-start px-4 lg:px-6 py-2 lg:py-3 flex-shrink-0">
                        <img
                            src="/banner/vss-logo.png"
                            alt="VSS Logo"
                            className="h-16 w-auto object-contain drop-shadow"
                            loading="lazy"
                        />
                    </div>
                    {/* Right side: only language toggle */}
                    <div className="flex-1 px-6 lg:px-10 py-2 lg:py-4 flex items-center justify-end bg-[#0d4864] min-h-[64px]">
                        <div className="flex items-center space-x-2">
                            <Globe className="w-5 h-5" />
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                                className="bg-white text-orange-600 border-white hover:bg-orange-50"
                            >
                                {language === 'en' ? 'हिंदी' : 'English'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation centered */}
            <nav className="bg-white border-t">
                <div className="w-full px-4 py-2 flex flex-wrap justify-center gap-6">
                    {navigationItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setCurrentPage(item.key)}
                            className={`pb-1 text-sm font-medium transition-colors border-b-2 ${currentPage === item.key
                                    ? 'text-orange-600 border-orange-600'
                                    : 'text-gray-700 border-transparent hover:text-orange-600 hover:border-orange-300'
                                } ${language === 'hi' ? 'font-hindi' : ''}`}
                        >
                            {item.label[language]}
                        </button>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
