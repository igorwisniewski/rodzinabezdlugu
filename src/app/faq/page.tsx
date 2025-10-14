'use client'
import Head from "next/head";
import NavDefault from "@/comps/nav";
import Footer from "@/comps/footer";
import { useState } from 'react';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

const faqItems = [
    {
        "question": "Co jeśli nigdy nie miałem/am do czynienia z sądem i prawnikami?",
        "answer": "Niczym się nie przejmuj, większość osób, które się do nas zgłaszają, jest w takiej sytuacji. Naszym zadaniem jest poprowadzenie Cię przez cały proces krok po kroku i wyjaśnienie wszystkiego w prosty sposób."
    },
    {
        "question": "Co zrobić, jeżeli nie mam czasu na spotkania w kancelarii?",
        "answer": "Wiele spraw możemy załatwić zdalnie – przez telefon, e-mail lub wideokonferencję. Dopasujemy formę kontaktu do Twojego grafiku, aby proces był jak najwygodniejszy."
    },
    {
        "question": "Jak długo trwa cały proces upadłości konsumenckiej?",
        "answer": "To zależy od obłożenia sądu i złożoności sprawy. Średnio od złożenia wniosku do ogłoszenia upadłości mija od 2 do 6 miesięcy. Całe postępowanie może potrwać dłużej."
    },
    {
        "question": "Moja sytuacja jest pilna, komornik zajął mi konto. Czy da się to przyspieszyć?",
        "answer": "Złożenie wniosku o upadłość konsumencką powoduje zawieszenie postępowań egzekucyjnych. Działamy sprawnie, aby jak najszybciej przygotować i złożyć wniosek, co zapewni Ci prawną ochronę."
    },
    {
        "question": "Czy można rozłożyć płatność za usługę na raty?",
        "answer": "Oczywiście, rozumiemy sytuację naszych Klientów. Oferujemy możliwość płatności ratalnej. Szczegóły ustalamy indywidualnie podczas konsultacji."
    },
    {
        "question": "Wstydzę się swojej sytuacji finansowej. Boję się oceny.",
        "answer": "Nie masz się czego obawiać. Zapewniamy pełną dyskrecję i empatię. Naszym celem jest pomoc, a nie ocena. Upadłość to narzędzie, które daje szansę na nowy start."
    },
    {
        "question": "Próbowałem/am sam/a złożyć wniosek, ale utknąłem/ęłam. Czy możecie pomóc?",
        "answer": "Oczywiście. Pomożemy na każdym etapie – możemy przeanalizować Twoje dotychczasowe działania, poprawić wniosek lub przejąć prowadzenie całej sprawy."
    },
    {
        "question": "Jak wygląda pierwsza, bezpłatna konsultacja?",
        "answer": "Podczas pierwszej rozmowy analizujemy Twoją sytuację finansową, weryfikujemy, czy kwalifikujesz się do upadłości i przedstawiamy plan działania. To spotkanie jest niezobowiązujące."
    },
    {
        "question": "Jakie dokumenty muszę przygotować na start?",
        "answer": "Nie musisz się martwić o zbieranie dokumentów na pierwszą rozmowę. Wystarczy, że opowiesz nam o swojej sytuacji. Następnie przekażemy Ci dokładną listę potrzebnych pism."
    },
    {
        "question": "Czy na usługę jest zawierana jakaś umowa?",
        "answer": "Tak. Przed rozpoczęciem współpracy podpisujemy przejrzystą umowę, która określa zakres naszych usług, wynagrodzenie i wszystkie istotne warunki."
    },
    {
        "question": "Czy są jakieś ukryte koszty oprócz waszego wynagrodzenia?",
        "answer": "Nie. Nasze wynagrodzenie jest jasno określone w umowie. Jedyne dodatkowe koszty to opłaty sądowe wymagane przez prawo, o których wysokości z góry informujemy."
    },
    {
        "question": "Czy będę musiał/a osobiście stawiać się w sądzie?",
        "answer": "W wielu przypadkach postępowanie odbywa się bez konieczności Twojej obecności w sądzie. Jeśli jednak rozprawa będzie konieczna, przygotujemy Cię do niej i będziemy Cię reprezentować."
    },
    {
        "question": "Czy moje dane i informacje o długach są bezpieczne?",
        "answer": "Absolutnie tak. Obowiązuje nas tajemnica zawodowa (radcowska/adwokacka). Gwarantujemy pełną poufność i bezpieczeństwo Twoich danych."
    },
    {
        "question": "Czy muszę znać się na przepisach prawnych?",
        "answer": "Nie, od tego jesteśmy my. Twoim zadaniem jest przedstawienie nam swojej sytuacji, a my zajmiemy się wszystkimi formalnościami i aspektami prawnymi."
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
                                href="tel:+796464273"
                                className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm hover:bg-gray-100"
                            >
                                <PhoneIcon className="h-5 w-5"/>
                                Zadzwoń do nas
                            </Link>
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-md text-sm hover:bg-pink-500">
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