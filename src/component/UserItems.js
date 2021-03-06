import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const UserItems =({user})=> {
    const { avatar_url, login } = user;
    return (
        <div className="col-sm-4 mt-3 text-center">
            <div className="card card-body">
                <div className="row">
                    <div className="col-sm-6">
                        <div><img src={avatar_url} className="rounded-circle profile-img" alt=""></img></div>

                    </div>
                    <div className="col-sm-6">                      
                        <p className="lead">{login}</p>
                        <Link className="btn btn-danger" to={`/user/${login}`}>View Profile</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

UserItems.propType={
    user: PropTypes.object.isRequired
}

export default UserItems
