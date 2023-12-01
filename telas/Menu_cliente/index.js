import { View, Text, TextInput, Button, TouchableOpacity, Image} from "react-native";
import styles from './styles';
import Footer_preto from '../../componentes/footer_preto'
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getDocs } from "firebase/firestore";
import { app, db } from "../../firebaseConfig";

export default function Menu_entregador({navigation}) {
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    // const [novoCarrinho, setNovoCarrinho] = useState([]);

    const adicionarProduto = (produto)=> {
        const novoCarrinho = [...carrinho, produto];
        setCarrinho(novoCarrinho);
        salvarCarrinho(novoCarrinho);
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
                    <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
                        <Image source={require('../../assets/carrinho.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.linha}></View>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image source={require('../../assets/localizacao.png')} style={styles.localizacao}/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.titulo}>NOSSOS PRODUTOS</Text>
                {produtos.map((item) => 
                    
                    // Ver com a Radja como que faz pra colocar eles divididos em duas colunas, em vez de uma única coluna
                    <View>
                        
                        <View style={styles.cards}>
                            <View style={styles.card}>
                                <Image source={require('../../assets/prato_feito.png')} style={styles.imagem_prato}/>
                                <TouchableOpacity onPress={() => adicionarProduto(item)}>
                                    <Text>{item.nome}</Text>
                                    <Text>R$ {item.valor}</Text>
                                    <Text style={styles.btn_comprar}> COMPRAR </Text>
                                </TouchableOpacity>
                            </View>

                            {/* <View style={styles.card}>
                                <Image source={require('../../assets/prato_feito.png')} style={styles.imagem_prato}/>
                                <TouchableOpacity onPress={() => navigation.navigate('')}>
                                    <Text style={styles.btn_comprar}> COMPRAR </Text>
                                </TouchableOpacity>
                            </View> */}
                        </View>
                    </View>
                )}

                {/* <View>
                    <Text style={styles.titulo}>LANCHE</Text>
                    <View style={styles.cards}>
                        <View style={styles.card}>
                            <Image source={require('../../assets/prato_feito.png')} style={styles.imagem_prato}/>
                            <TouchableOpacity onPress={() => navigation.navigate('')}>
                                <Text style={styles.btn_comprar}> COMPRAR </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.card}>
                            <Image source={require('../../assets/prato_feito.png')} style={styles.imagem_prato}/>
                            <TouchableOpacity onPress={() => navigation.navigate('')}>
                                <Text style={styles.btn_comprar}> COMPRAR </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                
                <View>
                    <Text style={styles.titulo}>BEBIDAS</Text>
                    <View style={styles.cards}>
                        <View style={styles.card}>
                            <Image source={require('../../assets/prato_feito.png')} style={styles.imagem_prato}/>
                            <TouchableOpacity onPress={() => navigation.navigate('')}>
                                <Text style={styles.btn_comprar}> COMPRAR </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.card}>
                            <Image source={require('../../assets/prato_feito.png')} style={styles.imagem_prato}/>
                            <TouchableOpacity onPress={() => navigation.navigate('')}>
                                <Text style={styles.btn_comprar}> COMPRAR </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View> */}
                <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
                    <Text style={styles.btn_comprar}>CARRINHO</Text>
                </TouchableOpacity>
            </View>
            <Footer_preto />
        </View>
    )
}