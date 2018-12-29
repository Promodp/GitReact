
import ReactDOM from 'react-dom';
//import { getProducts } from './services/products';
import axios from 'axios';
import "./Home.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor( props ) {
        super( props );

        console.log("constructor");
        
        this.state = {
           users:[],
        //    token : undefined
        };
    }

    // componentWillMount(){
    //     console.log("cwm");
    // }
    componentDidMount(){

        //axios call for token


        //axios call for user names
        let userNamesFromResponse = [];
        axios.get("http://apiproxy.nl-demo.com/github/search/users", {
            params: {
                q: "pro"
            },
            headers:{
                "x-nl-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0ZWZ5am9obkBuaW5lbGVhcHMuY29tIiwiaWF0IjoxNTQ2MDcyNjA0LCJleHAiOjE1NDYwNzk4MDQsImF1ZCI6InN0ZWZ5am9obkBuaW5lbGVhcHMuY29tIiwiaXNzIjoiYXBpcHJveHkubmwtZGVtby5jb20ifQ.SvbdR0Tu6q5XlvpYvDJAaXIPnUROSBUG9OJAlp1zXiU"
            }
        }).then(promod=> {
            promod.data.items.map((arrayItem) => {
                console.log(arrayItem.login);
                userNamesFromResponse.push(arrayItem.login);
            });
            this.setState({
                users: userNamesFromResponse
            }, () => {
                console.log(this.state.users);
            });
        }).catch((error) => {
            console.log(error);
        });
    } 
    // search(){
    //     console.log('this.state', this.state)
    //     const base_url=`http://apiproxy.nl-demo.com/github/search/users?`;
    //     const user_url= `${base_url}q={this.state.query}&limit=10`;

    //}

    render() {
        console.log("render");
        return (
        <div>
            <div className="container">
                <div className="row">
                     {/* <div className="col-3"  style={{ marginTop: '18px',borderBottom: '1px solid',paddingLeft:'0px' }}>  */}
                        {/* <ul>
                            <li className="col-4" style={{ marginLeft: '200px', fontSize: '9px' }} >Explore</li><br/>
                            <li className="col-4" style={{ marginLeft: '200px', fontSize: '9px' }}><i className="fa fa-address-book"></i>
                                Repo</li><br/>
                            <li className="col-4" style={{ marginLeft: '200px', fontSize: '9px' }}> <i className="fa fa-user" aria-hidden="true"></i>User
                        </li>
                        </ul> */}
                        <div className="col-3" style={{display:'inline-block'}}>
                        <div class="card" style={{width: '128px',marginLeft: '148px',marginTop: '13px'}}>
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
                                            <div className="col-5 d-inline-block">
                                                
                                                {
                                                    this.state.users && this.state.users.map( user => {   return (
                                                        <div className=" mb-1" style={{ fontSize: '18px'}}>
                                                    <Link style={{display:"block",}} to="#" itemprop="name codeRepository"><i className="fa fa-book" ></i>
                                                    {user}</Link>
                                                    <div className="f6 text-gray mt-2" style={{ fontSize: '8px' }}>
                                                    Updated <relative-time datetime="2018-11-30T05:11:00Z" title="30 Nov 2018, 10:41 GMT+5:30">26
                                            days ago</relative-time>
                                            <hr/>
                                                </div>
                                                
                                                    </div>);
                                                })}                                                
                                            </div>
                                            <div className="col-6 d-flex flex-column flex-justify-around">
                                                <div className="text-right"><i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="col-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
             </div>
            //  </div>
                            );
                        }
                    }
                    
                    export default Home;
                    
                    
                    
                    
