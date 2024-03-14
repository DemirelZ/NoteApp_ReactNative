import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {screenHeight, screenWidth} from '../utils/constants';
import {Trash, Component, Edit} from 'iconsax-react-native';
import {AppColors} from '../theme/colors';
import NoteCardStyles from '../styles/NoteCardStyles';
import {ADDNOTE, NOTEDETAIL} from '../utils/routes';
import {useNavigation} from '@react-navigation/native';
import MyContext from '../context';

const NoteCard = ({item}) => {
  const navigation = useNavigation();
  const {deleteNote} = useContext(MyContext);

  return (
    <TouchableOpacity
      style={NoteCardStyles.container}
      onPress={() => navigation.navigate(NOTEDETAIL, {note: {item}})}>
      <TouchableOpacity style={NoteCardStyles.done}>
        <Component
          size="18"
          color={item?.isRead ? AppColors.BLACK : AppColors.GREEN}
          variant="Bulk"
        />
      </TouchableOpacity>
      <View style={NoteCardStyles.texts}>
        <Text style={NoteCardStyles.title}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.date}</Text>
      </View>
      <TouchableOpacity
        style={NoteCardStyles.trash}
        onPress={() => deleteNote(item.id)}>
        <Trash size="26" color={AppColors.RED} variant="Bulk" />
      </TouchableOpacity>
      <TouchableOpacity
        style={NoteCardStyles.trash}
        onPress={() =>
          navigation.navigate(ADDNOTE, {note: item, type: 'update'})
        }>
        <Edit size="26" color={AppColors.BLUE2} variant="Bulk" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteCard;
