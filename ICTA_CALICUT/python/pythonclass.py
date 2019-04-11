# class Students:
#     def __init__(self,x,y):
#         self.name=x
#         self.rollno=y

#     def getAge(self,myAge):
#         print("Age is: ",myAge)
#     def printData(self):
#         print("name= "+str(self.name))
#         print("Roll Number= "+str(self.rollno))
# s=Students("Rahul R",11)
# a=int(input("Enter the Age: "))

# s.printData()
# s.getAge(a)
class Employee:
    def __init__(self,u,v,w,x):
        self.code=u
        self.name=v
        self.age=w
        self.salary=x
    def printData(self):
        print("Employee Code= "+str(self.code))
        print("Employee Name= "+str(self.name))
        print("Employee Age= "+str(self.age))
        print("Employee Salary= "+str(self.salary))
c=Employee(45456,"Raju",25,25000)
c.printData()
d=Employee(8976,"Vishnu",21,18000)
d.printData()
e=Employee(8990,"Arjun",28,38000)
e.printData()
f=Employee(8376,"Ammu",27,28000)
f.printData()
g=Employee(4530,"Amal",20,18000)
g.printData()

