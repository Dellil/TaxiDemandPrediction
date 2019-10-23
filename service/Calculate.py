import pandas as pd
from datetime import datetime
import math as m

def basicCalc(timeValue):
    return m.ceil((timeValue+1)/5)

def multiCalc(timeValue):
    return timeValue*12

def settingTheTimeLabel(timeValue):
    sTime = str(timeValue)
    
    if(len(sTime) < 3 ):
        return basicCalc(int(sTime))
    elif(len(sTime) < 4):
        f_digit = int(sTime[:1])
        rest = int(sTime[1:])
        return multiCalc(f_digit)+basicCalc(rest)
    else:
        f_digit = int(sTime[:2])
        rest = int(sTime[2:])
        return multiCalc(f_digit)+basicCalc(rest)

def createTimeIndex():
    now = datetime.now().strftime("%H%M")
    return settingTheTimeLabel(now)

def createTimeList():
    timeIndex = createTimeIndex()
    return [timeIndex for i in range(1, 5626)]

def createLocationList():
    return [i for i in range(1, 5626)]

def createDataFrame():
    return pd.DataFrame({ "time_index" : createTimeList(), "location_index" : createLocationList() })