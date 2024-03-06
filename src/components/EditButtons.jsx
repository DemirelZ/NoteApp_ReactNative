import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  TextBold,
  TextItalic,
  TextUnderline,
  TextalignCenter,
  TextalignJustifycenter,
  TextalignJustifyleft,
  TextalignJustifyright,
} from 'iconsax-react-native';
import {AppColors} from '../theme/colors';

const EditButtons = () => {
  const Buttons = [
    {
      id: 1,
      icon: <TextBold size="32" color={AppColors.BLACK} variant="Bold" />,
    },
    {
      id: 2,
      icon: <TextItalic size="32" color={AppColors.BLACK} variant="Bold" />,
    },
    {
      id: 3,
      icon: <TextUnderline size="32" color={AppColors.BLACK} variant="Bold" />,
    },
    {
      id: 4,
      icon: (
        <TextalignCenter size="32" color={AppColors.BLACK} variant="Bold" />
      ),
    },
    {
      id: 5,
      icon: (
        <TextalignJustifycenter
          size="32"
          color={AppColors.BLACK}
          variant="Bold"
        />
      ),
    },
    {
      id: 6,
      icon: (
        <TextalignJustifyleft
          size="32"
          color={AppColors.BLACK}
          variant="Bold"
        />
      ),
    },
    {
      id: 7,
      icon: (
        <TextalignJustifyright
          size="32"
          color={AppColors.BLACK}
          variant="Bold"
        />
      ),
    },
  ];

  return (
    <View style={styles.editButtonsWrapper}>
      {Buttons.map(item => (
        <TouchableOpacity key={item.id}>{item.icon}</TouchableOpacity>
      ))}
    </View>
  );
};

export default EditButtons;

const styles = StyleSheet.create({
  editButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    padding: 10,
    paddingVertical: 20,
    backgroundColor: AppColors.GRAY,
    borderRadius: 5,
  },
});
