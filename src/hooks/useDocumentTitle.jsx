import { useContext, useEffect } from 'react';
import TitleContext from '../contexts/TitleContext';

export default function useDocumentTitle(newTitle) {
    const { setTitle } = useContext(TitleContext);

    useEffect(() => {
        setTitle(newTitle);
    }, [newTitle, setTitle]);
}