import React from 'react';

const UserContentList = props => {
    //console.log(props.userContentData)
    const content = props.userContentDatas.map( userData => {
        return (
            <div key={userData.id} className="col s12 m6 l6">
                <div className={`card tiles ${userData.color}`}>
                    <div className="card-content white-text center-align">
                        <div className="cardbox-icon">
                            <i className="material-icons">{userData.icon}</i>
                        </div>
                        <div className="card-details">
                            <h3>{userData.title}</h3>
                            <span>{userData.content}</span>
                            <span>{userData.contentExt}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

  return (
    <div className="row">{content}</div>
  );
};

export default UserContentList;