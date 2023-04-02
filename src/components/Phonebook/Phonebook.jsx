import { useSelector } from 'react-redux';
import { getFilteredContacts, getIsLoading, getError } from 'redux/selectors';
import ContactList from './ContactList/ContactList';
import FormAddContact from './FormAddContact/FormAddContact';
import ContactsFilter from './Filter/ContactsFilter';
import styles from './Phonebook.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/operations';
import Loader from './Loader/Loader';

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && alert('something wrong!')}
      {isLoading ? <Loader /> : 
      <div className={styles.container}>
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.contactBlock}>
          <div>
            <FormAddContact />
          </div>
          <ContactsFilter />
          <ContactList />
          {!contacts.length && <p>There are no contacts yet</p>}
        </div>
      </div>}
    </>
  );
};

export default Phonebook;
