import Window from '../components/Window';
import useDocumentTitle from '../helpers/useDocumentTitle';

export default function Blog() {
    useDocumentTitle('Blog 📰 Richard Raphael');

    return (
        <Window>
            Blog
        </Window>
    );
}