import React from 'react';
import UserContentList from './UserContentList';
import axios from 'axios';

class UserContent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userContent: []
        };
    }

    componentDidMount(){
        axios.get('data/userContentData.json')
        .then((result) => {
            this.setState({
                userContent: result.data
             });
        }).catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return( 
            <UserContentList userContentDatas ={this.state.userContent} />
        )
    }
}

export default UserContent;