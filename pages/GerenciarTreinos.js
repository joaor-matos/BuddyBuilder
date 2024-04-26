import { cloneElement, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const AdicionarExerc = () => {
    /* const [fontsLoaded] = useFonts({
        'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    }); */

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

const GerenciarTreinos = () => {

    const [listForm, setListForm] = useState([]);

    const addExercForm = () => {
        setListForm([...listForm,])
    }

    return (
        <View style={{ backgroundColor: '#182649', flex: 1, paddingVertical: 30, }}>
            <View style={styles.header}>
                <Text style={{ color: '#F0F0F0', fontSize: 45, fontWeight: '600', fontFamily: 'Inter-Bold', }}>Gerenciar</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <View style={styles.containerNome}>
                    <Text>TREINO A</Text>
                <View/>

            </View>

            {/* <ScrollView style={{ marginBottom: 10 }}> */}

            {/* </ScrollView> */}
            <View style={{ flexDirection: 'column' }}>

                <TouchableOpacity style={styles.finalizarTreino}>
                    <Text style={{ fontSize: 30, color: '#F0F0F0', fontFamily: 'Inter-Bold', }}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View >
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
    containerTreino: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerNome: {
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
        height: 80,
        width: 80,
        marginTop: 14,
        backgroundColor: '#F0F0F0',
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
        marginHorizontal: 10,

    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 5,
    },
});

export default GerenciarTreinos;