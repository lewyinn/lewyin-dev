import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const pricingPlans = [
    {
        title: "Landing Page Basic",
        category: 'coding',
        price: "Rp. 800.000",
        description: "Cocok untuk bisnis kecil yang ingin memiliki landing page profesional dengan desain modern dan responsif.",
        features: [
            "Free Domain .com 1 Tahun",
            "Desain responsif & modern",
            "Optimasi kecepatan & SEO dasar",
            "Halaman statis informatif",
            "Call Action To Whatsapp",
            "Sertifikasi SSL untuk keamanan data",
            "Instalasi Google Analytics untuk lacak pengunjung",
            "Berisi maximal 3 Halaman Website",
            "Memakai Hosting Gratis (Vercel)",
        ],
    },
    {
        title: "Landing Page Professional",
        category: 'coding',
        price: "Rp. 1.200.000",
        description: "Ideal untuk bisnis yang berkembang dan membutuhkan landing page profesional dengan fitur yang lebih canggih untuk meningkatkan produktivitas.",
        features: [
            "Admin Panel Mengatur Content",
            "Free Domain .com 1 Tahun",
            "Shared Hosting 1 Tahun",
            "Desain responsif & premium",
            "Halaman dinamis dengan fitur tambahan",
            "Optimasi SEO Dasar",
            "Sertifikasi SSL untuk keamanan data",
            "Instalasi Google Analytics untuk lacak pengunjung",
            "Berisi maximal 4 Halaman Website",
            "Memakai Shared Hosting",
        ],
    },
    {
        title: "Website Sekolah",
        category: 'coding',
        price: "Rp. 1.500.000",
        description: "Dirancang untuk sekolah yang membutuhkan situs web profesional dengan fitur lengkap untuk mendukung Kontrol Penuh content website.",
        features: [
            "Admin Panel Kontrol Penuh Website",
            "Free Domain .com 1 Tahun",
            "Free Hosting 1 Tahun",
            "Desain responsif & modern",
            "Berisi maximal 7 Halaman Website",
            "24/7 Dedicated Support",
            "Sertifikasi SSL untuk keamanan data",
            "Instalasi Google Analytics untuk lacak pengunjung",
            "Memakai Shared Hosting",
        ],
    },
    {
        title: "Feed Instagram Basic",
        category: 'desain',
        price: "Rp. 250.000",
        description: "Feed Instagram Basic membantu meningkatkan branding dengan 10 desain eksklusif, tampilan profesional, dan revisi gratis.",
        features: [
            "Proses cepat dan profesional",
            "10 Desain Instagram berkualitas tinggi dan siap diposting",
            "Desain eksklusif sesuai identitas brand Anda",
            "Kombinasi warna dan font profesional untuk tampilan menarik",
            "Revisi 5 kali gratis",
            "Format file siap pakai (JPG, PNG, dan editable file jika diperlukan)",
        ],
    },
    {
        title: "Feed Instagram Professional",
        category: 'desain',
        price: "Rp. 600.000",
        description: "Feed Instagram Basic membantu meningkatkan branding dengan 20 desain eksklusif, tampilan profesional, dan revisi gratis.",
        features: [
            "Proses cepat dan profesional",
            "20 Desain Instagram berkualitas tinggi dan siap diposting",
            "Desain eksklusif sesuai identitas brand Anda",
            "Kombinasi warna dan font profesional untuk tampilan menarik",
            "Revisi Unlimited Selama tidak merubah konsep",
            "Format file siap pakai (JPG, PNG, dan editable file jika diperlukan)",
        ],
    },
    {
        title: "Banner Basic",
        category: 'desain',
        price: "Rp. 40.000",
        description: "Banner Untuk Apapun itu dengan Desain yang Menarik dan Profesional",
        features: [
            "Proses cepat dan profesional",
            "Banner Siap Cetak atau Siap Posting",
            "Desain eksklusif sesuai identitas brand Anda",
            "Kombinasi warna dan font profesional untuk tampilan menarik",
            "Revisi Unlimited Selama tidak merubah konsep",
            "Format file siap pakai (JPG, PNG, dan editable file jika diperlukan)",
        ],
    },
];

export default function Pricing() {
    const [category, setCategory] = useState("coding");
    const [expanded, setExpanded] = useState(false);

    const filteredPlans = pricingPlans.filter(plan => plan.category === category);
    const visiblePlans = expanded ? filteredPlans : filteredPlans.slice(0, 3);

    const toggleView = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="flex flex-col justify-center items-center text-center text-white py-16 mx-auto gap-6" id="price">
            <div className='flex flex-col justify-center items-center text-center gap-6 w-auto lg:w-3xl'>
                <h2 className="text-4xl font-bold">Harga Jasa Terjangkau</h2>
                <p className='text-lg font-normal'>
                    Kami menawarkan layanan pembuatan website dan desain grafis berkualitas dengan harga terbaik untuk Anda.
                </p>
            </div>
            <div className="flex justify-center gap-4">
                <button
                    className={`px-6 py-2 border rounded-lg ${category === 'coding' ? 'bg-gray-700' : 'border-gray-700 hover:bg-gray-800'}`}
                    onClick={() => setCategory("coding")}>
                    Coding
                </button>
                <button
                    className={`px-6 py-2 border rounded-lg ${category === 'desain' ? 'bg-gray-700' : 'border-gray-700 hover:bg-gray-800'}`}
                    onClick={() => setCategory("desain")}>
                    Desain
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visiblePlans.map((plan, index) => (
                    <div key={index} className="bg-black/40 backdrop-blur-lg py-6 px-4 rounded-2xl shadow-lg border border-gray-700">
                        <h3 className="text-xl font-semibold">{plan.title}</h3>
                        <p className="text-4xl font-bold my-3">{plan.price} <span className="text-lg">/ Per Month</span></p>
                        <p className="text-gray-400 mb-4 h-auto md:h-20">{plan.description}</p>
                        <Link to="https://wa.me/6285282932422" target="_blank" className="w-full py-2.5 relative rounded-xl group overflow-hidden font-medium bg-purple-50 text-blue-800 inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-800 group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Hubungi Kami</span>
                        </Link>
                        <ul className="mt-4 text-left text-gray-300">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-sm gap-2 py-1">
                                    <FaCheckCircle className="text-green-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {filteredPlans.length > 3 && (
                <button onClick={toggleView} className="mt-6 px-6 py-2 border border-gray-700 rounded-lg hover:bg-gray-800">
                    {expanded ? "Less More" : "View More"}
                </button>
            )}
        </div>
    );
}