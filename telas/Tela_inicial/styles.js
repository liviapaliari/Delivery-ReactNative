import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9D90EC",
      },
      navbar:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 45,
        alignItems: "center",
      },
      barra_pesquisa:{
        width: 280,
        height: 28,
        backgroundColor: 'white',
      },
      btn_login:{
        width: 38,
        height: 41,
        marginTop: 5,
      },
      linha:{
        backgroundColor: 'white',
        width: '100%',
        height: 1,
        marginTop: 15,
      },
      propaganda:{
        alignSelf: "center",
        marginTop: 35,
      },
      btn_peca:{
        borderRadius: 30,
        backgroundColor: '#5E3ACE',
        width: 100,
        height: 45,
        marginTop: 10,
        marginLeft: 280, 
        color:  'white',
        textAlign:"center",
        fontSize: 16,
        fontWeight: "bold",
      },
      peca_agora:{
        alignSelf:"center",
      },
      entregador:{
        alignSelf: "center",
        marginTop: 35,
      }

})

export default styles