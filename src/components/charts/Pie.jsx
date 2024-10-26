import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ data, colors }) => {
    console.log(data);
    
    const chartData = {
        labels: data.map(item => Object.values(item)),
        datasets: [
            {
                label: "Status Distribution",
                data: data.map((item) => 1),
                backgroundColor: colors,
            },
        ],
    };

    return <Pie data={chartData} />;
}