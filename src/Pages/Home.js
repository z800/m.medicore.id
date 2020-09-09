import React, { Component, Suspense, useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { Table, Utils } from '../Helpers';
import axios from "axios";

function Home() {

  const [fullname, setFullname]         = useState("Lintang");
  const [FormatHari, setFormatHari]     = useState("");
  const [kota, setKota]                 = useState("Malang");

  useEffect(() => {

    window.setInterval(function () {

      setFormatHari( Utils.formatHari() )

    }.bind(this), 1000);

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
                              <p className="text-uppercase font-weight-bold text-primary">{kota}</p>
                              <p className="mb-4">{FormatHari}</p>
                              <h1><span className="font-weight-light small">Selamat {Utils.jam() < 12 ? `Pagi` : ( Utils.jam() < 18 ? `Sore` : `Malam` )}</span><br /><b>{fullname}</b></h1>
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
