import styles from './ContactList.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/Contacts/operations';
import { getFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const elements = contacts.map(({ name, phone, id }) => {
    return (
      <li key={id} className={styles.item}>
        {name}: {phone}
        <span onClick={() => handleRemoveContact(id)} className={styles.remove}>
          delete
        </span>
      </li>
    );
  });

  return (
    <>
      <h4 className={styles.title}>Contacts</h4>
      <ol>{elements}</ol>
    </>
  );
};

export default ContactList;
