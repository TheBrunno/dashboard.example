const canvas1 = document.getElementById('graph_one');
const canvas2 = document.getElementById('graph_two');
const kpi1 = document.getElementById('kpi_one');
const kpi2 = document.getElementById('kpi_two');

new Chart(canvas1, {
    type: 'line',
    data: {
        labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        datasets: [{
            label: 'Temperatura',
            data: [30, 29, 28, 25, 22, 23],
            fill: false,
            borderColor: '#006DAC',
            backgroundColor: '#006DAC',
            tension: 0.3,
            order: 1
        },
        {
            label: 'Umidade',
            data: [80, 82, 80, 85, 80, 83],
            type: 'line',
            order: 2,
            fill: false,
            borderColor: '#002640',
            backgroundColor: '#002640',
            tension: 0.3,
        },
        {
            label: 'Umidade ideal',
            data: [82, 82, 82, 82, 82, 82],
            type: 'line',
            order: 3,
            fill: false,
            borderColor: '#5bfd4c',
            borderDash: [5, 5],
            tension: 0.3,
        },
        {
            label: 'Temperatura ideal',
            data: [27, 27, 27, 27, 27, 27],
            type: 'line',
            order: 4,
            fill: false,
            borderColor: '#5bfd4c',
            borderDash: [5, 5],
            tension: 0.3,
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            subtitle: {
                display: true,
                text: 'Temperatura e umidade nas ultimas horas'
            }
        }
    }
});

new Chart(canvas2, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Temperatura média',
            data: [22, 24, 27, 23, 20, 18],
            fill: false,
            borderColor: '#006DAC',
            backgroundColor: '#006DAC',
            tension: 0.3,
            order: 2
        },
        {
            label: 'Umidade média',
            data: [90, 89, 93, 87, 88, 82],
            type: 'bar',
            order: 1,
            fill: false,
            borderColor: '#002640',
            backgroundColor: '#002640',
            tension: 0.3,
        },
        {
            label: 'Umidade ideal',
            data: [82, 82, 82, 82, 82, 82],
            type: 'line',
            order: 3,
            fill: false,
            borderColor: '#5bfd4c',
            borderDash: [5, 5],
            tension: 0.3,
        },
        {
            label: 'Temperatura ideal',
            data: [27, 27, 27, 27, 27, 27],
            type: 'line',
            order: 4,
            fill: false,
            borderColor: '#5bfd4c',
            borderDash: [5, 5],
            tension: 0.3,
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            subtitle: {
                display: true,
                text: 'Temperatura e umidade média mensalmente'
            }
        }
    }
});

new Chart(kpi1, {
    type: 'doughnut',
    data: {
        labels: [
            'Temperatura',
            'Umidade'
        ],
        datasets: [{
            data: [6, 5],
            backgroundColor: [
                '#006DAC',
                '#002640',
            ],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            subtitle: {
                display: true,
                text: 'Quantidade de horas fora do ideal'
            }
        }
    }
});

new Chart(kpi2, {
    type: 'doughnut',
    data: {
        labels: [
            'Temperatura',
            'Umidade'
        ],
        datasets: [{
            data: [5, 5],
            backgroundColor: [
                '#006DAC',
                '#002640',
            ],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            subtitle: {
                display: true,
                text: 'Quantidade da média de meses fora do ideal'
            }
        }
    }
});
