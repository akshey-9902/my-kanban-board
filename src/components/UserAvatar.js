
import React from 'react';

const UserAvatar = ({ name, available }) => {
 
    const getInitials = (name) => {
        const initials = name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase();
        return initials.substring(0, 2); 
    };

   
    return (
        <div className="user-avatar">
            <span className="initials">{getInitials(name)}</span>
            <span className={`availability ${available ? 'online' : 'offline'}`}></span>
        </div>
    );
};

export default UserAvatar;
