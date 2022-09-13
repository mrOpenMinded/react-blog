import React, { Component } from 'react'
import './Bollywood.css';
// import './Home.css';
// import './Header.css';
// import Navbar from './Navbar';
// import PropTypes from 'prop-types';
import bolly1 from './bolly1.jpg';
import bolly2 from './bolly2.jpg';
import bolly3 from './bolly3.jpg';
import bolly4 from './bolly4.jpg';
import bolly5 from './bolly5.jpg';
import bolly6 from './bolly6.jpg';
import bolly7 from './bolly7.jpg';
import bolly8 from './bolly8.jpg';
import bolly9 from './bolly9.jpg';
import bolly10 from './bolly10.jpg';
import bolly11 from './bolly11.jpg';
import bolly12 from './bolly12.jpg';
import adver2 from './adver2.png';


export default class Bollywood extends Component {
    // static defaultProps = {
    //     head1:"The",
    //     head2:"Siren"
    // }
    // static propTypes = {
    //   head1:PropTypes.string,
    //   head2:PropTypes.string,
    // }
    render() {
        return (
            <>
                {/* <div className="headCom">
                    <h1><span id="head1">{this.props.head1}</span>{this.props.head2}</h1>
                </div>
                <Navbar /> */}
                <div className="Container10">
                    <h3>Bollywood</h3>
                    <hr className="bollyHead">
                    </hr>
                    <div className="card mb-3 mx-1" style={{ maxWidth: "400px", maxHeight: "215px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bolly1} className="img-fluid rounded-start" alt="bolly1" style={{ width: "250px", height: "214px" }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mx-1" style={{ maxWidth: "400px", maxHeight: "215px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bolly2} className="img-fluid rounded-start" alt="bolly2" style={{ width: "250px", height: "214px" }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mx-1" style={{ maxWidth: "400px", maxHeight: "215px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bolly3} className="img-fluid rounded-start" alt="bolly3" style={{ width: "250px", height: "214px" }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mx-1" style={{ maxWidth: "400px", maxHeight: "215px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bolly4} className="img-fluid rounded-start" alt="bolly4" style={{ width: "250px", height: "214px" }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mx-1" style={{ maxWidth: "400px", maxHeight: "215px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bolly5} className="img-fluid rounded-start" alt="bolly5" style={{ width: "250px", height: "214px" }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mx-1" style={{ maxWidth: "400px", maxHeight: "215px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bolly6} className="img-fluid rounded-start" alt="bolly6" style={{ width: "250px", height: "214px" }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mx-1" style={{ maxWidth: "400px", maxHeight: "215px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bolly7} className="img-fluid rounded-start" alt="bolly7" style={{ width: "250px", height: "214px" }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                        <a href="https://www.prepbytes.com" style={{ textDecoration: "none", fontSize: "22px", color: "#F08080", marginTop: "30px" }}>
                            &darr; Load More
                        </a>
                    </div>

                </div>
                <div className="Container11">
                    <h3>
                        Top Posts
                    </h3>
                    <hr className="bollyHead"></hr>
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bolly9} className="img-fluid rounded-start" alt="bolly9" style={{ width: "500px", height: "177px" }} />

                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bolly10} className="img-fluid rounded-start" alt="bolly10" style={{ width: "500px", height: "177px" }} />

                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bolly11} className="img-fluid rounded-start" alt="bolly11" style={{ width: "500px", height: "177px" }} />

                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bolly12} className="img-fluid rounded-start" alt="bolly12" style={{ width: "500px", height: "177px" }} />

                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={bolly8} alt="bolly8" style={{ width: "500px", height: "350px" }} />
                </div>
                <div className="Container12">
                    <h2 style={{ textAlign: "center", position: "relative", top: "90px" }}>Amazon shopping</h2>
                    <img src={adver2} alt="adver2" style={{ width: "240px", height: "200px", position: "relative", top: "150px", left: "20px" }} />
                    <h3 style={{ textAlign: "center", position: "relative", top: "220px" }}>Just Do It.!!!</h3>

                </div>
            </>
        );
    }
}
