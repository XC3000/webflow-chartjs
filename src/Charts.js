import React, { useEffect } from "react";
import data from "./data/data";
import Chart from "chart.js";

const Charts = () => {
    const dataPoints = data.length;

    useEffect(() => {
        const ctx = document.getElementById("target").getContext("2d");
        new Chart(ctx, {
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
                        backgroundColor: "rgb(3, 78, 0, 0.6)",
                        borderColor: "rgb(3, 78, 0, 0.6)",
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
        document.getElementById("target").prepend("<span>yoyo</span>");
    }, [dataPoints]);

    return (
        <div className="charts-container">
            <canvas id="target"></canvas>
            <div className="data-overlay">
                <span>
                    Total Investment: ₹{" "}
                    <span className="data-total">
                        {data[dataPoints - 3]["investedAmount"].toFixed(2)}
                    </span>
                </span>
                <span>
                    Total Accumulation: ₹{" "}
                    <span className="data-total">
                        {data[dataPoints - 3]["accumulatedAmount"].toFixed(2)}
                    </span>
                </span>
            </div>
        </div>
    );
};

export default Charts;
