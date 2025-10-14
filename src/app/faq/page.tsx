'use client'
import Head from "next/head";
import NavDefault from "@/comps/nav";
import Footer from "@/comps/footer";
import { useState } from 'react';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

const faqItems = [
    {
        "question": "Co jeśli nigdy nie siedziałam/em w samochodzie?",
        "answer": "Niczym się nie przejmuj, większość osób przychodząca do nas na kurs nigdy nie prowadziła samochodu. Nauczymy się wszystkiego od podstaw w kontrolowanych warunkach."
    },
    {
        "question": "Co zrobić jeżeli nie mam czasu chodzić na wykłady teoretyczne?",
        "answer": "W ofercie mamy także kursy online z teorii. Naukę możesz dopasować do swojego grafiku i bez przeszkód zdobywać wiedzę teoretyczną."
    },
    {
        "question": "Jak długo trwa kurs na prawo jazdy?",
        "answer": "Wszystko zależy od waszej dyspozycyjności, średnio wszystko zajmuje około 2-3 miesiące."
    },
    {
        "question": "Zależy mi na czasie, jaki kurs mam wybrać?",
        "answer": "Kurs ekspresowy jest skierowany do osób, którym zależy na czasie i chcą przejść przez kurs prawa jazdy w jak najszybszym czasie. Wybierając go masz gwarancję kilku zajęć tygodniowo, co skutkuje znacznie szybszym ukończeniem kursu."
    },
    {
        "question": "Czy można rozłożyć płatność na raty?",
        "answer": "Jak najbardziej mamy taką opcję. Po więcej informacji prosimy o kontakt z biurem."
    },
    {
        "question": "Mam bardzo mało czasu w tygodniu. Czy to nie będzie problemem?",
        "answer": "Nie ma się czym martwić. Jesteśmy dla was dostępni przez cały dzień plus weekendy. Godziny dopasujemy nawet do bardzo wąskiej dyspozycyjności."
    },
    {
        "question": "Boję się, że nie poradzę sobie ze stresem.",
        "answer": "Niczym się nie przejmuj. Nasi instruktorzy wiedzą jak temu zaradzić. Zajęcia odbywają się w przyjemnej atmosferze. Tok nauczania jest dobierany indywidualnie pod każdego kursanta."
    },
    {
        "question": "Mam prawo jazdy, ale nie czuję się pewnie. Czy jest możliwość poćwiczenia pod okiem instruktora?",
        "answer": "Jak najbardziej. W ofercie mamy również jazdy doszkalające."
    },
    {
        "question": "Czy na pierwszych jazdach wyjeżdżamy w miasto?",
        "answer": "Na pierwszych jazdach omawiamy technikę prowadzenia samochodu, wykonujemy proste manewry. Wszystko to odbywa się na prywatnym placu, na którym ruch jest znikomy."
    },
    {
        "question": "W którym miejscu będą się zaczynać zajęcia praktyczne?",
        "answer": "Zaczynamy na parkingu naszego biura przy ul. Ostrowskiego 9 we Wrocławiu."
    },
    {
        "question": "Czy na kurs jest zawierana jakaś umowa?",
        "answer": "Tak. W naszym biurze podpisujemy umowę, w której są zawarte wszystkie ważne informacje. Oczywiście omówimy ją razem przed podpisaniem."
    },
    {
        "question": "Czy egzamin wewnętrzny jest płatny?",
        "answer": "Egzamin teoretyczny jest zawsze bezpłatny, natomiast w przypadku praktycznego egzaminu tylko pierwsze podejście jest darmowe."
    },
    {
        "question": "Czy egzaminy wewnętrzne są obowiązkowe?",
        "answer": "Tak, są obowiązkowe. Mają one za zadanie sprawdzić waszą gotowość do egzaminów państwowych."
    },
    {
        "question": "Czy pojazdy w szkole jazdy są bezpieczne?",
        "answer": "Prowadzimy szkolenie na najnowszych pojazdach do nauki jazdy. Bezpieczeństwo to dla nas podstawa."
    },
    {
        "question": "Czy muszę mieć swoje materiały do nauki?",
        "answer": "Wszystko co potrzebne do nauki dostaniesz od nas. Nie musisz zatem dodatkowo nic kupować."
    }
];
export default function Faq(){

        const [openIndex, setOpenIndex] = useState(null);
// @ts-expect-error zwykle

        const toggle = (index) => {
            setOpenIndex(index === openIndex ? null : index);
        };

        return(
        <>
            <Head>
                <title>Faq</title>
            </Head>
            <NavDefault/>
            <section className="min-h-screen bg-gray-50 py-16 px-4 m-10">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-10">Często zadawane pytania</h1>

                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-md shadow p-4 transition-all duration-300">
                                <button
                                    onClick={() => toggle(index)}
                                    className="flex justify-between items-center w-full text-left"
                                >
                                    <span className="font-medium">{item.question}</span>
                                    <ChevronDownIcon
                                        className={`h-5 w-5 transition-transform duration-300 ${
                                            openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className="text-sm text-gray-600">{item.answer}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-sm text-gray-700 mb-4">Masz więcej pytań? Chętnie na nie odpowiemy!</p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href="tel:+48787222001"
                                className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm hover:bg-gray-100"
                            >
                                <PhoneIcon className="h-5 w-5"/>
                                Zadzwoń do nas
                            </Link>
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 px-4 py-2 bg-lwro-600 text-white rounded-md text-sm hover:bg-lwro-500">
                                Napisz do nas
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
            <Footer/>

        </>
    )
}