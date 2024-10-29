import Hero from '../pages/HHero';
import HAbout from '../pages/HAbout';
import useDocumentTitle from '../helpers/useDocumentTitle';

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