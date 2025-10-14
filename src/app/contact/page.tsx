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
                <title>Kontakt | Rodzina bez długu </title>
            </Head>



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
                                    <PhoneIcon className="h-6 w-6 text-pinl-500" />
                                    <p>+48 796 464 273</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <EnvelopeIcon className="h-6 w-6 text-pinl-500" />
                                    <p>kontakt@twojeoddluzanie.pl</p>
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
                                    className="w-full bg-pinl-500 hover:bg-white hover:text-pinl-500 font-semibold py-2 px-4 rounded-md transition disabled:opacity-50"
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

                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
};

export default KontaktSection;