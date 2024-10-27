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
        data[0].length

        setColor(generateHexs(data.length));
    }

    return { colors, generateColors };
}