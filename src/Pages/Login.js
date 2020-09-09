import React, { Component, Suspense } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

export class Login extends Component {

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

        {/* page main start */}

        <div className="page">
            <div className="page-content h-100">
                <div className="background theme-header"><img src="img/city2.jpg" alt="" /></div>
                <div className="row mx-0 h-100 justify-content-center">
                    <div className="col-10 col-md-6 col-lg-4 my-3 mx-auto text-center align-self-center">
                        <img src="img/logo-w.png" alt="" className="login-logo" />

                        {/* <h1 className="login-title"><small>Welcomes to,</small><br />Overux</h1> */}

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        {/* <h5 className="text-white mb-4">Sing in</h5> */}
                        <div className="login-input-content ">
                            <div className="form-group">
                                <input type="text" className="form-control rounded text-center" placeholder="Masukkan Nomor Hp" onChange={this.handleChange} />
                            </div>
                            <a href="dashboard.html" className="btn btn-block btn-success rounded border-0 z-3" onClick={this.handleSubmit}>Masuk</a>
                        </div>
                        <br />
                    </div>
                </div>

                <br />

            </div>

        </div>

        {/* page main ends */}

        </>

      )

    }

}

export default Login
