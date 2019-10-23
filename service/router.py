from flask import Flask, render_template
from Model import Model
from Calculate import createDataFrame
import json

app = Flask(__name__, template_folder="../templates")
model = Model.getModel()

@app.route("/")
def mainService():
    return render_template("/main.html")

@app.route("/predict")
def predictService():
    df = createDataFrame()
    predictedDataSet = model.predict(df)
    predictedDataSetToList = predictedDataSet.tolist()
    dataDict = { "data" : predictedDataSetToList }
    jsonDataSet = json.dumps(dataDict)

    return jsonDataSet, 200, { "Content-Type" : "application/json; charset=utf-8"}

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)
