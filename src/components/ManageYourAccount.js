import React from 'react';
import ManageYourAccountList from './ManageYourAccountList';
import axios from 'axios';

class ManageYourAccount extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            manageYourOptions: []
        };
    }

    componentDidMount(){
        axios.get('data/manageYourOption.json')
        .then((result) => {
            this.setState({
                manageYourOptions: result.data
             });
        }).catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return(
            <div className="manageYourAccount">
                <ManageYourAccountList manageYourOptions={this.state.manageYourOptions} />
            </div>      
        )
    }
}

export default ManageYourAccount;