import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercicio = () => {
    return(
        <View style={styles.viewExerc}>
            <View style={styles.checkbox}/>
                <View style={styles.viewText}>
                    <Text style={styles.textExerc}>CADEIRA EXTENSORA + AGACHAMENTO DESLOCADO</Text>
                    <Text style={styles.textInfo}>PESO: 15 SETS: 3 REPETIÇÃO: 15</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewExerc: {
        width: 370,
        paddingHorizontal: 10,
        marginTop: 7,
        backgroundColor: '#636363',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
      },
      viewText: {
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical: 10,
        
      },
      textExerc: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10,
      },
      textInfo: {
        fontWeight: 'bold',
        fontSize: 13,
      },
      checkbox: {
        backgroundColor: 'blue',
        width: 25,
        height: 25,
        borderRadius: 5,
        marginRight: 5,
      }
    })

export default Exercicio;