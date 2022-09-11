import React, { Component } from 'react'
import './Fitness.css';
import fit1 from './fit1.jpg';
import fit2 from './fit2.jpg';
import fit3 from './fit3.jpg';
import fit4 from './fit4.jpg';
import fit5 from './fit5.jpg';
import fit6 from './fit6.jpg';
import fit7 from './fit7.jpg';
import fit8 from './fit8.jpg';
import fit9 from './fit9.jpg';
import fit10 from './fit10.jpg';
import fit11 from './fit11.jpg';
import fit12 from './fit12.jpg';
import fit13 from './fit13.jpg';

export default class Fitness extends Component {
  render() {
    return (
      <>
      <div class="ContainerFit1">
          <h2 class="titleFit1">Fitness</h2>
          <hr class="headFit1"></hr>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={fit1} class="img-fluid rounded-start" alt="fit1" style={{ height: "190px" }} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={fit2} class="img-fluid rounded-start" alt="fit2" style={{ height: "190px" }} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={fit3} class="img-fluid rounded-start" alt="fit3" style={{ height: "190px" }} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={fit4} class="img-fluid rounded-start" alt="fit4" style={{ height: "190px" }} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={fit5} class="img-fluid rounded-start" alt="fit5" style={{ height: "190px" }} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={fit6} class="img-fluid rounded-start" alt="fit6" style={{ height: "190px" }} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={fit7} class="img-fluid rounded-start" alt="fit7" style={{ height: "190px" }} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <a href="https://www.isro.gov.in">
          <img class="mx-2" src={fit13} alt="fit13" style={{ width: "581px", height: "320px", marginTop: "20px" }} />
          </a>
          

        </div>
        <div class="ContainerFit2">
          <h2 class="titleFit2">Top Posts</h2>
          <hr class="headFit2"></hr>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={fit8} class="card-img-top" alt="fit8" style={{ height: "180px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={fit9} class="card-img-top" alt="fit9" style={{ height: "180px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={fit10} class="card-img-top" alt="fit10" style={{ height: "180px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={fit11} class="card-img-top" alt="fit11" style={{ height: "180px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={fit12} class="card-img-top" alt="fit12" style={{ height: "180px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
