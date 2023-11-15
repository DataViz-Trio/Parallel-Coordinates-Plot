# Parallel Coordinates Plot

## Dataset Description and Data Processing

The PCP uses a crime dataset (different from the one used for treemap). Each row in this dataset corresponds to a state in the US and the columns correspond to certain metrics of that state. The relevant columns in this dataset include:

- So : indicator variable for a southern state (Used for color coding the lines)
- Ed : Mean years of schooling for that state
- U1 : Unemployment in males aged 14-24
- U2 : Unemployment in males aged 35-39
- Wealth : Median Family Income
- Ineq : Income Inequality : percentage of families earning below half the median income
- Crime : crime rate: number of offenses per 100,000 population 
- Prob : probability of imprisonment: ratio of number of commitments to number of offenses
- Time : average time in months served by offenders in state prisons before their first release

There were no NULL or BAD_VALUE values in the dataset. Hence, no data preprocessing was required for the dataset. The original dataset was available only as a text file but the javascript library required a csv file. Hence a simple Python code was written to convert the text file to a csv file.

## How to run

Open the pcp.html file in VSCode and start a Live Server using the "Live Server" extension.

## Implementation

The pcp.html file links the pcp.js file. The pcp.js file contains the logic of plotting the PCPs:

- The 'ucrime.csv' dataset is first loaded using the **d3** library.
- The plotting of the PCPs were done using the plotly.js library. Refer to the documentation[^1] for more information.
- The unpack function is used to extract and parse all the values of the *key* column from all the rows of the dataset. 
- The following code assigns the color red to all Northern States and blue to the sourthern states:
```js
line: {
    color: unpack(data, 'So'),
    colorscale: [
        [0.0, 'red'],
        [1.0, 'blue']
    ]
},
```
- The following code is used to plot values of the axes on the PCP:

```js
dimensions: [
    {
        label: 'Mean Years of Schooling',
        values: unpack(data, 'Ed')
    },
    {
        label: 'Unemployment in ages 14-24',
        values: unpack(data, 'U1')
    }, 
    {
        label: 'Unemployment in ages 35-39',
        values: unpack(data, 'U2')
    },
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
    },
    {
        label: 'Probabililty of Conviction',
        values: unpack(data, 'Prob')
    }, 
    {
        label: 'Prison Months served by Offenders',
        values: unpack(data, 'Time')
    }
]
```

[^1]: https://plotly.com/javascript/parallel-coordinates-plot/
