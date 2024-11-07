import Window from '../components/Window';
import useDocumentTitle from '../helpers/useDocumentTitle';

export default function About() {
    useDocumentTitle('About ℹ Richard Raphael');

    return (
        <Window>
            About
        </Window>
    );
}