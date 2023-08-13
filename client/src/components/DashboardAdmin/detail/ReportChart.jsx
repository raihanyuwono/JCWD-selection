import Chart from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

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

function createData(transactions, labels) {
    const data = [];
    for (let label of labels) {
        const date = label.split("/").reverse().join("-");
        const index = transactions.findIndex((item) => item["date"] === date);
        data.push(index === -1 ? 0 : transactions[index]["total"]);
    }
    return data;
}

function ReportChart({ startDate, endDate }) {
    const [totalPayrolls, setTotalPayrolls] = useState([]);
    const chartRef = useRef(null);
    const chart = useRef(null);

    async function fetchTotalTransactions() {
        if (startDate <= endDate) {
            const queries = {
                start_date: startDate,
                end_date: endDate,
            };
            // const { data } = await getTotalTransactions(queries);
            const data = [];
            setTotalPayrolls(data);
        }
    }

    async function createChart() {
        const labels = createLabels(startDate, endDate);
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
        fetchTotalTransactions();
    }, [startDate, endDate]);

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
