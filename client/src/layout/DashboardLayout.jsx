import React from 'react';
import MasterLayout from "./MasterLayout.jsx";
import AdminSidebarNavigation from "../components/admin/AdminSidebarNavigation.jsx";

const DashboardLayout = (props) => {
    return (
        <MasterLayout>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-2 border-end">
                            <AdminSidebarNavigation/>
                        </div>
                        <div className="col-10">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default DashboardLayout;