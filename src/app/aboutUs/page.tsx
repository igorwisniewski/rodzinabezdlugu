'use client'
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import styles from './About.module.css';
import {
    AcademicCapIcon,
    CalendarDaysIcon,
    UserGroupIcon,
    ShieldCheckIcon,
    ClockIcon,
    BookOpenIcon
} from "@heroicons/react/24/outline";
import NavDefault from "@/comps/nav";
import  Image from 'next/image';
import Footer from "@/comps/footer";
import Link from "next/link";

const features = [
    {
        icon: <AcademicCapIcon className="w-10 h-10 text-lwro-500" />,
        title: "Nowoczesna Flota",
        description: "Ucz się jazdy w komfortowych i dobrze wyposażonych pojazdach szkoleniowych."
    },
    {
        icon: <CalendarDaysIcon className="w-10 h-10 text-lwro-500" />,
        title: "Elastyczne Terminy",
        description: "Dopasuj grafik jazd do swojego życia – ucz się kiedy Ci wygodnie."
    },
    {
        icon: <UserGroupIcon className="w-10 h-10 text-lwro-500" />,
        title: "Profesjonalni Instruktorzy",
        description: "Doświadczeni i cierpliwi instruktorzy pomogą Ci opanować jazdę bez stresu."
    },
    {
        icon: <ShieldCheckIcon className="w-10 h-10 text-lwro-500" />,
        title: "Bezpieczeństwo Przede Wszystkim",
        description: "Od pierwszej lekcji uczymy bezpiecznej i odpowiedzialnej jazdy."
    },
    {
        icon: <ClockIcon className="w-10 h-10 text-lwro-500" />,
        title: "Efektywna Nauka",
        description: "Skuteczne metody nauczania sprawią, że szybciej zdasz egzamin."
    },
    {
        icon: <BookOpenIcon className="w-10 h-10 text-lwro-500" />,
        title: "Wsparcie Teoretyczne",
        description: "Dostęp do materiałów, testów i pomocy naukowych 24/7."
    }
];
// @ts-expect-error zwykle
const FadeInSection = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
// @ts-expect-error zwykle

    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
