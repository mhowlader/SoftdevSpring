# Mohtasim Howlader
# SoftDev2 pd8
# K16: Do You Even List?
# 2019-04-11

upper="ABCDEFGHIJKLMNOPQRSTUVQXYZ"
lower="abcdefghiklmnopqrstuvwxyz"
nums  = "0123456789"
def passmin(str):
    test = [ 1 if x in upper else 2 if x in lower else 3 if x in nums else 3 for x in str]
    return 1 in test and 2 in test and 3 in test

def pass_rating(str):
    test = [1 if x in upper else 2 if x in lower else 3 if x in nums else 4 if not x.isalnum() else 0 for x in str]
    return sum(set(test))

print(passmin("helloM"))

print("Keys2 : " + str(pass_rating("Keys2")))
print("Keys : " + str(pass_rating("Keys")))
print("K : " + str(pass_rating("K"))) 
