import Footer from "@/comps/footer";
import NavDefault from "@/comps/nav";
import Head from "next/head";

export default function Page() {
    return (
        <>
            <Head>
                <title>Polityka Prywatności | LWRO</title>

            </Head>
            <main>
                <NavDefault/>
                <section className="max-w-4xl mx-auto px-4 py-16">
                    <h1 className="text-3xl font-bold mb-6 mt-10">Polityka Prywatności</h1>

                    <p className="mb-4">
                        Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych oraz
                        wykorzystywania
                        plików cookies przez stronę internetową szkoły jazdy LWRO.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">1. Administrator danych</h2>
                    <p className="mb-4">
                        Administratorem danych osobowych jest LWRO Łukasz Wiśniewski, z siedzibą w Aleksandra
                        Ostrowskiego
                        9/201, 53-238 Wrocław, e-mail: kontakt@lwro.pl.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">2. Zakres i cel przetwarzania danych</h2>
                    <p className="mb-4">
                        Dane zbierane przez formularze na stronie (imię, e-mail, telefon) wykorzystywane są wyłącznie w
                        celu
                        kontaktu oraz obsługi klienta.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">3. Pliki cookies</h2>
                    <p className="mb-4">
                        Strona używa plików cookies w celu zapewnienia poprawnego działania serwisu oraz do celów
                        analitycznych (np. Google Analytics).
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">4. Przysługujące prawa</h2>
                    <p className="mb-4">
                        Masz prawo dostępu do swoich danych, ich poprawienia, żądania usunięcia lub ograniczenia
                        przetwarzania.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">5. Kontakt</h2>
                    <p className="mb-4">
                        W sprawach dotyczących danych osobowych prosimy o kontakt: kontakt@lwro.pl.
                    </p>
                </section>
                <Footer/>

            </main>

        </>
    );
}
