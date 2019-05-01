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





print(greet())
print(greet())
print(greet())
