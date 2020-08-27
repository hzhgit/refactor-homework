const { Employee } = require('../src/Employee');
const employeeTest = require('ava');

employeeTest('case 1:test toString',t => {
    const employee =new Employee("Zach","engineer");
    t.is("Zach (engineer)",employee.toString())
})

employeeTest('case 2:test validateType',t => {
    try {
        const employee =new Employee("Zach","boss");
    } catch (error) {
        t.is('Employee cannot be of type boss',error.message)
    }
})