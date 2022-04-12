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
                stacked: true,
                title: {
                    display: true,
                    text: 'Quantidade'
                },
            }
        }
    }
};

const numberExpiredTitleType = new Chart(
    document.getElementById('numberExpiredTitleType'),
    numberExpiredTitleTypeConfig
);

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
                stacked: true,
                title: {
                    display: true,
                    text: 'Quantidade'
                },
            }
        }
    }
};

const numberExpiredTitleTypeMobile = new Chart(
    document.getElementById('numberExpiredTitleTypeMobile'),
    numberExpiredTitleTypeMobileConfig
);

data = {
    labels: labels,
    datasets: [
        {
            label: "LFT",
            borderColor: '#00B0F0',
            backgroundColor: '#00B0F0',
            data:[1.3891,1.4716,1.4556,1.4848,1.5072,1.5559,1.5882,1.6324,1.6135,1.6375,1.6581,1.6784,1.7184,1.6845,1.7369,1.7742,1.7941,1.8224,1.8912,1.8748,1.9331,1.9845,2.0147,2.0495,2.1396,2.0757,2.1159,2.1594,2.2018,2.2327,2.2757,2.3069,2.3433,2.3747,2.4054,2.4100,2.4328,2.4434,2.2956,2.3387,2.3791,2.3727,2.4061,2.4386,2.3227,2.3480,2.3681,2.4125,2.4565,2.5848,2.5226,2.5662,2.5931,2.6348,2.7033,2.7608,2.5315,2.6507,2.7255,2.7838],
        },
        {
            label: "LTN",
            borderColor: '#827449',
            backgroundColor: '#827449',
            data:[1.0991,1.1639,1.1383,1.1819,1.2112,1.1542,1.2068,1.2830,1.2160,1.2467,1.2785,1.1931,1.2489,1.2857,1.2413,1.3255,1.3376,1.2026,1.2687,1.2889,1.1906,1.2361,1.2684,1.1469,1.2081,1.2448,1.1403,1.1880,1.2361,1.1658,1.2336,1.2545,1.1603,1.2027,1.2548,1.1777,1.2315,1.2681,1.2851,1.2066,1.2580,1.3184,1.1717,1.2679,1.4104,1.4368,1.5390,1.6483,1.7345,1.8229,1.8463,1.6378,1.7148,1.7661,1.6956,1.6958,1.7485,1.4469,1.4847,1.5326],
        },
        {
            label: "NTN-B",
            borderColor: '#DBC476',
            backgroundColor: '#DBC476',
            data:[1.4476,1.5077,1.5155,1.5134,1.4015,1.4140,1.4730,1.4730,1.5128,1.5108,1.4945,1.5061,1.5769,1.5737,1.5928,1.5995,1.5293,1.5185,1.5623,1.4375,1.4467,1.5527,1.5532,1.5765,1.6528,1.6562,1.6936,1.7232,1.6566,1.7189,1.7615,1.7365,1.8021,1.8639,1.8080,1.8412,1.8790,1.9535,1.7939,1.8312,1.8396,1.8344,1.9569,1.8087,1.7730,1.8079,1.8549,1.9934,2.0079,2.0001,2.0001,2.1095,2.0550,2.1025,2.1322,2.0879,2.1321,2.0886,2.1702,2.1947],
        },
        {
            label: "NTN-F",
            borderColor: '#000',
            backgroundColor: '#000',
            data:[0.5883,0.6161,0.6314,0.6375,0.6376,0.6531,0.6522,0.6624,0.6813,0.6879,0.6912,0.6641,0.6783,0.6946,0.7126,0.7214,0.6910,0.6771,0.6648,0.6467,0.6730,0.7214,0.7363,0.7445,0.7260,0.7475,0.7555,0.7631,0.7883,0.8209,0.8102,0.8145,0.8443,0.8724,0.8708,0.8861,0.8728,0.8855,0.8692,0.9041,0.9213,0.9272,0.9220,0.9106,0.9170,0.9382,0.9533,0.9946,0.7881,0.7858,0.7762,0.7973,0.8119,0.8311,0.7946,0.7760,0.7829,0.7484,0.7752,0.8076]
        },
        {
            label: "Outros",
            borderColor: '#002E59',
            backgroundColor: '#002E59',
            data:[0.1169,0.1191,0.1213,0.1202,0.1186,0.1063,0.1064,0.1070,0.1091,0.1084,0.1086,0.1085,0.1100,0.1117,0.1128,0.1131,0.1130,0.1132,0.1139,0.1164,0.1163,0.1200,0.1214,0.1231,0.1209,0.1223,0.1239,0.1251,0.1282,0.1323,0.1321,0.1348,0.1364,0.1365,0.1368,0.1345,0.1375,0.1400,0.1356,0.1378,0.1417,0.1450,0.1462,0.1497,0.1522,0.1563,0.1568,0.1585,0.1617,0.1681,0.1682,0.1216,0.1260,0.1299,0.1274,0.1242,0.1244,0.1243,0.1254,0.1232]
        }
    ]
};

let valueByTitleTypeConfig = {
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
                stacked: true,
                title: {
                    display: true,
                    text: 'Volume financeiro (R$ trilhões)'
                },
            }
        },
    }
};

const valueByTitleType = new Chart(
    document.getElementById('valueByTitleType'),
    valueByTitleTypeConfig
);

let valueByTitleTypeMobileConfig = {
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
                stacked: true,
                title: {
                    display: true,
                    text: 'Volume financeiro (R$ trilhões)'
                },
            }
        },
    }
};

const valueByTitleTypeMobile = new Chart(
    document.getElementById('valueByTitleTypeMobile'),
    valueByTitleTypeMobileConfig
);

