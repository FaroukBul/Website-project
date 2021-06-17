from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class MyModel:

    def add(self):
        db.session.add(self)
        commit_to_db()
    
    def update(self):
        commit_to_db()
    
    def delete(self):
        db.session.delete(self)
        commit_to_db()


def commit_to_db():
    db.session.commit()