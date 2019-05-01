import random


def make_html_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

def greet():
    greetings=["hello",'welcome','ayo','bonjour','word up']
    return random.choice(greetings)

greet_heading = make_html_heading(greet)

print(greet_heading())
