import React from 'react';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

  var checktype = type === 'professional';

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          className={checktype ? 'badge badge-primary' : 'badge badge-success'}
        >
          {type}
        </span>
      </h3>
    </div>
  );
};

export default ContactItem;
