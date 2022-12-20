import React, { Component } from "react";
import '../../css/Home.css'
import * as Fa from 'react-icons/fa'
import Navbar from '../../components/Sidebar/Navbar.js'
import SuccessModal from '../../components/modals/SuccessModal.js'
import { createNewExpense } from "../../service/ApiService";
import SelectEmployeeModal from "../../components/modals/SelectEmployeeModal.js"

class NewExpense extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            checkShow: false,
            responseBody: {},
            employee: ""
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false, checkShow: false });
    };

    inputChangeHandler = (event) => {
        const { name, value } = event.target
        const response = this.state.responseBody
        response[name] = value
        this.setState({ responseBody: response })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        createNewExpense(this.state.responseBody).then((response) => {
            if (response === 200) {
                this.setState({ checkShow: true })
            }
        })
    }

    selectEmployee = (emp) => {
        this.hideModal()
        const response = this.state.responseBody
        response["employeeId"] = emp.id
        this.setState({ employee: emp, responseBody: response })
    }

    render() {
        return (
            <div className="NewExpense">
                <Navbar />
                {this.state.checkShow ? <SuccessModal show={this.state.checkShow} handleClose={this.hideModal}> </SuccessModal> : <div></div>}
                {this.state.show ? <SelectEmployeeModal show={this.state.show} handleClose={this.hideModal} handleSelect={this.selectEmployee}> </SelectEmployeeModal> : <div></div>}
                <div className="main-content">
                    <div className="base py-4">
                        <div className="container">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h2>Yeni Harcama</h2>
                                </div>
                                <div className="row">
                                    <Fa.FaUserCircle size={25} color="white" />
                                    <span id="username" style={{ color: "white" }}>Yönetim</span>
                                </div>
                            </div>
                            <div className="card shadow-sm">
                                <div className="card header-card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <form className="form" onSubmit={this.handleSubmit}>
                                                <h5 className="subtitle">Çalışan Bilgileri</h5>
                                                <br />
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmployee">Kullanıcı</label>
                                                        <input type="text" className="form-control" id="inputEmployee" disabled required value={this.state.employee ? this.state.employee.name + " " + this.state.employee.surname : ""} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label>Seç</label>
                                                        <button type="button" className="btn btn-primary btn-block" onClick={this.showModal}>Seç</button>
                                                    </div>
                                                </div>
                                                <hr />
                                                <h5 className="subtitle">Harcama Bilgileri</h5>
                                                <br />
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputType">Harcama Türü</label>
                                                        <select id="inputType" className="form-control" name="expenseType" defaultValue={''} required onChange={this.inputChangeHandler}>
                                                            <option value="" disabled>Seçiniz...</option>
                                                            <option value="FOOD">YEMEK</option>
                                                            <option value="EDUCATION">EĞİTİM</option>
                                                            <option value="TRANSPORT">ULAŞIM</option>
                                                            <option value="HEALTH">SAĞLIK</option>
                                                            <option value="OTHER">DİĞER</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputAmount">Harcama Miktarı</label>
                                                        <input type="number" className="form-control" id="inputAmount" name="expenseAmount" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputDate">Fiş Tarihi</label>
                                                        <input type="date" className="form-control" id="inputDate" name="expenseDate" pattern="dd/mm/yyyy" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputVat">Vergi Oranı</label>
                                                        <input type="number" className="form-control" id="inputVat" name="vat" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputDetails">Harcama Açıklaması</label>
                                                        <input type="text" className="form-control" id="inputDetails" name="details" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-row d-flex flex-row-reverse">
                                                    <div className="form-group col-md-6">
                                                        <label>Kaydet</label>
                                                        <button type="submit" className="btn btn-primary btn-block">Kaydet</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewExpense;
