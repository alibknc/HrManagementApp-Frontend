import React from "react";
import '../../css/Home.css'
import * as Fa from 'react-icons/fa'
import Navbar from '../../components/Sidebar/Navbar.js'
import ShowDetailsModal from "../../components/modals/ShowDetailsModal.js"
import CheckModal from "../../components/modals/CheckModal"
import { getAllEmployees, deleteEmployee } from "../../service/ApiService";

class Employees extends React.Component {
    constructor() {
        super()
        this.state = { loading: true, data: [], modalData: [], deleteId: "" }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = (item) => {
        this.setState({ detailsShow: true, modalData: item });
    };

    hideModal = () => {
        this.setState({ detailsShow: false, checkShow: false });
    };

    componentDidMount() {
        this.getData()
    }

    getData() {
        getAllEmployees().then(response => {
            console.log(response)
            this.setState({ loading: false, data: response })
        })
    }

    showCheckModal = (id) => {
        this.setState({ checkShow: true, deleteId: id })
    }

    checkResult = () => {
        this.hideModal()
        this.deleteItem(this.state.deleteId)
    }

    deleteItem = (id) => {
        deleteEmployee(id).then(response => {
            if (response === 204)
                this.getData()
        })
    };

    render() {
        return (
            <div className="Employees">
                <Navbar />
                {this.state.detailsShow ? <ShowDetailsModal show={this.state.detailsShow} handleClose={this.hideModal} data={this.state.modalData}> </ShowDetailsModal> : <div></div>}
                {this.state.checkShow ? <CheckModal show={this.state.checkShow} handleClose={this.hideModal} checkResult={this.checkResult}> </CheckModal> : <div></div>}
                <div className="main-content">
                    <div className="base py-4">
                        <div className="container">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h2>T??m ??al????anlar</h2>
                                </div>
                                <div className="row">
                                    <Fa.FaUserCircle size={25} color="white" />
                                    <span id="username" style={{ color: "white" }}>Y??netim</span>
                                </div>
                            </div>
                            <div>
                                <div className="card shadow-sm">
                                    <div className="card details-card">
                                        <div className="card-body">
                                            <div className="col">
                                                <div className="media-body text-left">
                                                    <h3>??al????anlar</h3>
                                                </div>
                                                <label>??al????an Say??s??: {this.state.loading ? "" : this.state.data.length}</label>
                                                <br />
                                                {this.state.loading ? <div className="spinner"></div> :
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Ad??</th>
                                                                <th scope="col">Soyad??</th>
                                                                <th scope="col">Do??um Tarihi</th>
                                                                <th scope="col">????lemler</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.state.data.map((item, index) => {
                                                                return (<tr key={index}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td>{item['name']}</td>
                                                                    <td>{item['surname']}</td>
                                                                    <td>{item['birth-date']}</td>
                                                                    <td>
                                                                        <div className="row">
                                                                            <div className="btn btn-primary col mr-1" onClick={() => this.showModal(item)}>Detaylar</div>
                                                                            <div className="btn btn-danger col" onClick={() => this.showCheckModal(item['id'])}>Sil</div>
                                                                        </div>
                                                                    </td>
                                                                </tr>)
                                                            })}
                                                        </tbody>
                                                    </table>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Employees;