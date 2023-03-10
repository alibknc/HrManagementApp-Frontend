import React, { Component } from "react";
import '../../css/Home.css'
import Navbar from '../../components/Sidebar/Navbar.js'
import * as Fa from 'react-icons/fa'
import SelectEmployeeModal from "../../components/modals/SelectEmployeeModal.js"
import SuccessModal from "../../components/modals/SuccessModal.js"
import { createNewPermit } from "../../service/ApiService";

class NewPermit extends Component {
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
        createNewPermit(this.state.responseBody).then((response) => {
            if (response === 200) {
                this.setState({ checkShow: true })
            }
        })
    }

    selectEmployee = (emp) => {
        this.hideModal()
        const response = this.state.responseBody
        response["employeeId"] = emp.id
        console.log(emp.id)
        console.log(response["employeeId"])
        this.setState({ employee: emp, responseBody: response })
    }

    render() {
        return (
            <div className="NewPermit">
                <Navbar />
                {this.state.show ? <SelectEmployeeModal show={this.state.show} handleClose={this.hideModal} handleSelect={this.selectEmployee}> </SelectEmployeeModal> : <div></div>}
                <div className="base py-4">
                    {this.state.checkShow ? <SuccessModal show={this.state.checkShow} handleClose={this.hideModal}> </SuccessModal> : <div></div>}
                    <div className="main-content">
                        <div className="container">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h2>Yeni ??zin</h2>
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
                                                <h5 className="subtitle">??zin Bilgileri</h5>
                                                <br />
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputType">??zin T??r??</label>
                                                        <select id="inputType" className="form-control" name="permitType" defaultValue={''} required onChange={this.inputChangeHandler}>
                                                            <option value="" disabled>Se??iniz...</option>
                                                            <option value="ANNUAL">YILLIK</option>
                                                            <option value="FREE">??CRETS??Z</option>
                                                            <option value="MATERNITY">DO??UM</option>
                                                            <option value="OTHER">D????ER</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputStartDate">Ba??lang???? Tarihi</label>
                                                        <input type="date" className="form-control" id="inputStartDate" name="startDate" pattern="dd/mm/yyyy" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputFinishDate">Biti?? Tarihi</label>
                                                        <input type="date" className="form-control" id="inputFinishDate" name="finishDate" pattern="dd/mm/yyyy" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputDetails">??zin A????klamas??</label>
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

export default NewPermit;
