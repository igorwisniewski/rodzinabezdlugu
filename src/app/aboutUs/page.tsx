'use client'
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import styles from './About.module.css';
import {
    ScaleIcon, // Zamiast AcademicCapIcon
    CalendarDaysIcon,
    UserGroupIcon,
    ShieldCheckIcon,
    ClockIcon,
    DocumentTextIcon, // Zamiast BookOpenIcon
    LifebuoyIcon // Dodatkowa ikona
} from "@heroicons/react/24/outline";
import NavDefault from "@/comps/nav";
import Image from 'next/image';
import Footer from "@/comps/footer";
import Link from "next/link";

const features = [
    {
        icon: <UserGroupIcon className="w-10 h-10 text-pink-600" />,
        title: "Doświadczony Zespół",
        description: "Zaufaj wiedzy prawników, którzy skutecznie przeprowadzili setki postępowań upadłościowych."
    },
    {
        icon: <CalendarDaysIcon className="w-10 h-10 text-pink-600" />,
        title: "Elastyczne Terminy",
        description: "Dopasuj terminy konsultacji do swojego życia – pomagamy wtedy, kiedy nas potrzebujesz."
    },
    {
        icon: <ScaleIcon className="w-10 h-10 text-pink-600" />,
        title: "Profesjonalni Prawnicy",
        description: "Doświadczeni i empatyczni eksperci pomogą Ci przejść przez cały proces bez stresu."
    },
    {
        icon: <ShieldCheckIcon className="w-10 h-10 text-pink-600" />,
        title: "Dyskrecja Przede Wszystkim",
        description: "Od pierwszej rozmowy zapewniamy pełną poufność i bezpieczeństwo Twoich danych."
    },
    {
        icon: <ClockIcon className="w-10 h-10 text-pink-600" />,
        title: "Skuteczne Działanie",
        description: "Nasze sprawdzone metody sprawią, że szybciej odzyskasz finansową wolność."
    },
    {
        icon: <DocumentTextIcon className="w-10 h-10 text-pink-600" />,
        title: "Pełne Wsparcie Prawne",
        description: "Masz dostęp do porad i odpowiedzi na Twoje pytania na każdym etapie sprawy."
    }
];

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            });
        });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default function About() {
    return (
        <>
            <Head>
                <title>O nas | Rodzina bez długu</title>
            </Head>
            <NavDefault/>
            <section
                className="relative bg-cover bg-center h-[100vh] flex flex-col justify-center items-center text-white text-center"
                style={{backgroundImage: "url('/images/tlo.jpg')"}}
            >
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Rozpocznij życie <span className='text-pink-400'>bez długów</span> z nami
                    </h1>
                    <p className="mb-6 max-w-2xl mx-auto">
                        Profesjonalni prawnicy, dyskretne wsparcie i kompleksowa obsługa prawna, która przygotuje Cię do nowego startu.
                    </p>
                    <Link href="/contact"
                          className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-black hover:text-pink-400 transition">
                        Umów bezpłatną konsultację
                    </Link>
                </div>
            </section>

            <FadeInSection>
                <section className="py-20 px-6 bg-white max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="rounded-xl overflow-hidden max-w-md mx-auto">
                            <Image
                                src="/images/about2.jpg"
                                alt="Prawnik podczas konsultacji w kancelarii Rodzina bez długu"
                                width={500}
                                height={600}
                                className="rounded-xl object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Nasza misja</h2>
                            <p className="text-gray-700 mb-6">
                                Kancelaria Rodzina bez długu! Od wielu lat pasjonujemy się prawem i pomocą w wychodzeniu z trudnych sytuacji finansowych.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Nasza misja to nie tylko przeprowadzenie naszych Klientów przez proces upadłości konsumenckiej, ale przede wszystkim zapewnienie im spokoju i stabilności na przyszłość.
                            </p>
                            <ul className="text-left space-y-2 mb-6">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                    <span>Analizujemy sytuację i przygotowujemy pełną dokumentację</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                    <span>Reprezentujemy Klientów w sądzie i przed syndykiem</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                    <span>Stawiamy na indywidualne podejście do każdej sprawy</span>
                                </li>
                            </ul>
                            <Link href="/contact"
                                  className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-black hover:text-pink-400 transition">
                                Umów bezpłatną konsultację
                            </Link>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className="py-20 bg-white text-center max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12">Dlaczego wybierzesz nas?</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6 shadow-md flex flex-col items-center justify-center text-center transform transition duration-300 hover:scale-105 w-full h-full min-h-[300px] gap-2"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="mb-2 text-pink-600">{feature.icon}</div>
                                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm mt-2 max-w-[250px]">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className="py-20 px-6 flex flex-col items-center justify-center text-center md:flex-row md:text-left md:justify-center gap-16 max-w-7xl mx-auto">
                    <div className="max-w-xl space-y-8">
                        <h2 className="text-3xl font-bold">Jak wygląda proces?</h2>
                        <div className="space-y-6">
                            <p>
                                Nasz proces jest przejrzysty, zrozumiały i stworzony z myślą o Twoim komforcie psychicznym. Bierzemy na siebie ciężar formalności i kontaktów z urzędami.
                            </p>
                            <p>
                                Dzięki temu nasi Klienci mogą w pełni bezpiecznie przejść przez postępowanie sądowe. Prowadzimy Cię za rękę od A do Z.
                            </p>
                            <p>
                                Obawiasz się skomplikowanych pism i terminów sądowych? W <span className="text-pink-500"><strong>Rodzinie bez długu</strong></span> proces jest prowadzony przez dedykowanego prawnika, który czuwa nad każdym detalem.
                            </p>
                        </div>
                    </div>
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                        <div className="relative w-full aspect-square">
                            <Image
                                src="/images/about3.jpg"
                                alt="Proces prawny w kancelarii"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </section>
            </FadeInSection>



            <FadeInSection>
                <section
                    className="relative overflow-hidden py-20 h-[40vh] text-white text-center bg-gradient-to-br from-pink-600 to-pink-900 flex flex-col justify-center items-center z-50">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Gotowy odzyskać spokój?</h2>
                        <p className="mb-6">Skontaktuj się z nami dzisiaj!</p>
                        <Link href="/contact"
                              className="bg-pink-400 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-black hover:text-pink-400 transition">
                            Umów się na konsultację
                        </Link>
                    </div>
                </section>
            </FadeInSection>
            <Footer/>
        </>
    );
}