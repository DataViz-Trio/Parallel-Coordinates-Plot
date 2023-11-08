function unpack(rows, key) {
    return rows.map( (row) => {
        return parseFloat(row[key]);
    });
}

d3.csv('uscrime.csv', function(data) {   

    var plotData1 = [{
        type: 'parcoords',
        line: {
            color: unpack(data, 'So'),
            colorscale: [
                [0.0, 'red'],
                [1.0, 'blue']
            ]
        },
        dimensions: [
            {
                label: 'Mean Years of Schooling',
                values: unpack(data, 'Ed')
            },
            {
                label: 'Unemployment in males aged 14-24',
                values: unpack(data, 'U1')
            }, 
            {
                label: 'Unemployment in males aged 35-39',
                values: unpack(data, 'U2')
            },
            
        ]
    }];

    var plotData2 = [{
        type: 'parcoords',
        line: {
            color: unpack(data, 'So'),
            colorscale: [
                [0.0, 'red'],
                [1.0, 'blue']
            ]
        },
        dimensions: [
            {
                label: 'Median Family Income',
                values: unpack(data, 'Wealth')
            },
            {
                label: 'Income Inequality',
                values: unpack(data, 'Ineq')
            }, 
            {
                label: 'Crime Rates',
                values: unpack(data, 'Crime')
            }
        ]
    }];

    var plotData3 = [{
        type: 'parcoords',
        line: {
            color: unpack(data, 'So'),
            colorscale: [
                [0.0, 'red'],
                [1.0, 'blue']
            ]
        },
        dimensions: [
            {
                label: 'Crime Rates',
                values: unpack(data, 'Crime')
            },
            {
                label: 'Probabililty of Conviction',
                values: unpack(data, 'Prob')
            }, 
            {
                label: 'Average Months in Prison served by Offenders',
                values: unpack(data, 'Time')
            }
        ]
    }];

    Plotly.newPlot('myDiv1', plotData1);
    Plotly.newPlot('myDiv2', plotData2);
    Plotly.newPlot('myDiv3', plotData3);
});
