'''
Team macaroni: Maryann Foley and Anton Danylenko
SoftDev2 pd8
K07 -- Import/Export Bank
2019-03-06
'''

from pymongo import MongoClient
import json

from pprint import pprint

SERVER_ADDR="68.183.120.187"
client=MongoClient(SERVER_ADDR,27017)
db=client.mongolia
collection=db.pokedex
with open('pokedex.json') as f:
    data = json.load(f)
    collection.insert_many(data["pokemon"])


def drop():
    client.drop_database( "mongolia")

def build_db(ipaddress):
    drop()
    client.close()
    client = MongoClient(ipaddress, 27017)
    db = client['mongolia']
    collection = db['pokedex']
    with open('pokedex.json') as f:
        data = json.load(f)
        collection.insert_many(data["pokemon"])

def find_pokemon(name):
    return collection.find_one({"name":name})


#print(collection.find_one())
