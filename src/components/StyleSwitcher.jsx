import React, { useState, useEffect } from "react";
    
export const StyleSwitcher = () => {
    const [userStyle, setUserStyle] = useState(null);
    const [isUserStyleApplied, setIsUserStyleApplied] = useState(false);

    useEffect(() => {
        const savedStyle = localStorage.getItem("userStyle");
        const savedStatus = localStorage.getItem("isUserStyleApplied") === "true";

        if (savedStyle && savedStatus) {
            setUserStyle(savedStyle);
            setIsUserStyleApplied(true);
            applyStyle(savedStyle);
        }
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "text/css") {
            const reader = new FileReader();
            reader.onload = (e) => {
                const cssContent = e.target.result;
                setUserStyle(cssContent);
                setIsUserStyleApplied(true);
                applyStyle(cssContent);
                localStorage.setItem("userStyle", cssContent);
                localStorage.setItem("isUserStyleApplied", "true");
            };
            reader.readAsText(file);
        } else {
            alert("Пожалуйста, выберите CSS файл.");
        }
    };

    // Функция для применения или удаления пользовательского стиля
    const applyStyle = (cssContent) => {
        let styleTag = document.getElementById("user-style");
        if (styleTag) {
            styleTag.innerHTML = cssContent || "";
        } else if (cssContent) {
            styleTag = document.createElement("style");
            styleTag.id = "user-style";
            styleTag.innerHTML = cssContent;
            document.head.appendChild(styleTag);
        }
    };

    // Переключение между базовым и пользовательским стилем
    const toggleStyle = () => {
        if (isUserStyleApplied) {
            applyStyle(null);
            setIsUserStyleApplied(false);
            localStorage.removeItem("isUserStyleApplied");
            localStorage.removeItem("userStyle");
        } else if (userStyle) {
            applyStyle(userStyle);
            setIsUserStyleApplied(true);
            localStorage.setItem("isUserStyleApplied", "true");
        }
    };

    return (
        <div>
            <h1>Динамическая загрузка CSS</h1>
            <input type="file" accept=".css" onChange={handleFileChange} />
            <button className="button" onClick={toggleStyle}>
                {isUserStyleApplied ? "Вернуться к базовому стилю" : "Применить загруженный стиль"}
            </button>
        </div>
    );
}