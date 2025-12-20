'use client'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('./components/Navbar'))
const HomePage = dynamic(() => import('./components/HomePage'))
const Work = dynamic(() => import('./components/Work'))
const Skills = dynamic(() => import('./components/Skills'))
const Projects = dynamic(() => import('./components/Projects'))
const Footer = dynamic(() => import('./components/Footer'))


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
