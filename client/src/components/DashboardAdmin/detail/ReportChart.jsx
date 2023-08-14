import Chart from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { getAllTotal } from "../../../api/payroll";

const chartOptions = {
    w: "full",
    bgColor: "primaryLight",
    p: "12px",
    borderRadius: "8px",
};

function setConfig(labels, sales) {
    return {
        type: "line",
        data: {
            labels,
            datasets: [
                {
                    label: "Payroll",
                    data: sales,
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom",
                },
                title: {
                    display: true,
                    text: "Total Payroll",
                },
            },
        },
    };
}

function setDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day < 10 ? "0" + day : day}/${
        month < 10 ? "0" + month : month
    }/${year}`;
}

function createLabels(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const labels = [];
    for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
        const temp = setDate(date);
        labels.push(temp);
    }
    return labels;
}

function createData(totalPayrolls, labels) {
    const data = [];
    for (let label of labels) {
        const date = label.split("/").reverse().join("-");
        const index = totalPayrolls.findIndex((item) => item["date"] === date);
        data.push(index === -1 ? 0 : totalPayrolls["total_payroll"]);
    }
    return data;
}

function ReportChart() {
    const [totalPayrolls, setTotalPayrolls] = useState([]);
    const chartRef = useRef(null);
    const chart = useRef(null);

    async function fetchTotalPayrolls() {
        const { data } = await getAllTotal();
        setTotalPayrolls(data);
    }

    async function createChart() {
        const labels = createLabels("2023-08-01", "2023-08-14");
        const data = createData(totalPayrolls, labels);
        const config = setConfig(labels, data);

        if (chartRef.current) {
            if (chart.current) {
                chart.current.destroy();
            }
            chart.current = new Chart(chartRef.current, config);
        }
    }

    useEffect(() => {
        fetchTotalPayrolls();
    }, []);

    useEffect(() => {
        createChart();
    }, [totalPayrolls]);

    return (
        <Box {...chartOptions}>
            <canvas ref={chartRef} />
        </Box>
    );
}

export default ReportChart;
