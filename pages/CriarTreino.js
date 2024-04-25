import { cloneElement, useState } from 'react';
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
        setListForm([...listForm,])
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#182649', flex: 1, paddingVertical: 30 }}>
            <View style={styles.header}>
                <Text style={{ color: '#F0F0F0', fontSize: 45, fontWeight: '600', fontFamily: 'Inter', }}>Criar treino</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <TextInput style={{ fontSize: 12, fontWeight: '600', fontFamily: 'Inter' }} placeholder='Nome do Treino'></TextInput>
                </View>
                
                <ScrollView style={{ marginBottom: 10 }}>

                </ScrollView>
                <View>
                    <TouchableOpacity style={styles.addExerc}>
                        <Text style={{ fontSize: 40, }}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.finalizarTreino}>
                        <Text style={{ fontSize: 30, color: '#F0F0F0' }}>Finalizar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#182649',
    },
    header: {
        backgroundColor: '#182649',
        justifyContent: 'center',
        paddingLeft: 20,

    },
    itemText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerInput: {
        fontSize: 20,
        backgroundColor: '#F0F0F0',
        borderRadius: 6,
        padding: 16,

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
    finalizarTreino: {
        backgroundColor: 'gray',
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#F0F0F0',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
    },
});

export default CriarTreino;