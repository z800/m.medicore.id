import React, { Component, Suspense, useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom";
import { Table, Utils } from '../Helpers';
import InfiniteScroll from 'react-infinite-scroller';

import axios from "axios";

const Home = () => {

  const Avatar                          = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';
  const [fullname, setFullname]         = useState("Lintang");
  const [FormatHari, setFormatHari]     = useState("");
  const [kota, setKota]                 = useState("Malang");
  const [showLoading, setShowLoading]   = useState(false)
  const [rs, setRs]                     = useState([
                                            { "id": 1, "photo": Avatar, "name": "Tamma Everill", "phone": "+351 888 411 5474" },
                                            { "id": 2, "photo": Avatar, "name": "Alejandrina Alexis", "phone": "+62 188 649 7200" },
                                            { "id": 3, "photo": Avatar, "name": "Hakim Bruntjen", "phone": "+86 241 773 8545" },
                                            { "id": 4, "photo": Avatar, "name": "Prudi Dagwell", "phone": "+62 606 216 1097" },
                                            { "id": 5, "photo": Avatar, "name": "Prent Frizell", "phone": "+86 808 891 5427" },
                                            { "id": 6, "photo": Avatar, "name": "Curtis Enterlein", "phone": "+64 836 110 1773" },
                                            { "id": 7, "photo": Avatar, "name": "Margret Brissard", "phone": "+372 242 306 0100" },
                                          ]);

  useEffect(() => {
    let secTimer = setInterval( () => {
      setFormatHari( Utils.formatHari( new Date() ) )
    },1000)

    return () => clearInterval(secTimer);
  }, []);


  const fetchMoreData = () => {
    console.log( 'dd' )
    const newData = [...rs, ...rs];
    console.log( newData )

    // console.log( newData )
    // setTimeout(() => {
    //   setRs(newData);
    // }, 2000);
  }

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

      {/* page main start */}
      <div className="page">

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
                              <h1><span className="font-weight-light small">Selamat {Utils.jam(new Date()) < 12 ? `Pagi` : ( Utils.jam(new Date()) < 18 ? `Sore` : `Malam` )}</span><br /><b>{fullname}</b></h1>
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

                  <div className="col-12 mb-4">
                      <div className="card">
                          <div className="card-body">
                              <div className="text-center justify-content-between d-flex">
                                      <button className="btn btn-sm btn-info rounded text-white"><i className="material-icons w-25px">local_hospital</i></button>

                                      <form className="text-center">
                                          <label className="sr-only">Your Name</label>
                                          <div className="input-group">
                                              <div className="input-group-prepend">
                                                  <span className="input-group-text"><i className="material-icons">search</i></span>
                                              </div>
                                              <input type="text" className="form-control" placeholder="Layanan terdekat." />
                                          </div>
                                      </form>
                              </div>

                          </div>
                      </div>
                  </div>

                  <InfiniteScroll
                    initialLoad={false}
                    loadMore={fetchMoreData}
                    hasMore={true}
                    loader={(
                      <h4 key={0}>Loading...</h4>
                    )}
                  >

                    {rs.map((i, index) => (

                      <div className="row mx-0 mb-4" key={i.id}>
                          <div className="col">
                              <div className="card">
                                  <div className="card-body">
                                      <a href="#" className="media">
                                          <div className="w-auto h-100">
                                              <figure className="avatar avatar-80"><img src={`${i.photo}`} alt="" /> </figure>
                                          </div>
                                          <div className="media-body">
                                              <h5>{i.name} </h5>
                                              <p className="small mb-2 text-secondary">{i.phone}</p>
                                              <p>My view is to create greate things </p>
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


                    ))}

                  </InfiniteScroll>

              </div>
          </div>
      </div>
      {/* page main ends */}

      </>

  );
}

export default Home;
