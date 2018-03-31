from my_app import app
from flask import render_template

@app.route('/')
def index():
    return render_template('index.html');

@app.route('/help')
def help():
    return "It will be nice to see help page someday."
