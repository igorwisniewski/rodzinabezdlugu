'use client';

import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    BuildingLibraryIcon,
} from '@heroicons/react/24/solid';
import Footer from "@/comps/footer";
import NavDefault from "@/comps/nav";
import Head from "next/head";
import { useState } from "react";
import Script from 'next/script';

// Definiowanie globalnego interfejsu dla gtag
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

const KontaktSection = () => {
    // Stany do zarządzania wysyłką i statusem formularza
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);

    // Nowa funkcja do obsługi wysyłki formularza
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki

        if (isSubmitting) return; // Zabezpieczenie przed podwójnym kliknięciem

        setIsSubmitting(true);
        setSubmissionStatus(null); // Resetujemy status przy nowej wysyłce

        // Wysyłamy zdarzenie do Google Analytics
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'ads_conversion_Contact_1', {});
        }

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            // Używamy fetch do wysłania danych formularza do Formspree
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Jeśli odpowiedź jest OK, pokazujemy komunikat o sukcesie
                setSubmissionStatus({ success: true, message: 'Wiadomość została wysłana pomyślnie!' });
                form.reset(); // Czyścimy pola formularza
            } else {
                // Jeśli wystąpił błąd po stronie serwera
                throw new Error('Wystąpił błąd podczas wysyłania formularza.');
            }
        } catch (error) {
            // Jeśli wystąpił błąd sieciowy lub inny
            setSubmissionStatus({ success: false, message: 'Nie udało się wysłać wiadomości. Spróbuj ponownie.' });
            console.error("Błąd wysyłania:", error);
        } finally {
            // Niezależnie od wyniku, kończymy stan wysyłania
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Head>
                <title>Kontakt | LWRO</title>
            </Head>

            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=AW-16570063009"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-16570063009');
                `}
            </Script>

            <main>
                <NavDefault />
                <section className="bg-gray-50 py-20 min-h-[100vh] mt-10">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold">Skontaktuj się z nami</h2>
                            <p className="text-gray-600 mt-2">Masz pytania dotyczące kursów? Napisz do nas!</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 ">
                            <div className="bg-white p-6 rounded-xl shadow space-y-4 content-center">
                                <div className="flex items-start gap-4">
                                    <MapPinIcon className="h-6 w-6 text-lwro-500" />
                                    <p>Aleksandra Ostrowskiego 9/201, 53-238 Wrocław</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <PhoneIcon className="h-6 w-6 text-lwro-500" />
                                    <p>+48 787 222 001</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <EnvelopeIcon className="h-6 w-6 text-lwro-500" />
                                    <p>kontakt@lwro.pl</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <BuildingLibraryIcon className="h-6 w-6 text-lwro-500" />
                                    <p>Numer Rachunku Bankowego: PL 55 1090 2415 0000 0001 5612 5537</p>
                                </div>
                            </div>

                            <form
                                className="bg-white p-6 rounded-xl shadow space-y-4"
                                action="https://formspree.io/f/mblzlyzg" // Nowy URL
                                method="POST"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Imię"
                                        className="w-full border rounded-md px-4 py-2"
                                        required // Walidacja: pole wymagane
                                    />
                                    <input
                                        type="text"
                                        name="surname"
                                        placeholder="Nazwisko"
                                        className="w-full border rounded-md px-4 py-2"
                                    />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full border rounded-md px-4 py-2"
                                    required // Walidacja: pole wymagane
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Telefon"
                                    className="w-full border rounded-md px-4 py-2"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Wiadomość"
                                    rows={4}
                                    className="w-full border rounded-md px-4 py-2"
                                    required // Walidacja: pole wymagane
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-lwro-500 hover:bg-white hover:text-lwro-500 font-semibold py-2 px-4 rounded-md transition disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                                </button>

                                {/* Miejsce na wyświetlanie komunikatów o statusie */}
                                {submissionStatus && (
                                    <p className={`text-center mt-2 ${submissionStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                                        {submissionStatus.message}
                                    </p>
                                )}
                            </form>
                        </div>
                        <div className="mt-16">
                            <div className="h-96 w-full bg-gray-300 rounded-xl flex items-center justify-center text-gray-600">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.748281137024!2d16.9793156769064!3d51.09658593922378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc30a442e3991%3A0xe5a31a6104250266!2sAleksandra%20Ostrowskiego%209%2C%2053-238%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1727267156942!5m2!1spl!2spl"
                                    className="h-96 w-full rounded-xl"
                                    style={{ border: "0" }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
};

export default KontaktSection;