    setTimeout(function() {

        /********************** All Assesment Chart ****************************/
        //Column Chart Progress
        var progress_chart = {
            colors: ["#37a4e6", "#638ca6", "#61ba45"],
            series: [{
                name: 'Peer group',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'Others',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
                name: 'Ecommerce',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            chart: {
                type: 'bar',
                height: 350,
                width: '100%'
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            yaxis: {
                title: {
                    text: ''
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#assesment"), progress_chart);
        chart.render();

        /********************** Parameter Result Chart ****************************/
        var parameter_options = {
            series: [60, 30, 10],
            colors: ["#2bbfba", "#5dd0fb", "#cdcdcd"],
            labels: ["Peer group", "Ecommerce", "Others"],
            chart: {
                type: 'pie',
                height: 300
            },
            legend: {
                show: true,
                position: 'bottom'
            },

            dataLabels: {
                enabled: true
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function(val) {
                        return val + "%"
                    },
                    title: {
                        formatter: function(seriesName) {
                            return ''
                        }
                    }
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };

        var potentialChart = new ApexCharts(document.querySelector("#parameter-result"), parameter_options);
        potentialChart.render();


        /********************** Value Chart ****************************/
        //Column Chart Progress
        var progress_chart = {
            colors: ["#00bb5f", "#da0000", "#f18a19"],
            series: [{
                name: 'Revnue',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'Income',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
                name: 'Other',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            chart: {
                type: 'bar',
                height: 350,
                width: '100%'
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            yaxis: {
                title: {
                    text: ''
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#value"), progress_chart);
        chart.render();


    }, 2000);