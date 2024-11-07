import Window from '../components/Window';
import useDocumentTitle from '../helpers/useDocumentTitle';

export default function Home() {
  useDocumentTitle('Home 🏠 Richard Raphael');

  return (
    <Window>
      Home
    </Window>
  );
}