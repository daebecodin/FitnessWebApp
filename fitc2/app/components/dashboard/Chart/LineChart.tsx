'use client';
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend} from 'chart.js'
import {LineChartdata} from "@/app/components/dashboard/Chart/FakeChartData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const LineChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as "top",
            },
            title: {
                text: "Fitness Graph",
                display: true
            }
        }

    }

    return <Line options={options} data={LineChartdata}/>
    }