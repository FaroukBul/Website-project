from flask import (
    Blueprint, render_template, request,
    redirect
)
from Website.models.gato import Position


bp = Blueprint('home', __name__)

grid = range(1, 10)

@bp.route('/', methods=("GET", "POST"))
def gato():
    if request.method == "POST":

    return render_template(
        'gato.html',
        grid=grid
    )