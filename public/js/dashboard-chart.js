    setTimeout(function() {

        /********************** Yearly Finance Chart ****************************/
        var yearly_finance_options = {
            series: [{
                name: 'Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }],

            colors: ["#337aaf"],
            chart: {
                type: 'bar',
                height: 350
            },
            legend: {
                position: 'top'
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
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: 'Values'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return "DH " + val + " thousands"
                    }
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#assesment"), yearly_finance_options);
        chart.render();

        /********************** Parameter Result Chart ****************************/
        var parameter_options = {
            series: [25, 75],
            colors: ["#b0b0b0", "#e71822"],
            labels: ["Complete", "Cancelled"],
            chart: {
                type: 'donut',
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


        /********************** Competitors Chart ****************************/
        var competitors_options = {
            series: [25, 30, 45],
            colors: ["#b0b0b0", "#155483", "#337aaf"],
            labels: ["Peer", "Food", "Services"],
            chart: {
                type: 'donut',
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

        var potentialChart = new ApexCharts(document.querySelector("#competitors"), competitors_options);
        potentialChart.render();

    }, 2000);