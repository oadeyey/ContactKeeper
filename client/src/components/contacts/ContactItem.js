import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent, current } = contactContext;

  const { id, name, email, phone, type } = contact;

  var checktype = type === 'professional';

  const onDelete = () => {
    deleteContact(id);
    if (current !== null && current.id === contact.id) {
      clearCurrent();
    }
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={checktype ? 'badge badge-primary' : 'badge badge-success'}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i>
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'></i>
            {phone}
          </li>
        )}
      </ul>
      <button
        className='btn btn-dark btn-sm'
        onClick={() => setCurrent(contact)}
      >
        Edit
      </button>
      <button className='btn btn-danger btn-sm' onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;