import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css'
import { useId } from 'react';
import { filterContacts } from '../../redux/actions';

const SearchBox = () => {
const inputId = useId();
const dispatch = useDispatch();

const handleOnChange = (e) => {
dispatch(filterContacts(e.target.value));
}

return (
    <label className={s.labelSearch} htmlFor={inputId}>
        <span className={s.labelSpan}>Find contacts by name</span>
        <input onChange={handleOnChange} className={s.inputSearch}  id={inputId} />
    </label>)}

export default SearchBox;