data = {
    labels: labels,
    datasets: [
        {
            label: "Outros",
            borderColor: '#002E59',
            backgroundColor: '#002E59',
            data:[3323,3370,3445,3522,3602,3623,3649,3690,3721,3853,3887,3926,3963,3995,4097,4064,4091,4123,4161,4197,4227,4264,4274,4306,4308,4057,4154,4175,4188,4202,4254,4286,4329,4393,4428,4412,4461,4479,4524,4540,4567,4605,4654,4682,4726,4797,4845,4881,4906,4946,4989,5033,5056,5092,4930,4925,4951,4987,4989,5036],
        },
        {
            label: "Fundo regulamentado pela CVM",
            borderColor: '#CCCCCC',
            backgroundColor: '#CCCCCC',
            data:[15077,15175,15332,15442,15535,15756,15894,16030,16182,16294,16404,16581,16699,16775,16833,16986,17135,17265,17359,17490,17568,17785,17899,18012,17851,17977,18126,18288,18420,18546,18736,18979,19210,19458,19669,19942,20238,20499,20826,21073,21330,21624,21948,22804,23190,23600,23961,24394,24767,25155,25694,26121,26598,27095,25658,25804,26158,26431,26644,27012],
        },
        {
            label: "Pessoa física",
            borderColor: '#827449',
            backgroundColor: '#827449',
            data:[337,349,359,538,555,697,703,779,1428,27371,68939,89241,90101,90880,91690,92434,93414,95126,96849,102134,104769,106246,107316,108670,109636,110625,111634,113952,119783,121700,123410,125716,133136,137777,139531,141931,143839,145438,153516,162483,177021,187912,193290,223159,253213,281426,307843,318586,325193,328107,335550,340681,346761,351543,300772,308283,313519,259249,242450,252620]
        },
        {
            label: "Pessoa jurídica não financeira",
            borderColor: '#00B0F0',
            backgroundColor: '#00B0F0',
            data: [184,191,196,226,240,260,272,287,640,3490,3597,6153,6196,6249,6315,6363,6455,6585,6673,6843,6967,7065,7143,7212,7309,7385,7471,7609,7766,7873,7967,8117,8245,8565,8730,8919,9063,9185,9723,10390,11056,11932,12336,12836,13385,13923,14388,14935,15425,15736,16338,16815,17288,17743,13344,13958,14503,15136,15206,15916],
        }
    ]
};

let numberOfCustomersByTypeConfig = {
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
                stacked: true,
                title: {
                    display: true,
                    text: 'Quantidade (milhares)'
                },
            }
        },
    }
};

const numberOfCustomersByType = new Chart(
    document.getElementById('numberOfCustomersByType'),
    numberOfCustomersByTypeConfig
);

let numberOfCustomersByTypeMobileConfig = {
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
                stacked: true,
                title: {
                    display: true,
                    text: 'Quantidade (milhares)'
                },
            }
        },
    }
};

const numberOfCustomersByTypeMobile = new Chart(
    document.getElementById('numberOfCustomersByTypeMobile'),
    numberOfCustomersByTypeMobileConfig
);

data = {
    labels: labels,
    datasets: [
        {
            label: "Câmara garantida",
            borderColor: '#DBC476',
            backgroundColor: '#DBC476',
            data:[13609,13527,13550,13476,13502,12987,12931,12859,13230,14847,45278,54188,55302,55592,55674,55767,55938,56166,56309,55945,56042,56274,56299,56439,56537,56672,56916,57433,57665,58166,58677,60109,62423,63878,64938,68028,70660,71833,74099,75771,82631,86972,89658,118025,148338,176304,200866,209510,217670,217959,219844,221826,223131,225306,33889,35662,37686,39584,41253,42673],
        },
        {
            label: "Livre movimentação",
            borderColor: '#002E59',
            backgroundColor: '#002E59',
            data: [16486,16412,16567,16903,17071,17339,17454,17656,18676,47654,89523,113295,114275,115210,114535,114888,116069,117809,119741,125394,128254,129952,131201,132767,134117,135221,136525,139134,146557,148669,150563,153263,160862,166075,168191,170934,173279,175235,184738,196282,212024,227326,234318,267982,300987,331916,359407,371533,379232,379089,388224,394234,401515,319394,195140,203587,212188,222946,234180,245600],
        },
        {
            label: "Outros",
            borderColor: '#00B0F0',
            backgroundColor: '#00B0F0',
            data:[2230,2232,2236,2236,2243,2244,2249,2247,2254,2223,2099,2119,2117,2108,2115,2119,2123,2121,2129,1966,1977,1982,1991,2010,2021,2041,2056,2061,2088,2099,1994,2091,2118,2156,2174,2195,2219,2249,2283,2311,2352,2423,2506,2592,2726,2826,2935,3034,3151,3079,3203,3294,3367,3452,3535,3583,3651,3725,3796,3879],
        },
    ]
};

let numberOfAccountsByTypeConfig = {
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
                stacked: true,
                title: {
                    display: true,
                    text: 'Quantidade (milhares)'
                },
            }
        },
    }
};

const numberOfAccountsByType = new Chart(
    document.getElementById('numberOfAccountsByType'),
    numberOfAccountsByTypeConfig
);

let numberOfAccountsByTypeMobileConfig = {
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
                stacked: true,
                title: {
                    display: true,
                    text: 'Quantidade (milhares)'
                },
            }
        },
    }
};

const numberOfAccountsByTypeMobile = new Chart(
    document.getElementById('numberOfAccountsByTypeMobile'),
    numberOfAccountsByTypeMobileConfig
);