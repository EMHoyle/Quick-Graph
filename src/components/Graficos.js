import React, { useState, useEffect } from 'react';
import { Line, Bar, Radar, Polar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

//CSS Styles
const useStyles = makeStyles(theme=>({
    graph1: {
        width: '500px',
        height: '250px',
        margin: '15px',
        marginTop: '60px',
        marginLeft: '100px',
        padding: '3px',
        border: '1px solid gray',
        boxShadow: '2px 2px 5px black',
        background: '#eeeeee',
        position: 'absolute'
    },
    graph2: {
        width: '500px',
        height: '250px',
        margin: '15px',
        marginTop: '60px',
        marginLeft: '700px',
        padding: '3px',
        border: '1px solid gray',
        boxShadow: '2px 2px 5px black',
        background: '#eeeeee',
        position: 'absolute'
    },
    graph3: {
        width: '500px',
        height: '250px',
        margin: '15px',
        marginTop: '350px',
        marginLeft: '100px',
        padding: '3px',
        border: '1px solid gray',
        boxShadow: '2px 2px 5px black',
        background: '#eeeeee',
        position: 'absolute'
    },
    graph4: {
        width: '500px',
        height: '250px',
        margin: '15px',
        marginTop: '350px',
        marginLeft: '700px',
        padding: '3px',
        border: '1px solid gray',
        boxShadow: '2px 2px 5px black',
        background: '#eeeeee',
        position: 'absolute'
    }
}));

const Graficos = () => {
    const classes = useStyles();
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday'],
            datasets: [
                {
                    label: 'label of thickness',
                    data: [32, 45, 12, 23, 52],
                    backgroundColor: [
                        'rgba(0, 99, 132, 0.6)',
                        'rgba(30, 99, 132, 0.6)',
                        'rgba(60, 99, 132, 0.6)',
                        'rgba(90, 99, 132, 0.6)',
                        'rgba(120, 99, 132, 0.6)'
                    ],
                    borderWidth: 4 
                }
            ]
        })
    }

    useEffect(()=>{
        chart()
    },[])
    return (
        <Box>
            <Typography variant="h2">GRAFICOS</Typography>
            <Box>
                <Box className={classes.graph1}>
                    <Line data={chartData}  options={{
                        responsive: true,
                        title: {text: 'Lorem Ipsum', display: true},
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}></Line>
                </Box>
                <Box className={classes.graph2}>
                    <Bar data={chartData}  options={{
                        responsive: true,
                        title: {text: 'Lorem Ipsum', display: true},
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            borderWidth: 2,
                            hoverBorderWidth: 0
                        }
                    }}></Bar>
                </Box>
                <Box className={classes.graph3}>
                    <Radar data={chartData}  options={{
                        responsive: true,
                        title: {text: 'Lorem Ipsum', display: true},
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            borderWidth: 2,
                            hoverBorderWidth: 0
                        }
                    }}></Radar>
                </Box>
                <Box className={classes.graph4}>
                    <Polar data={chartData}  options={{
                        responsive: true,
                        title: {text: 'Lorem Ipsum', display: true},
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            borderWidth: 2,
                            hoverBorderWidth: 0
                        }
                    }}></Polar>
                </Box>
            </Box>
        </Box>
    )
}

export default Graficos
