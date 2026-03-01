import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <Navbar />

            <main className="pt-32 pb-20 md:pt-40 md:pb-28 container mx-auto px-4 md:px-6 max-w-4xl">
                <article className="prose prose-lg max-w-none text-stone-800">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900 leading-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-stone-400 mb-12">
                        Last updated: March 1, 2026
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">1. Introduction</h2>
                        <p className="mb-4">
                            Orlena ("we", "us", or "our") is committed to protecting the privacy and security of all data processed through our platform. This Privacy Policy explains how we collect, use, store, and protect information when you interact with the Orlena platform, whether as a restaurant partner or as a guest placing an order at a participating establishment.
                        </p>
                        <p className="mb-4">
                            By using our Service, you acknowledge that you have read and understood this Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">2. Information Collected</h2>
                        <p className="mb-4">
                            In the course of providing our services, Orlena collects the following categories of information:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-700">
                            <li><strong>Guest name:</strong> Provided by the guest at the time of placing an order to facilitate order identification and routing.</li>
                            <li><strong>Phone number:</strong> Collected to enable order confirmations, communication between the restaurant and guest, and service follow-up.</li>
                            <li><strong>Order data:</strong> Items selected, quantities, modifications, special instructions, and order totals.</li>
                            <li><strong>Device and browser metadata:</strong> Information such as device type, operating system, browser version, screen resolution, and IP address, collected automatically when interacting with the platform.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">3. Purpose of Collection</h2>
                        <p className="mb-4">
                            The information we collect is used exclusively for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-700">
                            <li><strong>Enable in-cafe ordering:</strong> To route orders from the guest's device to the restaurant's kitchen and service staff in real time.</li>
                            <li><strong>Improve menu recommendations:</strong> To power intelligent upsell and cross-sell suggestions that increase average order value for the restaurant.</li>
                            <li><strong>Provide restaurant insights:</strong> To generate analytics dashboards and reports that help restaurant operators understand guest behavior, optimize menu offerings, and track revenue performance.</li>
                        </ul>
                        <p className="mb-4">
                            We do not use collected data for any purpose unrelated to the provision and improvement of the Orlena platform.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">4. Data Retention</h2>
                        <p className="mb-4">
                            Guest interaction data, including names, phone numbers, and order history, is stored for a maximum period of <strong>six (6) months</strong> from the date of collection. After this period, the data is automatically and permanently deleted from our systems.
                        </p>
                        <p className="mb-4">
                            Restaurant partners may request earlier deletion of guest data at any time by submitting a written request to <strong>support@orlena.talk</strong>. Orlena will process valid deletion requests within thirty (30) business days.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">5. Data Protection</h2>
                        <p className="mb-4">
                            We take the security of your data seriously. The following measures are in place to protect all information processed through the Orlena platform:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-700">
                            <li>All data is stored on secure, access-controlled infrastructure with industry-standard safeguards.</li>
                            <li>Access to guest data is restricted to authorized personnel on a strict need-to-know basis.</li>
                            <li>Guest data is <strong>never sold, rented, leased, or shared</strong> with any third party for marketing, advertising, or any purpose unrelated to the Service.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">6. Restaurant Ownership of Data</h2>
                        <p className="mb-4">
                            All guest interaction data collected through the Orlena platform belongs to the restaurant partner at whose establishment the data was generated. Orlena acts solely as a <strong>data processor</strong> on behalf of the restaurant partner, who remains the data controller.
                        </p>
                        <p className="mb-4">
                            Restaurant partners retain full ownership and control over their guest data. Orlena processes this data only as necessary to provide the Service and in accordance with the restaurant partner's instructions.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">7. Security Measures</h2>
                        <p className="mb-4">
                            Orlena employs the following security measures to protect data in transit and at rest:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-700">
                            <li><strong>Encrypted transmission:</strong> All data transmitted between the guest's device, the Orlena platform, and the restaurant's systems is encrypted using HTTPS (TLS 1.2 or higher).</li>
                            <li><strong>Secure infrastructure:</strong> Our servers and databases are hosted on enterprise-grade cloud infrastructure with regular security audits, automated backups, and disaster recovery protocols.</li>
                            <li><strong>Access controls:</strong> Multi-layered authentication and role-based access controls ensure that only authorized individuals can access sensitive data.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">8. User Rights</h2>
                        <p className="mb-4">
                            Guests who have interacted with the Orlena platform at a participating restaurant have the right to request the deletion of their personal data. Since guest data is owned by the restaurant partner, deletion requests should be directed to the restaurant where the interaction took place.
                        </p>
                        <p className="mb-4">
                            Upon receiving a valid deletion request from the restaurant partner, Orlena will permanently remove the specified guest data from our systems within thirty (30) business days.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">9. Changes to This Policy</h2>
                        <p className="mb-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. Any material changes will be communicated to restaurant partners via email or through the platform. Continued use of the Service after such changes constitutes acceptance of the updated Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-stone-900">10. Contact</h2>
                        <p className="mb-4">
                            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
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
