import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className='bg-gradient w-full py-14'>
            <div className='bg-gradient'></div>
            < main className='w-[90%] md:w-full max-w-3xl mx-auto space-y-16 text-lightMode-text dark:text-darkMode-foreground ' >
                <Presentation />
                <Skills />
                <Projects />
                <Contact />
            </main >
        </div >

    );
};

export default Home;