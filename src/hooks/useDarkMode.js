import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue)

    useEffect(() => {
        if (someValue) {
            window.document.body.classList.add('dark-mode')
        } else {
            window.document.body.classList.remove('dark-mode')
        }
    }, [someValue])

    return [someValue, setSomeValue]
}

export default useDarkMode;