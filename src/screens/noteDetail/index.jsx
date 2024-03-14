import {View, Text, StyleSheet} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import EditButtons from '../../components/EditButtons';
import MyContext from '../../context';

const NoteDetail = ({route}) => {
  const {note} = route?.params;
  const [changedStyle, setChangedStyle] = useState(styles.normal);

  const {updateNote} = useContext(MyContext);

  const onChangeStyle = value => {
    switch (value) {
      case 'bold':
        setChangedStyle(styles.bold);
        break;
      case 'italik':
        setChangedStyle(styles.italik);
        break;
      case 'underLine':
        setChangedStyle(styles.underLine);
        break;
      case 'center':
        setChangedStyle(styles.center);
        break;
      case 'justify':
        setChangedStyle(styles.justify);
        break;
      case 'left':
        setChangedStyle(styles.left);
        break;
      case 'right':
        setChangedStyle(styles.right);
        break;
      default:
        setChangedStyle(styles.normal);
        break;
    }
  };

  useEffect(() => {
    updateNote(note.item.id, note.item);
  }, []);

  return (
    <View>
      <EditButtons onChangeStyle={onChangeStyle} />
      <View style={{height: '100%', padding: 20, gap: 10}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Başlık</Text>
        <Text style={{fontSize: 20}}>{note.item.title}</Text>
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>Açıklama</Text>
        <Text style={[{fontSize: 20}, changedStyle]}>
          {note.item.description}
        </Text>
      </View>
    </View>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italik: {
    fontStyle: 'italic',
  },
  left: {
    textAlign: 'left',
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  center: {
    textAlign: 'center',
  },
  justify: {
    textAlign: 'justify',
  },
  right: {
    textAlign: 'right',
  },
  normal: {},
});
