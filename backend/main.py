from flask import Flask
from flask_cors import CORS
from app.routes import api
import secrets

app = Flask(__name__)
CORS(app)

app.secret_key = secrets.token_hex(16)

app.register_blueprint(api, url_prefix='/api')
print(app.url_map)
if __name__ == "__main__":
    app.run(port=8080)
