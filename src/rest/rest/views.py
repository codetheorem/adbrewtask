from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, os
from pymongo import MongoClient
from bson import json_util
import json

mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db = MongoClient(mongo_uri)['test_db']
class TodoListView(APIView):

    collection = db.todos


    def get(self, request):
        # Implement this method - return all todo items from db instance above.
        todo_data = list([])
        for todo in self.collection.find():
            todo_data.append(todo)
        return Response(json.loads(json_util.dumps(todo_data)), status=status.HTTP_200_OK)
        
    def post(self, request):
        # Implement this method - accept a todo item in a mongo collection, persist it using db instance above.
        self.collection.insert_one(request.data).inserted_id
        return Response('OK!!!',status=status.HTTP_200_OK)

