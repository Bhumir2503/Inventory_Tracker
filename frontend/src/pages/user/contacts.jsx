import React, { useState } from 'react';
import '../../styles/contact.css';
import search from '../../assets/search.svg';

function Contacts() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='ContactPage'>
      <div className="searchbar">
        <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search" />
      </div>
      <div className="contacts">
        <h3>Contacts</h3>
        <div className="contactList">
          <div className="contact">
            <table className="contactInfo">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="https://via.placeholder.com/35" alt="" /> John Doe</td>
                  <td>123-456-7890</td>
                  <td>Software Developer</td>
                  <td>ABC Corp</td>
                  <td>john.doe@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;