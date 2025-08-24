import React from 'react';
import { Target, Users, Award } from 'lucide-react';
import { websiteData } from '../data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface AboutPageProps {
    language: 'en' | 'hi';
}

const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
    return (
        <div className="min-h-screen py-16">
            <div className="w-full px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {websiteData.navigation.about[language]}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en'
                            ? 'A reformist and democratic alternative committed to faculty welfare and educational excellence.'
                            : 'शिक्षक कल्याण और शैक्षिक उत्कृष्टता के लिए प्रतिबद्ध एक सुधारवादी और लोकतांत्रिक विकल्प।'
                        }
                    </p>
                </div>

                {/* About Us - Detailed Context */}
                <section className="mb-16">
                    <Card className="border-l-4 border-l-orange-600">
                        <CardHeader>
                            <CardTitle className={`text-2xl text-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? 'About VSS' : 'VSS के बारे में'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className={`text-gray-700 text-lg leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'The academic landscape of Delhi University is currently going through a decisive phase. Amidst policy changes, institutional restructuring, and the evolving nature of the teaching profession, the real problems and rights of teachers are being consistently neglected.'
                                    : 'दिल्ली विश्वविद्यालय का शैक्षिक परिदृश्य इस समय एक निर्णायक दौर से गुजर रहा है। नीतियों में बदलाव, संस्थागत पुनर्गठन और शिक्षण पेशे की बदलती प्रकृति के बीच, शिक्षकों की वास्तविक समस्याएँ और अधिकार लगातार उपेक्षित हो रहे हैं।'
                                }
                            </p>
                            <p className={`text-gray-700 text-lg leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Current academic organizations have worked within their designated spheres, but these organizations have failed to rise above their ideological rigidity, factionalism, and symbolic representation.'
                                    : 'वर्तमान शैक्षिक संगठनों ने अपने-अपने निर्धारित क्षेत्र में कार्य किया है, लेकिन ये सभी संगठन अपनी वैचारिक जड़ता, गुटबाजी और प्रतीकात्मक प्रतिनिधित्व से ऊपर नहीं उठ सके हैं।'
                                }
                            </p>
                            <p className={`text-gray-700 text-lg leading-relaxed font-semibold ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'It is in this context that VSS – Vishwavidyalaya Shikshak Samiti has been formed. It embodies both reaction and resolution. It is an organization born from the reaction to the failures of current organizations, and resolved to create a platform completely dedicated to equality, reform, and teacher interests.'
                                    : 'इसी संदर्भ में VSS – विश्वविद्यालय शिक्षक समिति का गठन हुआ है। इसमें अनुक्रियाशील भी है और संकल्प भी। यह वर्तमान संगठनों की विफलताओं की अनुक्रिया से उपजा संगठन है, और संकल्प एक ऐसे मंच के निर्माण का जो समानता, सुधार और शिक्षक-हितों के प्रति पूरी तरह समर्पित हो।'
                                }
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Mission */}
                <section className="mb-16">
                    <Card className="border-l-4 border-l-orange-600">
                        <CardHeader>
                            <CardTitle className={`flex items-center text-orange-600 text-2xl ${language === 'hi' ? 'font-hindi' : ''}`}>
                                <Target className="w-8 h-8 mr-3" />
                                {language === 'en' ? 'Our Mission' : 'हमारा मिशन'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className={`text-gray-700 text-lg leading-relaxed mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {websiteData.about.mission[language]}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className={`font-semibold text-gray-900 mb-3 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Core Focus Areas:' : 'मुख्य फोकस क्षेत्र:'}
                                    </h4>
                                    <ul className={`space-y-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {language === 'en'
                                                ? 'Advocate for fair and transparent academic policies'
                                                : 'निष्पक्ष और पारदर्शी शैक्षणिक नीतियों की वकालत करना'
                                            }
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {language === 'en'
                                                ? 'Promote research and innovation in higher education'
                                                : 'उच्च शिक्षा में अनुसंधान और नवाचार को बढ़ावा देना'
                                            }
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {language === 'en'
                                                ? 'Ensure faculty welfare and professional development'
                                                : 'शिक्षक कल्याण और व्यावसायिक विकास सुनिश्चित करना'
                                            }
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className={`font-semibold text-gray-900 mb-3 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Our Commitment:' : 'हमारी प्रतिबद्धता:'}
                                    </h4>
                                    <ul className={`space-y-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {language === 'en'
                                                ? 'Data-driven policy interventions'
                                                : 'आँकड़ों पर आधारित नीतिगत हस्तक्षेप'
                                            }
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {language === 'en'
                                                ? 'Legal action when necessary'
                                                : 'आवश्यक होने पर कानूनी कार्रवाई'
                                            }
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {language === 'en'
                                                ? 'Institutional dialogue for sustainable reforms'
                                                : 'स्थायी सुधारों के लिए संस्थागत संवाद'
                                            }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Vision */}
                <section className="mb-16">
                    <Card className="border-l-4 border-l-orange-600">
                        <CardHeader>
                            <CardTitle className={`flex items-center text-orange-600 text-2xl ${language === 'hi' ? 'font-hindi' : ''}`}>
                                <Users className="w-8 h-8 mr-3" />
                                {language === 'en' ? 'Our Vision' : 'हमारी दृष्टि'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className={`text-gray-700 text-lg leading-relaxed mb-6 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {websiteData.about.vision[language]}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className={`font-semibold text-gray-900 mb-3 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Democratic Principles:' : 'लोकतांत्रिक सिद्धांत:'}
                                    </h4>
                                    <ul className={`space-y-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {language === 'en'
                                                ? 'Transparency at every organizational level'
                                                : 'संगठन के हर स्तर पर पारदर्शिता'
                                            }
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {language === 'en'
                                                ? 'Participatory decision-making processes'
                                                : 'भागीदारी पूर्ण निर्णय प्रक्रिया'
                                            }
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {language === 'en'
                                                ? 'Accountability to all members'
                                                : 'सभी सदस्यों के प्रति जवाबदेही'
                                            }
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className={`font-semibold text-gray-900 mb-3 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Inclusive Approach:' : 'समावेशी दृष्टिकोण:'}
                                    </h4>
                                    <ul className={`space-y-2 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {language === 'en'
                                                ? 'Equal participation for all social groups'
                                                : 'सभी सामाजिक वर्गों के लिए समान भागीदारी'
                                            }
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {language === 'en'
                                                ? 'Support for temporary and guest faculty'
                                                : 'अस्थायी और गेस्ट फैकल्टी के लिए समर्थन'
                                            }
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {language === 'en'
                                                ? 'Accessible platform for every teacher'
                                                : 'हर शिक्षक के लिए सुलभ मंच'
                                            }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* VSS Objectives */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold text-center text-gray-900 mb-12 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'VSS Objectives' : 'VSS के उद्देश्य'}
                    </h2>
                    <p className={`text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en'
                            ? 'VSS is not just a new organization, but has emerged as a reformist and strong alternative that challenges the shortcomings of current organizations and works to provide new direction.'
                            : 'VSS केवल एक नया संगठन नहीं है, बल्कि यह एक सुधारवादी और एक मजबूत विकल्प के रूप में सामने आया है, जो वर्तमान संगठनों की कमियों को चुनौती देता है और नई दिशा देने का कार्य करता है।'
                        }
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-orange-600">
                            <CardHeader>
                                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                    <Award className="w-8 h-8 text-orange-600" />
                                </div>
                                <CardTitle className={`text-center ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'Nation First, Teachers First' : 'राष्ट्र सर्वोपरि, शिक्षक प्रथम'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`text-gray-700 text-center ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en'
                                        ? 'VSS considers the dignity of education and respect for teachers as the axis of national development. A strong, self-reliant, and ethical teacher community can lay the foundation for a strong India.'
                                        : 'VSS शिक्षा की गरिमा और शिक्षक के सम्मान को राष्ट्रीय विकास की धुरी मानता है। एक सशक्त, आत्मनिर्भर और नैतिक शिक्षक वर्ग ही सशक्त भारत की नींव रख सकता है।'
                                    }
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-orange-600">
                            <CardHeader>
                                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                    <Target className="w-8 h-8 text-orange-600" />
                                </div>
                                <CardTitle className={`text-center ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'Beyond Ideologies, Focused on Problems' : 'विचारधाराओं से आगे, समस्याओं पर केंद्रित'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`text-gray-700 text-center ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en'
                                        ? 'While other organizations are entangled in ideological polarization, VSS focuses on the real and concrete problems of teachers - appointments, promotions, salaries, reservation policies, service conditions, and academic freedom.'
                                        : 'जहाँ दूसरे संगठन वैचारिक ध्रुवीकरण में उलझे हैं, VSS का ध्यान शिक्षकों की वास्तविक और ठोस समस्याओं पर है — नियुक्ति, प्रोन्नति, वेतन, आरक्षण नीति, सेवा शर्तें और शैक्षणिक स्वतंत्रता।'
                                    }
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-orange-600">
                            <CardHeader>
                                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                    <Users className="w-8 h-8 text-orange-600" />
                                </div>
                                <CardTitle className={`text-center ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'Democracy Within Organization' : 'संगठन के भीतर भी लोकतंत्र'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`text-gray-700 text-center ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en'
                                        ? 'Many organizations talk about democracy but are extremely centralized and opaque internally. VSS is a platform where transparency, participation, and accountability will be ensured at the deepest levels.'
                                        : 'बहुत से संगठन लोकतंत्र की बात करते हैं, लेकिन अंदर से अत्यंत केंद्रीकृत और अपारदर्शी होते हैं। VSS एक ऐसा मंच है जहाँ अंतरतम स्तर तक पारदर्शिता, भागीदारी और जवाबदेही सुनिश्चित की जाएगी।'
                                    }
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Why VSS is Needed */}
                <section className="mb-16">
                    <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200">
                        <CardHeader>
                            <CardTitle className={`text-center text-2xl text-orange-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en' ? 'Why VSS is Needed?' : 'VSS की आवश्यकता क्यों है?'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className={`text-gray-700 text-lg leading-relaxed ${language === 'hi' ? 'font-hindi' : ''}`}>
                                {language === 'en'
                                    ? 'Because today\'s teacher community is disappointed with the political opportunism and ideological extremism of existing organizations. Because there is now a need for a platform that weaves together nationalism, democracy, and teacher empowerment in one thread to provide new direction.'
                                    : 'क्योंकि आज का शिक्षक वर्ग मौजूदा संगठनों की राजनीतिक अवसरवादिता और वैचारिक कट्टरता से निराश है। क्योंकि अब आवश्यकता है एक ऐसे मंच की, जो राष्ट्रभक्ति, लोकतंत्र और शिक्षक सशक्तिकरण को एक सूत्र में पिरोकर नई दिशा प्रदान करे।'
                                }
                            </p>
                            <div className={`bg-white p-6 rounded-lg border-l-4 border-l-orange-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                                    {language === 'en'
                                        ? 'VSS – National Democratic Teachers\' Front is neither created just for opposition, nor just for elections. It is a serious reformist movement — for teachers, for education, and for the nation.'
                                        : 'VSS– राष्ट्रीय डेमोक्रेटिक टीचर्स फ्रंट न तो केवल विरोध के लिए बना है, न ही केवल चुनाव के लिए। यह एक गंभीर सुधारवादी आंदोलन है — शिक्षकों के लिए, शिक्षा के लिए और राष्ट्र के लिए।'
                                    }
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Team Details */}
                <section>
                    <h2 className={`text-3xl font-bold text-center text-gray-900 mb-12 ${language === 'hi' ? 'font-hindi' : ''}`}>
                        {language === 'en' ? 'Team Details' : 'टीम विवरण'}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* President Card */}
                        <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
                            <CardHeader className="bg-orange-50">
                                <div className="text-center">
                                    <div className="mx-auto w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                                        <span className="text-2xl font-bold text-white">DK</span>
                                    </div>
                                    <CardTitle className={`text-2xl text-orange-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Dr. Kamlesh Kumar Raghuvanshi' : 'डॉ. कमलेश कुमार रघुवंशी'}
                                    </CardTitle>
                                    <CardDescription className={`text-lg font-semibold text-gray-800 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'DUTA President Candidate' : 'DUTA अध्यक्ष पद के उम्मीदवार'}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    <strong>{language === 'en' ? 'Department:' : 'विभाग:'}</strong> {language === 'en' ? 'Computer Science, Ramanujan College' : 'कंप्यूटर साइंस, रामानुजन कॉलेज'}
                                </p>
                                <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    <strong>{language === 'en' ? 'Position:' : 'पद:'}</strong> {language === 'en' ? 'Assistant Professor' : 'सहायक प्रोफेसर'}
                                </p>
                                <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    <strong>{language === 'en' ? 'Contact:' : 'संपर्क:'}</strong> +91-9810298704
                                </p>
                                <p className={`text-gray-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    <strong>{language === 'en' ? 'Email:' : 'ईमेल:'}</strong> vsskamleshdu@gmail.com
                                </p>
                            </CardContent>
                        </Card>

                        {/* Executive Members Card */}
                        <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
                            <CardHeader className="bg-orange-50">
                                <CardTitle className={`text-center text-xl text-orange-700 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                    {language === 'en' ? 'DUTA Executive Member Candidates' : 'DUTA कार्यकारिणी सदस्य उम्मीदवार'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 bg-white rounded-lg shadow-sm border">
                                    <h4 className={`font-semibold text-gray-800 text-lg ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Ashok Kumar Meena' : 'अशोक कुमार मीणा'}
                                    </h4>
                                    <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Political Science, Gargi College' : 'राजनीति विज्ञान, गार्गी कॉलेज'}
                                    </p>
                                </div>
                                <div className="p-4 bg-white rounded-lg shadow-sm border">
                                    <h4 className={`font-semibold text-gray-800 text-lg ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Shailendra Pathak' : 'शैलेन्द्र पाठक'}
                                    </h4>
                                    <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Political Science, Ramanujan College' : 'राजनीति विज्ञान, रामानुजन कॉलेज'}
                                    </p>
                                </div>
                                <div className="p-4 bg-white rounded-lg shadow-sm border">
                                    <h4 className={`font-semibold text-gray-800 text-lg ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Dr. Love Kush Kumar' : 'डॉ लव कुश कुमार'}
                                    </h4>
                                    <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : ''}`}>
                                        {language === 'en' ? 'Hindi, Kalindi College' : 'हिंदी, कालिंदी कॉलेज'}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
