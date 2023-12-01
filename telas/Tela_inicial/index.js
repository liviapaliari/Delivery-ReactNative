import { View, Text, TextInput, Button, TouchableOpacity, Image} from "react-native";
import { collection, getDocs, query } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles';
import Footer_roxo from '../../componentes/footer_roxo'
import { useEffect, useState } from "react";
import { app, db } from "../../firebaseConfig";

export default function Tela_inicial({navigation}) {
    // UseState final com produtos e IDs
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    const [novoCarrinho, setNovoCarrinho] = useState([]);

    const adicionarProduto = (produto)=> {
        const novoCarrinho = [...carrinho, produto];
        setCarrinho(novoCarrinho);
        salvarCarrinho(carrinho);
    }

    const removerProduto = (nomeProduto) => {
        setCarrinho(carrinho.splice(carrinho.indexOf(nomeProduto), 1));
        salvarCarrinho(carrinho);
    }

    const salvarCarrinho = (novoCarrinho) => {
        AsyncStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    }

    useEffect(async () => {
        // Lista com todos produtos sem o ID
        const listaProdutos = [];

        // Lista somente com os IDs
        const listaIdProdutos = [];

        // Lista com os IDs e produtos
        const listaProdutosIds = [];

        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "Produtos"));
            querySnapshot.forEach((doc) => {
                listaIdProdutos.push(doc.id);
                listaProdutos.push(doc.data());
            })
        }

        const mergeData = async () => {
            for (let i = 0; i < listaProdutos.length; i++) {
                const produto = listaProdutos[i];
                const id = listaIdProdutos[i];

                listaProdutosIds.push({
                    id: id,
                    nome: produto.Nome,
                    valor: produto.Valor,
                    descricao: produto.Descricao
                });
            }
        }

        await fetchData()
        await mergeData();
        setProdutos(listaProdutosIds);
    }, []);

    useEffect(() => {
        console.log(produtos);
    }, [produtos])

    return(
        <View style={styles.container}>

            <View>
                <View style={styles.navbar}>
                    <TextInput style={styles.barra_pesquisa}></TextInput>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Image source={require('../../assets/login.png')} style={styles.btn_login}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.linha}></View>
            </View>

            <View>
                <Image source={require('../../assets/propaganda.png')} style={styles.propaganda}/>
            </View>

            <View style={styles.peca_agora}>
                <TouchableOpacity ><Text style={styles.btn_peca}>PEÇA AGORA!</Text></TouchableOpacity>
            </View>

            <View>
                <Image source={require('../../assets/entregador.png')} style={styles.entregador}/>
            </View>

            {produtos.map((item) =>
                <View>
                    <Text>{item.nome}  -{'>'}  R${item.valor}</Text>
                    <TouchableOpacity
                        onPress={() => adicionarProduto(item)}>
                        <Text>Comprar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => removerProduto(item)}>
                        <Text>Remover</Text>
                    </TouchableOpacity>
                </View>
            )}

            <Footer_roxo />
        </View>
    )
}