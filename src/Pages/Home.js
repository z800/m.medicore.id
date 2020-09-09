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
        <div class="sidebar sidebar-left">
            <div class="profile-link">
                <a href="#" class="media">
                    <div class="w-auto h-100">
                        <figure class="avatar avatar-40">
                          <img src="img/user1.png" alt="" />
                        </figure>
                    </div>
                    <div class="media-body">
                        <h5 class=" mb-0">John Doe <span class="status-online bg-success"></span></h5>
                        <p>India</p>
                    </div>
                </a>
            </div>
            <nav class="navbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="index.html" class="sidebar-close">
                            <div class="item-title">
                                <i class="material-icons">star</i> Welcome
                            </div>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="javascript:void(0)" class="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="item-title">
                                <i class="material-icons">menu</i> Menu
                            </div>
                        </a>
                        <div class="dropdown-menu">
                            <a href="javascript:void(0)" class="sidebar-close  dropdown-item">
                             Menu Overlay (This)
                            </a>
                            <a href="#" class="sidebar-close dropdown-item menu-right">
                             Push Content
                            </a>
                            <a href="javascript:void(0)" class="sidebar-close dropdown-item popup-open" data-toggle="modal" data-target="#fullscreenmenu">
                             Full Screen
                            </a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="javascript:void(0)" class="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="item-title">
                                <i class="material-icons">poll</i> Project
                            </div>
                        </a>
                        <div class="dropdown-menu">
                            <a href="dashboard.html" class="sidebar-close dropdown-item">Dashbaord</a>
                            <a href="projects.html" class="sidebar-close dropdown-item">Projects</a>
                            <a href="project-detail.html" class="sidebar-close dropdown-item">Project Details</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="javascript:void(0)" class="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="item-title">
                                <i class="material-icons">library_books</i> Pages
                            </div>
                        </a>
                        <div class="dropdown-menu">
                            <a href="chat.html" class="sidebar-close dropdown-item">Chat</a>
                            <a href="comingsoon.html" class="sidebar-close dropdown-item">Coming Soon</a>
                            <a href="login.html" class="sidebar-close dropdown-item">Sign in</a>
                            <a href="register.html" class="sidebar-close dropdown-item">Sign Up</a>
                            <a href="forgot-password.html" class="sidebar-close dropdown-item">Forgot Password</a>
                            <a href="error.html" class="sidebar-close dropdown-item">Error</a>
                            <a href="404.html" class="sidebar-close dropdown-item">Error 404</a>
                            <a href="map.html" class="sidebar-close dropdown-item">Map</a>
                            <a href="fullmap.html" class="sidebar-close dropdown-item">Full Map</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="javascript:void(0)" class="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="item-title">
                                <i class="material-icons">collections</i> Images
                            </div>
                        </a>
                        <div class="dropdown-menu">
                            <a href="rounded-thumbnails.html" class="sidebar-close dropdown-item">Rounded Thumbnails</a>
                            <a href="circular-thumbnails.html" class="sidebar-close dropdown-item">Circular Thumbnails</a>
                            <a href="wide-images.html" class="sidebar-close dropdown-item">Wide Images</a>
                            <a href="wide-categories.html" class="sidebar-close dropdown-item">Wide Catogory</a>
                            <a href="gallery.html" class="sidebar-close dropdown-item">Gallery</a>
                            <a href="viwer.html" class="sidebar-close dropdown-item">Viewer</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="javascript:void(0)" class="item-link item-content dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="item-title">
                                <i class="material-icons">view_carousel</i> Introduction
                            </div>
                        </a>
                        <div class="dropdown-menu">
                            <a href="carousel-intro.html" class="sidebar-close dropdown-item">Carousel Intro</a>
                            <a href="splash-intro.html" class="sidebar-close dropdown-item">Splash Carosuel</a>
                            <a href="small-intro.html" class="sidebar-close dropdown-item">Small Intro</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="user-profile.html" class="sidebar-close">
                            <div class="item-title">
                                <i class="material-icons">person</i> User Profile
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="aboutus.html" class="sidebar-close">
                            <div class="item-title">
                                <i class="material-icons">domain</i> About
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="colorscheme.html" class="sidebar-close">
                            <div class="item-title">
                                <i class="material-icons">format_color_fill</i> Color Scheme
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="component.html" class="sidebar-close">
                            <div class="item-title">
                                <i class="material-icons">pages</i> Component
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="contactus.html" class="sidebar-close">
                            <div class="item-title">
                                <i class="material-icons">add_location</i> Contact Us
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="profile-link text-center">
                <a href="login.html" class="btn btn-link text-white btn-block">Logout</a>
            </div>
        </div>
        {/* sidebar left ends */}

        {/* sidebar right start */}
        <div class="sidebar sidebar-right">
            <header class="row m-0 fixed-header">
                <div class="left">
                    <a href="javascript:void(0)" class="menu-left-close"><i class="material-icons">keyboard_backspace</i></a>
                </div>
                <div class="col center">
                    <a href="" class="logo">Best Rated</a>
                </div>
            </header>
            <div class="page-content text-white">
                <div class="row mx-0 mt-3">
                    <div class="col">
                        <div class="card bg-none border-0 shadow-none">
                            <div class="card-body userlist_large">
                                <div class="media">
                                    <figure class="avatar avatar-120 rounded-circle my-2">
                                        <img src="img/user1.png" alt="user image" />
                                    </figure>
                                    <div class="media-body">
                                        <h4 class="mt-0 text-white">Max Johnsons</h4>
                                        <p class="text-white">VP, Maxartkiller Co. Ltd., India</p>
                                        <h5 class="text-warning my-2">
                      <i class="material-icons">star</i>
                      <i class="material-icons">star</i>
                      <i class="material-icons">star</i>
                      <i class="material-icons">star</i>

                    </h5>
                                        <div class="mb-0">Overux is HTML template based on Bootstrap 4.1 framework. This html template can be used in various business domains like Manufacturing, inventory, IT, administration etc.</div>
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
        <div class="modal fade popup-fullmenu" id="fullscreenmenu" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content fullscreen-menu">
                    <div class="modal-header">
                        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <a href="/profile/" class="block user-fullmenu popup-close">
                            <figure>
                                <img src="img/user1.png" alt="" />
                            </figure>
                            <div class="media-content">
                                <h6>John Doe<br /><small>India</small></h6>
                            </div>
                        </a>
                        <br />
                        <div class="row mx-0">
                            <div class="col">
                                <div class="menulist">
                                    <ul>
                                        <li>
                                            <a href="index.html" class="popup-close">
                                                <div class="item-title">
                                                    <i class="icon material-icons md-only">poll</i> Dashboard
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="projects.html" class="popup-close">
                                                <div class="item-title">
                                                    <i class="icon material-icons md-only">add_shopping_cart</i> Projects
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="project-detail.html" class="popup-close">
                                                <div class="item-title">
                                                    <i class="icon material-icons md-only">filter_none</i> Details
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="user-profile.html" class="popup-close">
                                                <div class="item-title">
                                                    <i class="icon material-icons md-only">person</i> Profile
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="aboutus.html" class="popup-close">
                                                <div class="item-title">
                                                    <i class="icon material-icons md-only">domain</i> About
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="component.html" class="popup-close">
                                                <div class="item-title">
                                                    <i class="icon material-icons md-only">pages</i> Component
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="row mx-0">
                            <div class="col">
                                <a href="login.html" class="rounded btn btn-outline-white text-white popup-close">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* fullscreen menu ends */}

        {/* page main start */}
        <div class="page">
            <form class="searchcontrol">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button type="button" class="input-group-text close-search"><i class="material-icons">keyboard_backspace</i></button>
                    </div>
                    <input type="email" class="form-control border-0" placeholder="Search..." aria-label="Username" />
                </div>
            </form>
            <header class="row m-0 fixed-header">
                <div class="left">
                    <a href="javascript:void(0)" class="menu-left"><i class="material-icons">menu</i></a>
                </div>
                <div class="col center">
                    <a href="" class="logo">
                        <figure><img src="img/logo-w.png" alt="" /></figure> Overux</a>
                </div>
                <div class="right">
                    <a href="javascript:void(0)" class="searchbtn"><i class="material-icons">search</i></a>
                    <a href="javascript:void(0)" class="menu-right"><i class="material-icons">person</i></a>
                </div>
            </header>
            <div class="page-content">
                <div class="content-sticky-footer">
                    <div class="col-12 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <i class="material-icons text-warning icon-weather icon-4x">wb_sunny</i>
                                <p class="text-uppercase font-weight-bold text-primary">New York</p>
                                <h1 class="display-4 mt-4">30<sup><small>o</small></sup>C</h1>
                                <p class="mb-4">Thursday, 8:00 AM</p>
                                <h1><span class="font-weight-light small">Good Morning</span><br /><b>John</b></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <p class="text-uppercase font-weight-bold text-primary">Take First</p>
                                <div class="text-center justify-content-between d-flex">
                                    <button class="btn btn-danger rounded sq-btn text-white"><i class="material-icons w-25px">home_outline</i></button>
                                    <button class="btn btn-primary rounded sq-btn text-white"><i class="material-icons w-25px">mail_outline</i></button>
                                    <button class="btn btn-warning rounded sq-btn text-white"><i class="material-icons w-25px">chat_outline</i></button>
                                    <button class="btn btn-success rounded sq-btn text-white"><i class="material-icons w-25px">notifications_outline</i></button>
                                    <button class="btn btn-info rounded sq-btn text-white"><i class="material-icons w-25px">stars_outline</i></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="w-100">
                        <div class="carosel">
                            <div class="swiper-container swiper-init swipermultiple">
                                <div class="swiper-pagination"></div>
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="swiper-content-block bg-white shadow-15">
                                            <p class="text-uppercase font-weight-bold text-primary">Project</p>
                                            <h4 class="title-small-carousel">Completed</h4>
                                            <p>November 2018</p>
                                            <div class="gaugewrap">
                                                <h2 class="title-number-carousel"><span class="text-primary">6</span><small>/8 Project</small></h2>
                                                <div class="progress_profile1 gauge" data-value="0.65" data-size="20" data-thickness="2" data-animation-start-value="0" data-reverse="false"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="swiper-content-block bg-white shadow-15">
                                            <p class="text-uppercase font-weight-bold text-primary">Project</p>
                                            <h4 class="title-small-carousel">Overrun</h4>
                                            <p>November 2018</p>
                                            <div class="gaugewrap">
                                                <h2 class="title-number-carousel"><span class="text-danger">2</span><small>/3 Project</small></h2>
                                                <div class="progress_profile2  gauge" data-value="0.65" data-size="20" data-thickness="2" data-animation-start-value="0" data-reverse="false"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="swiper-content-block gradient-danger text-white shadow-15">
                                            <p class="text-uppercase font-weight-bold text-white">Project</p>
                                            <h4 class="text-white title-small-carousel">Completed</h4>
                                            <p class="text-white">November 2018</p>
                                            <div class="gaugewrap">
                                                <h2 class="text-white title-number-carousel"><span class="text-white">6</span><small>/8 Project</small></h2>
                                                <div class="progress_profile5 gauge" data-value="0.65" data-size="20" data-thickness="2" data-animation-start-value="0" data-reverse="false"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="swiper-content-block gradient-primary text-white shadow-15">
                                            <p class="text-uppercase font-weight-bold text-white">Project</p>
                                            <h4 class="text-white title-small-carousel">Overrun</h4>
                                            <p class="text-white">November 2018</p>
                                            <div class="gaugewrap">
                                                <h2 class="text-white title-number-carousel"><span class="text-white">2</span><small>/3 Project</small></h2>
                                                <div class="progress_profile5  gauge" data-value="0.65" data-size="20" data-thickness="2" data-animation-start-value="0" data-reverse="false"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="swiper-content-block gradient-warning text-white shadow-15">
                                            <p class="text-uppercase font-weight-bold text-white">Project</p>
                                            <h4 class="text-white title-small-carousel">Good Job!</h4>
                                            <p class="text-white">November 2018</p>
                                            <div class="gaugewrap">
                                                <h2 class="text-white title-number-carousel"><span class="text-white">6</span><small>/8 Project</small></h2>
                                                <div class="progress_profile5  gauge" data-value="0.65" data-size="20" data-thickness="2" data-animation-start-value="0" data-reverse="false"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="swiper-content-block gradient-success text-white shadow-15">
                                            <p class="text-uppercase font-weight-bold text-white">Project</p>
                                            <h4 class="text-white title-small-carousel">Critical</h4>
                                            <p class="text-white">November 2018</p>
                                            <div class="gaugewrap">
                                                <h2 class="text-white title-number-carousel"><span class="text-white">2</span><small>/3 Project</small></h2>
                                                <div class="progress_profile5  gauge" data-value="0.65" data-size="20" data-thickness="2" data-animation-start-value="0" data-reverse="false"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 class="block-title">Latest Comments</h2>
                    <ul class="list-group mb-4 media-list ">
                        <li class="list-group-item">
                            <a href="#" class="media shadow-15">
                                <div class="w-auto h-100">
                                    <figure class="avatar avatar-80">
                                    <img src="img/user1.png" alt="" />
                                    </figure>
                                </div>
                                <div class="media-body">
                                    <h5>John Doe <span class="status-online bg-success"></span></h5>
                                    <p class="small mb-2 text-secondary">Date: 18-12-2018</p>
                                    <p>My view is to create greate things </p>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="media shadow-15">
                                <div class="w-auto h-100">
                                    <figure class="avatar avatar-80"><img src="img/user2.png" alt="" /> </figure>
                                </div>
                                <div class="media-body">
                                    <h5>Angeliina Hardy <span class="status-online bg-warning"></span></h5>
                                    <p class="small mb-2 text-secondary">Date: 18-12-2018</p>
                                    <p>My view is to create greate things </p>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="media shadow-15">
                                <div class="w-auto h-100">
                                    <figure class="avatar avatar-80"><img src="img/user3.png" alt="" /> </figure>
                                </div>
                                <div class="media-body">
                                    <h5>Arnold Johnsons <span class="status-online bg-danger"></span></h5>
                                    <p class="small mb-2 text-secondary">Date: 18-12-2018</p>
                                    <p>My view is to create greate things </p>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div class="col-12 mb-4">
                        <div class="row">
                            <div class="col-6 col-md-4 col-lg-2">
                                <div class="card">
                                    <div class="card-body text-center pb-1">
                                        <div class="row">
                                            <div class="col pr-0 text-left">
                                                <p class="text-uppercase font-weight-bold text-primary">Today</p>
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="dynamicsparkline my-3"></div>
                                            <h2 class="font-weight-light mb-0">$1560</h2>
                                            <div class="text-success effort-time mt-3 small"> 2hrs <i class="material-icons">arrow_drop_up</i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 col-lg-2">
                                <div class="card">
                                    <div class="card-body text-center pb-1">
                                        <div class="row">
                                            <div class="col pr-0 text-left">
                                                <p class="text-uppercase font-weight-bold text-primary">Yesterday</p>
                                            </div>
                                        </div>
                                        <div class="w-100">
                                            <div class="dynamicsparkline my-3"></div>
                                            <h2 class="font-weight-light mb-0">$2150</h2>
                                            <div class="text-danger effort-time mt-3 small"> 2hrs <i class="material-icons">arrow_drop_down</i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-100">
                        <div class="carosel">
                            <div class="swiper-container swiper-init swipermultiple">
                                <div class="swiper-pagination"></div>
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="card w-100 mb-0">
                                            <figure class="background rounded">
                                                <img src="img/city.jpg" alt="" class="opacity-full" />
                                            </figure>
                                            <div class="card-body text-center pb-1">
                                                <div class="row">
                                                    <div class="col pr-0 text-left">
                                                        <p class="text-uppercase font-weight-bold text-white">Today</p>
                                                    </div>
                                                </div>
                                                <div class="w-100">
                                                    <i class="material-icons icon-3x text-white my-2">mood</i>
                                                    <div class="text-white mt-3">Work Awesomely</div>
                                                    <button class="btn btn-warning rounded btn-sm my-3">Good</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="card w-100 mb-0">
                                            <figure class="background rounded">
                                                <img src="img/city2.jpg" alt="" class="opacity-full" />
                                            </figure>
                                            <div class="card-body text-center pb-1">
                                                <div class="row">
                                                    <div class="col pr-0 text-left">
                                                        <p class="text-uppercase font-weight-bold text-white">Yesterday</p>
                                                    </div>
                                                </div>
                                                <div class="w-100">
                                                    <i class="material-icons icon-3x text-white my-2">cake</i>
                                                    <div class="text-white  mt-3">That's Beautifully</div>
                                                    <button class="btn btn-success rounded btn-sm my-3">Thank you</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="card w-100 mb-0">
                                            <figure class="background rounded">
                                                <img src="img/city.jpg" alt="" class="opacity-full" />
                                            </figure>
                                            <div class="card-body text-center pb-1">
                                                <div class="row">
                                                    <div class="col pr-0 text-left">
                                                        <p class="text-uppercase font-weight-bold text-white">Today</p>
                                                    </div>
                                                </div>
                                                <div class="w-100">
                                                    <i class="material-icons icon-3x text-white my-2">mood</i>
                                                    <div class="text-white mt-3">Work Awesomely</div>
                                                    <button class="btn btn-danger rounded btn-sm my-3">Good</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="card w-100 mb-0">
                                            <figure class="background rounded">
                                                <img src="img/city2.jpg" alt="" class="opacity-full" />
                                            </figure>
                                            <div class="card-body text-center pb-1">
                                                <div class="row">
                                                    <div class="col pr-0 text-left">
                                                        <p class="text-uppercase font-weight-bold text-white">Yesterday</p>
                                                    </div>
                                                </div>
                                                <div class="w-100">
                                                    <i class="material-icons icon-3x text-white my-2">cake</i>
                                                    <div class="text-white  mt-3">That's Beautifully</div>
                                                    <button class="btn btn-primary rounded btn-sm my-3">Thank you</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 class="block-title">Top On Going Projects</h2>
                    <ul class="list-group mb-4 media-list ">
                        <li class="list-group-item">
                            <a href="#" class="media shadow-15">
                                <div class="media-body">
                                    <h5>Alpha School portal</h5>
                                    <p class="mb-0">Start Date: 28, July 2018</p>
                                    <h2 class="title-number-carousel color-primary"><span class="text-primary">126</span><small>/208 Project</small></h2>
                                </div>
                                <div class="w-auto">
                                    <small class="text-danger effort-time"> 2hrs  <i class="material-icons">arrow_drop_down</i></small>
                                    <div class="dynamicsparkline"></div>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="media shadow-15">
                                <div class="media-body">
                                    <h5>RozR David</h5>
                                    <p class="mb-0">Start Date: 28, July 2018</p>
                                    <h2 class="title-number-carousel color-primary"><span class="text-primary">150</span><small>/218 Project</small></h2>
                                </div>
                                <div class="w-auto">
                                    <small class="text-danger effort-time"> 2hrs  <i class="material-icons">arrow_drop_down</i></small>
                                    <div class="dynamicsparkline"></div>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="media shadow-15">
                                <div class="media-body">
                                    <h5>Plasma Research group</h5>
                                    <p class="mb-0">Start Date: 28, July 2018</p>
                                    <h2 class="title-number-carousel color-primary"><span class="text-primary">100</span><small>/152 Project</small></h2>
                                </div>
                                <div class="w-auto">
                                    <small class="text-success effort-time"> 2hrs  <i class="material-icons">arrow_drop_up</i></small>
                                    <div class="dynamicsparkline"></div>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div class="col-12 mb-4">
                        <div class="row">
                            <div class="col-6 col-md-4 col-lg-2">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <div class="row">
                                            <div class="col pr-0 text-left">
                                                <p class="text-uppercase font-weight-bold text-primary">Active</p>
                                            </div>
                                            <div class="col-auto pl-0 text-right">
                                                <input type="checkbox" id="switch" class="switch sm" />
                                                <label for="switch">Toggle</label>
                                            </div>
                                        </div>
                                        <i class="material-icons text-warning icon-4x my-4">wb_sunny</i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4 col-lg-2">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <div class="row">
                                            <div class="col pr-0 text-left">
                                                <p class="text-uppercase font-weight-bold text-primary">Active</p>
                                            </div>
                                            <div class="col-auto pl-0 text-right">
                                                <input type="checkbox" id="switch2" class="switch sm" checked />
                                                <label for="switch2">Toggle</label>
                                            </div>
                                        </div>
                                        <i class="material-icons text-danger icon-4x my-4">notifications_active</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 class="block-title">Trending Project</h2>
                    <div class="row mx-0 mb-4">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <a href="#" class="media">
                                        <div class="media-body">
                                            <h5>Karla Sports App </h5>
                                            <p>25 November 2018</p>
                                        </div>
                                        <div class="w-auto h-100">
                                            <span class="text-primary">Completed</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col">
                                            <i class="material-icons text-warning">star</i>
                                            <span class="post-seconds">4.9</span>
                                        </div>
                                        <div class="col">
                                            <i class="material-icons text-grey">schedule</i>
                                            <span class="post-seconds">254 <span>hrs</span></span>
                                        </div>
                                        <div class="col">
                                            <i class="material-icons text-grey">monetization_on</i>
                                            <span class="post-seconds">4000 <span>$</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-wrapper shadow-15">
                    <div class="footer">
                        <div class="row mx-0">
                            <div class="col">
                                Overux
                            </div>
                            <div class="col-7 text-right">
                                <a href="" class="social"><img src="img/facebook.png" alt="" /></a>
                                <a href="" class="social"><img src="img/googleplus.png" alt="" /></a>
                                <a href="" class="social"><img src="img/linkedin.png" alt="" /></a>
                                <a href="" class="social"><img src="img/twitter.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer dark">
                        <div class="row mx-0">
                            <div class="col  text-center">
                                Copyright @2018, Maxartkiller
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* page main ends */}


        {/* color chooser menu start */}
        <button class="theme btn btn-info sq-btn rounded float-bottom-right" data-toggle="modal" data-target="#colorscheme"><i class="material-icons">color_lens</i></button>
        <div class="modal fade " id="colorscheme" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content ">
                    <div class="modal-header border-bottom theme-header">
                        <p class="text-uppercase font-weight-bold text-white my-2">Choose your color</p>
                        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="text-center theme-color">
                            <p class="text-uppercase font-weight-bold text-dark text-center">Select Color</p>
                            <button class="m-2 btn btn-danger rounded sq-btn text-white" data-theme="color-theme-red"><i class="material-icons w-25px">color_lens_outline</i></button>
                            <button class="m-2 btn btn-primary rounded sq-btn text-white" data-theme="color-theme-blue"><i class="material-icons w-25px">color_lens_outline</i></button>
                            <button class="m-2 btn btn-warning rounded sq-btn text-white" data-theme="color-theme-yellow"><i class="material-icons w-25px">color_lens_outline</i></button>
                            <button class="m-2 btn btn-success rounded sq-btn text-white" data-theme="color-theme-green"><i class="material-icons w-25px">color_lens_outline</i></button>
                            <br />
                            <button class="m-2 btn btn-pink rounded sq-btn text-white" data-theme="color-theme-pink"><i class="material-icons w-25px">color_lens_outline</i></button>
                            <button class="m-2 btn btn-orange rounded sq-btn text-white" data-theme="color-theme-orange"><i class="material-icons w-25px">color_lens_outline</i></button>
                            <button class="m-2 btn btn-gray rounded sq-btn text-white" data-theme="color-theme-gray"><i class="material-icons w-25px">color_lens_outline</i></button>
                            <button class="m-2 btn btn-black rounded sq-btn text-white" data-theme="color-theme-black"><i class="material-icons w-25px">color_lens_outline</i></button>
                        </div>
                        <hr class="mt-4" />
                        <div class="row align-items-center mt-4">
                            <div class=" col-12 w-100">
                                <p class="text-uppercase font-weight-bold text-dark text-center">Layout Mode</p>
                            </div>
                            <div class="col text-right"><i class="material-icons text-warning icon-3x">wb_sunny</i></div>
                            <div class="col-auto text-center">
                                <input type="checkbox" id="theme-dark" class="switch" />
                                <label for="theme-dark">Toggle</label>
                            </div>
                            <div class="col text-left"><i class="material-icons text-dark icon-3x">brightness_2</i></div>
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
