import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUsersDetailsThunk } from '../actions/creators';
import { USERS_DETAILS, USERS_DETAILS_SUCCESS, USERS_DETAILS_FAILURE } from '../actions/constants';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
export default class UserDetails extends Component {
    render() {
        let el;
        console.log(this.props.usersDetail.users)
        let { login, name, avatar_url, url, repos_url, blog, created_at, followers } = this.props.usersDetail.users || {};
        switch (this.props.usersDetail.isLoading) {
            case USERS_DETAILS:
                el = (
                    <div className="alert alert-dark">
                        Product details are being loaded...
                </div>
                );
                break;
            case USERS_DETAILS_SUCCESS:
                el = (<div className="home-main">
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <div className="col-7"></div>
                                <div className="col-5">
                                    <div className="card" style={{ width: '147px', marginLeft: '4px', marginTop: '12px' }}>
                                        <img className="card-img-top" src={avatar_url} alt="" />
                                        <div className="card-body" style={{ fontSize: '9px', height: '48px' }}>
                                            <h5 className="card-title" style={{ marginTop: '-20px' }}>{name}</h5>
                                        </div>
                                        <ul className="list-group list-group-flush" style={{ fontSize: '10px' }}>
                                            <li className="list-group-item">URL-{url}</li>
                                            <li className="list-group-item"><i class="fab fa-blogger">Blog-</i>{blog}</li>
                                            <li className="list-group-item">Joine On-{created_at}</li>
                                            <li className="list-group-item">{followers} Followers</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div>
                                <ul>
                                    <h6 style={{ marginTop: '13px' }}>Repository</h6>
                                    <hr style={{
                                        marginTop: '0rem',
                                        marginBottom: '-1rem'
                                    }} />
                                    <li className="col-12 d-flex  py-4 border-bottom public source">

                                        <div className="d-inline-block mb-1" style={{ fontSize: '13px' }}>

                                            <Link to={`/home/${login}/${repos_url}`}  Component={UserDetails}><i className="far fa-book"></i>
                                                {repos_url}</Link>

                                            <div className="f6 text-gray mt-2" style={{ fontSize: '8px' }}>
                                                Updated <relative-time datetime="2018-11-30T05:11:00Z" title="30 Nov 2018, 10:41 GMT+5:30">26
                                                days ago</relative-time>
                                            </div>
                                        </div>
                                        <div className="col-6 d-flex flex-column flex-justify-around">
                                            <div className="text-right"><i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </div>
                    <div>
          <footer className="page-footer font-small container-fluid" style={{
              paddingTop: '298px !important',
              
              marginLeft: '-347px !important',
              fontSize: '11px !important'}}>
              <hr/>
            <div className="footer-copyright text-center py-3">© 2018 Gogs version : 0.11.83.1288 Pages: 3ms Template: 3ms
                     </div>
          </footer>
        </div>
                </div>);
                break;
            case USERS_DETAILS_FAILURE:
                el = (
                    <div className="alert alert-danger">
                        Something went wrong. Product details could not be fetched.
                    <hr />
                        {this.state.error.message}
                    </div>
                );
                break;
            default:
                el = (
                    <div className="alert alert-info">
                        Page is loading...
                </div>
                );
        }
        return (

            <div className="container-fluid">
                {el}
            </div>

        );
    }
    componentDidMount() {
        this.props.dispatch(getUsersDetailsThunk(this.props.match.params.id))
    }
}

