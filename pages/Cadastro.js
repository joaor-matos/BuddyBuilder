import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";

const SignUpScreen = () => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // implementar lógica de validação do lado do cliente e armazenamento de dados
    };
}

function CadastroScreen() {
    return (
        <View style={styles.container}>
            <View style={{}}>
                <Text style={styles.textNickname}>Apelido</Text>
                {/* <TextInput style={styles.nicknameInput} placeholder="Apelido" onChangeText={text => setNickname(text)} value={nickname} /> */}
                <TextInput style={styles.nicknameInput} />

                <Text style={styles.textEmail}>E-mail</Text>
                {/* <TextInput style={styles.emailInput} placeholder="E-mail" onChangeText={text => setEmail(text)} value={email} /> */}
                <TextInput style={styles.emailInput} />

                <Text style={styles.textPassword}>Senha</Text>
                {/* <TextInput placeholder="Senha" onChangeText={text => setPassword(text)} value={password} /> */}
                <TextInput style={styles.passwordInput} />

                <Text style={styles.textConfirm}>Confirmar senha</Text>
                {/* <TextInput style={styles.confirmPasswordInput} placeholder="Confirmar senha" onChangeText={text => setConfirmPassWord(text)} value={confirmPassword} /> */}
                <TextInput style={styles.confirmPasswordInput} />

                <TouchableOpacity style={styles.btnCadastro}><Text style={{ fontWeight: "bold", textAlign: 'center', fontSize: 20, }}>Concluir cadastro</Text></TouchableOpacity>

                {/* <TouchableOpacity
                    title="Login" style={styles.btnCadastro} onPress={() => navigation.navigate('Login')} >
                    <Text style={{ fontWeight: "bold", textAlign: 'center' }}>
                        Fazer Login
                    </Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: 'center',
        justifyContent: 'center',
    },
    nicknameInput: {
        width: 300,
        height: 35,
        padding: 3,
        borderRadius: 5,
        backgroundColor: "#D9D9D9",
        borderWidth: 1,
        borderColor: '#BFBFBF',
        marginBottom: 30,
    },
    emailInput: {
        width: 300,
        height: 35,
        padding: 3,
        borderRadius: 5,
        backgroundColor: "#D9D9D9",
        borderWidth: 1,
        borderColor: '#BFBFBF',
        marginBottom: 30,
    },
    passwordInput: {
        width: 300,
        height: 35,
        padding: 3,
        borderRadius: 5,
        backgroundColor: "#D9D9D9",
        borderWidth: 1,
        borderColor: '#BFBFBF',
        marginBottom: 30,
    },
    confirmPasswordInput: {
        width: 300,
        height: 35,
        padding: 3,
        borderRadius: 5,
        backgroundColor: "#D9D9D9",
        borderWidth: 1,
        borderColor: '#BFBFBF',
        marginBottom: 30,
    },
    btnCadastro: {
        width: 270,
        padding: 8,
        borderRadius: 8,
        backgroundColor: "#D9D9D9",
        marginTop: 15,
        alignSelf: 'center',
    },
    textNickname: {
        fontSize: 20,
        fontFamily: 'Inter',
        fontWeight: "400",
        textAlign: "left",
        marginBottom: 3,
    },
    textEmail: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: "400",
        marginBottom: 3,
    },
    textPassword: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: "400",
        marginBottom: 3,
    },
    textConfirm: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: "400",
        marginBottom: 3,
    },
    textCadastro: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: "700",
    },
    textPassword: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: "400",
    },
})

export default CadastroScreen;