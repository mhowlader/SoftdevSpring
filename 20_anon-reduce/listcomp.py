# Team Papaya (Mohtasim Howlader and Johnny Wong)
# SoftDev1 pd8
# K20 -- Reductio ad Absurdem
# 2019-04-18

file = open('romeo.txt', 'r').read().split()

newfile = [x.strip() for x in file ]

def freq(word):
    return [x for x in newfile if word in x]


print(freq("Romeo"))

def totalfreq()
