import Hero from '../components/Hero/Hero';
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