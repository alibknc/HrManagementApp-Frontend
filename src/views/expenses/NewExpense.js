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
                                    <span id="username" style={{ color: "white" }}>Y??netim</span>
                                </div>
                            </div>
                            <div className="card shadow-sm">
                                <div className="card header-card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <form className="form" onSubmit={this.handleSubmit}>
                                                <h5 className="subtitle">??al????an Bilgileri</h5>
                                                <br />
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmployee">Kullan??c??</label>
                                                        <input type="text" className="form-control" id="inputEmployee" disabled required value={this.state.employee ? this.state.employee.name + " " + this.state.employee.surname : ""} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label>Se??</label>
                                                        <button type="button" className="btn btn-primary btn-block" onClick={this.showModal}>Se??</button>
                                                    </div>
                                                </div>
                                                <hr />
                                                <h5 className="subtitle">Harcama Bilgileri</h5>
                                                <br />
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputType">Harcama T??r??</label>
                                                        <select id="inputType" className="form-control" name="expenseType" defaultValue={''} required onChange={this.inputChangeHandler}>
                                                            <option value="" disabled>Se??iniz...</option>
                                                            <option value="FOOD">YEMEK</option>
                                                            <option value="EDUCATION">E????T??M</option>
                                                            <option value="TRANSPORT">ULA??IM</option>
                                                            <option value="HEALTH">SA??LIK</option>
                                                            <option value="OTHER">D????ER</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputAmount">Harcama Miktar??</label>
                                                        <input type="number" className="form-control" id="inputAmount" name="expenseAmount" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputDate">Fi?? Tarihi</label>
                                                        <input type="date" className="form-control" id="inputDate" name="expenseDate" pattern="dd/mm/yyyy" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputVat">Vergi Oran??</label>
                                                        <input type="number" className="form-control" id="inputVat" name="vat" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputDetails">Harcama A????klamas??</label>
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
