import { View, Text,TouchableOpacity, Image} from "react-native";
import styles from "./styles";
import Footer_preto from "../../componentes/footer_preto";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { app, db } from "../../firebaseConfig";
import { addDoc, collection, setDoc } from "firebase/firestore";

export default function Carrinho({navigation}) {
    var valorTotal = 0;
    const [carrinho, setCarrinho] = useState([]);
    const [userName, setUserName] = useState();
    
    useEffect(() => {
        const obterCarrinho = async () => {
            try {
                const dados = await AsyncStorage.getItem("carrinho");
                
                if (dados != null) {
                    const listaAuxiliar = JSON.parse(dados);
                    setCarrinho(listaAuxiliar);
                }
            }
            catch (error) {
                console.log(error);
            }
        }

        obterCarrinho();
    }, []);


    useEffect(() => {
        const obterUsuario = async () => {
            const dados = await AsyncStorage.getItem("usuario");
            try {
                if (dados != null) {
                    const usuario = JSON.parse(dados);
                    setUserName(usuario);
                    console.log("nome do usuario aqui");
                    console.log(usuario);
                }
            }
            catch (error) {
                console.log(error);
            }
        }

        obterUsuario();
    }, [])


    useEffect(() => {
        console.log(carrinho);
    }, [carrinho])

    const removerProduto = (nomeProduto) => {
        setCarrinho(carrinho.splice(carrinho.indexOf(nomeProduto), 1));
        console.log("aqui o carrinho do remover produto");
        console.log(carrinho);
        salvarCarrinho(carrinho);
    }

    const salvarCarrinho = (novoCarrinho) => {
        AsyncStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    }
    
    const finalizarCompra = () => {
        alert("Compra Finalizada!")
        fazerPedido();
        AsyncStorage.clear();
        setCarrinho([]);
    }

    const fazerPedido = async () => {
        const docRef = await addDoc(collection(db, "Pedidos"), {
            produtos: carrinho,
            usuario: userName
        });
    }

    return(
        <View style={styles.container}>

            <View>
                <Text style={styles.titulo}>CARRINHO</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Image source={require("../../assets/localizacao.png")} style={styles.localizacao}/>
                </TouchableOpacity>
                <View style={styles.linha}></View>
            </View>

            {carrinho.map((item, id) => {
                valorTotal += item.valor;
                return (
                    <View>
                        <Text style={styles.descricao}>{item.nome}</Text>
                        <Text style={styles.descricao}>{item.valor}</Text>
                        <TouchableOpacity
                            onPress={() => removerProduto(item.nome)}>
                            <Text style={styles.descricao}>Remover</Text>
                        </TouchableOpacity>
                        <Text style={styles.descricao}>===================</Text>
                    </View>
                )               
            }
            )}

            {/* <View style={styles.cards}>
                <View style={styles.card}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Image source={require("../../assets/prato_feito.png")} style={styles.imagem_prato}/>
                        </TouchableOpacity>
                    </View>
                    <Text>asdasdasdsadasd</Text>
                    
                    <View>

                    </View>
                </View>
            </View> */}

            <View >
                <Text style={styles.txt_total}>TOTAL</Text>
                <View style={styles.linha_total}></View>
                <Text style={styles.valor}>{valorTotal.toFixed(2)}</Text>
            </View>
            
            <View style={styles.btn_finalizar}>
                <TouchableOpacity onPress={finalizarCompra}>
                    <Text style={styles.txt_finalizar}>FINALIZAR</Text>
                </TouchableOpacity>

            </View>
            <Footer_preto/>
        </View>
    )
}