// src/components/KanbanBoard.js
import React from 'react';
import KanbanColumn from './KanbanColumn';
import { STATUSES, PRIORITY_LEVELS } from '../utils/constants';

const KanbanBoard = ({ tickets, users, groupBy, orderBy }) => {
    const groupedTickets = groupTickets(tickets, groupBy, orderBy, users);

    return (
        <div className="kanban-board">
            {Object.keys(groupedTickets).map((group, index) => {
                // Find the user object if grouping by user
                const user = groupBy === 'user' ? users.find(u => u.name === group) : null;
                return (
                    <KanbanColumn 
                        key={index} 
                        title={group} 
                        tickets={groupedTickets[group]} 
                        type={groupBy} 
                        user={user} 
                        users={users}
                    />
                );
            })}
        </div>
    );
};

const groupTickets = (tickets, groupBy, orderBy, users) => {
    let groups;

    if (groupBy === 'status') {
        groups = STATUSES;
    } else if (groupBy === 'user') {
        groups = users.map(user => user.name);
    } else if (groupBy === 'priority') {
        groups = Object.values(PRIORITY_LEVELS);
    }

    const grouped = {};
    groups.forEach(group => {
        grouped[group] = [];
    });

    tickets.forEach(ticket => {
        let groupKey;
        if (groupBy === 'status') {
            groupKey = ticket.status.toLowerCase();
            groupKey = STATUSES.find(status => status.toLowerCase() === groupKey) || 'Unassigned';
        } else if (groupBy === 'user') {
            const user = users.find(user => user.id === ticket.userId);
            groupKey = user ? user.name : 'Unassigned';
        } else if (groupBy === 'priority') {
            groupKey = PRIORITY_LEVELS[ticket.priority] || 'No priority';
        }

        if (grouped[groupKey]) {
            grouped[groupKey].push(ticket);
        }
    });

    Object.keys(grouped).forEach(key => {
        grouped[key].sort((a, b) => {
            if (orderBy === 'priority') {
                return b.priority - a.priority;
            } else if (orderBy === 'title') {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });
    });

    return grouped;
};

export default KanbanBoard;
