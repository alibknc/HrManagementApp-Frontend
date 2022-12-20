import React, { Component } from "react";
import '../../css/Home.css'
import * as Fa from 'react-icons/fa'
import Navbar from '../../components/Sidebar/Navbar.js'
import CheckModal from '../../components/modals/CheckModal.js'
import { getAllPermits, deletePermit } from "../../service/ApiService";

class Permits extends Component {
    constructor(props) {
        super()
        this.state = { loading: true, data: [] }
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
        this.getData()
    }

    getData(){
        getAllPermits().then(response => {
            this.setState({ loading: false, data: response })
        })
    }

    hideModal = () => {
        this.setState({ checkShow: false });
    };

    showCheckModal = (id) => {
        this.setState({ checkShow: true, deleteId: id })
    }

    checkResult = () => {
        this.hideModal()
        this.deleteItem(this.state.deleteId)
    }

    deleteItem = (id) => {
        deletePermit(id).then(response => {
            if (response === 204)
                this.getData()
        })
    };

    render() {
        return (
            <div className="Permits">
                <Navbar />
                {this.state.checkShow ? <CheckModal show={this.state.checkShow} handleClose={this.hideModal} checkResult={this.checkResult}> </CheckModal> : <div></div>}
                <div className="main-content">
                    <div className="base py-4">
                        <div className="container">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h2>Tüm İzinler</h2>
                                </div>
                                <div className="row">
                                    <Fa.FaUserCircle size={25} color="white" />
                                    <span id="username" style={{ color: "white" }}>Yönetim</span>
                                </div>
                            </div>
                            <div>
                                <div className="card shadow-sm">
                                    <div className="card details-card">
                                        <div className="card-body">
                                            <div className="col">
                                                <div className="media-body text-left">
                                                    <h3>İzinler</h3>
                                                </div>
                                                <label>Toplam İzin: {this.state.loading ? "" : this.state.data.length}</label>
                                                <br />
                                                {this.state.loading ? <div className="spinner"></div> :
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">İzin Sahibi</th>
                                                                <th scope="col">İzin Türü</th>
                                                                <th scope="col">Başlama Tarihi</th>
                                                                <th scope="col">Bitiş Tarihi</th>
                                                                <th scope="col">Detaylar</th>
                                                                <th scope="col">İşlemler</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.state.data.map((item, index) => {
                                                                return (<tr key={index}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td>{item['employee']['name']} {item['employee']['surname']}</td>
                                                                    <td>{item['permitType']}</td>
                                                                    <td>{item['start-date']}</td>
                                                                    <td>{item['finish-date']}</td>
                                                                    <td style={{maxWidth: "150px"}}>{item['details']}</td>
                                                                    <td>
                                                                        <div className="row">
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

export default Permits;
