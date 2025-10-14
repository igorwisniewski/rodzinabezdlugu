'use client'
import Footer from "@/comps/footer"
import NavDefault from "@/comps/nav";
import { UserGroupIcon, CheckBadgeIcon, AcademicCapIcon, StarIcon,BookOpenIcon, BoltIcon, ClockIcon  } from '@heroicons/react/24/solid';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import CookieBanner from "@/comps/CookieBannner";
import {useEffect, useState, useRef} from "react";
import styles from "../comps/Main.module.css"
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script"; // <-- DODAJ TEN IMPORT

export default function HomePage() {

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
// @ts-expect-error zwykle

  const FeatureBox = ({ icon: Icon, title, number, suffix = '', prefix = ''}) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5
    });


    return (
        <div
            ref={ref}
            className="w-64 min-h-[250px] bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center gap-4 transform transition duration-300 hover:scale-105"
        >
          <Icon className="h-12 w-12 text-pink-500"/>
          <h3 className="text-3xl font-bold text-gray-900">
            {inView ? (
                <CountUp end={number} duration={2} separator="," suffix={suffix} prefix={prefix}/>
            ) : (
                `${prefix}0${suffix}`
            )}
          </h3>
          <p className="text-gray-600 text-lg">{title}</p>
        </div>
    );
  };

  return (
      <>
        <Head>
          <title>Strona Główna | Rodzina bez długu</title>
          {/* Google Tag Manager - nie musisz już nic tutaj dodawać */}
        </Head>
        <main>
          <NavDefault/>
          <section
              className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center text-white "
              style={{backgroundImage: 'url(/images/header.jpg)',}}>
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Twoja droga do życia bez długów</h1>
              <p className="text-lg mb-6">Profesjonalizm, doświadczenie i skuteczność.</p>
              <Link href="/contact"
                    className="bg-pink-400 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-black hover:text-pink-400 transition">
                Umów bezpłatną konsultację</Link>
            </div>
          </section>
          <FadeInSection>
            <section className="max-w-7xl mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Niech liczby same przemówią
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
                <FeatureBox
                    icon={UserGroupIcon}
                    title="Zadowoleni Klientów"
                    number={1500}
                    suffix="+"
                />
                <FeatureBox
                    icon={CheckBadgeIcon}
                    title="Pozytywnie rozpatrzonych wniosków"
                    number={98}
                    suffix="%"
                />
                <FeatureBox
                    icon={AcademicCapIcon}
                    title="Lat doświadczenia"
                    number={10}
                    suffix="+"
                />
                <FeatureBox
                    icon={StarIcon}
                    title="Ocena klientów"
                    number={5}
                    suffix="/5"
                />
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section
                className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[100vh] content-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Dlaczego warto wybrać nas?</h2>
                <p className="text-gray-700 mb-4">Jesteśmy doświadczoną kancelarią prawną, która z dumą może poszczycić się sukcesem setek oddłużonych klientów. Naszą misją jest nie tylko skuteczne przeprowadzenie przez proces upadłości, ale przede wszystkim odzyskanie spokoju i stabilności finansowej. Wierzymy, że kluczem do sukcesu jest indywidualne podejście i stworzenie solidnych fundamentów dla bezpiecznej przyszłości na całe życie.,</p>
                <p className="text-gray-700 mb-4">Nasz zespół ekspertów to prawnicy, dla których pomoc ludziom jest pasją. Dzięki ich wiedzy, cierpliwości i zaangażowaniu, proces oddłużania przebiega w dyskretnej i pełnej zrozumienia atmosferze.</p>
                <p className="text-gray-700 mb-4">Oferujemy elastyczne godziny konsultacji, dopasowane do Twojego harmonogramu, a nasze sprawdzone procedury zapewniają skuteczność i bezpieczeństwo na każdym etapie sprawy. Stawiamy na indywidualne podejście do każdego Klienta, aby w pełni zrozumieć jego sytuację i dostosować strategię działania do jego potrzeb.</p>



              </div>
              <Image
                  src="/images/discretion.webp"
                  alt="Rodzina"
                  className="rounded-xl shadow-lg object-cover"
                  layout="responsive"
                  width={300}
                  height={900}
              />
            </section>
          </FadeInSection>

          <FadeInSection>
            <section className="bg-gray-50 py-16 min-h-[100vh] content-center">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-10">Nasze Usługi</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
                    <BookOpenIcon className="h-10 w-10 text-pink-500 mb-4"/>
                    <h3 className="font-bold text-xl mb-2">Upadłość Konsumencka - Pełna Obsługa</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Dla osób szukających kompleksowego wsparcia od analizy sytuacji aż po zakończenie procesu.
                    </p>
                    <Link href="/course" className="text-pink-800 font-semibold hover:underline">
                      Dowiedz się więcej
                    </Link>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
                    <BoltIcon className="h-10 w-10 text-pink-500 mb-4"/>
                    <h3 className="font-bold text-xl mb-2">Wniosek o Upadłość</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Dla osób, które potrzebują profesjonalnego przygotowania i złożenia wniosku w sądzie.
                    </p>
                    <Link href="/course" className="text-pink-500 font-semibold hover:underline">
                      Dowiedz się więcej
                    </Link>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
                    <ClockIcon className="h-10 w-10 text-pink-500 mb-4"/>
                    <h3 className="font-bold text-xl mb-2">Konsultacje Prawne</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Dla osób mających pytania lub potrzebujących porady na konkretnym etapie postępowania.
                    </p>
                    <Link href="/course" className="text-pink-500 font-semibold hover:underline">
                      Dowiedz się więcej
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>
          <FadeInSection>
            <section className="max-w-7xl mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-center mb-10">Co mówią nasi klienci?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow">
                  <p className="italic">&quot;Dzięki profesjonalizmowi i ogromnemu wsparciu udało mi się przejść przez cały proces bez stresu! Jeśli ktoś szuka kancelarii, która naprawdę prowadzi za rękę do oddłużenia, to nie ma lepszego wyboru! &quot;</p>
                  <p className="mt-4 font-semibold">Agata R.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                  <p className="italic">&quot;&quot;Polecam tę kancelarię. Wszystko na najwyższym poziomie, świetna organizacja i empatyczny prawnik prowadzący. Upadłość ogłoszona bez żadnych problemów. Jeśli ktoś szuka miejsca, gdzie w komfortowej atmosferze odzyska spokój, to będzie idealny wybór.&quot;</p>
                  <p className="mt-4 font-semibold">Ola P.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                  <p className="italic">&quot;Zdecydowanie jedna z najlepszych kancelarii. Zawsze miła atmosfera, elastyczne terminy spotkań, eksperci dopasowują się do klienta, a do tego pełen profesjonalizm.&quot;</p>
                  <p className="mt-4 font-semibold">Wojciech P.</p>
                </div>
              </div>
            </section>
          </FadeInSection>
          <CookieBanner/>
          <Footer/>
        </main>

      </>
  )
}