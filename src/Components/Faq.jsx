import { useState } from 'react';
import Accordion from './Tools/Accordion';

const Faq = () => {
    const [accordions, setAccordion] = useState([
        {
            key: 1,
            title: 'Berapa lama waktu yang dibutuhkan untuk membuat website?',
            data: `Kami dapat menyelesaikan website Anda hanya dalam 1 hingga 2 minggu, tergantung pada kompleksitas proyek.`,
            isOpen: false
        },
        {
            key: 2,
            title: 'Apakah saya bisa memperbarui website sendiri?',
            data: `Tergantung paket mana yang kamu pilih. Ada paket yang kami sediakan Fitur CMS (Admin Dashboard). Ada juga yang tidak, 
                Jika tidak Kami yang akan mengupdate website kamu tanpa dikenakan biaya.`,
            isOpen: false
        },
        {
            key: 3,
            title: 'Apakah website saya akan mobile-friendly?',
            data: `Tentu saja! Setiap website yang kami buat didesain responsif, sehingga tampilannya sempurna di semua perangkat, mulai dari smartphone hingga desktop.`,
            isOpen: false
        },
        {
            key: 4,
            title: 'Apakah Website saya akan aman?',
            data: `Keamanan adalah prioritas kami. Semua website yang kami buat dilengkapi dengan sertifikat SSL untuk memastikan data Anda dan pengunjung terlindungi dengan baik.`,
            isOpen: false
        },
        {
            key: 5,
            title: 'Apakah ada layanan maintenance setelah website diluncurkan?',
            data: `Ya, kami menyediakan layanan maintenance bulanan gratis untuk memastikan website Anda terus berfungsi optimal, diperbarui secara rutin, dan bebas dari gangguan teknis.`,
            isOpen: false
        },
    ]);

    const toggleAccordion = (accordionKey) => {
        setAccordion((prevAccordions) =>
            prevAccordions.map((accord) =>
                accord.key === accordionKey ? { ...accord, isOpen: !accord.isOpen } : { ...accord, isOpen: false }
            )
        );
    };

    return (
        <div className="flex flex-col justify-center items-center text-white py-16 mx-auto gap-8" id='faq'>
            <div className='flex flex-col justify-center items-center text-center gap-6 w-auto lg:w-3xl'>
                <h2 className="text-4xl font-bold">Pertanyaan</h2>
                <p className='text-lg font-normal'>
                    Punya pertanyaan terkait pengembangan website atau ingin konsultasi? Berikut adalah beberapa jawaban untuk hal-hal yang paling sering ditanyakan:
                </p>
            </div>
            <div className='flex flex-col gap-3 px-4 py-6 bg-slate-900 rounded-xl mt-8'>
                {accordions.map((accordion) => (
                    <Accordion
                        key={accordion.key}
                        title={accordion.title}
                        data={accordion.data}
                        isOpen={accordion.isOpen}
                        toggleAccordion={() => toggleAccordion(accordion.key)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Faq;
