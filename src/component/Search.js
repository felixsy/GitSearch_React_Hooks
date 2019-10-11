import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Search =(props)=> { 

    const [ text, setText] = useState("");

    const onChangehandler = (e) => {
        setText(e.target.value)
    }

   const onSubmitHandler = (e) => {
        e.preventDefault();
        if (text === '') {
            props.setAlert('Please Enter Username to Search', 'warning');
        } else {
            props.searchUsers(text);
            setText("");
        }
    }


        const { showClear, clearUser } =props;
        return (
            <div className="col-sm-12 mx-auto my-3">
                <form className="form" onSubmit={onSubmitHandler}>
                    <div className="row">
                        <div className="col-sm-9">
                            <input type='search' name="text" className="form-control mb-2" placeholder="Enter Github username to search e.g felixsy"
                                onChange={onChangehandler} value={text}></input>
                        </div>
                        <div className="col-sm-3">
                            <input type="submit" value="Search" className="form-control btn btn-primary"></input>
                        </div>
                        {showClear &&
                            <div className="col-sm-12">
                                <button className="btn btn-danger form-control" onClick={clearUser}>Clear</button>
                            </div>
                        }

                    </div>
                </form>
            </div>
        )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,

}

export default Search;