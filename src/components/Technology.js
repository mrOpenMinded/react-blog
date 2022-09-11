import React, { Component } from 'react'
import './Technology.css';
import tech1 from './tech1.jpg';
import tech2 from './tech2.jpg';
import tech3 from './tech3.jpg';
import tech4 from './tech4.jpg';
import tech5 from './tech5.jpg';
import tech6 from './tech6.jpg';
import tech7 from './tech7.jpg';
import tech8 from './tech8.jpg';
import tech9 from './tech9.png';
import tech10 from './tech10.jpg';
import tech11 from './tech11.jpg';
import tech12 from './tech12.jpg';
import tech13 from './tech13.jpg';

export default class Technology extends Component {
  render() {
    return (
      <>
        <div class="ContainerT1">
          <h2 class="titleTech1">Technology</h2>
          <hr class="headTech1"></hr>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "600px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={tech1} class="img-fluid rounded-start" alt="tech1" style={{ height: "190px" }} />
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
                <img src={tech2} class="img-fluid rounded-start" alt="tech2" style={{ height: "190px" }} />
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
                <img src={tech3} class="img-fluid rounded-start" alt="tech3" style={{ height: "190px" }} />
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
                <img src={tech4} class="img-fluid rounded-start" alt="tech4" style={{ height: "190px" }} />
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
                <img src={tech5} class="img-fluid rounded-start" alt="tech5" style={{ height: "190px" }} />
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
                <img src={tech6} class="img-fluid rounded-start" alt="tech6" style={{ height: "190px" }} />
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
                <img src={tech7} class="img-fluid rounded-start" alt="tech7" style={{ height: "190px" }} />
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
          <img class="mx-2" src={tech13} alt="tech13" style={{ width: "581px", height: "320px", marginTop: "20px" }} />
          </a>
          

        </div>
        <div class="ContainerT2">
          <h2 class="titleTech2">Top Posts</h2>
          <hr class="headTech2"></hr>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={tech8} class="card-img-top" alt="tech8" style={{ height: "180px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={tech9} class="card-img-top" alt="tech9" style={{ height: "180px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={tech10} class="card-img-top" alt="tech10" style={{ height: "180px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={tech11} class="card-img-top" alt="tech11" style={{ height: "180px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card mb-3 mx-2 my-1" style={{ maxWidth: "350px" }}>
            <img src={tech12} class="card-img-top" alt="tech12" style={{ height: "180px" }} />
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
