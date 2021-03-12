#
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas as pd

sns.set()

knicks = pd.read_csv('knicks.csv')

graph = sns.relplot(x=knicks.Year, y=knicks.Rank, kind="line", data=knicks)

plt.gca.invert_yaxis()
# at each point, display Rating score

# Reverse y axis,

plt.show()


# df = sns.load_dataset("knicks.csv")

# print(df)

# sns.set_theme()  # look up themes
