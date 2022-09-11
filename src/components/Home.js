import React, { Component } from 'react'
import './Home.css';
import land1 from './land1.jpg';
import land2 from './land2.jpg';
import land3 from './land3.jpg';
import ghat1 from './ghat1.jpg';
import mount1 from './mount1.jpg';
import mount2 from './mount2.jpg';
import mount3 from './mount3.jpg';
import mount4 from './mount4.jpg';
import adver from './adver.png';
import post1 from './post1.jpg';
import post2 from './post2.jpg';
import post3 from './post3.jpg';
import post4 from './post4.jpg';
import scene1 from './scene1.jpg';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="Container">
          <div className="container1">
            <a href="https://www.pixabay.com">
              <img src={land1} alt="land1" style={{ width: '445px', height: '347px' }}>
              </img>
            </a>
          </div>
          <div className="container2">
            <a href="https://www.pixabay.com">
              <img src={land2} alt="land2" style={{ width: '295px', height: '155px' }}></img>
            </a>
          </div>
          <div className="container3">
            <a href="https://www.pixabay.com">
              <img src={land3} alt="land3" style={{ width: '295px', height: '170px' }}></img>
            </a>

          </div>
        </div>
        <div className="Container1">
          <h1 className="title1">The Latest</h1>
          <hr className="ruleBar1"></hr>
        </div>
        {/* <div >
          <div class="card Container2 my-2 " style={{width: "18rem"}}>
            <img src={ghat1} class="card-img-top" alt="ghat1" style={{width:"287px",height:"214px"}}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-dark">Read More</a>
              </div>
          </div>
          <div class="card "  style={{width: "18rem"}}>
            <img src={ghat1} class="card-img-top" alt="ghat1" style={{width:"287px",height:"214px"}}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-dark">Read More</a>
              </div>
          </div>
            
    </div> */}
        <div className="d-flex  flex-wrap">
          <div class="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} class="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" class="btn btn-dark">Read More</a>
            </div>
          </div>
          <div class="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} class="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" class="btn btn-dark">Read More</a>
            </div>
          </div>
          <div class="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} class="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" class="btn btn-dark">Read More</a>
            </div>
          </div>
          <div class="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} class="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" class="btn btn-dark">Read More</a>
            </div>
          </div>
          <div class="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} class="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" class="btn btn-dark">Read More</a>
            </div>
          </div>
          <div class="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} class="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" class="btn btn-dark">Read More</a>
            </div>
          </div>
          <div class="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} class="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" class="btn btn-dark">Read More</a>
            </div>
          </div>
          <div class="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} class="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" class="btn btn-dark">Read More</a>
            </div>
          </div>
        </div>
        <div className="Container2 mx-2">
          <h1 className="title2">
            Latest Articles
          </h1>
          <hr className="ruleBar2"></hr>
        </div>
        <div className="Container3">
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={mount1} class="img-fluid rounded-start" alt="mount1" style={{ width: "200px", height: "177px" }} />
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
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={mount2} class="img-fluid rounded-start" alt="mount2" style={{ width: "200px", height: "177px" }} />
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
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={mount3} class="img-fluid rounded-start" alt="mount3" style={{ width: "200px", height: "177px" }} />
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
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={mount4} class="img-fluid rounded-start" alt="mount4" style={{ width: "200px", height: "177px" }} />
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
          <a href="https://www.prepbytes.com" style={{ textDecoration: "none", fontSize: "22px", color: "#F08080" }}>
            &darr; Load More
          </a>
          <div class="Container4">
            <h3 class="adverTitle">
              <img src={adver} alt="adver" style={{ width: "225px" }}></img>
            </h3>
          </div>
          <div class="Container5">
            <h1 class="adverHead">Top Posts</h1>
            <hr class="ruleBar3"></hr>
            <div class="card mx-1 my-1 " style={{ width: "243px", position: "relative", top: "27px" }}>
              <img src={post1} class="card-img-top" alt="post1" style={{ width: "240px", height: "150px" }} />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p>Top performers of the Day...<span style={{ fontSize: "23px", fontWeight: "bolder" }}>1</span></p>
              </div>
            </div>
            <div class="card mb-2 mx-1 my-2" style={{ maxWidth: "250px", position: "relative", top: "35px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={post2} class="img-fluid rounded-start" alt="post2" style={{ width: "243px", height: "113px" }} />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-2 mx-1 my-2" style={{ maxWidth: "250px", position: "relative", top: "40px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={post3} class="img-fluid rounded-start" alt="post3" style={{ width: "243px", height: "113px" }} />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-2 mx-1 my-2" style={{ maxWidth: "250px", position: "relative", top: "45px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={post2} class="img-fluid rounded-start" alt="post2" style={{ width: "243px", height: "113px" }} />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago </small></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-2 mx-1 my-2" style={{ maxWidth: "250px", position: "relative", top: "50px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={post4} class="img-fluid rounded-start" alt="post4" style={{ width: "243px", height: "113px" }} />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago </small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="Container6">
            <img src={scene1} alt="scene1" style={{ width: "535px", height: "397px" }}></img>
          </div>
          <h1 class="photoHead" >
            Latest Stories
          </h1>
          <hr class="photoTitle"></hr>
        </div>
        <div className="d-flex  Container7 mx-2 flex-wrap" >
          <div class="card mx-2 my-4" style={{ width: "15rem" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card mx-2 my-4" style={{ width: "15rem" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card mx-2 my-4" style={{ width: "15rem" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card mx-2 my-4" style={{ width: "15rem" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card mx-2 my-4" style={{ width: "15rem" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card mx-2 my-4" style={{ width: "15rem" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <a href="https://www.pixabay.com" style={{ textDecoration: "none", fontSize: "22px", color: "#F08080" }}>
             View More &rarr;
          </a>
        </div>

      </>
    )
  }
}
