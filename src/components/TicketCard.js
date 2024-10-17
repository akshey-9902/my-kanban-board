// src/components/TicketCard.js
import React from 'react';
import { PRIORITY_LEVELS, STATUSES } from '../utils/constants';
import UserAvatar from './UserAvatar';
import { priorityIcons, statusIcons } from '../utils/iconMappings';

const TicketCard = ({ ticket, groupBy, user }) => {
    console.log(user);
    return (
        <div className="ticket-card">
            <div className="ticket-header">
                <span className="ticket-id">{ticket.id}</span>
                
                {/* Show avatar at top right if groupBy is not user */}
                
                {
                
                
                groupBy !== 'user' && user && (
                    <div className="top-right-avatar">
                        <UserAvatar 
                            name={user.name} 
                            available={user.available} 
                        />
                    </div>
                )}
                
                
            </div>

            <div className="ticket-box">
                {(groupBy === 'user' || groupBy === 'priority') && statusIcons[ticket.status.toLowerCase()] && (
                    <img 
                        src={statusIcons[ticket.status.toLowerCase()]} 
                        alt={`${ticket.status} icon`} 
                        className="status-icon-tagz" 
                    />
                )}
                <h5 className="ticket-title">{ticket.title}</h5>
            </div>

            <div className="tags-container">
                {(groupBy === 'user' || groupBy === 'status') && priorityIcons[PRIORITY_LEVELS[ticket.priority].toLowerCase()] && (
                    <img 
                        src={priorityIcons[PRIORITY_LEVELS[ticket.priority].toLowerCase()]} 
                        alt={`${ticket.priority} icon`} 
                        className="status-icon-tagz"
                    />
                )}
                <span className="dot"></span>
                <span className="tags">{ticket.tag.join(', ')}</span>
            </div>
        </div>
    );
};

export default TicketCard;
