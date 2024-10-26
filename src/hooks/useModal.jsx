import { useEffect, useState } from "react";

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log(isOpen);
        
    }, [isOpen])
    
    const changeOpen = (newValue) => setIsOpen(newValue);

    return {isOpen, changeOpen};
}