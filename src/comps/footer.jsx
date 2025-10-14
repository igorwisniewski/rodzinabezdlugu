import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-10  z-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-2"><span className="text-lwro-400">L</span>WRO</h3>
                    <p className="text-sm">Twój partner w nauce jazdy. Gwarancja jakości i profesjonalizmu.</p>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Linki</h4>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/" className="hover:underline">Strona główna</Link></li>
                        <li><Link href="/aboutUs" className="hover:underline">O nas</Link></li>
                        <li><Link href="/course" className="hover:underline">Kursy</Link></li>
                        <li><Link href="/contact" className="hover:underline">Kontakt</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Kontakt</h4>
                    <p className="text-sm">ul. Aleksandra Ostrowskiego 9/201<br />53-238 Wrocław<br />tel: +48 787 222 001<br />email: kontakt@lwro.pl</p>
                </div>
            </div>
            <div className="text-center mt-8 text-xs text-gray-400">&copy; 2025 LWRO. Wszelkie prawa zastrzeżone. Stworzone przez <Link href={"https://wisstack.pl/"}>WISSTACK</Link></div>
        </footer>
    )
}