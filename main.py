#
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas as pd

sns.set()

knicks = pd.read_csv('knicks.csv')

# graph = sns.relplot(x=knicks.Year, y=knicks.League_Rank,
#                     kind="line", data=knicks)

sns.set_style("darkgrid")
# sns.set_style("white")
# sns.set_style("dark")
# sns.set_style("ticks")


sns.lineplot(data=knicks, x=knicks.Year, y=knicks.Rank)

plt.ylim(reversed(plt.ylim()))

plt.show()
