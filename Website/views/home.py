from flask import (
    Blueprint, render_template, request
)
from Website.models.gato import Position


bp = Blueprint('home', __name__)

grid = range(1, 10)

@bp.route('/')
def gato():

    return render_template(
        'gato.html',
        grid=grid
    )
  
  

  