import { useEffect, useState } from "react";

const generateHex = () => {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

const generateHexs = (num) => {
    const colors = [];

    for (let i = 0; i < num; i++) {
        colors.push(generateHex());
    }

    return colors;
}

export const useChart = (data) => {
    const [colors, setColor] = useState({});

    const generateColors = (data) => {
        data.forEach(t => {
            setColor(color => {
                if (!color[t]) {
                    color[t] = [generateHex()];
                } else {
                    color[t] = generateHexs(data.length);
                }
    
                return color;
            });
        })
    }

    return { colors, generateColors };
}