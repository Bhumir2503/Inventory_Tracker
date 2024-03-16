import React, { useEffect, useState } from 'react';
import axios from 'axios';
import editIcon from '../../assets/pencil.svg'
import del from '../../assets/trash.svg'
import '../../styles/contact.css';


function Contacts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState([]);
  const [open, setOpen] = useState(false);
  const [editContact, setEditContact] = useState({});
  const [addContact, setAddContact] = useState({});
  const [openAdd, setOpenAdd] = useState(false);

  const server = 'https://invensort.com';

  const tokenCookie = document.cookie
  .split('; ')
  .find(row => row.startsWith('token='));

  const token = tokenCookie ? tokenCookie.split('=')[1] : null;

  const searchbarsearch = async () => {
    try{
      const response = await axios.get(`${server}/backend/contact/getUserIdandName/${searchTerm}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const edit = async (contact) => {
    const response = await axios.put(`${server}/contact/update/${contact._id}`, contact, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
      
    });

    console.log(response.data);
  };

  const add = async (contact) => {
    const response = await axios.post(`${server}/contact/create`, contact, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    console.log(response.data);
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    searchbarsearch();
  };

  const handleClickOpen = (contact) => {
    setEditContact(contact);
    setOpen(true);
  };

  const handleClickOpenAdd = () => {
    setAddContact({});
    setOpenAdd(true);
  }
  
  const handleClose = (e) => {
    e.preventDefault(); // Prevent form submission
    setOpen(false);
    setOpenAdd(false);
  };
  
  const handleSave = async (e) => {
    console.log(editContact);
    e.preventDefault(); // Prevent form submission
    await edit(editContact); // Wait for the edit function to complete
    setOpen(false); // Then close the form
    getContacts(); // Refresh the contacts
  };

  const handleSaveAdd = async (e) => {
    console.log(addContact);
    e.preventDefault(); // Prevent form submission
    await add(addContact); // Wait for the edit function to complete
    setOpenAdd(false); // Then close the form
    getContacts(); // Refresh the contacts
  }

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

  const deleteContact = async (contact) => {
    const response = await axios.delete(`${server}/contact/delete/${contact._id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    //refresh the contacts
    getContacts();
  }

  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    if (cleaned.length !== 10) {
      return phoneNumberString; // Return original phone number if it's not 10 digits long
    }
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return match[1] + '-' + match[2] + '-' + match[3];
    }
    return null;
  }

  useEffect(() => {
    getContacts();
  },[]);


  return (
    <div className='ContactPage'>
      <div className="searchbar">
        <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search Name" />
      </div>
      <div className="contacts">
        <div className="header">
          <h3>Contacts</h3>
          <button onClick={() => handleClickOpenAdd({})}>Add Contact</button>
        </div>
        <div className="contactTitles">
            <p className='name'>Name</p>
            <p className='phone'>Phone</p>
            <p className='email'>Email</p>
            <p className='title'>Job Title</p>
            <p className='company'>Company</p>
          </div>
        <div className="contactList">
          <div className="contactitems">
          {contacts
            .filter((contact) => {
              if (searchTerm === "") {
                return contact;
              } else if (contact.contactName.toLowerCase().includes(searchTerm.toLowerCase())) {
                return contact;
              }
            })
            .sort((a, b) => a.contactName.localeCompare(b.contactName))
            .map((contact, key) => {
              return (
                <div key={key} className="contact">
                  <p className='name'>{contact.contactName}</p>
                  <p className='phone'>{formatPhoneNumber(contact.contactPhone)}</p>
                  <p className='email'>{contact.contactEmail}</p>
                  <p className='title'>{contact.contactJobTitle}</p>
                  <p className='company'>{contact.contactCompany}</p>
                  <button onClick={() => handleClickOpen(contact)}><img src={editIcon} alt="" /></button>
                  <button onClick={() => deleteContact(contact)}><img src={del} alt="" /></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {open && (
        <div id="form-dialog">
          <h2>Edit Contact</h2>
          <form onSubmit={(e) => handleSave(e)}>
            <label htmlFor="contactName">Contact Name</label>
            <input
              autoFocus
              id="contactName"
              type="text"
              value={editContact.contactName || ''}
              onChange={(e) => setEditContact({ ...editContact, contactName: e.target.value })}
            />
            <label htmlFor="phone">Phone #</label>
            <input
              id="phone"
              type="number"
              value={editContact.contactPhone || ''}
              onChange={(e) => setEditContact({ ...editContact, contactPhone: e.target.value })}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={editContact.contactEmail || ''}
              onChange={(e) => setEditContact({ ...editContact, contactEmail: e.target.value })}
            />
            <label htmlFor="jobTitle">Job Title</label>
            <input
              id="jobTitle"
              type="text"
              value={editContact.cotactJobTitle || ''}
              onChange={(e) => setEditContact({ ...editContact, contactJobTitle: e.target.value })}
            />
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              value={editContact.contactCompany || ''}
              onChange={(e) => setEditContact({ ...editContact, contactCompany: e.target.value })}
            />
            {/* Add more fields as needed */}
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit">
              Save
            </button>
          </form>
        </div>
      )}

      {openAdd && (
        <div id="form-dialog">
          <h2>Add Contact</h2>
          <form onSubmit={(e) => handleSaveAdd(e)}>
            <label htmlFor="contactName">Contact Name</label>
            <input
              autoFocus
              id="contactName"
              type="text"
              value={addContact.contactName || ''}
              onChange={(e) => setAddContact({ ...addContact, contactName: e.target.value })}
            />
            <label htmlFor="phone">Phone #</label>
            <input
              id="phone"
              type="number"
              value={addContact.contactPhone || ''}
              onChange={(e) => setAddContact({ ...addContact, contactPhone: e.target.value })}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={addContact.contactEmail || ''}
              onChange={(e) => setAddContact({ ...addContact, contactEmail: e.target.value })}
            />
            <label htmlFor="jobTitle">Job Title</label>
            <input
              id="jobTitle"
              type="text"
              value={addContact.contactJobTitle || ''}
              onChange={(e) => setAddContact({ ...addContact, contactJobTitle: e.target.value })}
            />
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              value={addContact.contactCompany || ''}
              onChange={(e) => setAddContact({ ...addContact, contactCompany: e.target.value })}
            />
            {/* Add more fields as needed */}
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit">
              Save
            </button>
          </form>
        </div>
      )}

    </div>
  );
}

export default Contacts;