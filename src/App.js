import React, { useEffect, useState } from 'react';
import { fetchTickets } from './utils/api';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';
import './styles.css';

function App() {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
    const [orderBy, setOrderBy] = useState(localStorage.getItem('orderBy') || 'priority');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTickets().then(data => {
            setTickets(data.tickets);
            setUsers(data.users);
            setLoading(false);
        });
    }, []);

   
    useEffect(() => {
        localStorage.setItem('groupBy', groupBy);
    }, [groupBy]);


    useEffect(() => {
        localStorage.setItem('orderBy', orderBy);
    }, [orderBy]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <Header 
                groupBy={groupBy} 
                orderBy={orderBy} 
                setGroupBy={setGroupBy} 
                setOrderBy={setOrderBy} 
            />
            <KanbanBoard tickets={tickets} users={users} groupBy={groupBy} orderBy={orderBy} />
        </div>
    );
}

export default App;
