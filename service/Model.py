import pickle

class Model:
    @staticmethod
    def getModel() :
        with open("./service/mlModel.txt", "rb") as f:
            model = pickle.load(f)
        return model