import Hero from '../components/Hero/HHero';
import HAbout from '../components/About/HAbout';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle('Home 🏠 Richard Raphael');

  return (
    <>
      <main>
        <Hero />
        <HAbout />
      </main>
      <footer></footer>
    </>
  );
}