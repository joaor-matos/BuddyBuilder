import React, { useState } from 'react';
import { View, Text, StyleSheet, Touchable, TouchableHighlight, TouchableOpacity, SectionList } from 'react-native';



const Exercicio = (props) => {

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
              <Text style={[styles.textExerc, isTextStriked && styles.strikedText]}>{props.nomeExerc}</Text>
            {/*<TouchableHighlight>
              <View style={styles.info}>
                <Text>!</Text>
              </View>
            </TouchableHighlight>*/}
      </View>
    )
}

const styles = StyleSheet.create({
    viewExerc: {
        width: 370,
        paddingHorizontal: 10,
        marginTop: 7,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
      },
      textExerc: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10,
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
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          alignSelf: 'flex-end',
      },
      strikedText: {
        textDecorationLine: 'line-through',
        opacity: 0.5
      },
    })

export default Exercicio;