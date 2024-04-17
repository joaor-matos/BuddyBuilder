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
            <View style={{gap: 5}}>
                <Text style={styles.textNickname}>Apelido</Text>
                {/* <TextInput style={styles.nicknameInput} placeholder="Apelido" onChangeText={text => setNickname(text)} value={nickname} /> */}
                <TextInput style={styles.nicknameInput} placeholder="Apelido" />

                <Text style={styles.textEmail}>E-mail</Text>
                {/* <TextInput style={styles.emailInput} placeholder="E-mail" onChangeText={text => setEmail(text)} value={email} /> */}
                <TextInput style={styles.emailInput} placeholder="E-mail" />

                <Text style={styles.textPassword}>Senha</Text>
                {/* <TextInput placeholder="Senha" onChangeText={text => setPassword(text)} value={password} /> */}
                <TextInput style={styles.passwordInput} placeholder="Senha" />

                <Text style={styles.textConfirm}>Confirmar senha</Text>
                {/* <TextInput style={styles.confirmPasswordInput} placeholder="Confirmar senha" onChangeText={text => setConfirmPassWord(text)} value={confirmPassword} /> */}
                <TextInput style={styles.confirmPasswordInput} placeholder="Confirmar senha" />

                <TouchableOpacity style={styles.btnCadastro}><Text style={{ fontWeight: "bold", textAlign: 'center' }}>Concluir cadastro</Text></TouchableOpacity>

                <TouchableOpacity
                    title="Login" style={styles.btnCadastro} onPress={() => navigation.navigate('Login')} >
                    <Text style={{ fontWeight: "bold", textAlign: 'center' }}>
                        Fazer Login
                    </Text>
                </TouchableOpacity>
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
        width: 230,
        height: 35,
        padding: 3,
        borderRadius: 5,
        backgroundColor: "#D9D9D9"
    },
    emailInput: {
        width: 230,
        height: 35,
        padding: 3,
        borderRadius: 5,
        backgroundColor: "#D9D9D9"
    },
    passwordInput: {
        width: 230,
        height: 35,
        padding: 3,
        borderRadius: 5,
        backgroundColor: "#D9D9D9"
    },
    confirmPasswordInput: {
        width: 230,
        height: 35,
        padding: 3,
        borderRadius: 5,
        backgroundColor: "#D9D9D9"
    },
    btnCadastro: {
        width: 230,
        height: 35,
        padding: 5,
        borderRadius: 8,
        backgroundColor: "#D9D9D9",
        marginTop: 15,
    },
    textNickname: {
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: "400",
        textAlign: "left"
    },
    textEmail: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: "400",
    },
    textPassword: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: "400",
    },
    textConfirm: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: "400",
    },
    textCadastro: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: "700",
    },
    textPassword: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: "400",
    },
})

export default CadastroScreen;