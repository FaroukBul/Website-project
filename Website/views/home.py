from flask import (
    Blueprint, render_template, request
)
from Website.models.gato import Position


bp = Blueprint('home', __name__)

grid = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]

@bp.route('/')
def gato():
    
    return render_template(
        'gato.html',
        grid=grid
    )
