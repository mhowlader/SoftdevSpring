# Team Mozarella (Mohtasim Howlader and Zane Wang)
# Softdev pd8
# K#06: Yummy Mango Py
# 2019-02-28

from pymongo import MongoClient
SERVER_ADDR='157.230.12.32'
client = MongoClient(SERVER_ADDR, 27017)
db = client.test
collection = db.restaurants

def find_borough(borough):
    bors = []
    for doc in collection.find({"borough" : borough}):
        bors.append(doc)
    return bors

def find_zip(zip_code):
    zips = []
    for doc in collection.find({"address.zipcode" : zip_code}):
        zips.append(doc)
    return zip

def find_zip_grade(zip_code, grade):

    zips= []
    for doc in collection.find({"address.zipcode" : zip_code, "grades.0.grade" : grade}):
        zips.append(doc)
    return zips

def find_zip_score(zip_code, score):

    zips = []
    for doc in collection.find({"address.zipcode" : zip_code, "grades.0.score" : {'$lt': score}}):
        zips.append(doc)
    return zips


print(find_borough("Queens"))
print(find_zip("10282"))
print(find_zip_grade("10282", "B"))
print(find_zip_score("10282", 10))
