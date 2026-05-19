from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/add', methods=['POST'])
def add():

    expense = request.form['expense']
    amount = request.form['amount']
    category = request.form['category']

    return f"""
    Expense Added Successfully! <br><br>

    Expense: {expense} <br>
    Amount: {amount} <br>
    Category: {category}
    """

if __name__ == '__main__':
    app.run(debug=True)