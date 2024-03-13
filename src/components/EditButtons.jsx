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

const EditButtons = ({onChangeStyle}) => {
  const Buttons = [
    {
      id: 1,
      value: 'bold',
      icon: <TextBold size="32" color={AppColors.BLACK} variant="Bold" />,
    },
    {
      id: 2,
      value: 'italik',
      icon: <TextItalic size="32" color={AppColors.BLACK} variant="Bold" />,
    },
    {
      id: 3,
      value: 'underLine',
      icon: <TextUnderline size="32" color={AppColors.BLACK} variant="Bold" />,
    },
    {
      id: 4,
      value: 'center',
      icon: (
        <TextalignCenter size="32" color={AppColors.BLACK} variant="Bold" />
      ),
    },
    {
      id: 5,
      value: 'justify',
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
      value: 'left',
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
      value: 'right',
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
        <TouchableOpacity
          onPress={() => onChangeStyle(item.value)}
          key={item.id}>
          {item.icon}
        </TouchableOpacity>
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
