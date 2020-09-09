import React, { Component, Suspense } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

export class Home extends Component {

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    handleChange = (event) => {
      this.setState({
        phone: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()

      const phone = {
        phone: this.state.phone
      }

      axios.get('https://api.medicore.id/', {
        params: {
          foo: 'bar'
        }
      }).then(response => {
        console.log( response )
        console.log( response.data )

        // this.setState({
        //   weather: response.data.list[0]
        // });
        // console.log(response.data.list[0]); //returns JSON correctly
        // console.log(this.state.weather.main.temp); //returns correct value (304.15)
      }).catch(error => {
        // console.log('Error', error);
      });

      // axios.post('https://api.medicore.id/')
      //   .then(response => {
      //     console.log( response )
      //     console.log( response.data )
      //
      //     // this.setState({
      //     //   weather: response.data.list[0]
      //     // });
      //     // console.log(response.data.list[0]); //returns JSON correctly
      //     // console.log(this.state.weather.main.temp); //returns correct value (304.15)
      //   })
      //   .catch(error => {
      //     // console.log('Error', error);
      //   });
    }

    constructor(props) {
      super(props);
      this.state = {
      	pasien_lama: true,
        pasien_baru: false,
        jenis_pasien: true
    	}
    }

    render() {

      const{ phone } = this.state;

      return (

        <>

        {/* sidebar left start */}
        <div className="sidebar sidebar-left">
            <div className="profile-link">
                <a href="#" className="media">
                    <div className="w-auto h-100">
                        <figure className="avatar avatar-40">
                          <img src="img/user1.png" alt="" />
                        </figure>
                    </div>
                    <div className="media-body">
                        <h5 className=" mb-0">John Doe <span className="status-online bg-success"></span></h5>
                        <p>India</p>
                    </div>
                </a>
            </div>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="index.html" className="sidebar-close">
                            <div className="item-title">
                                <i className="material-icons">star</i> Welcome
                            </div>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a onClick={e => e.preventDefault()} className="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="item-title">
                                <i className="material-icons">menu</i> Menu
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <a onClick={e => e.preventDefault()} className="sidebar-close  dropdown-item">
                             Menu Overlay (This)
                            </a>
                            <a href="#" className="sidebar-close dropdown-item menu-right">
                             Push Content
                            </a>
                            <a onClick={e => e.preventDefault()} className="sidebar-close dropdown-item popup-open" data-toggle="modal" data-target="#fullscreenmenu">
                             Full Screen
                            </a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a onClick={e => e.preventDefault()} className="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="item-title">
                                <i className="material-icons">poll</i> Project
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <a href="dashboard.html" className="sidebar-close dropdown-item">Dashbaord</a>
                            <a href="projects.html" className="sidebar-close dropdown-item">Projects</a>
                            <a href="project-detail.html" className="sidebar-close dropdown-item">Project Details</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a onClick={e => e.preventDefault()} className="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="item-title">
                                <i className="material-icons">library_books</i> Pages
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <a href="chat.html" className="sidebar-close dropdown-item">Chat</a>
                            <a href="comingsoon.html" className="sidebar-close dropdown-item">Coming Soon</a>
                            <a href="login.html" className="sidebar-close dropdown-item">Sign in</a>
                            <a href="register.html" className="sidebar-close dropdown-item">Sign Up</a>
                            <a href="forgot-password.html" className="sidebar-close dropdown-item">Forgot Password</a>
                            <a href="error.html" className="sidebar-close dropdown-item">Error</a>
                            <a href="404.html" className="sidebar-close dropdown-item">Error 404</a>
                            <a href="map.html" className="sidebar-close dropdown-item">Map</a>
                            <a href="fullmap.html" className="sidebar-close dropdown-item">Full Map</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a onClick={e => e.preventDefault()} className="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="item-title">
                                <i className="material-icons">collections</i> Images
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <a href="rounded-thumbnails.html" className="sidebar-close dropdown-item">Rounded Thumbnails</a>
                            <a href="circular-thumbnails.html" className="sidebar-close dropdown-item">Circular Thumbnails</a>
                            <a href="wide-images.html" className="sidebar-close dropdown-item">Wide Images</a>
                            <a href="wide-categories.html" className="sidebar-close dropdown-item">Wide Catogory</a>
                            <a href="gallery.html" className="sidebar-close dropdown-item">Gallery</a>
                            <a href="viwer.html" className="sidebar-close dropdown-item">Viewer</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a onClick={e => e.preventDefault()} className="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="item-title">
                                <i className="material-icons">view_carousel</i> Introduction
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <a href="carousel-intro.html" className="sidebar-close dropdown-item">Carousel Intro</a>
                            <a href="splash-intro.html" className="sidebar-close dropdown-item">Splash Carosuel</a>
                            <a href="small-intro.html" className="sidebar-close dropdown-item">Small Intro</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="user-profile.html" className="sidebar-close">
                            <div className="item-title">
                                <i className="material-icons">person</i> User Profile
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="aboutus.html" className="sidebar-close">
                            <div className="item-title">
                                <i className="material-icons">domain</i> About
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="colorscheme.html" className="sidebar-close">
                            <div className="item-title">
                                <i className="material-icons">format_color_fill</i> Color Scheme
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="component.html" className="sidebar-close">
                            <div className="item-title">
                                <i className="material-icons">pages</i> Component
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="contactus.html" className="sidebar-close">
                            <div className="item-title">
                                <i className="material-icons">add_location</i> Contact Us
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="profile-link text-center">
                <a href="login.html" className="btn btn-link text-white btn-block">Logout</a>
            </div>
        </div>
        {/* sidebar left ends */}

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
                <div className="left">
                    <a onClick={e => e.preventDefault()} className="menu-left"><i className="material-icons">menu</i></a>
                </div>
                <div className="col center">
                    <a href="" className="logo">
                        <figure><img src="img/logo-w.png" alt="" /></figure> Overux</a>
                </div>
                <div className="right">
                    <a onClick={e => e.preventDefault()} className="searchbtn"><i className="material-icons">search</i></a>
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
                                <p className="mb-4">Thursday, 8:00 AM</p>
                                <h1><span className="font-weight-light small">Good Morning</span><br /><b>John</b></h1>
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

                    <h2 className="block-title">Latest Comments</h2>
                    <ul className="list-group mb-4 media-list ">
                        <li className="list-group-item">
                            <a href="#" className="media shadow-15">
                                <div className="w-auto h-100">
                                    <figure className="avatar avatar-80">
                                    <img src="img/user1.png" alt="" />
                                    </figure>
                                </div>
                                <div className="media-body">
                                    <h5>John Doe <span className="status-online bg-success"></span></h5>
                                    <p className="small mb-2 text-secondary">Date: 18-12-2018</p>
                                    <p>My view is to create greate things </p>
                                </div>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="media shadow-15">
                                <div className="w-auto h-100">
                                    <figure className="avatar avatar-80"><img src="img/user2.png" alt="" /> </figure>
                                </div>
                                <div className="media-body">
                                    <h5>Angeliina Hardy <span className="status-online bg-warning"></span></h5>
                                    <p className="small mb-2 text-secondary">Date: 18-12-2018</p>
                                    <p>My view is to create greate things </p>
                                </div>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="media shadow-15">
                                <div className="w-auto h-100">
                                    <figure className="avatar avatar-80"><img src="img/user3.png" alt="" /> </figure>
                                </div>
                                <div className="media-body">
                                    <h5>Arnold Johnsons <span className="status-online bg-danger"></span></h5>
                                    <p className="small mb-2 text-secondary">Date: 18-12-2018</p>
                                    <p>My view is to create greate things </p>
                                </div>
                            </a>
                        </li>
                    </ul>

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
                <div className="footer-wrapper shadow-15">
                    <div className="footer">
                        <div className="row mx-0">
                            <div className="col">
                                Overux
                            </div>
                            <div className="col-7 text-right">
                                <a href="" className="social"><img src="img/facebook.png" alt="" /></a>
                                <a href="" className="social"><img src="img/googleplus.png" alt="" /></a>
                                <a href="" className="social"><img src="img/linkedin.png" alt="" /></a>
                                <a href="" className="social"><img src="img/twitter.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer dark">
                        <div className="row mx-0">
                            <div className="col  text-center">
                                Copyright @2018, Maxartkiller
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* page main ends */}


        {/* color chooser menu start */}
        <button className="theme btn btn-info sq-btn rounded float-bottom-right" data-toggle="modal" data-target="#colorscheme"><i className="material-icons">color_lens</i></button>
        <div className="modal fade " id="colorscheme" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content ">
                    <div className="modal-header border-bottom theme-header">
                        <p className="text-uppercase font-weight-bold text-white my-2">Choose your color</p>
                        <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <div className="text-center theme-color">
                            <p className="text-uppercase font-weight-bold text-dark text-center">Select Color</p>
                            <button className="m-2 btn btn-danger rounded sq-btn text-white" data-theme="color-theme-red"><i className="material-icons w-25px">color_lens_outline</i></button>
                            <button className="m-2 btn btn-primary rounded sq-btn text-white" data-theme="color-theme-blue"><i className="material-icons w-25px">color_lens_outline</i></button>
                            <button className="m-2 btn btn-warning rounded sq-btn text-white" data-theme="color-theme-yellow"><i className="material-icons w-25px">color_lens_outline</i></button>
                            <button className="m-2 btn btn-success rounded sq-btn text-white" data-theme="color-theme-green"><i className="material-icons w-25px">color_lens_outline</i></button>
                            <br />
                            <button className="m-2 btn btn-pink rounded sq-btn text-white" data-theme="color-theme-pink"><i className="material-icons w-25px">color_lens_outline</i></button>
                            <button className="m-2 btn btn-orange rounded sq-btn text-white" data-theme="color-theme-orange"><i className="material-icons w-25px">color_lens_outline</i></button>
                            <button className="m-2 btn btn-gray rounded sq-btn text-white" data-theme="color-theme-gray"><i className="material-icons w-25px">color_lens_outline</i></button>
                            <button className="m-2 btn btn-black rounded sq-btn text-white" data-theme="color-theme-black"><i className="material-icons w-25px">color_lens_outline</i></button>
                        </div>
                        <hr className="mt-4" />
                        <div className="row align-items-center mt-4">
                            <div className=" col-12 w-100">
                                <p className="text-uppercase font-weight-bold text-dark text-center">Layout Mode</p>
                            </div>
                            <div className="col text-right"><i className="material-icons text-warning icon-3x">wb_sunny</i></div>
                            <div className="col-auto text-center">
                                <input type="checkbox" id="theme-dark" className="switch" />
                                <label htmlFor="theme-dark">Toggle</label>
                            </div>
                            <div className="col text-left"><i className="material-icons text-dark icon-3x">brightness_2</i></div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

        {/* color chooser menu ends */}

        </>

      )

    }

}

export default Home
