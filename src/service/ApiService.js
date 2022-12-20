import axios from "axios";
import Moment from 'moment';

export async function createNewEmployee(data) {
    Moment.locale('en');

    const request = {
        "name": data.name,
        "surname": data.surname,
        "identityNumber": data.identityNumber,
        "birth-date": Moment(data.birthDate).format('DD/MM/YYYY'),
        "jobInfo": {
            "department": data.department,
            "level": data.level,
            "position": data.position,
            "workType": data.workType,
            "salary": parseInt(data.salary),
            "start-date": Moment(data.startDate).format('DD/MM/YYYY')
        },
        "contactInfo": {
            "phoneNumber": data.phoneNumber,
            "email": data.email,
            "city": data.city,
            "country": data.country,
            "address": data.address,
            "postCode": parseInt(data.postCode)
        }
    }

    const response = await axios.post("http://localhost:8080/api/v1/employees", request)
    return response.status

}

export async function getAllEmployees() {
    const response = await axios.get("http://localhost:8080/api/v1/employees")
    return response.data;
}

export async function getAllExpenses() {
    const response = await axios.get("http://localhost:8080/api/v1/expenses")

    response.data.map((item, index) => {
        switch (item['expenseType']) {
            case "FOOD":
                item['expenseType'] = "YEMEK"
                break;
            case "EDUCATION":
                item['expenseType'] = "EĞİTİM"
                break;
            case "TRANSPORT":
                item['expenseType'] = "ULAŞIM"
                break;
            case "HEALTH":
                item['expenseType'] = "SAĞLIK"
                break;
            case "OTHER":
                item['expenseType'] = "DİĞER"
                break;
            default:
                break;
        }
        return true
    })

    return response.data;
}

export async function getAllPermits() {
    const response = await axios.get("http://localhost:8080/api/v1/permits")

    response.data.map((item, index) => {
        switch (item['permitType']) {
            case "ANNUAL":
                item['permitType'] = "YILLIK"
                break;
            case "FREE":
                item['permitType'] = "ÜCRETSİZ"
                break;
            case "MATERNITY":
                item['permitType'] = "DOĞUM"
                break;
            case "OTHER":
                item['permitType'] = "DİĞER"
                break;
            default:
                break;
        }
        return true
    })

    return response.data;
}

export async function createNewPermit(data) {
    Moment.locale('en');

    const request = {
        "permitType": data.permitType,
        "start-date": Moment(data.startDate).format('DD/MM/YYYY'),
        "finish-date": Moment(data.finishDate).format('DD/MM/YYYY'),
        "details": data.details,
        "employeeId": data.employeeId
    }

    const response = await axios.post("http://localhost:8080/api/v1/permits", request)
    return response.status

}

export async function createNewExpense(data) {
    Moment.locale('en');

    const request = {
        "expenseType": data.expenseType,
        "expenseAmount": data.expenseAmount,
        "expense-date": Moment(data.expenseDate).format('DD/MM/YYYY'),
        "vat": data.vat,
        "details": data.details,
        "employeeId": data.employeeId
    }

    const response = await axios.post("http://localhost:8080/api/v1/expenses", request)
    return response.status

}

export async function deleteEmployee(id) {
    const response = await axios.delete("http://localhost:8080/api/v1/employees/" + id)
    return response.status;
}

export async function deletePermit(id) {
    const response = await axios.delete("http://localhost:8080/api/v1/permits/" + id)
    return response.status;
}

export async function deleteExpense(id) {
    const response = await axios.delete("http://localhost:8080/api/v1/expenses/" + id)
    return response.status;
}