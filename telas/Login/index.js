import { View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from './styles';
import Footer_roxo from '../../componentes/footer_roxo';
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({navigation}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();

    const logar = () => {
        signInWithEmailAndPassword(auth, userName, password)
        .then(() => {
            if (userName === "entregador@hotmail.com") {
                alert("Entregador logado!");
                navigation.navigate("Menu_entregador");
            }
            else{
                alert("Cliente logado!");
                AsyncStorage.setItem("usuario", JSON.stringify(userName));
                navigation.navigate("Menu_cliente");
            }
        })
        .catch((error) => {
            alert("Usuário e/ou senha inválidos")
            console.log("Error: " + error.message);
        })
    }

    return(
        <View style={styles.container}>

            <View>
                <Text style={styles.titulo}>LOGIN</Text>
                <View style={styles.linha}></View>
            </View>

            <View style={{marginTop: 100}}>

                <View style={styles.login}>
                    <Text style={styles.texto}>E-MAIL</Text>
                    <TextInput onChangeText={(e) => setUserName(e)} value={userName} style={styles.input}></TextInput>
                    <Text style={styles.texto}>SENHA</Text>
                    <TextInput onChangeText={(e) => setPassword(e)} value={password} secureTextEntry={true} style={styles.input}></TextInput>

                    <View >
                        <TouchableOpacity onPress={() => logar()}><Text style={styles.btn_login}>LOGIN</Text></TouchableOpacity>
                    </View>
                </View>

            </View>
            
            <View style={styles.cadastrar}>
                <Text style={styles.texto}>NÃO TEM CONTA?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} ><Text style={styles.btn_cadastrar}>CADASTRAR</Text></TouchableOpacity>
            </View>

            <Footer_roxo />
        </View>
    )
}