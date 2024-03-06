import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/Button';
import MyContext from '../../context';

const StateExample = () => {
  //const [count, setCounter] = useState(0);

  const {count, changeIncrease, changeDecrease }=useContext(MyContext)

  //console.log(count);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={
            count >= 10
              ? styles.greennumber
              : count < 0
              ? styles.rednumber
              : styles.number
          }>
          {count}
        </Text>

        {count < 0 && <Text>*Dikkat sayı sıfırdan küçük</Text>}
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={() => changeIncrease()}
          style={count >= 10 ? styles.greenButton : styles.button}>
          <Text style={{color: 'white', fontSize: 30}}>Artır</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeDecrease()}
          style={count < 0 ? styles.redButton : styles.button}>
          <Text style={{color: 'white', fontSize: 30}}>Azalt</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StateExample;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  number: {
    fontSize: 100,
    fontWeight: 'bold',
  },
  greennumber: {
    fontSize: 100,
    color: 'green',
    fontWeight: 'bold',
  },
  rednumber: {
    fontSize: 100,
    color: 'red',
    fontWeight: 'bold',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 20,
  },
  greenButton: {
    padding: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  redButton: {
    padding: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    backgroundColor: 'red',
  },
});
