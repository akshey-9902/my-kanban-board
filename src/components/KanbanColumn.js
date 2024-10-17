import React from 'react';
import TicketCard from './TicketCard';
import ColumnHeader from './ColumnHeader';
import UserAvatar from './UserAvatar';
import { statusIcons, priorityIcons } from '../utils/iconMappings';

const KanbanColumn = ({ title, tickets, type, user,users }) => {

    const columnIcon = type === 'user' && user 
        ? <UserAvatar name={user.name} available={user.available} /> 
        : type === 'status'
            ? statusIcons[title.toLowerCase()]
            : priorityIcons[title.toLowerCase()];

    return (
        <div className="kanban-column">
            <ColumnHeader 
                icon={columnIcon} 
                name={title} 
                count={tickets.length} 
            />
            <div className="tickets">
                {tickets.length > 0 ? (
                    tickets.map(ticket => (
                        <TicketCard key={ticket.id} ticket={ticket} groupBy={type} user={users.find(u => u.id === ticket.userId)} />
                    ))
                ) : (
                    <p className="empty-column"></p>
                )}
            </div>
        </div>
    );
};

export default KanbanColumn;
