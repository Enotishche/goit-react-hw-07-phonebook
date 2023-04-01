import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/Filter/Filter-slice';
import { getFilter } from 'redux/selectors';

const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilterValue(e.currentTarget.value));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        onChange={handleChange}
        value={filterValue}
        className={styles.filter}
        placeholder="Filter"
      />
    </div>
  );
};

export default ContactsFilter;
