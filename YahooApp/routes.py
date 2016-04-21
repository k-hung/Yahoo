from YahooApp import app
from flask import render_template

@app.route('/')
def home():
  return render_template('home.html')

@app.route('/search')
def search():
  return render_template('search.html')
