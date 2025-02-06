import React from "react";
import { Helmet } from "react-helmet";
import { Suspense, lazy } from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import CTAButton from "../Components/CTAButton";

// Lazy load komponen yang tidak harus langsung dimuat
const TentangKami = lazy(() => import("../Components/TentangKami"));
const Pricing = lazy(() => import("../Components/Pricing"));
const Projects = lazy(() => import("../Components/Projects"));
const CaraKerja = lazy(() => import("../Components/CaraKerja"));
const Faq = lazy(() => import("../Components/Faq"));

const Home = () => {
    return (
        <>
            <Helmet>
                {/* Title */}
                <title>Lewyinn Dev - Jasa Pembuatan Website & Desain Grafis Profesional</title>

                {/* Meta Description */}
                <meta name="description"
                    content="Lewyin Dev menyediakan jasa pembuatan website profesional dan desain grafis kreatif untuk bisnis, startup, dan personal branding. Kami menawarkan solusi digital terbaik dengan desain modern, responsif, dan SEO-friendly."/>

                {/* Meta Keywords */}
                <meta name="keywords"
                    content="Jasa Pembuatan Website, Jasa Desain Grafis, Website Profesional, Web Developer, UI/UX Design, Web Design, Website Murah, Desain Logo, Branding, Desain Poster, Pembuatan Landing Page, Website SEO, Jasa Web Developer, Web Development, Desain Sosial Media, Website Toko Online, Website Company Profile"/>

                {/* Author */}
                <meta name="author" content="Lewyin Dev" />

                {/* Open Graph Meta Tags for Social Media */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Lewyin Dev - Jasa Pembuatan Website & Desain Grafis Profesional" />
                <meta property="og:description" content="Lewyin Dev adalah penyedia jasa pembuatan website dan desain grafis berkualitas tinggi. Kami siap membantu bisnis Anda tampil profesional dan menarik secara digital." />
                <meta property="og:url" content="https://www.lewyindev.vercel.app" />
                <meta property="og:site_name" content="Lewyin Dev" />

                {/* Canonical URL to Avoid Duplicate Content Issues */}
                <link rel="canonical" href="https://www.lewyindev.vercel.app/" />

                {/* Favicon */}
                <link rel="icon" href="/LogoLD.webp" type="image/webp" />
            </Helmet>

            <div className='overflow-x-hidden text-stone-300 antialiased'>
                <div className='fixed inset-0 -z-10'>
                    <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
                </div>

                <div className='container mx-auto px-8'>
                    <Navbar />
                    <Hero />
                    <Suspense fallback={<p>Loading...</p>}>
                        <TentangKami />
                        <Pricing />
                        <Projects />
                    </Suspense>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                <CaraKerja />

                    <div className='container mx-auto px-8'>
                        <Faq />
                    </div>
                </Suspense>

                <Footer />
                <CTAButton />

            </div>
        </>
    )
}

export default Home