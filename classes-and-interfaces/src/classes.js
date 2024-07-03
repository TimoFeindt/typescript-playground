"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        /* private readonly id: number;
        private name: string; */
        this.employees = [];
        /* this.id = id;
        this.name = name; */ // This zeigt nun immer auf Department. Also wird hier immer "name" vom Department ausgewählt.
        // console.log(Department.fiscalYear) // Man kann statics nicht mit "this" aufrufen. Es verhält sich ähnlich zu ienem Objekt. 
    }
    static createEmployee(name) {
        return {
            name: name
        };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2024;
class AccountingDepartment extends Department {
    constructor(id) {
        super(id, 'Accounting');
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment(1);
        return this.instance;
    }
    describe() {
        console.log('Accounting Department -ID: ' + this.id);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department -ID: ' + this.id);
    }
    listOfAdmins() {
        console.log(this.admins);
    }
}
class FinanceDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No last Report');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please add a value');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Finance');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log('Finance Department - ID ' + this.id);
    }
    addEmployee(name) {
        if (name === 'Timo') {
            return;
        }
        this.employees.push(name);
    }
    addReport(title) {
        this.reports.push(title);
        this.lastReport = title;
    }
    getReports() {
        console.log(this.reports);
    }
}
//const accounting  = new Department(1, 'Accounting'); - funktioniert nicht mehr, da Department eine abstract class ist und man somit von ihr aus kein "Object" mehr erstllen kann. 
// Man muss dafür eine neue class machen, die Department extendet
/* const dummyDepartment = { name: 'DUMMY', describe: accounting.describe }

dummyDepartment.describe() */
const accounting = AccountingDepartment.getInstance();
accounting.describe();
accounting.addEmployee('Timo');
accounting.addEmployee('Johanna');
accounting.printEmployeesInformation();
const employeeOne = Department.createEmployee('Timothy');
console.log(employeeOne);
console.log(Department.fiscalYear);
const DevOps = new ITDepartment(2, ['Timo']);
DevOps.describe();
DevOps.listOfAdmins();
const finance = new FinanceDepartment(3, ['Q1', 'Q2']);
finance.describe();
finance.getReports();
//console.log(finance.mostRecentReport)
finance.mostRecentReport = 'Q3';
finance.addReport('Q4'); // ohne diese "addReport" Methode der getter für "finance.mostRecentReport" wird einen Fehler ausschmeßen. Da es keine lastReport and stelle report[0] gibt 
finance.getReports();
finance.addEmployee('Rudolf');
finance.printEmployeesInformation();
finance.addEmployee('Timo');
console.log(Math.pow(2, 2)); // muss man nicht mit "new" initiieren
