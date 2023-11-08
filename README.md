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