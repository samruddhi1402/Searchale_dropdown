import React, { useState } from 'react'
import './SearchDropdown.css';

export default function SearchableDropdown({options}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSelect = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();
      const filtered = options.filter((option) =>
        option.toLowerCase().startsWith(query)
      );
      setFilteredOptions(filtered);
    };
  return (
    <div>
     <div>
 <div className="dropdown">
      <div className="dropdown-header" onClick={handleToggle}>
        {selectedOption || 'Select an option'}
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} />
      </div>
      {isOpen && (
        <div className="dropdown-list">
          <input
            type="text"
            placeholder="Search..."
            className="dropdown-search"
            onChange={handleSearch}
          />
          {filteredOptions.map((option) => (
            <div
              key={option}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );


  </div>
      
    </div>
  )
}
