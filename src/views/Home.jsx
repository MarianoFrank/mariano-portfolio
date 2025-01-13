import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main className='w-[90%] md:w-full max-w-3xl mx-auto my-10 space-y-16 text-lightMode-text dark:text-darkMode-foreground '>
            <Presentation />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;