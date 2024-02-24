// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")    
class Manager extends Employee{                                          // My manager class can inherit all the stuff that is built into my employee class
constructor(name, id, email, officeNumber){
    super(name, id, email)                                              // inherit the behaviours of these from the parent(Employee)
    this.officeNumber = officeNumber
}
getofficeNumber(){
    return this.officeNumber
}
getRole(){
    return "Manager"
}
}

module.exports=Manager