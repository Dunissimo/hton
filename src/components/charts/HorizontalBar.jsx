import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const HorizontalBarChart = ({ data, colors }) => {
    const priorityLevels = ["Низкий", "Средний", "Высокий"];
    const chartData = {
        labels: data.map(item => Object.values(item)),
        datasets: [
            {
                label: "Task Priority",
                data: priorityLevels.map(
                    (priority) => data.filter((item) => item.priority === priority).length
                ),
                backgroundColor: colors,
            },
        ],
    };

    const options = {
        indexAxis: "y", // Горизонтальная гистограмма
        responsive: true,
        plugins: {
            legend: { display: false },
        },
    };

    return <Bar data={chartData} options={options} />;
}