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
        <View style={{ backgroundColor: '#182649', flex: 1, paddingVertical: 30, /* justifyContent: 'space-between' */ }}>
            <View style={styles.header}>
                <Text style={{ color: '#F0F0F0', fontSize: 45, fontWeight: '600', fontFamily: 'Inter-Bold', paddingBottom: 20, alignSelf: 'flex-start' }}>Gerenciar</Text>
                <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}>
                    <Image
                        source={require('../images/menu.png')}
                        style={styles.iconMenu}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containerTreino}>
                <View style={styles.containerNome}>
                    <Text style={{ fontFamily: 'Inter-Bold', fontSize: 30 }}>TREINO A</Text>
                    <View />

                </View>
                <Image
                    source={require('../images/lixo.png')}
                    style={styles.icon}
                />
                {/* <ScrollView style={{ marginBottom: 10 }}> */}

                {/* </ScrollView> */}

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
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconMenu: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 5,
        color: '#707070'
    },
    bttnMenu: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
        borderColor: '#fff',
        height: 70,
        width: 70,
        borderRadius: 10,
    },
    containerTreino: {
        backgroundColor: '#D9D9D9',
        padding: 5,
        margin: 10,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    containerNome: {
        fontSize: 20,
        backgroundColor: '#F0F0F0',
        borderRadius: 6,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,

    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        marginHorizontal: 10,

    },
});

export default GerenciarTreinos;