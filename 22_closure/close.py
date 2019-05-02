# Mohtasim Howlader
# SoftDev2 pd8
# K22 -- Closure
# 2019-05-01

def repeat(word):
    def inner(n):
        return word*n
    return inner

r1 = repeat('hello')
print(r1(2))

def make_counter():
    x = 0
    def inner():
        nonlocal x
        x+=1
        return x
    def val():
        nonlocal x
        return x
    return inner,val

ret1,val1=make_counter()
ret1()
ret1()
print(val1())
