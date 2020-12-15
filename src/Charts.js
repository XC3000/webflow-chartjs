import React, { useEffect } from "react";
import data from "./data/data";
import Chart from "chart.js";

const Charts = () => {
    useEffect(() => {
        const ctx = document.getElementById("target").getContext("2d");
        const sipChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: data.map(({ month }) => month),
                datasets: [
                    {
                        label: "Accumulated Amount",
                        backgroundColor: "rgba(0,226,178, 0.4)",
                        borderColor: "rgba(0,226,178, 0.4)",
                        data: data.map(
                            ({ accumulatedAmount }) => accumulatedAmount
                        ),
                    },
                    {
                        label: "Invested Amount",
                        backgroundColor: "rgb(2,16,48)",
                        borderColor: "rgb(2,16,48)",
                        data: data.map(({ investedAmount }) => investedAmount),
                    },
                ],
            },
            options: {
                fill: false,
                title: {
                    display: true,
                    text: "SIP Calculator",
                },
                scales: {
                    yAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: "Amount",
                            },
                        },
                    ],
                    xAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: "Months",
                            },
                            ticks: {
                                min: 1,
                                stepSize: 3,
                            },
                        },
                    ],
                },
                elements: {
                    point: {
                        radius: 2,
                        hoverRadius: 5,
                        hoverBorderWidth: 3,
                        borderColor: "blue",
                    },
                },
                tooltips: {
                    callbacks: {
                        title: (toolTipItem) =>
                            `Month: ${toolTipItem[0]["label"]}`,
                    },
                },
            },
        });
        document.getElementById("target").prepend(sipChart.generateLegend());
    }, []);

    return <canvas id="target"></canvas>;
};

export default Charts;
