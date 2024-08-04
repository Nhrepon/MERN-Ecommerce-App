import React, {useEffect} from 'react';
import userStore from "../../../store/UserStore.js";

const UserComponent = () => {
    const {userProfile, getUserProfile}=userStore();
    useEffect(() => {
        getUserProfile();
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="fs-4">Profile details </h2>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 my-2">
                    <div className="row">
                        <div className="col-auto">
                            <label className="col-form-label">User Name: </label>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control bg-dark-subtle"/>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-2">
                    <div className="row">
                        <div className="col-auto">
                            <label className="col-form-label">User Name: </label>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control bg-dark-subtle"/>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default UserComponent;