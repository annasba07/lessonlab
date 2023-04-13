print("Hello from main.py")


from flask import Blueprint, jsonify, request
from .lesson_plan_generator import generate_lesson_plan, generate_materials

api = Blueprint('api', __name__)

print('hellow world')
@api.route('/generate', methods=['POST'])
def generate():
    print('generate is being hit')
    age = request.json['age']
    topic = request.json['topic']
    lesson_plan = generate_lesson_plan(age, topic)
    return jsonify({"lesson_plan": lesson_plan})

@api.route('/generate-materials', methods=['POST'])
def generate_materials_route():
    materials = generate_materials()
    return jsonify({"materials": materials})
