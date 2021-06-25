from sqlalchemy import (
    Column, Integer, String
)
from Website.models import MyModel, db


class Position(db.Model, MyModel):
    id = Column(Integer, primary_key=True)
    player = Column(String(1), nullable=False)
    position = Column(Integer, nullable=False)



    def get_all_of_player(search_player):
        positions_of_player =  Position.query.filter_by(player=search_player).all()
        positions = []
        for position in positions_of_player:
            positions.append(position.position)
        
        return positions
    
    def delete_all():
        all_positions = Position.query.all()
        for position in all_positions:
            position.delete()
    