// @ts-expect-error zwykle

        observer.observe(domRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ''}`}

            // @ts-expect-error zwykle

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
                <title>O nas | LWRO</title>

            </Head>
            <NavDefault/>
            <section
                className="relative bg-cover bg-center h-[100vh] flex flex-col justify-center items-center text-white text-center"
                style={{backgroundImage: "url('/images/aboutBanner.webp')"}}
            >

                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>


                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Rozpocznij swoją naukę z <span className='text-lwro-400'>L</span>WRO
                    </h1>
                    <p className="mb-6 max-w-2xl mx-auto">
                        Profesjonalni instruktorzy, elastyczne terminy i kompleksowe kursy, które przygotują Cię do jazdy.
                    </p>
                    <Link href="/contact"
                          className="bg-lwro-400 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-black hover:text-lwro-400 transition">Zobacz naszą ofertę</Link>
                </div>
            </section>

            <FadeInSection>
                <section className="py-20 px-6 bg-white max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="rounded-xl overflow-hidden max-w-md mx-auto">
                            <Image
                                src="/images/carAboutus.webp"
                                alt="Auto do nauki jazdy Lwro"
                                width={500}
                                height={600}
                                className="rounded-xl object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-4">Nasza misja</h2>
                            <p className="text-gray-700 mb-6">
                                Szkoła jazdy LWRO! Od wielu lat pasjonujemy się motoryzacją i nauką jazdy samochodem.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Nasza misja to nie tylko przygotowanie naszych uczniów do zdobycia prawa jazdy, ale
                                przede wszystkim nauczenie Was bezpiecznej i odpowiedzialnej jazdy na polskich i
                                europejskich drogach.
                            </p>

                            <ul className="text-left space-y-2 mb-6">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                    <span>Przygotowujemy kursantów do egzaminu teoretycznego i praktycznego</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                    <span>Uczymy jazdy w realnych warunkach miejskich</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                    <span>Stawiamy na indywidualne podejście do każdego kursanta</span>
                                </li>
                            </ul>

                            <Link href="/contact"
                                  className="bg-lwro-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-black hover:text-lwro-400 transition">Zapisz
                                się teraz</Link>
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
                                    <div className="mb-2 text-lwro-500">{feature.icon}</div>
                                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm mt-2 max-w-[250px]">{feature.description}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </section>

            </FadeInSection>


            <FadeInSection>
                <section
                    className="py-20 px-6 flex flex-col items-center justify-center text-center md:flex-row md:text-left md:justify-center gap-16 max-w-7xl mx-auto">
                    {/* Tekst */}
                    <div className="max-w-xl space-y-8">
                        <h2 className="text-3xl font-bold">Nasza flota</h2>
                        <div className="space-y-6">
                            <p>
                               Nasza flota złożona jest wyłącznie
                                z solidnych, zadbanych i sprawnych technicznie samochodów, wyposażonych w systemy
                                bezpieczeństwa, radio, a także w elektryczne szyby i lusterka.
                            </p>
                            <p>
                                Dzięki temu nasi adepci mogą w
                                pełni bezpiecznie poruszać się w ruchu ulicznym, jak i na trasach pozamiejskich. Uczymy
                                na autach egzaminacyjnych!
                            </p>
                            <p>
                                Obawiasz się, że na egzaminie
                                będzie czekał na Ciebie inny i nieznany Ci samochód? W <span className="text-lwro-400"><strong>L</strong></span>WRO kurs prowadzony jest na modelu, którym będziesz
                                jeździł podczas egzaminu państwowego.
                            </p>
                        </div>
                    </div>

                    {/* Obrazek z animacją */}
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto animate-spin-slow">
                        <div className="relative w-full aspect-square">
                            <Image
                                src="/images/aboutBlob.webp"
                                alt="Nasza flota"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </section>
            </FadeInSection>

            <FadeInSection>
                <section className="py-20 text-center bg-white min-h-[100vh] content-center">
                    <h2 className="text-3xl font-bold mb-12">Poznaj naszych instruktorów</h2>

                    <div className="flex flex-wrap justify-center gap-10 px-4">
                        <div className="bg-gray-50 rounded-xl p-6 shadow-md flex flex-col items-center w-64">
                            <div
                                className="w-24 h-24 lg:w-40 lg:h-40  rounded-full mb-4 bg-cover bg-center"
                                style={{backgroundImage: "url('/images/lukasz.webp')"}}
                            />
                            <p className="font-semibold">Łukasz Wiśniewski</p>
                            <p className="text-gray-500 text-sm">10+ lat doświadczenia</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 shadow-md flex flex-col items-center w-64">
                            <div
                                className="w-24 h-24 lg:w-40 lg:h-40 rounded-full mb-4 bg-cover bg-center"
                                style={{backgroundImage: "url('/images/czarek.webp')"}}
                            />
                            <p className="font-semibold">Czarek Jóźków</p>
                            <p className="text-gray-500 text-sm">5+ lat doświadczenia</p>
                        </div>
                    </div>
                </section>

            </FadeInSection>


            {/* CTA */}
            <FadeInSection>
                <section
                    className="relative overflow-hidden py-20 h-[40vh] text-white text-center bg-gradient-to-br from-lwro-300 to-lwro-900 flex flex-col justify-center items-center z-50">


                    {/* Treść */}
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Gotowy wyjechać na drogę?</h2>
                        <p className="mb-6">Zapisz się dzisiaj!</p>
                        <Link href="/contact"
                              className="bg-lwro-400 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-black hover:text-lwro-400 transition">Zapisz
                            się</Link>
                    </div>
                </section>
            </FadeInSection>
            <Footer/>
        </>
    );
}
