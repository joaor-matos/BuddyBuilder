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

const CriarTreino = () => {
    const [listForm, setListForm] = useState([]);
    const [exercicios, setExercicios] = useState([1]);

    const addExercForm = () => {
        setListForm([...listForm,])
    }

    const [exercicios, setExercicios] = useState([1]);

    const addExercicio = () => {
        setExercicios([...exercicios, exercicios.length + 1]);
    };

    const removeExercicio = (index) => {
        setExercicios(exercicios.filter((_, i) => i !== index));
    };

    return (
        <View style={{ backgroundColor: '#182649', flex: 1, paddingVertical: 30, }}>
            <View style={styles.header}>
                <Text style={{ color: '#F0F0F0', fontSize: 45, fontWeight: '600', }}>Criar treino</Text>
            </View>
            <View style={{ flex:1 , justifyContent: 'flex-start' }}>
                <View style={styles.container}>
                    <View style={styles.containerTreino}>
                        <TextInput style={{ fontSize: 24, alignSelf: 'center', margin: 5, }} placeholder='Nome do Treino'></TextInput>
                    </View>
                    <ScrollView>
                        {exercicios.map((view, index) => (
                            <View key={index} style={styles.containerExerc}>
                            <TextInput style={styles.exercicioInputText}
                            placeholder='Exercício'
                            ></TextInput>
                        </View>
                        ))}
                   </ScrollView>
                    <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.addExerc} onPress={addExercicio}>
                        <Image 
                        source={require('../images/plus.png')}
                        style={styles.icon}
                        />
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.addExerc} onPress={removeExercicio}>
                        <Image 
                        source={require('../images/plus.png')}
                        style={styles.icon}
                        />
                    </TouchableOpacity> */}
                    </View>
                </View>

                {/* <ScrollView style={{ marginBottom: 10 }}> */}

                {/* </ScrollView> */}
                <View style={{ flexDirection: 'column' }}>

                    <TouchableOpacity style={styles.finalizarTreino}>
                        <Text style={{ fontSize: 30, color: '#F0F0F0', }}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
    containerTreino: {
        fontSize: 20,
        backgroundColor: '#F0F0F0',
        borderRadius: 6,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,

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
        width: 60,
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
        marginHorizontal: 10,

    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderRadius: 5,
    },
    containerExerc: {
        backgroundColor: '#FFFFFF',
        borderColor: '#F0F0F0',
        borderWidth: 10,
        borderRadius: 8,
        padding: 6,
        marginVertical: 6,
    },
    exercicioInputText: {
        fontSize: 24,
        fontWeight: '500'
    }
});

export default CriarTreino;