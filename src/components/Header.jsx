import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../utils/constants';
import {AppColors} from '../theme/colors';
import {MYNOTES} from '../utils/routes';
import {HambergerMenu, SearchNormal, More2} from 'iconsax-react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerUp}>
        <Text style={styles.headerTitle}>{MYNOTES}</Text>
      </View>
      <View style={styles.headerIcons}>
        <View style={styles.leftIcons}>
          <HambergerMenu size="32" color={AppColors.BLACK} />
        </View>
        <View style={styles.rightIcons}>
          <SearchNormal size="32" color={AppColors.BLACK} />
          <More2 size="32" color={AppColors.BLACK} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight * 0.25,
    backgroundColor: AppColors.GRAY,
  },
  headerUp: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  headerDown: {},
  headerIcons: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  leftIcons: {
    flex: 1,
    justifyContent: 'center',
  },
  rightIcons: {
    flex: 1,
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
