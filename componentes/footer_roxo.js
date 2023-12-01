import { View, Image} from "react-native";

export default function Footer_roxo (){
    return(
        <View style={{backgroundColor: '#5E3ACE',  bottom: 0, position: "absolute", width:'100%'}}>
            <View style={{color: 'white', textAlign: 'center', fontSize: 18, fontWeight: "bold", marginTop: 10}}>RALIVERY</View>
            <View style={{display: 'flex', flexDirection:"row", justifyContent:"center"}}>
                <View><Image source={require('../assets/facebook.png')} style={{width: 25, height: 25, margin:5}}/></View>
                <View><Image source={require('../assets/instagram.png')} style={{width: 25, height: 25, margin:5}}/></View>
            </View>

        </View>
    )
}