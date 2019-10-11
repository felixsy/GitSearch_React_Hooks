import React, { Fragment, useEffect} from 'react'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

 const User =(props)=> {

    const { match, user, loading, getUser} = props;

    useEffect(()=>{
        getUser(match.params.login);
        
        // eslint-disable-next-line
    }, []);

    // useEffect(()=>[

    // ], ()=>{
    //     return cleanup;
    // })

        const {
            name,
            avatar_url,
            location,
            company,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable } = user;

        if (loading) {
            return (<Spinner />)
        } else {
        }
        return (
            <Fragment>
                <div className="container">
                    <Link to="/" className="btn btn-secondary mt-2 text-white"><i className="fas fa-angle-double-left"></i> Back to Search</Link>
                    <div className="card card-body mt-3 text-center align-center">
                        <div className="row">
                            <div className="col-sm-5">
                                <p> Hireable: {" "} {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-window-close text-danger"></i>}</p>
                                <img src={avatar_url} className="rounded-circle mx-auto " style={{ height: '200px', width: '200px' }} alt="profile_image"></img>
                                <h4 className="mt-2" >{name}</h4>
                                <p>location: {location}</p>
                            </div>

                            <div className="col-sm-7 text-justify mt-5">
                                {bio && (
                                    <Fragment>
                                        <h3>Bio:</h3>
                                        <p>{bio}</p>
                                    </Fragment>
                                )
                                }

                                <a href={html_url} className="btn btn-info">View Github Profile</a>

                                {login && (
                                    <Fragment>
                                        <p className=" mt-3"><b>Login:</b> {login}</p>
                                    </Fragment>
                                )}

                                {company && (
                                    <Fragment>
                                        <p className=""><b>Company:</b> {company}</p>
                                    </Fragment>
                                )}

                                {blog && (
                                    <Fragment>
                                        <p className=""><b>Blog:</b> {blog}</p>

                                    </Fragment>
                                )}

                                <div className=" align-left">
                                    <div className="badge badge-danger m-2">Followers: {followers} </div>
                                    <div className="badge badge-success m-2">Following: {following} </div>
                                    <div className="badge badge-primary m-2">Public Repository: {public_repos} </div>
                                    <div className="badge badge-warning m-2">Public Gist: {public_gists} </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </Fragment>
        )

    
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getUser: PropTypes.func.isRequired
}

export default User;