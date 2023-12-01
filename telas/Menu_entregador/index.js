import { View, Text, TextInput, Button, TouchableOpacity, Image} from "react-native";
import styles from './styles';
import Footer_roxo from '../../componentes/footer_roxo'

// tem que terminar essa tela de Login

export default function Tela_inicial() {
    return(
        <View style={styles.container}>

            <View>
                <View style={styles.navbar}>
                    <TextInput style={styles.barra_pesquisa}></TextInput>
                    <TouchableOpacity>
                        <Image source={require('../../assets/login.png')} style={styles.btn_login}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.linha}></View>
            </View>

            <View>
                <Image source={require('../../assets/propaganda.png')} style={styles.propaganda}/>
            </View>

            <View style={styles.peca_agora}>
                <TouchableOpacity style={styles.btn_peca}>PEÇA AGORA!</TouchableOpacity>
            </View>

            <View>
                <Image source={require('../../assets/entregador.png')} style={styles.entregador}/>
            </View>



            <Footer_roxo />
        </View>
    )
}