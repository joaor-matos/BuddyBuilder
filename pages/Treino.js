import React, { cloneElement, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AdicionarExerc = () => {
    
    const [quantPeso, setPeso] = useState();
    const [quantSet, setSet] = useState();
    const [quantRep, setRep] = useState();
    const [nomeExerc, setNomeExerc] = useState();
    const [treino, setTreino] = useState([]);
    const [nomeTreino, setNomeTreino] = useState();

    const handleTreino = () => {
        const arrExerc = {
            nome: nomeExerc,
            peso: quantPeso,
            set: quantSet,
            rep: quantRep,
        }

        setTreino([...treino, arrExerc]);
        setPeso('');
        setSet('');
        setRep('');
        setNomeExerc('');
    };
    return (
        <View style={{ borderColor: 'black', borderWidth: 2, paddingTop: 7, paddingHorizontal: 5, borderRadius: 10, }}>
                        <TextInput style={styles.exercInput} placeholder='Nome do Exercício' 
                        value={nomeExerc}
                        onChangeText={text => setNomeExerc(text)}>
                        </TextInput>
                        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                            <TextInput style={styles.exercInput} placeholder='Peso'
                            value={quantPeso}
                            onChangeText={text => setPeso(text)}></TextInput>
                            <TextInput style={styles.exercInput} placeholder='Sets'
                            value={quantSet}
                            onChangeText={text => setSet(text)}></TextInput>
                            <TextInput style={styles.exercInput} placeholder='Repetições'
                            value={quantRep}
                            onChangeText={text => setRep(text)}></TextInput>
                        </View>
                    </View>
    );
};

const CriarTreino = () => {

    const [listForm, setListForm] = useState([]);

    const addExercForm = () => {
        setListForm([...listForm, ])
    }

    return(
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={{ color: 'white', fontSize: 30 }}>Criar treino</Text>
            </View>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Nome do Treino'></TextInput>
                <ScrollView style={{ marginBottom: 10 }}>
                    
                    
                </ScrollView>
                <View>
                    <TouchableOpacity style={ styles.addExerc }>
                        <Text style={{ fontSize: 40, }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,

    },
    header: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        
    },
    itemText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        alignSelf: 'center',
        fontSize: 20,
        backgroundColor: 'gray',
        borderRadius: 5,
        padding: 10,
        width: 300,
        marginBottom: 20,
    },
    exercInput: {
        fontSize: 20,
        backgroundColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 2,
    },
    addExerc: {
        height: 60,
        width: 100,
        paddingTop: -3,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center',

    },
});

export default CriarTreino;