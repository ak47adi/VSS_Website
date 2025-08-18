import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { websiteData } from '../data/content';
import { Button } from './ui/button';

interface HeaderProps {
    language: 'en' | 'hi';
    setLanguage: (lang: 'en' | 'hi') => void;
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, currentPage, setCurrentPage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationItems = [
        { key: 'home', label: websiteData.navigation.home },
        { key: 'about', label: websiteData.navigation.about },
        { key: 'platform', label: websiteData.navigation.platform },
        { key: 'members', label: websiteData.navigation.candidates },
        { key: 'assurance', label: websiteData.navigation.assurance },
        // { key: 'resources', label: websiteData.navigation.resources },
        { key: 'contact', label: websiteData.navigation.contact },
    ];

    const handleMenuItemClick = (page: string) => {
        setCurrentPage(page);
        setIsMobileMenuOpen(false); // Close menu after navigation
    };

    return (
        <header className="bg-white shadow-lg border-b-4 border-orange-600 sticky top-0 z-50 w-full">
            {/* Top Header with Logo and Title */}
            <div className="bg-[#0d4864] text-white">
                <div className="w-full flex flex-col items-center sm:flex-row sm:items-stretch">
                    {/* Logo and Hamburger Row for Mobile */}
                    <div className="flex items-center justify-between w-full sm:w-auto px-4 lg:px-6 py-2 lg:py-3">
                        {/* Logo - left-aligned on mobile, centered on larger screens via parent */}
                        <img
                            src="/banner/vss-logo-removebg.png"
                            alt="VSS Logo"
                            className="h-12 sm:h-16 lg:h-20 w-auto object-contain drop-shadow cursor-pointer transition-transform duration-200"
                            loading="lazy"
                            onClick={() => setCurrentPage('home')}
                        />
                        {/* Hamburger Menu - only visible on mobile */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="sm:hidden p-2 text-white hover:text-orange-300 transition-colors"
                            aria-label="Toggle navigation menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Language toggle - centered on mobile when menu closed, right-aligned on sm+ */}
                    <div className={`${isMobileMenuOpen ? 'hidden' : 'flex'} sm:flex items-center justify-center sm:justify-end px-6 lg:px-10 py-2 lg:py-4 bg-[#0d4864] w-full sm:flex-1 sm:min-h-[64px]`}>
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

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="sm:hidden bg-[#0d4864] border-t border-gray-600">
                        <div className="px-4 py-2 space-y-1">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => handleMenuItemClick(item.key)}
                                    className={`block w-full text-left py-3 px-2 rounded transition-colors ${currentPage === item.key
                                        ? 'text-orange-400 bg-white/10'
                                        : 'text-white hover:text-orange-300 hover:bg-white/5'
                                        } ${language === 'hi' ? 'font-hindi' : ''}`}
                                >
                                    {item.label[language]}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation centered - completely removed from mobile DOM, only rendered on sm+ */}
            <div className="hidden sm:block">
                <nav className="bg-white">
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
            </div>
        </header>
    );
};

export default Header;
