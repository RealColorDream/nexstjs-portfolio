import Navbar from './components/Navbar';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Image from 'next/image';
import HomePage from "@/app/components/HomePage";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <Navbar/>

            <HomePage/>
            <Work/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    );
}
