import React from 'react'
import M from 'materialize-css'
import axios from 'axios';
import NotificationList from './NotificationList';


class Notification extends React.Component {

    constructor(props){
      super(props);
      this.state = {
          notifications: []
      };
    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var dropdownOptions = {
                'closeOnClick': true,
                'hover':false,
                'coverTrigger': false

            }
            var instances = M.Dropdown.init(elems, dropdownOptions);
          });

          axios.get('data/notification.json')
          .then((result) => {
              this.setState({
                notifications: result.data
               });
          }).catch(function (error) {
              console.log(error);
          });
    }

    render(){
        return(
            <div>
                <a href="#" title="notifications" data-target="notifications-dropdown" className="dropdown-trigger waves-effect">
                    <i className="material-icons">notifications</i>
                </a>

                <ul id='notifications-dropdown' className='dropdown-content'>
                  <li tabIndex="0">
                    <h6>NOTIFICATIONS<span className="new badge">3</span></h6>
                  </li>
                  <li className="divider"></li>
                  <NotificationList notifications ={this.state.notifications} />
                </ul>
    
            </div>
        );
    }
}

export default Notification;