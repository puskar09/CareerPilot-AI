from pydantic import BaseModel
class StudentData(BaseModel):
    gender:int
    ssc_p:float
    ssc_b:float
    hsc_p:float
    hsc_b:int
    hsc_s:int
    degree_p:float
    degree_t:int
    workex:int
    etest_p:float
    specialisation:int
    mba_p:float
    
        