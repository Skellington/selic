let labels = ["JAN/17","FEV/17","MAR/17","ABR/17","MAI/17","JUN/17","JUL/17","AGO/17","SET/17","OUT/17","NOV/17","DEZ/17","JAN/18","FEV/18","MAR/18","ABR/18","MAI/18","JUN/18","JUL/18","AGO/18","SET/18","OUT/18","NOV/18","DEZ/18","JAN/19","FEV/19","MAR/19","ABR/19","MAI/19","JUN/19","JUL/19","AGO/19","SET/19","OUT/19","NOV/19","DEZ/19","JAN/20","FEV/20","MAR/20","ABR/20","MAI/20","JUN/20","JUL/20","AGO/20","SET/20","OUT/20","NOV/20","DEZ/20","JAN/21","FEV/21","MAR/21","ABR/21","MAI/21","JUN/21","JUL/21","AGO/21","SET/21","OUT/21","NOV/21","DEZ/21"];

let data = {
    labels: labels,
    datasets: [
        {
            label: "LFT",
            borderColor: '#00B0F0',
            backgroundColor: '#00B0F0',
            data:[12,12,11,11,11,11,12,12,11,11,11,11,12,12,11,11,11,11,12,12,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,12,12,12,12,13,13,12,13,13,13,13,13,12,12,12,12,13,13,12,12,12,12],
        },
        {
            label: "LTN",
            borderColor: '#827449',
            backgroundColor: '#827449',
            data:[14,14,14,13,13,13,14,14,14,13,13,13,14,15,15,14,14,14,15,15,15,14,14,14,14,14,14,14,14,14,14,14,14,13,13,13,14,15,15,14,14,14,14,14,14,13,13,13,13,13,13,12,12,12,11,11,11,10,10,10],
        },
        {
            label: "NTN-B",
            borderColor: '#DBC476',
            backgroundColor: '#DBC476',
            data:[92,92,92,92,89,89,89,88,88,88,87,87,129,129,129,129,148,148,148,145,145,145,144,144,144,143,143,143,140,140,140,139,139,139,138,138,139,138,138,138,138,138,138,135,135,135,134,134,134,133,133,133,130,130,131,130,130,130,129,129],
        },
        {
            label: "NTN-C",
            borderColor: '#000',
            backgroundColor: '#000',
            data:[3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1]
        },
        {
            label: "NTN-F",
            borderColor: '#CCCCCC',
            backgroundColor: '#CCCCCC',
            data:[23,23,23,23,23,23,22,22,22,22,22,22,21,21,21,21,21,21,20,20,20,20,20,20,18,18,18,18,18,18,17,17,17,26,26,26,26,26,26,26,26,26,25,25,25,25,25,26,24,24,24,24,24,24,23,23,23,23,23,23]
        },
        {
            label: "NTN-I",
            borderColor: '#97A9B8',
            backgroundColor: '#97A9B8',
            data:[190,190,189,188,188,187,187,186,185,184,183,182,181,181,180,179,180,179,180,181,180,179,178,179,178,177,177,176,175,174,174,185,184,192,191,191,190,189,188,188,188,188,187,186,185,185,184,183,185,184,184,183,182,183,182,182,181,181,181,180]
        },
        {
            label: "Outros",
            borderColor: '#002E59',
            backgroundColor: '#002E59',
            data:[10,11,10,9,9,9,10,9,9,9,9,9,9,10,8,8,8,8,8,8,8,8,7,7,7,7,8,7,7,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,6,6,6]
        }
    ]
};

let numberExpiredTitleTypeConfig = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        aspectRatio: 2,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }
};

let numberExpiredTitleTypeMobileConfig = {
    type: 'bar',
    data: data,
    options: {
        animation: false,
        responsive: true,
        aspectRatio: 1,     
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }
};
const numberExpiredTitleType = new Chart(
    document.getElementById('numberExpiredTitleType'),
    numberExpiredTitleTypeConfig
);

const numberExpiredTitleTypeMobile = new Chart(
    document.getElementById('numberExpiredTitleTypeMobile'),
    numberExpiredTitleTypeMobileConfig
);