import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';

const MasterLayout = (props) => {
    return (
        <div>
            <TopNavigationBar/>
            {props.children}
            
        </div>
    );
};

export default MasterLayout;