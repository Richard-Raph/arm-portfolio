import { useContext, useEffect } from 'react';
import TitleContext from '../context/TitleContext';

function useDocumentTitle(newTitle) {
    const { setTitle } = useContext(TitleContext);

    useEffect(() => {
        setTitle(newTitle);
    }, [newTitle, setTitle]);
}

export default useDocumentTitle;