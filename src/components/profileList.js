import React from 'react';


const ProfileList = props => {

    const content = props.accountContents.map( accountContent => {
        return (
            <li tabIndex={accountContent.id} key={accountContent.id} className="collection-item">
                <a title={accountContent.title} className="grey-text text-darken-1" href="#">
                    <i className="material-icons">{accountContent.icon}</i> {accountContent.title}
                </a>
            </li>
        )
    }); 

    return (
        <div>
             {content}     
        </div>
      );
};

export default ProfileList;