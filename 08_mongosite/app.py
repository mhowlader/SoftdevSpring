# Team Mongolia (Mohtasim Howlader, Maryann Foley, Derek Chan
# SoftDev1 pd8
# K08 -- Ay Mon, Go Git It From Yer Flask
# 2019-03-08

from util import mongo
from flask import session, Flask, render_template, request, redirect, url_for
import os
app = Flask(__name__)
app.secret_key=os.urandom(32)# 32 bits of random data as a string

@app.route('/')
def home():
    return render_template("home.html")


@app.route('/pokepage', methods=["POST"])
def findpoke():
    res = mongo.find_pokemon(request.form['pokeid'])
    name = res['name']
    img = res['img']
    return render_template("pokeresult.html", pokename = name, imglink = img)

@app.route('/changeip', methods=["POST"])
def change():
    mongo.build_db(request.form['ipnum'])
    return redirect(url_for('home'))





if __name__ == "__main__":
    app.debug = True
    app.run()
