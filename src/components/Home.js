import React, { Component } from 'react';
import UserDetails from '../containers/UserDetails';
import { Link } from 'react-router-dom';
import { getUsersThunk } from '../actions/creators';
import { USERS, USERS_SUCCESS, USERS_FAILURE } from '../actions/constants';

class Home extends Component {
    
    render() {
        console.log("render");
        let el;
        //let { starred_url} = this.props.usersList.users || {};
        switch( this.props.usersList.isLoading ){
            case USERS:
                el = (
                    <div className="alert alert-default">
                        Products are being loaded...
                    </div>
                );
                break;
            case USERS_SUCCESS:
                el=(<div>
                    <div className="row">
                        <div className="col-3" style={{display:'inline-block'}}>
                        <div class="card" style={{width: '128px',marginLeft: '99px',marginTop: '13px'}}>
                        <div class="card-header">Explore </div>                  
                         <ul class="list-group list-group-flush">
                        <li class="list-group-item"><i className="fa fa-address-book"></i>Repositories</li>
                        <li class="list-group-item"><i className="fa fa-user"></i>Users</li>
                        </ul>
                        </div>
                    </div>
                <div className="col-6">
                    <div>
                        <form action="">
                            <div className="card-body row align-items-center">
                                <div className="col" style={{paddingRight:'0px'}}>
                                    <input className="form-control form-control-lg form-control-borderless sea" type="search" 
                                    // value={this.state.query}
                                        placeholder="Search.."/>  
                                    </div>
                                    <div>
                                    <button className="btn btn-lg btn-success" type="submit" style={{lineHeight: '0.5',backgroundColor: '#287afb',
                                            borderColor: '#337afb'}}>Search</button>
                                    </div>
                            </div>
                    </form>
                            <hr/>
                            <div>
                                <ul>
                                    <li className="col-12 d-flex  py-4 border-bottom public source">
                                        <div className="col-12 d-inline-block">
                                            {
                                                this.props.usersList.users.map( user => {   return (
                                                <div className=" mb-1" style={{ fontSize: '18px'}}>
                                               <div><Link style={{display:"block",}} to={`/home/${user.login}`} component={UserDetails} itemprop="name codeRepository"><i className="fa fa-book" ></i>
                                                {user.login}</Link>
                                                <div className="text-right"><i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            </div>
                                                <div className="f6 text-gray mt-2" style={{ fontSize: '8px' }}>
                                                Updated <relative-time datetime="2018-11-30T05:11:00Z" title="30 Nov 2018, 10:41 GMT+5:30">26
                                        days ago</relative-time><hr/>
                                        <div className="col-6 d-flex flex-column flex-justify-around">
                                           
                                            
                                        </div>
                                        
                                            </div>
                                            
                                      
                                                </div>);
                                            })}
                                                                                            
                                        </div>
                                                          </li>
                                </ul>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                     
                    
                );
                break;
            case USERS_FAILURE:
            el = (
                <div className="alert alert-danger">
                    Something went wrong. Products could not be fetched.
                    <hr />
                    {this.props.usersList.error.message}
                </div>
            );
            break;
            default: 
            el = (
                <div className="col-6 border mr-auto alert alert-info">
                    Page is loading...
                </div>
            );
        }

        return (<div className="container">{el}</div>)
    }

    componentDidMount() {
        this.props.dispatch( getUsersThunk())
    }
}
                    
export default Home;
                    
                    
                    
                    
