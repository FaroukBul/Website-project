import os
import json
import click
from flask import current_app
from flask.cli import with_appcontext


@click.command("init-settings")
@with_appcontext
def init_settings_command():
    click.echo("Initialized Settings")

