import React, { Component } from 'react';
import UserDetails from '../containers/UserDetails';
import { Link } from 'react-router-dom';
import { getUsersThunk } from '../actions/creators';
import { USERS, USERS_SUCCESS, USERS_FAILURE } from '../actions/constants';



const paginationStyle={
    paddingLeft: '368px'
}
const searchStyle={
    width: '294px !important'
}
// changePage= (event)=>{


// }
class Home extends Component {
    render() {
        console.log("render");
        let el;
        //let { starred_url} = this.props.usersList.users || {};
        switch (this.props.usersList.isLoading) {
            case USERS:
                el = (
                    <div className="alert alert-default">
                        Users are being loaded...
                    </div>
                );
                break;
            case USERS_SUCCESS:
                el = (
                    <div>
                        <div className="row">
                            <div className="col-3" style={{ display: 'inline-block' }}>
                                <div className="card" style={{ width: '128px', marginLeft: '99px', marginTop: '13px' }}>
                                    <div className="card-header">Explore </div>
                                    <ul className="list-group">
                                        <li className="list-group-item"><i className="fa fa-address-book"></i>Repositories</li>
                                        <li className="list-group-item"><i className="fa fa-user"></i>Users</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <form action="">
                                        <div className="card-body row align-items-center">
                                            <div className="col" style={{ paddingRight: '0px' }}>
                                                <input className=" form-control-borderless" style={searchStyle} type="search"
                                                    // value={this.state.query}
                                                    placeholder="Search.." />
                                            </div>
                                            <div>
                                                <button className="btn btn-lg btn-success" type="submit" style={{
                                                    lineHeight: '0.5', backgroundColor: '#287afb',
                                                    borderColor: '#337afb'
                                                }}>Search</button>
                                            </div>
                                        </div>
                                    </form>
                                    <hr />
                                    <div>
                                        <ul>
                                            <li className="col-12 d-flex  py-4 border-bottom public source">
                                                <div className="col-12 d-inline-block">
                                                    {
                                                        this.props.usersList.users.map(user => {
                                                            return (
                                                                <div style={{ fontSize: '18px' }}>
                                                                    <div><Link style={{ display: "block", }} to={`/home/${user.login}`} component={UserDetails} itemprop="name codeRepository"><i className="fa fa-book" ></i>
                                                                        {user.login}</Link>
                                                                        <div className="text-right"><i className="fa fa-star" aria-hidden="true"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ fontSize: '8px' }}>
                                                                        Updated 26 days ago
                                                                    <hr />
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
                      
                        <nav>
                            <ul className="pagination " style={paginationStyle}>
                                <li ><Link className="page-link" to="#" onClick={this.changePage}>Previous</Link></li>
                                <li ><Link className="page-link" to="#" onClick={this.changePage}>1</Link></li>
                                <li ><Link className="page-link" to="#" onClick={this.changePage}>2</Link></li>
                                <li ><Link className="page-link" to="#" onClick={this.changePage}>3</Link></li>
                                <li ><Link className="page-link" to="#" onClick={this.changePage}>Next</Link></li>
                            </ul>
                        </nav>

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
        this.props.dispatch(getUsersThunk('1'))
    }
}
export default Home;




