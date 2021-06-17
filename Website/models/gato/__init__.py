from sqlalchemy import (
    Column, Integer, String
)
from Website.models import MyModel, db


class Position(db.Model, MyModel):
    id = Column(Integer, primary_key=True)
    player = Column(String(1), nullable=False)
    position = Column(Integer, nullable=False)