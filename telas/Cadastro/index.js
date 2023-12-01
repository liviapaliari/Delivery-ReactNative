import { View, Text, Hr, TextInput, Button, TouchableOpacity } from "react-native";
import styles from './styles';
import Footer_roxo from '../../componentes/footer_roxo';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../../firebaseConfig";

export default function Cadastro({navigation}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const cadastrar = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, userName, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Usuário Cadastrado");
                navigation.navigate("Login");
            })
            .catch((error) => {
                alert("Não foi possível cadastrar o usuário");
                console.log("Error: " + error.message);
            });
    }
    
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.titulo}>CADASTRAR</Text>
                <View style={styles.linha}></View>
            </View>

            <View style={{ marginTop: 100, alignItems: "center" }}>

                <View style={styles.login}>
                    <Text style={styles.texto}>DIGITE O SEU E-MAIL:</Text>
                    <TextInput onChangeText={(e) => setUserName(e)} style={styles.input}></TextInput>
                    <Text style={styles.texto}>DIGITE UMA SENHA:</Text>
                    <TextInput onChangeText={(e) => setPassword(e)} style={styles.input}></TextInput>

                    <View >
                        <TouchableOpacity onPress={() => cadastrar()}><Text style={styles.btn_cadastrar}>CADASTRAR</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            <Footer_roxo />
        </View>
    )
}