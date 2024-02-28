import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../utils/constants';
import { AppColors } from '../theme/colors';

const NoteCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: screenHeight * 0.14,
    width: screenWidth * 0.9,
    paddingVertical: 10,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: AppColors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  done: {
    alignItems: 'center',
    width: 40,
  },
  texts: {
    flex: 1,
    gap: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  trash: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default NoteCardStyles;
