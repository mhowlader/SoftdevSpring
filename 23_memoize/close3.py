# Mohtasim Howlader
# SoftDev1 pd8
# K23 -- Memoize With Closure
# 2019-05-02

import random


def make_html_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

@make_html_heading
def greet():
    greetings=["hello",'welcome','ayo','bonjour','word up']
    return random.choice(greetings)

def memoize(f):
    memo ={}
    def helper(x):
        if x in memo:
            return memo[x]
        memo[x] = f(x)
        return memo[x]
    return helper

@memoize
def fib(n):
    if n==0:
        return 0
    elif n==1:
        return 1
    else:
        return fib(n-1) + fib(n-2)



print(fib(5))
