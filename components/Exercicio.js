import React, { useState } from 'react';
import { View, Text, StyleSheet, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native';

const Exercicio = () => {

  const [isTextStriked, setTextStriked] = useState(false);
  const [isChecked, setChecked] = useState(false)

  const handleButtonClick = () => {
    setTextStriked(!isTextStriked);
    setChecked(!isChecked);
  };

    return(
        <View style={styles.viewExerc}>
            <TouchableOpacity onPress={handleButtonClick}>
              <View style={[styles.checkbox, isChecked && styles.checkboxCheck]}/>
            </TouchableOpacity>
            <Text style={[styles.textExerc, isTextStriked && styles.strikedText]}>CADEIRA EXTENSORA + AGACHAMENTO DESLOCADO</Text>
            <TouchableHighlight>
              <View style={styles.info} />
            </TouchableHighlight>
        </View>
        
    )
}

const styles = StyleSheet.create({
    viewExerc: {
        width: 370,
        paddingHorizontal: 10,
        marginTop: 7,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'gray',
      },
      textExerc: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
      },
      textInfo: {
        fontWeight: 'bold',
        fontSize: 13,
      },
      checkbox: {
        borderColor: 'black',
        borderWidth: 2,
        width: 25,
        height: 25,
        borderRadius: 5,
        alignSelf: 'center',
      },
      checkboxCheck: {
        backgroundColor: 'black',
        width: 25,
        height: 25,
        borderRadius: 5,
        alignSelf: 'center',
      },
      divExerc: {
        backgroundColor: 'black',
        width: 300,
        height: 3,
        marginTop: 30,
        marginLeft: 40,
      },
      info: {
          borderRadius: 20,
          backgroundColor: 'white',
          width: 20,
          height: 20,
      },
      strikedText: {
        textDecorationLine: 'line-through',
        opacity: 0.5
      },
    })

export default Exercicio;