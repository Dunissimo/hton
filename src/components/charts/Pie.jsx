import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { useChart } from "../../hooks/useChart";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ data }) => {
    const [count, setCount] = useState({});
    const {colors, generateColors} = useChart(data);    

    useEffect(() => {
        data?.forEach(sender => {
            sender?.forEach((a) => {
                console.log(sender);
                generateColors(sender);
                
                setCount(prev => {
                    if (!prev[a]) {
                        prev[a] = 1;
                    } else {
                        prev[a]++;
                    }

                    return prev;
                });
            })
        });
        // console.log(count);

    }, [data])

    const chartData = {
        labels: Object.keys(count),
        id: "123",
        datasets: [
            {
                label: "Status Distribution",
                data: Object.values(count),
                backgroundColor: colors,
            },
        ],
    };

    return <Pie data={chartData} id="123" />;
}