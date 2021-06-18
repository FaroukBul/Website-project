import os
from flask import Flask


def create_app(test_config=None):
    app = Flask(
        __name__,
        instance_relative_config=True
    )
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{app.instance_path}/Website.db"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = "dev"

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass


    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    
    from .models import db
    db.init_app(app)

    from .commands import database
    app.cli.add_command(database.init_db_command)
    # a simple page that says hello

    from .views import home
    app.register_blueprint(home.bp)

    return app