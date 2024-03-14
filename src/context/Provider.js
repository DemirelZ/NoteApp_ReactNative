import {useState} from 'react';
import MyContext from '.';
import {Alert} from 'react-native';

const Provider = ({children}) => {
  const [notes, setNotes] = useState([]);

  const [count, setCount] = useState(0);

  const changeIncrease = () => {
    setCount(count + 1);
  };

  const changeDecrease = () => {
    setCount(count - 1);
  };

  const addNote = item => {
    if (item) setNotes([...notes, item]);
  };

  const deleteNote = id => {
    const filteredNote = notes.filter(item => item.id !== id);
    setNotes(filteredNote);
    Alert.alert('Bilgi','Silme işlemi başarılı bir şekilde gerçekleşti')
  };

  const updateNote = (id, item) => {
    const updatedNotes = notes.map(note =>
      note.id === id
        ? {
            ...note,
            title: item.title,
            description: item.description,
            date: new Date().toLocaleString(),
            isRead: true,
          }
        : note,
    );
    setNotes(updatedNotes);
  };

  return (
    <MyContext.Provider
      value={{
        count,
        changeDecrease,
        changeIncrease,
        notes,
        setNotes,
        addNote,
        deleteNote,
        updateNote,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
