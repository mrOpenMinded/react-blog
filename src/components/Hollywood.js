import React, { Component } from 'react'
import './Hollywood.css';
import holly1 from './holly1.jpg';
import holly2 from './holly2.jpg';
import holly3 from './holly3.jpg';
import holly4 from './holly4.jpg';
import holly5 from './holly5.jpg';
import holly6 from './holly6.jpg';
import holly7 from './holly7.jpg';
import holly8 from './holly8.jpg';
import holly9 from './holly9.jpg';
import holly10 from './holly10.png';
import holly11 from './holly11.png';
import holly12 from './holly12.png';
import holly13 from './holly13.jpg';

export default class Hollywood extends Component {
  render() {
    return (
      <>
       <div className="ContainerH1">
          <h2 className="titleHolly1">Hollywood</h2>
          <hr className="headHolly1"></hr>
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={holly1} className="img-fluid rounded-start" alt="holly1" style={{ height: "190px" }} />
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
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={holly2} className="img-fluid rounded-start" alt="holly2" style={{ height: "190px" }} />
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
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={holly3} className="img-fluid rounded-start" alt="holly3" style={{ height: "190px" }} />
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
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={holly4} className="img-fluid rounded-start" alt="holly4" style={{ height: "190px" }} />
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
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={holly5} className="img-fluid rounded-start" alt="holly5" style={{ height: "190px" }} />
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
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={holly6} className="img-fluid rounded-start" alt="holly6" style={{ height: "190px" }} />
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
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={holly7} className="img-fluid rounded-start" alt="holly7" style={{ height: "190px" }} />
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
          <a href="https://www.isro.gov.in">
          <img className="mx-2" src={holly13} alt="holly13" style={{ width: "581px", height: "320px", marginTop: "20px" }} />
          </a>
          

        </div>
        <div className="ContainerH2">
          <h2 className="titleHolly2">Top Posts</h2>
          <hr className="headHolly2"></hr>
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={holly8} className="card-img-top" alt="holly8" style={{ height: "180px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={holly9} className="card-img-top" alt="holly9" style={{ height: "180px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={holly10} className="card-img-top" alt="holly10" style={{ height: "180px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={holly11} className="card-img-top" alt="holly11" style={{ height: "180px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={holly12} className="card-img-top" alt="holly12" style={{ height: "180px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <a href="https://www.prepbytes.com" style={{ textDecoration: "none", fontSize: "22px", color: "#F08080", marginTop: "30px" }}>
            &darr; Load More
          </a>
        </div>
      </>
    )
  }
}
