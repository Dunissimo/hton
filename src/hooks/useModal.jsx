import { useState } from "react";

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const changeOpen = (newValue) => setIsOpen(newValue);

    return {isOpen, changeOpen};
}