import React, { Component, Suspense, useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom";
import { Table, Utils } from '../Helpers';
import InfiniteScroll from 'react-infinite-scroller';
import { generateRandomData } from './helpers';

import axios from "axios";

const Home = () => {

  const Avatar                          = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';
  const [fullname, setFullname]         = useState("Lintang");
  const [FormatHari, setFormatHari]     = useState("");
  const [kota, setKota]                 = useState("Malang");
  const [showLoading, setShowLoading]   = useState(false)
  const [rs, setRs]                     = useState([
                                            { "id": 1, "photo": Avatar, "name": "Klinik Rahma Husada Celaket", "phone": "+351 888 411 5474", "loc": "2 Km dari lokasi Anda." },
                                          ]);

  useEffect(() => {
    let secTimer = setInterval( () => {
      setFormatHari( Utils.formatHari( new Date() ) )
    },1000)

    return () => clearInterval(secTimer);
  }, []);

  useEffect(() => {

    var script = document.createElement('script')
    script.src = 'js/Home.js'
    script.class = "external-script"
    document.body.appendChild(script);

  }, [])

  useEffect(() => {

    var elem1 = document.getElementsByClassName('output_1hFrT')[0];

    elem1.addEventListener('scroll', handleScroll);

    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const handleScroll = () => {
    console.log( window.innerHeight)
    // if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    // console.log('Fetch more list items!');
  }

  const fetchMoreData = () => {
    const newData = [...rs, ...generateRandomData(5)];
    setTimeout(() => {
      setRs(newData);
    }, 2000);
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
                  <a href="" className="logo">Medicore</a>
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
                      </figure> Medicore
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

                  <div className="w-100">
                      <div className="carosel">
                          <div className="swiper-container swiper-init swipermultiple">
                              <div className="swiper-pagination"></div>
                              <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                      <div className="swiper-content-block bg-white shadow-15">
                                          <p className="text-uppercase font-weight-bold text-primary">Jadwal Periksa</p>
                                          <h4 className="title-small-carousel">Dr. Bobi</h4>
                                          <p className="text-white">Praktek : <br />17:00 - 21:00</p>
                                          <p>22 November 2020</p>
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="swiper-content-block bg-danger shadow-15">
                                          <p className="text-uppercase font-weight-bold text-primary">Kode e-Lab</p>
                                          <h4 className="title-small-carousel">982-372-3</h4>
                                          <p className="text-white">Jam Buka<br />17:00 - 21:00</p>
                                          <p>22 November 2020</p>
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="swiper-content-block bg-info shadow-15">
                                          <p className="text-uppercase font-weight-bold text-primary">Kode e-Resep</p>
                                          <h4 className="title-small-carousel">289-3748-293</h4>
                                          <p className="text-white">Jam Buka<br />17:00 - 21:00</p>
                                          <p>22 November 2020</p>
                                      </div>
                                  </div>
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

                  {/* loader ->> <h4 key={0}>Loading...</h4> */}

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
                                              <p className="small mb-2 text-secondary">{i.loc}</p>
                                              <p>Poli Bedah, Poli Mata</p>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="card-footer p-0 border-0">
                                    <button className="btn btn-primary btn-block btn-lg rounded-0"> Masuk </button>
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
