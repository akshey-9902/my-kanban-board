// src/components/TicketCard.js
import React from 'react';
import { PRIORITY_LEVELS, STATUSES } from '../utils/constants';
import UserAvatar from './UserAvatar';
import urgent from '../icons/SVG - Urgent Priority grey.svg';
import { priorityIcons, statusIcons } from '../utils/iconMappings';

const TicketCard = ({ ticket, groupBy, user }) => {
    console.log(user);
    return (
        <div className="ticket-card">
            <div className="ticket-header">
                <span className="ticket-id">{ticket.id}</span>
                
                
                
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
                        className="status-icon-tagz2" 
                    />
                )}
                <h5 className={(groupBy === 'user' || groupBy === 'priority') ? 'ticket-title2' : 'ticket-title'}>{ticket.title}</h5>
            </div>

            <div className="tags-container">
            
                {(groupBy === 'user' || groupBy === 'status') && priorityIcons[PRIORITY_LEVELS[ticket.priority].toLowerCase()] && (
                    <div className="tag-box2"><img 
                        src={ticket.priority===4?urgent:priorityIcons[PRIORITY_LEVELS[ticket.priority].toLowerCase()]} 
                        alt={`${ticket.priority} icon`} 
                        className="status-icon-tagz"
                    />
                    </div>
                )}
                
                 <div className="tag-box">
                    <span className="dot"></span>
                    <span className="tags">{ticket.tag.join(', ')}</span>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
