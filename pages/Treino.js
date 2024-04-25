import { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from "react-native";

export default function CriarTrieno({ navigation }) {
    const [nomeTreino, setNomeTreino] = useState("");
    const [exercicio, setExercicio] = useState("");
    const [quantRepeticao, setQuantRepeticao] = useState(0);
    const [quantSets, setQuantSets] = useState(0);
    const [descricao, setDescricao] = useState("");

    const handleCreate = () => {
        // Criar a lógica do botão de criar novas listas
    }

    const handleFinally = () => {
        // Criar a lógica do botão para finalizar a criação dos treinos
    }

    return (
        <View style={styles.container}>
            <View style={styles.treino}>
                <TextInput style={styles.inputTreino} value={nomeTreino} keyboardType="text" onChange={(text) => setNomeTreino(text)} placeholder="Nome do Treino" />
            </View>
            <View>
                <TextInput value={exercicio} onChange={(text) => setExercicio(text)} keyboardType="text" placeholder="Exercício" />
                <TextInput value={quantRepeticao} onChange={(text) => setQuantRepeticao(text)} keyboardType="number" placeholder="Repetições" />
                <TextInput value={quantSets} onChange={(text) => setQuantSets(text)} keyboardType="number" placeholder="Sets" />
                <TextInput value={descricao} onChange={(text) => setDescricao(text)} keyboardType="text" placeholder="Descrição" />
            </View>

            <TouchableOpacity onPress={handleCreate}><Image source={"../svg/plus.svg"} alt="Adicionar exercício"/></TouchableOpacity>

            <TouchableOpacity onPress={handleFinally}>
                <Text style={styles.btn}>Finalizar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#182649'
    },
    treino: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    inputTreino: {
        color: "#000000",
        fontSize: 20,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 2
    },
    btn: {
        width: 200,
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: '#D9D9D9',
        color: "777777",
        justifyContent: "center",
        elevation: 2,
        marginTop: 15,
        textAlign: 'center'
    }
})