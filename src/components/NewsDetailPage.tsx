import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { websiteData } from '../data/content';
import { Calendar, ArrowLeft, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface NewsDetailPageProps {
    language: 'en' | 'hi';
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ language }) => {
    const { slug } = useParams<{ slug: string }>();
    const item = websiteData.news.find((n: any) => n.slug === slug);
    const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
    useEffect(() => {
        if (!lightbox) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [lightbox]);

    if (!item) {
        return (
            <div className="min-h-screen py-16">
                <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
                    <p className={`text-center text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'News item not found.' : 'समाचार नहीं मिला।'}
                    </p>
                    <div className="mt-6 text-center">
                        <Link to="/news">
                            <Button variant="outline">
                                <ArrowLeft className="mr-2 w-4 h-4" />
                                <span className={language === 'hi' ? 'font-hindi' : ''}>
                                    {language === 'en' ? 'Back to News' : 'समाचार पर वापस जाएँ'}
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const dateFmt = new Date(item.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <div className="min-h-screen py-16 bg-gray-50">
            <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
                <Link to="/news">
                    <Button variant="link" className="p-0 text-orange-600">
                        <ArrowLeft className="mr-1 w-4 h-4" />
                        <span className={language === 'hi' ? 'font-hindi' : ''}>
                            {language === 'en' ? 'Back to all news' : 'सभी समाचारों पर वापस'}
                        </span>
                    </Button>
                </Link>

                <Card className="mt-4">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-orange-600 text-sm font-medium">
                                <Calendar className="w-4 h-4" />
                                <span>{dateFmt}</span>
                            </div>
                            {(item as any).category && (
                                <span className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
                                    {(item as any).category[language]
                                    }
                                </span>
                            )}
                        </div>
                        <CardTitle className={`text-3xl ${language === 'hi' ? 'font-hindi' : ''}`}>
                            {item.title[language]}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {(item as any).image && (
                            <div className="mb-4">
                                <div className="relative group rounded-lg overflow-hidden bg-gray-100">
                                    <img
                                        src={(item as any).image}
                                        alt={((item as any).imageAlt?.[language]) || item.title[language]}
                                        className="w-full h-auto cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.02]"
                                        loading="lazy" decoding="async"
                                        onClick={() => setLightbox({ src: (item as any).image, alt: ((item as any).imageAlt?.[language]) || item.title[language] })}
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{language === 'en' ? 'Tap image to view larger' : 'बड़ी छवि देखने के लिए छवि पर टैप करें'}</p>
                            </div>
                        )}
                        <div className={`prose max-w-none ${language === 'hi' ? 'font-hindi' : ''}`}>
                            <p className="text-gray-800 text-lg leading-relaxed">{item.content[language]}</p>
                        </div>
                        {(item as any).highlights && Array.isArray((item as any).highlights) && (
                            <div className="mt-6">
                                <h3 className={`text-lg font-semibold mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'Key highlights' : 'मुख्य बिंदु'}
                                </h3>
                                <ul className="list-disc pl-6 space-y-1 text-gray-800">
                                    {(item as any).highlights.map((h: any, idx: number) => (
                                        <li key={idx} className={language === 'hi' ? 'font-hindi' : ''}>{h[language]}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </CardContent>
                </Card>
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

export default NewsDetailPage;
