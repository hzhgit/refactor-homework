const { Employee } = require('../src/Employee');
const employeeTest = require('ava');

employeeTest('case 1:test toString',t => {
    const employee =new Employee("Zach","engineer");
    t.is("Zach (engineer)",employee.toString())
})