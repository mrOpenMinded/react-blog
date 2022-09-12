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
            <a href="https://pixabay.com">
              <img src={land1} alt="land1" style={{ width: '445px', height: '347px' }}>
              </img>
            </a>
          </div>
          <div className="container2">
            <a href="https://pixabay.com">
              <img src={land2} alt="land2" style={{ width: '295px', height: '155px' }}></img>
            </a>
          </div>
          <div className="container3">
            <a href="https://pixabay.com">
              <img src={land3} alt="land3" style={{ width: '295px', height: '170px' }}></img>
            </a>

          </div>
        </div>
        <div className="Container1">
          <h1 className="title1">The Latest</h1>
          <hr className="ruleBar1"></hr>
        </div>
        {/* <div >
          <div className="card Container2 my-2 " style={{width: "18rem"}}>
            <img src={ghat1} className="card-img-top" alt="ghat1" style={{width:"287px",height:"214px"}}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-dark">Read More</a>
              </div>
          </div>
          <div className="card "  style={{width: "18rem"}}>
            <img src={ghat1} className="card-img-top" alt="ghat1" style={{width:"287px",height:"214px"}}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-dark">Read More</a>
              </div>
          </div>
            
    </div> */}
        <div className="d-flex  flex-wrap">
          <div className="card mx-1 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} className="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-dark">Read More</a>
            </div>
          </div>
          <div className="card mx-1 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} className="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-dark">Read More</a>
            </div>
          </div>
          <div className="card mx-1 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} className="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-dark">Read More</a>
            </div>
          </div>
          <div className="card mx-1 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} className="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-dark">Read More</a>
            </div>
          </div>
          <div className="card mx-1 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} className="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-dark">Read More</a>
            </div>
          </div>
          <div className="card mx-1 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} className="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-dark">Read More</a>
            </div>
          </div>
          <div className="card mx-1 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} className="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-dark">Read More</a>
            </div>
          </div>
          <div className="card mx-1 my-2" style={{ width: "18rem" }}>
            <img src={ghat1} className="card-img-top" alt="ghat" style={{ width: "287px", height: "214px" }} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-dark">Read More</a>
            </div>
          </div>
        </div>
        <div className="Container2 ">
          <h1 className="title2">
            Latest Articles
          </h1>
          <hr className="ruleBar2"></hr>
        </div>
        <div className="Container3">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={mount1} className="img-fluid rounded-start" alt="mount1" style={{ width: "200px", height: "177px" }} />
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
                <img src={mount2} className="img-fluid rounded-start" alt="mount2" style={{ width: "200px", height: "177px" }} />
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
                <img src={mount3} className="img-fluid rounded-start" alt="mount3" style={{ width: "200px", height: "177px" }} />
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
                <img src={mount4} className="img-fluid rounded-start" alt="mount4" style={{ width: "200px", height: "177px" }} />
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
          <a href="https://www.prepbytes.com" style={{ textDecoration: "none", fontSize: "22px", color: "#F08080" }}>
            &darr; Load More
          </a>
          <div className="Container4">
            <h3 className="adverTitle">
              <img src={adver} alt="adver" style={{ width: "225px" }}></img>
            </h3>
          </div>
          <div className="Container5">
            <h1 className="adverHead">Top Posts</h1>
            <hr className="ruleBar3"></hr>
            <div className="card mx-1 my-1 " style={{ width: "243px", position: "relative", top: "27px" }}>
              <img src={post1} className="card-img-top" alt="post1" style={{ width: "240px", height: "150px" }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p>Top performers of the Day...<span style={{ fontSize: "23px", fontWeight: "bolder" }}>1</span></p>
              </div>
            </div>
            <div className="card mb-2 mx-1 my-2" style={{ maxWidth: "250px", position: "relative", top: "35px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={post2} className="img-fluid rounded-start" alt="post2" style={{ width: "243px", height: "113px" }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-2 mx-1 my-2" style={{ maxWidth: "250px", position: "relative", top: "40px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={post3} className="img-fluid rounded-start" alt="post3" style={{ width: "243px", height: "113px" }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-2 mx-1 my-2" style={{ maxWidth: "250px", position: "relative", top: "45px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={post2} className="img-fluid rounded-start" alt="post2" style={{ width: "243px", height: "113px" }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago </small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-2 mx-1 my-2" style={{ maxWidth: "250px", position: "relative", top: "50px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={post4} className="img-fluid rounded-start" alt="post4" style={{ width: "243px", height: "113px" }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago </small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Container6">
            <img src={scene1} alt="scene1" style={{ width: "535px", height: "397px" }}></img>
          </div>
          <h1 className="photoHead" >
            Latest Stories
          </h1>
          <hr className="photoTitle"></hr>
        </div>
        <div className="Container7">
          <div className=" d-flex flex-wrap " >
            <div className="card mx-1 my-3" style={{ width: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card mx-1 my-3" style={{ width: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card mx-1 my-3" style={{ width: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card mx-1 my-3" style={{ width: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card mx-1 my-3" style={{ width: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card mx-1 my-3" style={{ width: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            {/* <h3>Welcome.!!!</h3> */}
          </div>
          <a href="https://pixabay.com" style={{ textDecoration: "none", fontSize: "22px", color: "#F08080" }}>
              View More &rarr;
            </a>
        </div>



      </>
    )
  }
}
