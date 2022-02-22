import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = props => {
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    props.addCard({title: title}, props.columnId);
    setTitle('');
  };

    return (
      <form onSubmit={handleSubmit}>
        <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
        <Button>Add</Button>
      </form>
    );
};

export default CardForm;
