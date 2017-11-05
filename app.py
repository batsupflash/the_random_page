from flask import *

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')
@app.route('/truerandomness')
def trueandomness():
    return render_template('truerandomness.html')




if __name__ == '__main__':
  app.run(debug=True)
