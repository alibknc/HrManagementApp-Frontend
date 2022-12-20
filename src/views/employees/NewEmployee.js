import React, { Component } from "react";
import '../../css/Home.css'
import Navbar from '../../components/Sidebar/Navbar.js'
import SuccessModal from '../../components/modals/SuccessModal.js'
import * as Fa from 'react-icons/fa'
import { createNewEmployee } from "../../service/ApiService";

class NewEmployee extends Component {
    constructor() {
        super()
        this.state = { responseBody: {}, show: false }
        this.hideModal = this.hideModal.bind(this);
    }

    inputChangeHandler = (event) => {
        const { name, value } = event.target
        const response = this.state.responseBody
        response[name] = value
        this.setState({ responseBody: response })
    }

    hideModal = () => {
        this.setState({show: false})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        createNewEmployee(this.state.responseBody).then((response) => {
            if (response === 200){
                this.setState({ show: true })
            }
        })
    }

    render() {
        return (
            <div className="NewEmployee">
                <Navbar />
                {this.state.show ? <SuccessModal show={this.state.show} handleClose={this.hideModal}> </SuccessModal> : <div></div>}
                <div className="main-content">
                    <div className="base py-4">
                        <div className="container">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h2>Yeni Çalışan</h2>
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
                                                <h5 className="subtitle">Kişisel Bilgiler</h5>
                                                <br />
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputName">İsim</label>
                                                        <input type="text" className="form-control" id="inputName" name="name" minLength={3} required onChange={this.inputChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputSurname">Soyisim</label>
                                                        <input type="text" className="form-control" id="inputSurname" name="surname" minLength={3} required onChange={this.inputChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputIdentity">Kimlik No</label>
                                                        <input type="number" className="form-control" id="inputIdentity" name="identityNumber" minLength={11} maxLength={11} min={10000000000} max={99999999999} required onChange={this.inputChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputBirthDate">Doğum Tarihi</label>
                                                        <input type="date" className="form-control" id="inputBirthDate" name="birthDate" pattern="dd/mm/yyyy" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                </div>
                                                <hr />
                                                <h5 className="subtitle">İş Bilgileri</h5>
                                                <br />
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputSalary">Maaş</label>
                                                        <input type="number" className="form-control" id="inputSalary" name="salary" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputStartDate">İşe Başlama Tarihi</label>
                                                        <input type="date" className="form-control" id="inputStartDate" name="startDate" pattern="dd/mm/yyyy" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputLevel">Unvan</label>
                                                        <select id="inputLevel" className="form-control" name="level" defaultValue={''} required onChange={this.inputChangeHandler}>
                                                            <option value="" disabled>Seçiniz...</option>
                                                            <option>INTERN</option>
                                                            <option>JUNIOR</option>
                                                            <option>MID</option>
                                                            <option>SENIOR</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputPosition">Pozisyon</label>
                                                        <select id="inputPosition" className="form-control" name="position" defaultValue={''} required onChange={this.inputChangeHandler}>
                                                            <option value="" disabled>Seçiniz...</option>
                                                            <option>JAVA</option>
                                                            <option>IOS</option>
                                                            <option>ANDROID</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputDepartment">Departman</label>
                                                        <select id="inputDepartment" className="form-control" name="department" defaultValue={''} required onChange={this.inputChangeHandler}>
                                                            <option value="" disabled>Seçiniz...</option>
                                                            <option>BACKEND</option>
                                                            <option>FRONTEND</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputWorkType">Çalışma Şekli</label>
                                                        <select id="inputWorkType" className="form-control" name="workType" defaultValue={''} required onChange={this.inputChangeHandler}>
                                                            <option value="" disabled>Seçiniz...</option>
                                                            <option>REMOTE</option>
                                                            <option>OFFICE</option>
                                                            <option>HYBRID</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <hr />
                                                <h5 className="subtitle">İletişim Bilgileri</h5>
                                                <br />
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputAddress">Adres</label>
                                                        <input type="text" className="form-control" id="inputAddress" name="address" minLength={5} required onChange={this.inputChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputCity">Şehir</label>
                                                        <input type="text" className="form-control" id="inputCity" name="city" minLength={2} required onChange={this.inputChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputCountry">Ülke</label>
                                                        <input type="text" className="form-control" id="inputCountry" name="country" minLength={2} required onChange={this.inputChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputPostCode">Posta Kodu</label>
                                                        <input type="number" className="form-control" id="inputPostCode" name="postCode" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputPhone">Telefon Numarası</label>
                                                        <input type="text" className="form-control" id="inputPhone" name="phoneNumber" required onChange={this.inputChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-row align-items-center">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail">E-posta Adresi</label>
                                                        <input type="email" className="form-control" id="inputEmail" name="email" required onChange={this.inputChangeHandler} />
                                                    </div>
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

export default NewEmployee;
