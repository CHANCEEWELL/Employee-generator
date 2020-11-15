// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, title, email, role){
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.role = role;
    }
}



// const josh = new Employee("chance", 4, "boss");
// console.log(chance)

module.exports = Employee;