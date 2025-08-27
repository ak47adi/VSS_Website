import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, X } from 'lucide-react';
import { websiteData } from '../data/content';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface NewsPageProps {
    language: 'en' | 'hi';
}

const NewsPage: React.FC<NewsPageProps> = ({ language }) => {
    // No relative time; we'll show only the publish date.

    // News items are sourced from websiteData.news
    const allNews = [...websiteData.news].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Simple lightbox state
    const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
    const openLightbox = (src?: string, alt?: string) => {
        if (!src) return;
        setLightbox({ src, alt: alt || '' });
    };
    useEffect(() => {
        if (!lightbox) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [lightbox]);

    // Format helper for dates
    const formatDate = (isoDate: string) => new Date(isoDate).toLocaleDateString(
        language === 'hi' ? 'hi-IN' : 'en-US',
        { year: 'numeric', month: 'long', day: 'numeric' }
    );

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            'Academic': 'bg-blue-100 text-blue-800',
            'शैक्षणिक': 'bg-blue-100 text-blue-800',
            'Workshop': 'bg-green-100 text-green-800',
            'कार्यशाला': 'bg-green-100 text-green-800',
            'Infrastructure': 'bg-purple-100 text-purple-800',
            'बुनियादी ढांचा': 'bg-purple-100 text-purple-800',
            'Election': 'bg-orange-100 text-orange-800',
            'चुनाव': 'bg-orange-100 text-orange-800',
            'Welfare': 'bg-yellow-100 text-yellow-800',
            'कल्याण': 'bg-yellow-100 text-yellow-800'
        };
        return colors[category] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="min-h-screen py-16 bg-gray-50">
            <div className="w-full px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {websiteData.navigation.news[language]}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en'
                            ? 'Stay updated with the latest news, announcements, and developments from VSS.'
                            : 'वीएसएस से नवीनतम समाचार, घोषणाओं और विकास के साथ अपडेट रहें।'
                        }
                    </p>
                </div>

                {/* Latest News (single item) */}
                {allNews.length > 0 && (
                    <div className="mb-12">
                        <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'Latest Update' : 'नवीनतम अपडेट'}
                        </h2>
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-l-orange-600">
                            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                                        <Calendar className="w-5 h-5 text-orange-600" />
                                        <span className="text-sm text-orange-600 font-medium">{formatDate(allNews[0].date)}</span>
                                    </div>
                                    {(allNews[0] as any).category && (
                                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor((allNews[0] as any).category[language])}`}>
                                            {(allNews[0] as any).category[language]}
                                        </span>
                                    )}
                                </div>
                                <CardTitle className={`text-2xl ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {allNews[0].title[language]}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                {((allNews[0] as any).image) && (
                                    <div className="mb-4">
                                        <div className="relative group rounded-lg overflow-hidden bg-gray-100 mx-auto w-full md:max-w-2xl">
                                            <img
                                                src={(allNews[0] as any).image}
                                                alt={((allNews[0] as any).imageAlt?.[language]) || allNews[0].title[language]}
                                                className="w-full h-auto cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.02]"
                                                loading="lazy" decoding="async"
                                                onClick={() => openLightbox((allNews[0] as any).image, ((allNews[0] as any).imageAlt?.[language]) || allNews[0].title[language])}
                                                onError={(e) => {
                                                    // Hide the broken image and show fallback CTA
                                                    const img = e.currentTarget;
                                                    img.style.display = 'none';
                                                    const fb = img.nextElementSibling as HTMLElement;
                                                    if (fb) {
                                                        fb.classList.remove('hidden');
                                                        fb.classList.add('flex');
                                                    }
                                                }}
                                            />
                                            <button
                                                className={`hidden w-full h-40 sm:h-56 md:h-64 items-center justify-center text-sm text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}
                                                onClick={() => openLightbox((allNews[0] as any).image, ((allNews[0] as any).imageAlt?.[language]) || allNews[0].title[language])}
                                            >
                                                {language === 'en' ? 'Open full image' : 'पूर्ण छवि खोलें'}
                                            </button>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">{language === 'en' ? 'Tap image to view larger' : 'बड़ी छवि देखने के लिए छवि पर टैप करें'}</p>
                                    </div>
                                )}
                                <p className={`text-gray-700 text-lg leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {allNews[0].content[language]}
                                </p>
                                <div className="mt-6 flex items-center justify-between">
                                    <div className="flex items-center text-orange-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        <span className="text-sm">{formatDate(allNews[0].date)}</span>
                                    </div>
                                    <Link to={`/news/${(allNews[0] as any).slug}`}>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="p-0 h-auto text-orange-600 hover:text-orange-700"
                                        >
                                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                                {language === 'en' ? 'Read more' : 'और पढ़ें'}
                                            </span>
                                            <ArrowRight className="inline ml-1 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
                {/* More Updates list (all except the latest) */}
                {allNews.length > 1 && (
                    <div className="mt-6">
                        <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {language === 'en' ? 'More Updates' : 'अन्य अपडेट'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {allNews.slice(1).map((n: any) => (
                                <Card key={n.slug} className="overflow-hidden hover:shadow-md transition-shadow">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2 text-orange-600">
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-sm">
                                                    {new Date(n.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                </span>
                                            </div>
                                            {n.category && (
                                                <span className={`px-2 py-0.5 text-xs rounded-full ${getCategoryColor(n.category[language])}`}>
                                                    {n.category[language]}
                                                </span>
                                            )}
                                        </div>
                                        <CardTitle className={`text-xl mt-2 ${language === 'hi' ? 'font-hindi' : ''}`}>{n.title[language]}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        {n.image && (
                                            <div className="mb-3">
                                                <div className="relative rounded-md overflow-hidden bg-gray-100">
                                                    <img
                                                        src={n.image}
                                                        alt={(n.imageAlt?.[language]) || n.title[language]}
                                                        className="w-full h-auto cursor-zoom-in"
                                                        loading="lazy" decoding="async"
                                                        onClick={() => openLightbox(n.image, (n.imageAlt?.[language]) || n.title[language])}
                                                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <p className={`text-gray-700 text-base ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {(n.content[language] as string).length > 180 ? `${n.content[language].slice(0, 177)}...` : n.content[language]}
                                        </p>
                                        <div className="mt-4">
                                            <Link to={`/news/${n.slug}`}>
                                                <Button variant="ghost" size="sm" className="p-0 h-auto text-orange-600 hover:text-orange-700">
                                                    <span className={language === 'hi' ? 'font-hindi' : ''}>
                                                        {language === 'en' ? 'Read more' : 'और पढ़ें'}
                                                    </span>
                                                    <ArrowRight className="inline ml-1 w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
                {/* Newsletter Subscription (commented out for now) */}
                {false && (
                    <div className="mt-16">
                        <Card className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                            <CardContent className="p-8 text-center">
                                {/* ...newsletter UI... */}
                            </CardContent>
                        </Card>
                    </div>
                )}
                {/* Lightbox overlay */}
                {lightbox && (
                    <div
                        role="dialog" aria-modal="true"
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6"
                        onClick={() => setLightbox(null)}
                    >
                        <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                            <button
                                aria-label={language === 'en' ? 'Close' : 'बंद करें'}
                                className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 inline-flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/60 p-2"
                                onClick={() => setLightbox(null)}
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <img
                                src={lightbox.src}
                                alt={lightbox.alt}
                                className="max-h-[90vh] max-w-[95vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsPage;
