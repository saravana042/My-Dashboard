import React from 'react';
import avatar from '../assets/images/avatar.jpg';

class UserDetail extends React.Component {

    render(){
        return( 

    <div className="row">
        <div className="col s12 m12 l12">
          <div className="card user">
            <div className="card-image user--card-image">
                <div className="user--card-image--avatar">
                    <span>
                    <img src={avatar} alt="" className="circle responsive-img"/> 
                    <span className="indicator"></span>
                    </span>
                </div>
                <div className="center-align user--title">
                    <p>Saravanan Karthick</p>
                </div>
            </div>
            <div className="user--card-content">
              <div className="user--card-content-left center-align">
                    <p className="title">Pending bill</p>
                    <p className="amount">200$</p>
              </div>
              <div className="user--card-content-right center-align">
                    <p className="title">This month bill</p>
                    <p className="amount">160$</p>
              </div>
            </div>
            <div className="user--card-content">
                <div className="user--card-inner-content center-align">
                    <p className="title">Total bill</p>
                    <p className="amount total-amount">360$</p>
                    <h4>comparison progressbar </h4>
                    <p>This month bill is 70% higher than previous month.</p>
                    <div className="user--progress">
                        <div className="progress progress-striped active">
                            <div  className="progress-bar progress-bar-success">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

          </div>
        </div>
      </div>
            
        )
    }
}

export default UserDetail;