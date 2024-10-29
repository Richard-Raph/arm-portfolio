import Hero from '../pages/AHero';
import useDocumentTitle from '../helpers/useDocumentTitle';

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