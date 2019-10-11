import React from 'react'
import Useritems from './UserItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

 const Users =(props)=> {
     const { loading, users  } = props
        if(loading === true) {
            return (
                <div className="container">
                    <div className=" text-center mt-5 col-sm-6 mx-auto">
                        <Spinner></Spinner>
                    </div>
                </div>
            )

        } else {

            return (
                <div className="container">
                    <div className="row">
                        {users.map(user => (
                            <Useritems key={user.id} user={user}>

                            </Useritems>
                        ))}
                    </div>
                </div>
            )
        }
}

Users.propType ={
    user: PropTypes.object.isRequired,
}

export default Users;