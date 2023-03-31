import styles from './ContactList.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, fetchContacts } from 'redux/Operation/operations';
import {
    getContacts,
} from 'redux/Operation/selectors';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const elements = contacts.map(({ name, number, id }) => {
    return (
      <li key={id} className={styles.item}>
        {name}: {number}{' '}
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