import React from 'react';
import AddIcon from '../icons/add.svg';
import OptionsIcon from '../icons/3 dot menu.svg';

const ColumnHeader = ({ icon, name, count }) => {
    return (
        <div className="column-header">
            {typeof icon === 'string' ? (
                <img src={icon} alt={`${name} icon`} className="column-icon" />
            ) : (
                <div className="column-icon">{icon}</div>
            )}
            <span className="column-name">{name}</span>
            <span className="column-count"> {count}</span>
            <img src={AddIcon} alt="Add" className="header-icon add-icon" />
            <img src={OptionsIcon} alt="Options" className="header-icon options-icon" />
        </div>
    );
};

export default ColumnHeader;
