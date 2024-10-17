// src/components/UserAvatar.js
import React from 'react';

const UserAvatar = ({ name, available }) => {
    // Function to extract initials from name
    const getInitials = (name) => {
        const initials = name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase();
        return initials.substring(0, 2); // Limit to two characters
    };

    // Define styles for avatar and availability dot
    return (
        <div className="user-avatar">
            <span className="initials">{getInitials(name)}</span>
            <span className={`availability ${available ? 'online' : 'offline'}`}></span>
        </div>
    );
};

export default UserAvatar;
