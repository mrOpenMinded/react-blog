
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Food.css';
import food1 from './food1.jpg';
import food2 from './food2.jpg';
import food3 from './food3.jpg';
import food4 from './food4.jpg';
import food5 from './food5.jpg';
import food6 from './food6.jpg';
import food7 from './food7.jpg';
import food8 from './food8.jpg';
import food9 from './food9.jpg';
import food10 from './food10.jpg';
import food11 from './food11.jpg';
import food12 from './food12.jpg';
import food13 from './food13.jpg';

export default class Food extends Component {
  render() {
    return (
      <>
      <div className="ContainerFood1">
          <h2 className="titleFood1">Food</h2>
          <hr className="headFood1"></hr>
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={food1} className="img-fluid rounded-start" alt="food1" style={{ height: "190px" }} />
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
                <img src={food2} className="img-fluid rounded-start" alt="food2" style={{ height: "190px" }} />
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
                <img src={food3} className="img-fluid rounded-start" alt="food3" style={{ height: "190px" }} />
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
                <img src={food4} className="img-fluid rounded-start" alt="food4" style={{ height: "190px" }} />
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
                <img src={food5} className="img-fluid rounded-start" alt="food5" style={{ height: "190px" }} />
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
                <img src={food6} className="img-fluid rounded-start" alt="food6" style={{ height: "190px" }} />
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
                <img src={food7} className="img-fluid rounded-start" alt="food7" style={{ height: "190px" }} />
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
          <a href="https://www.swiggy.com">
          <img className="mx-2" src={food13} alt="food13" style={{ width: "581px", height: "320px", marginTop: "20px" }} />
          </a>
          

        </div>
        <div className="ContainerFood2">
          <h2 className="titleFood2">Top Posts</h2>
          <hr className="headFood2"></hr>
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={food8} className="card-img-top" alt="food8" style={{ height: "180px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={food9} className="card-img-top" alt="food9" style={{ height: "180px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={food10} className="card-img-top" alt="food10" style={{ height: "180px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={food11} className="card-img-top" alt="food11" style={{ height: "180px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={food12} className="card-img-top" alt="food12" style={{ height: "180px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <a href="https://www.zomato.com" style={{ textDecoration: "none", fontSize: "22px", color: "#F08080", marginTop: "30px" }}>
            &darr; Load More
          </a>
        </div>
      </>
    )
  }
}
