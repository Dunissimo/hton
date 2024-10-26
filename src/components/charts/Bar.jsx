import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarChart = ({ data, colors = {} }) => {
    const chartData = {
        labels: ['1', '2', '3'],
        datasets: data.map((item) => ({
            label: item.name,
            data: item,
            backgroundColor: colors,
        })),
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
        },
    };

    return <Bar data={chartData} options={options} />;
}