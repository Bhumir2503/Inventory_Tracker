import React, { useEffect, useState } from 'react';
import axios from 'axios';
import edit from '../../assets/pencil.svg'
import del from '../../assets/trash.svg'
import '../../styles/contact.css';


function Contacts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState([]);
  const [userId, setUserId] = useState('');

  const server = 'http://localhost:5000/backend';

  const token = document.cookie
  .split('; ')
  .find(row => row.startsWith('token='))
  .split('=')[1];

  const searchbarsearch = async () => {
    try{
      const response = await axios.get(`${server}/contact/getUserIdandName/${searchTerm}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  }


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    searchbarsearch();
  };


  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get(`${server}/contact/getContact`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setContacts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getContacts();
  },[]);


  return (
    <div className='ContactPage'>
      <div className="searchbar">
        <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search" />
      </div>
      <div className="contacts">
        <h3>Contacts</h3>
        <div className="contactTitles">
            <p className='name'>Name</p>
            <p className='phone'>Phone</p>
            <p className='email'>Email</p>
            <p className='title'>Job Title</p>
            <p className='company'>Company</p>
          </div>
        <div className="contactList">
          <div className="contactitems">
            {contacts.filter((contact) => {
              if (searchTerm === "") {
                return contact;
              } else if (contact.contactName.toLowerCase().includes(searchTerm.toLowerCase())) {
                return contact;
              }
            }).map((contact, key) => {
              return (
                <div key={key} className="contact">
                  <p className='name'>{contact.contactName}</p>
                  <p className='phone'>{contact.contactPhone}</p>
                  <p className='email'>{contact.contactEmail}</p>
                  <p className='title'>{contact.contactJobTitle}</p>
                  <p className='company'>{contact.contactCompany}</p>
                  <button><img src={edit} alt="" /></button>
                  <button><img src={del} alt="" /></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;