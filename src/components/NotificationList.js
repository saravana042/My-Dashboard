import React from 'react';


const NotificationList = props => {

    const content = props.notifications.map( notification => {
        return (
            <li tabIndex={notification.id} key={notification.id}>
                <a title={notification.title} className="black-text" href="#"><span className={`material-icons icon-bg-circle ${notification.color} small`}>email</span> {notification.title}</a>
                <time className="media-meta grey-text darken-2">{notification.time}</time>
            </li>
        )
    }); 

    return (
        <div>
             {content}     
        </div>
      );
};

export default NotificationList;