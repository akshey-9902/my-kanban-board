import React, { useState, useEffect, useRef } from 'react';
import DisplayIcon from '../icons/Display.svg';
import DownIcon from '../icons/down.svg';

const Header = ({ groupBy, orderBy, setGroupBy, setOrderBy }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleGroupByChange = (e) => {
        setGroupBy(e.target.value);
    };

    const handleOrderByChange = (e) => {
        setOrderBy(e.target.value);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <header className="header">
            <div className="dropdown-container" ref={dropdownRef}>
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                    <img src={DisplayIcon} alt="Display" className="icon" />
                    Display
                    <img src={DownIcon} alt="Dropdown" className="icon" />
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-content">
                        <div>
                            <label>Grouping</label>
                            <select value={groupBy} onChange={handleGroupByChange}>
                                <option value="status">Status</option>
                                <option value="user">User</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>
                        <div>
                            <label>Ordering</label>
                            <select value={orderBy} onChange={handleOrderByChange}>
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
