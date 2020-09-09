import React, { Component, Suspense, useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { Table, Utils } from '../Helpers';
import axios from "axios";

function Home() {

  const [fullname, setFullname] = useState("Lintang");
  const [jam, setJam]           = useState("");
  const [menit, setMenit]       = useState("");
  const [detik, setDetik]       = useState("");
  const [hari, setHari]         = useState("");
  const namaHari                = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
  const date                    = new Date();



  useEffect(() => {

    const day     = setHari( namaHari[date.getDay()] )
    const jam     = setJam( date.getHours() )
    // const menit   = date.getMinutes()
    // const detik   = date.getSeconds()

    // setHari( day )
    window.setInterval(function () {

      console.log( Utils.formatDate(date) )

    }.bind(this), 1100);

  });

  return (

      <>

      {/* sidebar right start */}
      <div className="sidebar sidebar-right">
          <header className="row m-0 fixed-header">
              <div className="left">
                  <a onClick={e => e.preventDefault()} className="menu-left-close"><i className="material-icons">keyboard_backspace</i></a>
              </div>
              <div className="col center">
                  <a href="" className="logo">Best Rated</a>
              </div>
          </header>
          <div className="page-content text-white">
              <div className="row mx-0 mt-3">
                  <div className="col">
                      <div className="card bg-none border-0 shadow-none">
                          <div className="card-body userlist_large">
                              <div className="media">
                                  <figure className="avatar avatar-120 rounded-circle my-2">
                                      <img src="img/user1.png" alt="user image" />
                                  </figure>
                                  <div className="media-body">
                                      <h4 className="mt-0 text-white">Max Johnsons</h4>
                                      <p className="text-white">VP, Maxartkiller Co. Ltd., India</p>
                                      <h5 className="text-warning my-2">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>

                  </h5>
                                      <div className="mb-0">Overux is HTML template based on Bootstrap 4.1 framework. This html template can be used in various business domains like Manufacturing, inventory, IT, administration etc.</div>
                                      <br />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* sidebar right ends */}

      {/* fullscreen menu start */}
      <div className="modal fade popup-fullmenu" id="fullscreenmenu" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
              <div className="modal-content fullscreen-menu">
                  <div className="modal-header">
                      <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div className="modal-body">
                      <a href="/profile/" className="block user-fullmenu popup-close">
                          <figure>
                              <img src="img/user1.png" alt="" />
                          </figure>
                          <div className="media-content">
                              <h6>John Doe<br /><small>India</small></h6>
                          </div>
                      </a>
                      <br />
                      <div className="row mx-0">
                          <div className="col">
                              <div className="menulist">
                                  <ul>
                                      <li>
                                          <a href="index.html" className="popup-close">
                                              <div className="item-title">
                                                  <i className="icon material-icons md-only">poll</i> Dashboard
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="projects.html" className="popup-close">
                                              <div className="item-title">
                                                  <i className="icon material-icons md-only">add_shopping_cart</i> Projects
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="project-detail.html" className="popup-close">
                                              <div className="item-title">
                                                  <i className="icon material-icons md-only">filter_none</i> Details
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="user-profile.html" className="popup-close">
                                              <div className="item-title">
                                                  <i className="icon material-icons md-only">person</i> Profile
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="aboutus.html" className="popup-close">
                                              <div className="item-title">
                                                  <i className="icon material-icons md-only">domain</i> About
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="component.html" className="popup-close">
                                              <div className="item-title">
                                                  <i className="icon material-icons md-only">pages</i> Component
                                              </div>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <br />
                      <div className="row mx-0">
                          <div className="col">
                              <a href="login.html" className="rounded btn btn-outline-white text-white popup-close">Logout</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* fullscreen menu ends */}

      {/* page main start */}
      <div className="page">
          <form className="searchcontrol">
              <div className="input-group">
                  <div className="input-group-prepend">
                      <button type="button" className="input-group-text close-search"><i className="material-icons">keyboard_backspace</i></button>
                  </div>
                  <input type="email" className="form-control border-0" placeholder="Search..." aria-label="Username" />
              </div>
          </form>
          <header className="row m-0 fixed-header">
              <div className="left"></div>
              <div className="col center">
                  <a href="" className="logo">
                      <figure>
                        <img src="img/logo-w.png" alt="" />
                      </figure> Overux
                  </a>
              </div>
              <div className="right">
                  <a onClick={e => e.preventDefault()} className="menu-right"><i className="material-icons">person</i></a>
              </div>
          </header>
          <div className="page-content">
              <div className="content-sticky-footer">
                  <div className="col-12 mb-4">
                      <div className="card">
                          <div className="card-body">
                              <i className="material-icons text-warning icon-weather icon-4x">wb_sunny</i>
                              <p className="text-uppercase font-weight-bold text-primary">New York</p>
                              <h1 className="display-4 mt-4">30<sup><small>o</small></sup>C</h1>
                              <p className="mb-4">{hari}, {jam}:{menit}:{detik}</p>
                              <h1><span className="font-weight-light small">Selamat {jam < 12 ? `Pagi` : ( jam < 18 ? `Sore` : `Malam` )}</span><br /><b>{fullname}</b></h1>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 mb-4">
                      <div className="card">
                          <div className="card-body">
                              <p className="text-uppercase font-weight-bold text-primary">Take First</p>
                              <div className="text-center justify-content-between d-flex">
                                  <button className="btn btn-danger rounded sq-btn text-white"><i className="material-icons w-25px">home_outline</i></button>
                                  <button className="btn btn-primary rounded sq-btn text-white"><i className="material-icons w-25px">mail_outline</i></button>
                                  <button className="btn btn-warning rounded sq-btn text-white"><i className="material-icons w-25px">chat_outline</i></button>
                                  <button className="btn btn-success rounded sq-btn text-white"><i className="material-icons w-25px">notifications_outline</i></button>
                                  <button className="btn btn-info rounded sq-btn text-white"><i className="material-icons w-25px">stars_outline</i></button>
                              </div>

                          </div>
                      </div>
                  </div>
                  <div className="w-100">
                      <div className="carosel">
                          <div className="swiper-container swiper-init swipermultiple">
                              <div className="swiper-pagination"></div>
                              <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                      <div className="swiper-content-block bg-white shadow-15">
                                          <p className="text-uppercase font-weight-bold text-primary">Project</p>
                                          <h4 className="title-small-carousel">Completed</h4>
                                          <p>November 2018</p>
                                          <div className="gaugewrap">
                                              <h2 className="title-number-carousel"><span className="text-primary">6</span><small>/8 Project</small></h2>
                                              <div className="progress_profile1 gauge" data-value="0.65" data-size="20" data-thickness="2" data-animation-start-value="0" data-reverse="false"></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="swiper-content-block bg-white shadow-15">
                                          <p className="text-uppercase font-weight-bold text-primary">Project</p>
                                          <h4 className="title-small-carousel">Overrun</h4>
                                          <p>November 2018</p>
                                          <div className="gaugewrap">
                                              <h2 className="title-number-carousel"><span className="text-danger">2</span><small>/3 Project</small></h2>
                                              <div className="progress_profile2  gauge" data-value="0.65" data-size="20" data-thickness="2" data-animation-start-value="0" data-reverse="false"></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="swiper-content-block gradient-danger text-white shadow-15">
                                          <p className="text-uppercase font-weight-bold text-white">Project</p>
                                          <h4 className="text-white title-small-carousel">Completed</h4>
                                          <p className="text-white">November 2018</p>
                                          <div className="gaugewrap">
                                              <h2 className="text-white title-number-carousel"><span className="text-white">6</span><small>/8 Project</small></h2>
                                              <div className="progress_profile5 gauge" data-value="0.65" data-size="20" data-thickness="2" data-animation-start-value="0" data-reverse="false"></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="swiper-content-block gradient-primary text-white shadow-15">
                                          <p className="text-uppercase font-weight-bold text-white">Project</p>
                                          <h4 className="text-white title-small-carousel">Overrun</h4>
                                          <p className="text-white">November 2018</p>
                                          <div className="gaugewrap">
                                              <h2 className="text-white title-number-carousel"><span className="text-white">2</span><small>/3 Project</small></h2>
                                              <div className="progress_profile5  gauge" data-value="0.65" data-size="20" data-thickness="2" data-animation-start-value="0" data-reverse="false"></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="swiper-content-block gradient-warning text-white shadow-15">
                                          <p className="text-uppercase font-weight-bold text-white">Project</p>
                                          <h4 className="text-white title-small-carousel">Good Job!</h4>
                                          <p className="text-white">November 2018</p>
                                          <div className="gaugewrap">
                                              <h2 className="text-white title-number-carousel"><span className="text-white">6</span><small>/8 Project</small></h2>
                                              <div className="progress_profile5  gauge" data-value="0.65" data-size="20" data-thickness="2" data-animation-start-value="0" data-reverse="false"></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="swiper-content-block gradient-success text-white shadow-15">
                                          <p className="text-uppercase font-weight-bold text-white">Project</p>
                                          <h4 className="text-white title-small-carousel">Critical</h4>
                                          <p className="text-white">November 2018</p>
                                          <div className="gaugewrap">
                                              <h2 className="text-white title-number-carousel"><span className="text-white">2</span><small>/3 Project</small></h2>
                                              <div className="progress_profile5  gauge" data-value="0.65" data-size="20" data-thickness="2" data-animation-start-value="0" data-reverse="false"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 mb-4">
                      <div className="row">
                          <div className="col-6 col-md-4 col-lg-2">
                              <div className="card">
                                  <div className="card-body text-center pb-1">
                                      <div className="row">
                                          <div className="col pr-0 text-left">
                                              <p className="text-uppercase font-weight-bold text-primary">Today</p>
                                          </div>
                                      </div>
                                      <div className="w-100">
                                          <div className="dynamicsparkline my-3"></div>
                                          <h2 className="font-weight-light mb-0">$1560</h2>
                                          <div className="text-success effort-time mt-3 small"> 2hrs <i className="material-icons">arrow_drop_up</i></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-6 col-md-4 col-lg-2">
                              <div className="card">
                                  <div className="card-body text-center pb-1">
                                      <div className="row">
                                          <div className="col pr-0 text-left">
                                              <p className="text-uppercase font-weight-bold text-primary">Yesterday</p>
                                          </div>
                                      </div>
                                      <div className="w-100">
                                          <div className="dynamicsparkline my-3"></div>
                                          <h2 className="font-weight-light mb-0">$2150</h2>
                                          <div className="text-danger effort-time mt-3 small"> 2hrs <i className="material-icons">arrow_drop_down</i></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-100">
                      <div className="carosel">
                          <div className="swiper-container swiper-init swipermultiple">
                              <div className="swiper-pagination"></div>
                              <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                      <div className="card w-100 mb-0">
                                          <figure className="background rounded">
                                              <img src="img/city.jpg" alt="" className="opacity-full" />
                                          </figure>
                                          <div className="card-body text-center pb-1">
                                              <div className="row">
                                                  <div className="col pr-0 text-left">
                                                      <p className="text-uppercase font-weight-bold text-white">Today</p>
                                                  </div>
                                              </div>
                                              <div className="w-100">
                                                  <i className="material-icons icon-3x text-white my-2">mood</i>
                                                  <div className="text-white mt-3">Work Awesomely</div>
                                                  <button className="btn btn-warning rounded btn-sm my-3">Good</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="card w-100 mb-0">
                                          <figure className="background rounded">
                                              <img src="img/city2.jpg" alt="" className="opacity-full" />
                                          </figure>
                                          <div className="card-body text-center pb-1">
                                              <div className="row">
                                                  <div className="col pr-0 text-left">
                                                      <p className="text-uppercase font-weight-bold text-white">Yesterday</p>
                                                  </div>
                                              </div>
                                              <div className="w-100">
                                                  <i className="material-icons icon-3x text-white my-2">cake</i>
                                                  <div className="text-white  mt-3">That's Beautifully</div>
                                                  <button className="btn btn-success rounded btn-sm my-3">Thank you</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="card w-100 mb-0">
                                          <figure className="background rounded">
                                              <img src="img/city.jpg" alt="" className="opacity-full" />
                                          </figure>
                                          <div className="card-body text-center pb-1">
                                              <div className="row">
                                                  <div className="col pr-0 text-left">
                                                      <p className="text-uppercase font-weight-bold text-white">Today</p>
                                                  </div>
                                              </div>
                                              <div className="w-100">
                                                  <i className="material-icons icon-3x text-white my-2">mood</i>
                                                  <div className="text-white mt-3">Work Awesomely</div>
                                                  <button className="btn btn-danger rounded btn-sm my-3">Good</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="card w-100 mb-0">
                                          <figure className="background rounded">
                                              <img src="img/city2.jpg" alt="" className="opacity-full" />
                                          </figure>
                                          <div className="card-body text-center pb-1">
                                              <div className="row">
                                                  <div className="col pr-0 text-left">
                                                      <p className="text-uppercase font-weight-bold text-white">Yesterday</p>
                                                  </div>
                                              </div>
                                              <div className="w-100">
                                                  <i className="material-icons icon-3x text-white my-2">cake</i>
                                                  <div className="text-white  mt-3">That's Beautifully</div>
                                                  <button className="btn btn-primary rounded btn-sm my-3">Thank you</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <h2 className="block-title">Top On Going Projects</h2>
                  <ul className="list-group mb-4 media-list ">
                      <li className="list-group-item">
                          <a href="#" className="media shadow-15">
                              <div className="media-body">
                                  <h5>Alpha School portal</h5>
                                  <p className="mb-0">Start Date: 28, July 2018</p>
                                  <h2 className="title-number-carousel color-primary"><span className="text-primary">126</span><small>/208 Project</small></h2>
                              </div>
                              <div className="w-auto">
                                  <small className="text-danger effort-time"> 2hrs  <i className="material-icons">arrow_drop_down</i></small>
                                  <div className="dynamicsparkline"></div>
                              </div>
                          </a>
                      </li>
                      <li className="list-group-item">
                          <a href="#" className="media shadow-15">
                              <div className="media-body">
                                  <h5>RozR David</h5>
                                  <p className="mb-0">Start Date: 28, July 2018</p>
                                  <h2 className="title-number-carousel color-primary"><span className="text-primary">150</span><small>/218 Project</small></h2>
                              </div>
                              <div className="w-auto">
                                  <small className="text-danger effort-time"> 2hrs  <i className="material-icons">arrow_drop_down</i></small>
                                  <div className="dynamicsparkline"></div>
                              </div>
                          </a>
                      </li>
                      <li className="list-group-item">
                          <a href="#" className="media shadow-15">
                              <div className="media-body">
                                  <h5>Plasma Research group</h5>
                                  <p className="mb-0">Start Date: 28, July 2018</p>
                                  <h2 className="title-number-carousel color-primary"><span className="text-primary">100</span><small>/152 Project</small></h2>
                              </div>
                              <div className="w-auto">
                                  <small className="text-success effort-time"> 2hrs  <i className="material-icons">arrow_drop_up</i></small>
                                  <div className="dynamicsparkline"></div>
                              </div>
                          </a>
                      </li>
                  </ul>

                  <div className="col-12 mb-4">
                      <div className="row">
                          <div className="col-6 col-md-4 col-lg-2">
                              <div className="card">
                                  <div className="card-body text-center">
                                      <div className="row">
                                          <div className="col pr-0 text-left">
                                              <p className="text-uppercase font-weight-bold text-primary">Active</p>
                                          </div>
                                          <div className="col-auto pl-0 text-right">
                                              <input type="checkbox" id="switch" className="switch sm" />
                                              <label htmlFor="switch">Toggle</label>
                                          </div>
                                      </div>
                                      <i className="material-icons text-warning icon-4x my-4">wb_sunny</i>
                                  </div>
                              </div>
                          </div>
                          <div className="col-6 col-md-4 col-lg-2">
                              <div className="card">
                                  <div className="card-body text-center">
                                      <div className="row">
                                          <div className="col pr-0 text-left">
                                              <p className="text-uppercase font-weight-bold text-primary">Active</p>
                                          </div>
                                          <div className="col-auto pl-0 text-right">
                                              <input type="checkbox" id="switch2" className="switch sm" />
                                              <label htmlFor="switch2">Toggle</label>
                                          </div>
                                      </div>
                                      <i className="material-icons text-danger icon-4x my-4">notifications_active</i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <h2 className="block-title">Trending Project</h2>
                  <div className="row mx-0 mb-4">
                      <div className="col">
                          <div className="card">
                              <div className="card-body">
                                  <a href="#" className="media">
                                      <div className="media-body">
                                          <h5>Karla Sports App </h5>
                                          <p>25 November 2018</p>
                                      </div>
                                      <div className="w-auto h-100">
                                          <span className="text-primary">Completed</span>
                                      </div>
                                  </a>
                              </div>
                              <div className="card-footer">
                                  <div className="row">
                                      <div className="col">
                                          <i className="material-icons text-warning">star</i>
                                          <span className="post-seconds">4.9</span>
                                      </div>
                                      <div className="col">
                                          <i className="material-icons text-grey">schedule</i>
                                          <span className="post-seconds">254 <span>hrs</span></span>
                                      </div>
                                      <div className="col">
                                          <i className="material-icons text-grey">monetization_on</i>
                                          <span className="post-seconds">4000 <span>$</span></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* page main ends */}

      </>

  );
}

export default Home;
