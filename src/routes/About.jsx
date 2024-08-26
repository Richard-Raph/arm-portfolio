import Hero from '../components/Hero/AHero';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function About() {
    useDocumentTitle('About ℹ Richard Raphael');

    return (
        <>
            <main>
                <Hero />
            </main>
            <footer></footer>
        </>
    );
}