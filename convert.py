import pandas as pd

with open('uscrime.txt', 'r') as file:
    # Skip the first line
    next(file)
    lines = file.readlines()

data = [tuple(map(float, line.strip().split())) for line in lines]

df = pd.DataFrame(data, columns=['M','So','Ed','Po1','Po2','LF','M.F','Pop','NW','U1','U2','Wealth','Ineq','Prob','Time','Crime'])

df.to_csv('output.csv', index=True)

print('Data (excluding the first line) has been successfully converted to Excel format.')