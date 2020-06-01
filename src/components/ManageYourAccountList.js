import React from 'react';

const ManageYourAccountList = props => {

    const content = props.manageYourOptions.map( manageYourOption => {
        return (
            <li key={manageYourOption.id} className="collection-item">
                <div className="row">
                    <div className="col s8 m7 l7 darken-1">
                        <i className="material-icons">{manageYourOption.icon}</i> {manageYourOption.title}
                    </div>
                    <div className="col s4 m5 l5 right-align">
                        <a title={manageYourOption.title} href="#">{manageYourOption.link}</a>
                    </div>
                </div>
            </li>
        )
    }); 

    return (
        <div className="card">
            <div className="card-content">
                <h3>Manage your account</h3>
                <ul className="collection collection-info z-depth-1">
                    {content}       
                 </ul> 
            </div>
        </div>
      );
};

export default ManageYourAccountList;