import TitleContext from './TitleContext';
import { useContext, useEffect } from 'react';

export default function useDocumentTitle(newTitle) {
    const { setTitle } = useContext(TitleContext);

    useEffect(() => {
        setTitle(newTitle);
    }, [newTitle, setTitle]);
}