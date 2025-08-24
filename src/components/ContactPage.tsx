import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react';
import { websiteData } from '../data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface ContactPageProps {
    language: 'en' | 'hi';
}

const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
    const location = useLocation();
    // Feedback form state
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        category: 'Suggestion',
        message: '',
        honey: '' // simple honeypot
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; message?: string }>({});

    const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    const categories = [
        { value: 'Suggestion', label: { en: 'Suggestion', hi: 'सुझाव' } },
        { value: 'Agenda', label: { en: 'Agenda', hi: 'एजेंडा' } },
        { value: 'Development Idea', label: { en: 'Development Idea', hi: 'विकास का विचार' } },
        { value: 'Other', label: { en: 'Other', hi: 'अन्य' } }
    ];

    const isValidIndianPhone = (input: string) => {
        const digits = input.replace(/\D/g, '');
        if (digits.length === 0) return true; // optional field
        return digits.length === 10; // only 10-digit numbers
    };

    const buildErrors = () => {
        const e: { name?: string; email?: string; phone?: string; message?: string } = {};
        const req = (en: string, hi: string) => (language === 'en' ? en : hi);
        if (!form.name.trim()) e.name = req('Name is required.', 'नाम आवश्यक है।');
        if (!form.email.trim()) {
            e.email = req('Email is required.', 'ईमेल आवश्यक है।');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            e.email = req('Enter a valid email address.', 'कृपया मान्य ईमेल दर्ज करें।');
        }
        if (form.phone.trim() && !isValidIndianPhone(form.phone)) {
            e.phone = req('Enter a valid 10-digit phone number.', 'मान्य 10 अंकों का फोन नंबर दर्ज करें।');
        }
        if (!form.message.trim()) e.message = req('Message is required.', 'संदेश आवश्यक है।');
        if (form.honey) {
            // If honeypot is filled, act like a generic error without revealing bot logic
            e.name = e.name || req('Something went wrong. Please try again.', 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।');
        }
        return e;
    };

    const handleSubmit = async (evt: React.FormEvent) => {
        evt.preventDefault();
        const fieldErrors = buildErrors();
        if (Object.keys(fieldErrors).length > 0) {
            setErrors(fieldErrors);
            // focus first invalid field
            const order: Array<'name' | 'email' | 'phone' | 'message'> = ['name', 'email', 'phone', 'message'];
            const firstKey = order.find((k) => fieldErrors[k] !== undefined);
            if (firstKey) {
                const el = document.getElementById(`contact-${firstKey}`) as HTMLInputElement | HTMLTextAreaElement | null;
                el?.focus();
                el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        setStatus('sending');
        const payload = {
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            category: form.category,
            message: form.message.trim(),
            source: 'VSS Website Contact Form'
        };

        try {
            if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
                // Send via EmailJS
                const templateParams = {
                    from_name: payload.name,
                    reply_to: payload.email,
                    phone: payload.phone || '-',
                    category: payload.category,
                    message: payload.message,
                } as Record<string, string>;
                const res = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
                    publicKey: EMAILJS_PUBLIC_KEY,
                });
                if (res.status !== 200) throw new Error('EmailJS failed');
                setStatus('success');
                setForm({ name: '', email: '', phone: '', category: 'Suggestion', message: '', honey: '' });
                setErrors({});
            } else if (formEndpoint) {
                const res = await fetch(formEndpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!res.ok) throw new Error('Failed');
                setStatus('success');
                setForm({ name: '', email: '', phone: '', category: 'Suggestion', message: '', honey: '' });
                setErrors({});
            } else {
                // Fallback to mailto
                const to = 'kshitizkant290@gmail.com';
                const subject = encodeURIComponent(`VSS Website Feedback: ${payload.category}`);
                const body = encodeURIComponent(
                    `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || '-'}\nCategory: ${payload.category}\n\nMessage:\n${payload.message}`
                );
                window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
                setStatus('success');
                setForm({ name: '', email: '', phone: '', category: 'Suggestion', message: '', honey: '' });
                setErrors({});
            }
        } catch (err) {
            setStatus('error');
        }
    };

    const contactInfo = {
        president: {
            name: {
                en: "Dr. Kamlesh Kumar Raghuvanshi",
                hi: "डॉ. कमलेश कुमार रघुवंशी"
            },
            position: {
                en: "DUTA President Candidate",
                hi: "DUTA अध्यक्ष पद के उम्मीदवार"
            },
            department: {
                en: "Computer Science, Ramanujan College",
                hi: "कंप्यूटर साइंस, रामानुजन कॉलेज"
            },
            phone: "+91-9810298704",
            email: "vsskamleshdu@gmail.com"
        },
        executiveMembers: [
            {
                name: {
                    en: "Ashok Kumar Meena",
                    hi: "अशोक कुमार मीणा"
                },
                department: {
                    en: "Political Science, Gargi College",
                    hi: "राजनीति विज्ञान, गार्गी कॉलेज"
                }
            },
            {
                name: {
                    en: "Shailendra Pathak",
                    hi: "शैलेन्द्र पाठक"
                },
                department: {
                    en: "Political Science, Ramanujan College",
                    hi: "राजनीति विज्ञान, रामानुजन कॉलेज"
                }
            },
            {
                name: {
                    en: "Dr. Love Kush Kumar",
                    hi: "डॉ लव कुश कुमार"
                },
                department: {
                    en: "Hindi, Kalindi College",
                    hi: "हिंदी, कालिंदी कॉलेज"
                }
            }
        ]
    };

    const officeHours = [
        {
            day: { en: "Monday - Friday", hi: "सोमवार - शुक्रवार" },
            time: { en: "9:00 AM - 6:00 PM", hi: "सुबह 9:00 - शाम 6:00" }
        },
        {
            day: { en: "Saturday", hi: "शनिवार" },
            time: { en: "10:00 AM - 4:00 PM", hi: "सुबह 10:00 - शाम 4:00" }
        },
        {
            day: { en: "Sunday", hi: "रविवार" },
            time: { en: "Closed", hi: "बंद" }
        }
    ];

    const quickContacts = [
        {
            icon: Phone,
            title: { en: "Call Us", hi: "हमें कॉल करें" },
            subtitle: { en: "Direct Communication", hi: "प्रत्यक्ष संचार" },
            content: { en: "+91-9810298704", hi: "+91-9810298704" },
            description: {
                en: "For urgent queries and immediate assistance",
                hi: "तत्काल प्रश्नों और तुरंत सहायता के लिए"
            }
        },
        {
            icon: Mail,
            title: { en: "Email Us", hi: "हमें ईमेल करें" },
            subtitle: { en: "Written Communication", hi: "लिखित संचार" },
            content: { en: "vsskamleshdu@gmail.com", hi: "vsskamleshdu@gmail.com" },
            description: {
                en: "For detailed inquiries and formal communications",
                hi: "विस्तृत पूछताछ और औपचारिक संचार के लिए"
            }
        },
        {
            icon: MapPin,
            title: { en: "Visit Us", hi: "हमसे मिलें" },
            subtitle: { en: "Office Location", hi: "कार्यालय स्थान" },
            content: { en: "University of Delhi", hi: "दिल्ली विश्वविद्यालय" },
            description: {
                en: "Faculty of Arts and various college campuses",
                hi: "कला संकाय और विभिन्न कॉलेज परिसर"
            }
        },
        {
            icon: Clock,
            title: { en: "Office Hours", hi: "कार्यालय समय" },
            subtitle: { en: "Availability", hi: "उपलब्धता" },
            content: { en: "Mon-Fri: 9AM-6PM", hi: "सोम-शुक्र: 9AM-6PM" },
            description: {
                en: "Regular consultation and meeting hours",
                hi: "नियमित परामर्श और बैठक के घंटे"
            }
        }
    ];

    const supportAreas = [
        {
            title: { en: "Faculty Welfare Queries", hi: "शिक्षक कल्याण संबंधी प्रश्न" },
            description: { en: "Promotions, salary, benefits, and working conditions", hi: "पदोन्नति, वेतन, लाभ और कार्य परिस्थितियां" }
        },
        {
            title: { en: "Policy & Governance Issues", hi: "नीति और शासन संबंधी मुद्दे" },
            description: { en: "University policies, academic decisions, and transparency", hi: "विश्वविद्यालय नीतियां, शैक्षणिक निर्णय और पारदर्शिता" }
        },
        {
            title: { en: "Grievance Support", hi: "शिकायत समर्थन" },
            description: { en: "Legal assistance, dispute resolution, and advocacy", hi: "कानूनी सहायता, विवाद समाधान और वकालत" }
        },
        {
            title: { en: "Membership Inquiries", hi: "सदस्यता संबंधी पूछताछ" },
            description: { en: "Joining VSS, benefits, and participation opportunities", hi: "VSS में शामिल होना, लाभ और भागीदारी के अवसर" }
        }
    ];

    // Scroll into view if navigated with intention to show feedback form
    useEffect(() => {
        const shouldScroll = location.hash === '#feedback' || sessionStorage.getItem('scrollToFeedback') === '1';
        if (shouldScroll) {
            // small delay to ensure layout is painted
            setTimeout(() => {
                const el = document.getElementById('feedback-form');
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                sessionStorage.removeItem('scrollToFeedback');
            }, 50);
        }
    }, [location]);

    return (
        <div className="min-h-screen py-16">
            <div className="w-full px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {websiteData.navigation.contact[language]}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en'
                            ? 'Connect with VSS leadership and join our mission for democratic, transparent, and faculty-first university governance. Your voice matters in shaping the future of academic excellence.'
                            : 'VSS नेतृत्व से जुड़ें और लोकतांत्रिक, पारदर्शी और शिक्षक-प्रथम विश्वविद्यालय शासन के लिए हमारे मिशन में शामिल हों। शैक्षणिक उत्कृष्टता के भविष्य को आकार देने में आपकी आवाज मायने रखती है।'
                        }
                    </p>
                    <div className={`mt-8 p-6 bg-orange-50 rounded-lg border-l-4 border-l-orange-600 max-w-4xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                        <p className="text-lg text-gray-800 font-medium">
                            {language === 'en'
                                ? 'VSS - A serious reformist movement committed to concrete action, not just symbolic politics.'
                                : 'VSS - एक गंभीर सुधारवादी आंदोलन जो केवल प्रतीकात्मक राजनीति नहीं, बल्कि ठोस कार्रवाई के लिए प्रतिबद्ध है।'
                            }
                        </p>
                    </div>
                </div>

                {/* Quick Contact Cards */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold text-center text-gray-900 mb-12 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'Get in Touch' : 'संपर्क में रहें'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickContacts.map((contact, index) => {
                            const IconComponent = contact.icon;

                            // Determine the link URL based on contact type
                            let linkUrl = '';
                            if (contact.icon === Phone) {
                                // Check if mobile device for direct call, otherwise WhatsApp
                                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                                if (isMobile) {
                                    linkUrl = `tel:${contactInfo.president.phone}`;
                                } else {
                                    linkUrl = `https://wa.me/${contactInfo.president.phone.replace(/[^0-9]/g, '')}`;
                                }
                            } else if (contact.icon === Mail) {
                                linkUrl = `mailto:${contactInfo.president.email}`;
                            }

                            const CardComponent = linkUrl ? 'a' : 'div';
                            const cardProps = linkUrl ? {
                                href: linkUrl,
                                target: contact.icon === Phone && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? '_blank' : undefined,
                                rel: contact.icon === Phone && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'noopener noreferrer' : undefined
                            } : {};

                            return (
                                <CardComponent
                                    key={index}
                                    {...cardProps}
                                    className={`block ${linkUrl ? 'cursor-pointer' : ''}`}
                                >
                                    <Card className={`text-center transition-all duration-300 border-t-4 border-t-orange-600 h-full ${linkUrl ? 'hover:shadow-xl hover:scale-105 hover:border-t-orange-700' : 'hover:shadow-lg'}`}>
                                        <CardHeader>
                                            <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                                <IconComponent className="w-8 h-8 text-orange-600" />
                                            </div>
                                            <CardTitle className={`text-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {contact.title[language]}
                                            </CardTitle>
                                            <CardDescription className={`${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {contact.subtitle[language]}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className={`font-semibold text-gray-900 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {contact.content[language]}
                                            </p>
                                            <p className={`text-sm text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {contact.description[language]}
                                            </p>
                                            {linkUrl && (
                                                <div className={`mt-3 text-xs text-orange-600 font-medium ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                    {contact.icon === Phone
                                                        ? (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                                                            ? (language === 'en' ? 'Click to open WhatsApp' : 'व्हाट्सऐप खोलने के लिए क्लिक करें')
                                                            : (language === 'en' ? 'Click to call' : 'कॉल करने के लिए क्लिक करें'))
                                                        : (language === 'en' ? 'Click to send email' : 'ईमेल भेजने के लिए क्लिक करें')
                                                    }
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </CardComponent>
                            );
                        })}
                    </div>
                </section>

                {/* Feedback / Suggestions Form */}
                <section id="feedback-form" className="mb-16">
                    <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 md:p-8 text-white">
                            <h2 className={`text-2xl md:text-3xl font-bold ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? 'Share Your Feedback & Ideas' : 'अपना सुझाव साझा करें'}
                            </h2>
                            <p className={`mt-2 text-white/90 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Send us your agenda, suggestions, or development ideas. We value every voice.'
                                    : 'अपना एजेंडा, सुझाव या विकास के विचार साझा करें। आपकी हर राय महत्वपूर्ण है।'}
                            </p>
                        </div>
                        <form noValidate onSubmit={handleSubmit} className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Honeypot */}
                            <input
                                type="text"
                                value={form.honey}
                                onChange={(e) => setForm({ ...form, honey: e.target.value })}
                                className="hidden"
                                aria-hidden
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            <div>
                                <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'Your Name' : 'आपका नाम'}
                                </label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'error-name' : undefined}
                                    className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-orange-500 focus:border-orange-500'}`}
                                    placeholder={language === 'en' ? 'Enter your full name' : 'अपना पूरा नाम लिखें'}
                                    value={form.name}
                                    onChange={(e) => {
                                        setForm({ ...form, name: e.target.value });
                                        if (errors.name) setErrors({ ...errors, name: undefined });
                                    }}
                                    required
                                />
                                {errors.name && (
                                    <p id="error-name" className={`mt-1 text-sm text-red-600 ${language === 'hi' ? 'font-hindi' : ''}`}>{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'Your Email' : 'आपका ईमेल'}
                                </label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'error-email' : undefined}
                                    className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-orange-500 focus:border-orange-500'}`}
                                    placeholder={language === 'en' ? 'name@example.com' : 'name@example.com'}
                                    value={form.email}
                                    onChange={(e) => {
                                        setForm({ ...form, email: e.target.value });
                                        if (errors.email) setErrors({ ...errors, email: undefined });
                                    }}
                                    required
                                />
                                {errors.email && (
                                    <p id="error-email" className={`mt-1 text-sm text-red-600 ${language === 'hi' ? 'font-hindi' : ''}`}>{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'Phone (optional)' : 'फ़ोन (वैकल्पिक)'}
                                </label>
                                <input
                                    type="tel"
                                    id="contact-phone"
                                    inputMode="tel"
                                    aria-invalid={!!errors.phone}
                                    aria-describedby={errors.phone ? 'error-phone' : undefined}
                                    className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-orange-500 focus:border-orange-500'}`}
                                    placeholder={language === 'en' ? '+91-XXXXXXXXXX' : '+91-XXXXXXXXXX'}
                                    value={form.phone}
                                    onChange={(e) => {
                                        setForm({ ...form, phone: e.target.value });
                                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                                    }}
                                />
                                {errors.phone && (
                                    <p id="error-phone" className={`mt-1 text-sm text-red-600 ${language === 'hi' ? 'font-hindi' : ''}`}>{errors.phone}</p>
                                )}
                            </div>

                            <div>
                                <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'Topic' : 'विषय'}
                                </label>
                                <select
                                    className="w-full rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 px-4 py-3"
                                    value={form.category}
                                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                                >
                                    {categories.map((c) => (
                                        <option key={c.value} value={c.value}>
                                            {c.label[language]}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'Your Message' : 'आपका संदेश'}
                                </label>
                                <textarea
                                    id="contact-message"
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'error-message' : undefined}
                                    className={`w-full min-h-[140px] rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-orange-500 focus:border-orange-500'}`}
                                    placeholder={language === 'en' ? 'Write your suggestion, agenda, or idea here...' : 'अपना सुझाव, एजेंडा या विचार यहाँ लिखें...'}
                                    value={form.message}
                                    onChange={(e) => {
                                        setForm({ ...form, message: e.target.value });
                                        if (errors.message) setErrors({ ...errors, message: undefined });
                                    }}
                                    required
                                />
                                <p className={`mt-2 text-sm text-gray-500 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en'
                                        ? 'We will send your message to our official email. No spam, no sharing.'
                                        : 'हम आपका संदेश हमारे आधिकारिक ईमेल पर भेजेंगे। कोई स्पैम नहीं, कोई साझा नहीं।'}
                                </p>
                                {errors.message && (
                                    <p id="error-message" className={`mt-1 text-sm text-red-600 ${language === 'hi' ? 'font-hindi' : ''}`}>{errors.message}</p>
                                )}
                            </div>

                            <div className="md:col-span-2 flex items-center justify-between">
                                <div>
                                    {status === 'error' && (
                                        <p className={`text-sm text-red-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Submission failed. Please try again.' : 'सबमिशन विफल रहा। कृपया पुनः प्रयास करें।'}
                                        </p>
                                    )}
                                    {status === 'success' && (
                                        <p className={`text-sm text-green-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Thank you! We received your suggestion.' : 'धन्यवाद! हमें आपका सुझाव मिल गया।'}
                                        </p>
                                    )}
                                </div>
                                <Button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3"
                                >
                                    <span className={language === 'hi' ? 'font-hindi' : ''}>
                                        {status === 'sending'
                                            ? (language === 'en' ? 'Sending…' : 'भेजा जा रहा है…')
                                            : (language === 'en' ? 'Submit Feedback' : 'सुझाव भेजें')}
                                    </span>
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Leadership Contact Details */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold text-center text-gray-900 mb-12 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'Leadership Team Contact' : 'नेतृत्व टीम संपर्क'}
                    </h2>

                    {/* President Contact Card */}
                    <div className="mb-8">
                        <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
                            <CardHeader className="bg-orange-50 mb-4">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                    <div className="text-center lg:text-left">
                                        <CardTitle className={`text-2xl text-orange-700 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {contactInfo.president.name[language]}
                                        </CardTitle>
                                        <CardDescription className={`text-lg font-semibold text-gray-800 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {contactInfo.president.position[language]}
                                        </CardDescription>
                                    </div>
                                    <div className="mt-4 lg:mt-0 text-center lg:text-right">
                                        <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                                            <Button
                                                variant="outline"
                                                className="border-orange-600 text-orange-600 hover:bg-orange-50"
                                                onClick={() => window.open(`tel:${contactInfo.president.phone}`)}
                                            >
                                                <Phone className="w-4 h-4 mr-2" />
                                                <span className={language === 'hi' ? 'font-hindi' : ''}>
                                                    {language === 'en' ? 'Call' : 'कॉल करें'}
                                                </span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="border-orange-600 text-orange-600 hover:bg-orange-50"
                                                onClick={() => window.open(`mailto:${contactInfo.president.email}`)}
                                            >
                                                <Mail className="w-4 h-4 mr-2" />
                                                <span className={language === 'hi' ? 'font-hindi' : ''}>
                                                    {language === 'en' ? 'Email' : 'ईमेल'}
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                    <div>
                                        <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            <strong>{language === 'en' ? 'Department:' : 'विभाग:'}</strong><br />
                                            {contactInfo.president.department[language]}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            <strong>{language === 'en' ? 'Phone:' : 'फोन:'}</strong><br />
                                            {contactInfo.president.phone}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            <strong>{language === 'en' ? 'Email:' : 'ईमेल:'}</strong><br />
                                            {contactInfo.president.email}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Executive Members */}
                    <Card className="border-2 border-orange-200">
                        <CardHeader className="bg-orange-50 mb-4">
                            <CardTitle className={`text-center text-xl text-orange-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? 'VSS Executive Committee Members' : 'VSS कार्यकारिणी के सदस्य'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {contactInfo.executiveMembers.map((member, index) => (
                                    <div key={index} className="p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                                        <div className="text-center">
                                            <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                                                <span className="text-xl font-bold text-orange-600">
                                                    {member.name.en.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <h4 className={`font-semibold text-gray-800 text-lg mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {member.name[language]}
                                            </h4>
                                            <p className={`text-gray-600 text-sm ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {member.department[language]}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Office Hours */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="border-l-4 border-l-orange-600">
                            <CardHeader>
                                <CardTitle className={`flex items-center text-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    <Clock className="w-6 h-6 mr-3" />
                                    {language === 'en' ? 'Office Hours' : 'कार्यालय समय'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {officeHours.map((schedule, index) => (
                                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                            <span className={`font-medium text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {schedule.day[language]}
                                            </span>
                                            <span className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                                {schedule.time[language]}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className={`mt-4 p-3 bg-orange-50 rounded-lg ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    <p className="text-sm text-gray-700">
                                        {language === 'en'
                                            ? 'For emergency queries, please call directly. Response time may vary during non-office hours.'
                                            : 'आपातकालीन प्रश्नों के लिए, कृपया सीधे कॉल करें। गैर-कार्यालयी घंटों के दौरान प्रतिक्रिया समय भिन्न हो सकता है।'
                                        }
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-orange-600">
                            <CardHeader>
                                <CardTitle className={`flex items-center text-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    <Building2 className="w-6 h-6 mr-3" />
                                    {language === 'en' ? 'Office Location' : 'कार्यालय स्थान'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className={`font-semibold text-gray-800 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Primary Office' : 'प्राथमिक कार्यालय'}
                                        </h4>
                                        <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en'
                                                ? 'Faculty of Arts, University of Delhi'
                                                : 'कला संकाय, दिल्ली विश्वविद्यालय'
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className={`font-semibold text-gray-800 mb-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en' ? 'Meeting Venue' : 'बैठक स्थल'}
                                        </h4>
                                        <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                            {language === 'en'
                                                ? 'Satyakam Bhawan, University of Delhi'
                                                : 'सत्यकाम भवन, दिल्ली विश्वविद्यालय'
                                            }
                                        </p>
                                    </div>
                                    <div className={`p-3 bg-blue-50 rounded-lg ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        <p className="text-sm text-gray-700">
                                            {language === 'en'
                                                ? 'Appointments recommended for detailed discussions. Walk-ins welcome during office hours.'
                                                : 'विस्तृत चर्चा के लिए अपॉइंटमेंट की सिफारिश की जाती है। कार्यालयी घंटों के दौरान वॉक-इन का स्वागत है।'
                                            }
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Support Areas */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold text-center text-gray-900 mb-12 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'How We Can Help You' : 'हम आपकी कैसे सहायता कर सकते हैं'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {supportAreas.map((area, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className={`text-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {area.title[language]}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {area.description[language]}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12 px-8 rounded-lg">
                    <h3 className={`text-3xl font-bold mb-4 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'Ready to Make a Change?' : 'बदलाव के लिए तैयार हैं?'}
                    </h3>
                    <p className={`text-xl mb-8 opacity-90 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en'
                            ? 'Join VSS in our mission to create a democratic, transparent, and faculty-first approach to university governance. Your voice and participation can make the difference.'
                            : 'विश्वविद्यालय शासन के लिए लोकतांत्रिक, पारदर्शी और शिक्षक-प्रथम दृष्टिकोण बनाने के हमारे मिशन में VSS के साथ जुड़ें। आपकी आवाज और भागीदारी अंतर ला सकती है।'
                        }
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white text-orange-600 border-white hover:bg-orange-50"
                            onClick={() => window.open(`tel:${contactInfo.president.phone}`)}
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                {language === 'en' ? 'Call Now' : 'अभी कॉल करें'}
                            </span>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white text-orange-600 border-white hover:bg-orange-50"
                            onClick={() => window.open(`mailto:${contactInfo.president.email}`)}
                        >
                            <Mail className="mr-2 w-5 h-5" />
                            <span className={language === 'hi' ? 'font-hindi' : ''}>
                                {language === 'en' ? 'Send Email' : 'ईमेल भेजें'}
                            </span>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;
