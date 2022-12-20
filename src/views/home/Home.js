import React from "react";
import '../../css/Home.css'
import * as Md from 'react-icons/md'
import * as Fa from 'react-icons/fa'
import Navbar from '../../components/Sidebar/Navbar.js'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <Navbar />
            <div className="main-content">
                <div className="base py-4">
                    <div className="container">
                        <div className="media d-flex">
                            <div className="media-body text-left">
                                <h2>Ana Sayfa</h2>
                            </div>
                            <div className="row">
                                <Fa.FaUserCircle size={25} color="white" />
                                <span id="username" style={{ color: "white" }}>Yönetim</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <Link to={"/calisanlar"} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className="card shadow-sm">
                                        <div className="card header-card">
                                            <div className="card-content">
                                                <div className="card-body">
                                                    <div className="media d-flex">
                                                        <div className="media-body text-left">
                                                            <h5>Tüm<br />Çalışanlar</h5>
                                                        </div>
                                                        <div className="align-self-center">
                                                            <i className="float-right"><Md.MdSupervisorAccount color="black" size={50} /></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-6">
                                <Link to={"/yeni-calisan"} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className="card shadow-sm">
                                        <div className="card header-card">
                                            <div className="card-content">
                                                <div className="card-body">
                                                    <div className="media d-flex">
                                                        <div className="media-body text-left">
                                                            <h5>Yeni<br />Çalışan Ekle</h5>
                                                        </div>
                                                        <div className="align-self-center">
                                                            <i className="float-right"><Md.MdPersonAdd color="black" size={50} /></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-lg-6">
                                <Link to={"/izinler"} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className="card shadow-sm">
                                        <div className="card header-card">
                                            <div className="card-content">
                                                <div className="card-body">
                                                    <div className="media d-flex">
                                                        <div className="media-body text-left">
                                                            <h5>Tüm<br />İzinler</h5>
                                                        </div>
                                                        <div className="align-self-center">
                                                            <i className="float-right"><Md.MdNote color="black" size={50} /></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-6">
                                <Link to={"/yeni-izin"} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className="card shadow-sm">
                                        <div className="card header-card">
                                            <div className="card-content">
                                                <div className="card-body">
                                                    <div className="media d-flex">
                                                        <div className="media-body text-left">
                                                            <h5>Yeni<br />İzin Ekle</h5>
                                                        </div>
                                                        <div className="align-self-center">
                                                            <i className="float-right"><Md.MdNoteAdd color="black" size={50} /></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-lg-6">
                                <Link to={"/harcamalar"} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className="card shadow-sm">
                                        <div className="card header-card">
                                            <div className="card-content">
                                                <div className="card-body">
                                                    <div className="media d-flex">
                                                        <div className="media-body text-left">
                                                            <h5>Tüm<br />Harcamalar</h5>
                                                        </div>
                                                        <div className="align-self-center">
                                                            <i className="float-right"><Md.MdReceiptLong color="black" size={50} /></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-6">
                                <Link to={"/yeni-harcama"} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className="card shadow-sm">
                                        <div className="card header-card">
                                            <div className="card-content">
                                                <div className="card-body">
                                                    <div className="media d-flex">
                                                        <div className="media-body text-left">
                                                            <h5>Yeni<br />Harcama Ekle</h5>
                                                        </div>
                                                        <div className="align-self-center">
                                                            <i className="float-right"><Md.MdReceipt color="black" size={50} /></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
