import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import SEO from './SEO';

export const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <SEO
              title="Terms of Service | Orlena"
              description="Terms and conditions for using Orlena's AI upselling platform."
              canonical="https://orlena.talk/terms"
            />
            <Navbar />

            <main className="pt-32 pb-20 md:pt-40 md:pb-28 container mx-auto px-4 md:px-6 max-w-4xl">
                <article className="prose prose-lg max-w-none text-stone-800">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900 leading-tight">
                        Terms of Service
                    </h1>
                    <p className="text-sm text-stone-400 mb-12">
                        Last updated: March 1, 2026
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">1. Introduction</h2>
                        <p className="mb-4">
                            Welcome to Orlena. These Terms of Service ("Terms") govern your access to and use of the Orlena platform, including our website, applications, and related services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
                        </p>
                        <p className="mb-4">
                            Orlena is a QR-based revenue optimization platform designed for cafes and restaurants. Our technology helps hospitality businesses increase their average order value through intelligent digital menus and automated recommendations.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">2. Service Description</h2>
                        <p className="mb-4">
                            Orlena provides the following services to registered restaurant partners:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-700">
                            <li>QR-based digital menu access for in-cafe guests</li>
                            <li>Automated upsell and cross-sell recommendations powered by intelligent logic</li>
                            <li>Guest interaction capture, including guest name and phone number, to facilitate ordering</li>
                            <li>Order routing and kitchen order ticket (KOT) generation to restaurant staff</li>
                            <li>Revenue analytics and performance dashboards for restaurant operators</li>
                        </ul>
                        <p className="mb-4">
                            The Service is provided on a subscription basis. Specific features available to you depend on your selected plan tier.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">3. Customer Responsibilities</h2>
                        <p className="mb-4">
                            As a restaurant partner using the Orlena platform, you are solely responsible for:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-700">
                            <li><strong>Menu accuracy:</strong> Ensuring that all menu items, descriptions, allergen information, and dietary labels are accurate and up to date.</li>
                            <li><strong>Pricing accuracy:</strong> Ensuring that all prices displayed through the Orlena platform are correct and reflect your current pricing structure.</li>
                            <li><strong>Tax compliance:</strong> Compliance with all applicable tax laws, including GST, service charges, and any other levies required by local, state, or national regulations.</li>
                            <li><strong>Food preparation and service:</strong> All aspects of food preparation, handling, hygiene, safety, and in-venue service remain entirely your responsibility.</li>
                        </ul>
                        <p className="mb-4">
                            Orlena acts solely as a technology provider and does not participate in the preparation, handling, or delivery of food and beverages.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">4. Data Handling</h2>
                        <p className="mb-4">
                            In the course of providing the Service, Orlena collects and processes certain guest interaction data, including but not limited to guest names, phone numbers, and order data. This data is collected solely for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-700">
                            <li>Enabling order routing from the guest's device to restaurant staff</li>
                            <li>Improving menu recommendations and upsell suggestions</li>
                            <li>Providing revenue analytics and guest insights to the restaurant partner</li>
                        </ul>
                        <p className="mb-4">
                            For full details on how data is collected, used, and protected, please refer to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">5. Data Retention</h2>
                        <p className="mb-4">
                            Guest interaction data is retained for a maximum period of six (6) months from the date of collection. After this period, the data is automatically and permanently deleted from our systems.
                        </p>
                        <p className="mb-4">
                            Restaurant partners may request earlier deletion of guest data at any time by submitting a written request to our support team at <strong>support@orlena.talk</strong>. Upon receiving a valid request, Orlena will permanently delete the specified data within thirty (30) business days.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">6. Data Sharing</h2>
                        <p className="mb-4">
                            Orlena does <strong>not</strong> sell, rent, lease, or otherwise share guest data with any third parties for marketing, advertising, or any purpose unrelated to the provision of the Service. Guest data is accessible only to the restaurant partner to whom it belongs and to authorized Orlena personnel for the sole purpose of operating and improving the Service.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">7. Limitation of Liability</h2>
                        <p className="mb-4">
                            To the maximum extent permitted by applicable law, Orlena and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, goodwill, or other intangible losses, arising out of or in connection with your use of or inability to use the Service.
                        </p>
                        <p className="mb-4">
                            In no event shall Orlena's total aggregate liability to you exceed the amounts paid by you to Orlena during the twelve (12) months immediately preceding the event giving rise to the claim.
                        </p>
                        <p className="mb-4">
                            The Service is provided on an "as is" and "as available" basis. Orlena makes no warranties, express or implied, regarding the reliability, availability, accuracy, or fitness for a particular purpose of the Service.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">8. Termination</h2>
                        <p className="mb-4">
                            Either party may terminate the subscription in accordance with the terms of the applicable service agreement. Orlena reserves the right to suspend or terminate your access to the Service, with or without notice, under the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-700">
                            <li>Violation of these Terms or any applicable policies</li>
                            <li>Misuse of the platform, including but not limited to fraudulent activity or unauthorized data access</li>
                            <li>Non-payment of subscription fees beyond the applicable grace period</li>
                        </ul>
                        <p className="mb-4">
                            Upon termination, your right to access the Service will cease immediately. Orlena will retain your data in accordance with the Data Retention provisions outlined above, unless you request earlier deletion.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">9. Governing Law</h2>
                        <p className="mb-4">
                            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts located in Bangalore, Karnataka, India.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">10. Contact</h2>
                        <p className="mb-4">
                            If you have any questions about these Terms, please contact us:
                        </p>
                        <ul className="list-none pl-0 space-y-1 text-stone-700">
                            <li><strong>Orlena</strong></li>
                            <li>Vishnu Rajan, CEO</li>
                            <li>WeWork Bannerghatta, Bangalore 560079, India</li>
                            <li>Phone: +91 9880622570</li>
                        </ul>
                    </section>
                </article>
            </main>

            <Footer />
        </div>
    );
};
