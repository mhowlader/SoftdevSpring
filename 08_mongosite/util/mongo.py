'''
Team macaroni: Maryann Foley and Anton Danylenko
SoftDev2 pd8
K07 -- Import/Export Bank
2019-03-06
'''

from pymongo import MongoClient
import json

from pprint import pprint

SERVER_ADDR="46.101.242.188"
client=MongoClient(SERVER_ADDR,27017)
db=client.mongolia
collection=db.pokedex
print(client.test_database)
print(db.list_collection_names())

'''
Population Table for the United States, 1960
This data set contains population data from the year 1960 in the United States. I am a bit confused because there is a "total" value for each age,
but that is not equal to the sum of males and females. I used the sum of the 2 because I believed that that may give me more consitency.
http://api.population.io/1.0/population/1960/United%20States/?format=json
The import was done with the line $ sudo mongoimport -d macaroni --drop --file=pop.json --jsonArray
--jsonArray is necessary because our json file was stored as an array and attempting to import the file without this gave the error
Failed: error unmarshaling bytes on document #0: JSON decoder out of sync - data changing underfoot?
'''

#
# #[pprint(post) for post in collection.find({"age":"400"})]
# male=0
# female=0
# malecnt=0
# femalecnt=0
#
# record=collection.find()
# for x in record:
#     pprint(x)
#     print(x["age"])
#     male+=int(x["males"])*int(x["age"])
#     female+=int(x["females"])*int(x["age"])
#     malecnt+=int(x["males"])
#     femalecnt+=int(x["females"])
#
# print("average female age in 1960:")
# print(female/femalecnt)
# print("average male age in 1960:")
# print(male/malecnt)
# print("average age in 1960:")
# print((female+male)/(femalecnt+malecnt))
#
# # I kind of forget how to do percentiles but here goes nothing
#
# tot=femalecnt+malecnt
# twentyfifth=int(.25*tot)
# seventyfifth=int(.75*tot)
# record=collection.find()
# for x in record:
#     twentyfifth-=int(x["males"])
#     twentyfifth-=int(x["females"])
#     seventyfifth-=int(x["females"])
#     seventyfifth-=int(x["males"])
#     if twentyfifth <=0:
#         print("25th percentile age:")
#         print(x["age"])
#         twentyfifth+=100000000000000000000000000000000
#     if seventyfifth <=0:
#         print("75th percentile age:")
#         print(x["age"])
#         break
