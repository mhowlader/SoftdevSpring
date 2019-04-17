# Mohtasim Howlader and Zane Wang ( Team MoZarella)
# SoftDev1 pd8
# K19 -- Ready, Set, Math!
# 2019-04-17


def union(list1, list2):
    #return [x if x not in list2 + intersect(list1, list2) + [y if y not in list1 for y in list2 for x in list1]
    return [x for x in list1 + [y for y in list2 if y not in list1] ]

print(union([1,2,3],[2,3,4]))

def intersect(list1, list2):
    return [x for x in list1 if x in list2]

print(intersect([1,2,3],[2,3,4]))

def setdif(list1,list2):
    return [x for x in list1 if x not in list2]

print(setdif([1,2,3],[2,3,4]))
print(setdif([2,3,4],[1,2,3]))

def symdif(list1, list2):
    return union(setdif(list1,list2),setdif(list2,list1))

print(symdif([1,2,3],[2,3,4]))

def cartesian(list1, list2):
    return [(x,y) for x in list1 for y in list2]

print(cartesian([1,2],["red","blue"]))
