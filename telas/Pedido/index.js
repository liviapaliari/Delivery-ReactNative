import { View, Text, TextInput, Button, TouchableOpacity, Image} from "react-native";
import styles from './styles';
import Footer_preto from '../../componentes/footer_preto'

export default function Menu_entregador({navigation}) {
    return(
        <View style={styles.container}>

            <View>
                <View style={styles.navbar}>
                    <TextInput style={styles.barra_pesquisa}></TextInput>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Image source={require('../../assets/moto.png')} style={styles.btn_login}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.linha}></View>
            </View>


            <Footer_preto />
        </View>
    )
}