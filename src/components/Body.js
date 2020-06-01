import React from 'react';
import UserDetail from './UserDetail'
import UserContent from './UserContent'
import Usage from './Usage'
import PaymentOption from './PaymentOption'
import ManageYourAccount from './ManageYourAccount'


class Body extends React.Component {
    render(){
        return( 
            <div className="container mrg-top-20">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="row">
                            <div className="col s12 m5 l5">
                                <UserDetail />
                            </div>
                            <div className="col s12 m7 l7">
                                <UserContent />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m6 l6">
                                <PaymentOption />
                            </div>
                            <div className="col s12 m6 l6">
                                <ManageYourAccount />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <Usage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;

