import { useState } from 'react';

function useLocalStorage(key: string, initialValue: any) {
    const storedValue = localStorage.getItem(key);
    const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

    const setStoredValue = (newValue: any) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setStoredValue];
}

export default useLocalStorage;
