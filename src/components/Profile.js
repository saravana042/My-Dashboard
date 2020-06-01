import React from 'react'
import avatar from '../assets/images/avatar.jpg';
import M from 'materialize-css';
import axios from 'axios';
import ProfileList from './profileList';


class PersonAccount extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            accountContents: []
        };
    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var dropdownOptions = {
                'closeOnClick': true,
                'hover':false,
                'coverTrigger': false,
                'constrainWidth': false
            }
            var instances = M.Dropdown.init(elems, dropdownOptions);
          });

       axios.get('data/account.json')
        .then((result) => {
            this.setState({
                accountContents: result.data
             });
        }).catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <a href="#" title="Account" data-target="profile-dropdown" className="dropdown-trigger waves-effect avatar--cntr">
                    <span>
                    <img alt="avatar" title="avatar" className="circle avatar--img"  src={avatar} />
                        <span className="indicator"></span>
                    </span>
                </a>

                <ul id="profile-dropdown" className="dropdown-content profile-dropdown">
                    <ProfileList accountContents ={this.state.accountContents} />
                </ul>
    
            </div>
        );
    }
}

export default PersonAccount;