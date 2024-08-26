import Hero from '../components/Hero/HHero';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle('Home 🏠 Richard Raphael');

  return (
    <>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}