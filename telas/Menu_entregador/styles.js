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
        marginTop: 5,
        alignItems: "center",
      },
      barra_pesquisa:{
        width: 200,
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
        width: 350,
        height: 160,
        alignSelf: "center",
        marginTop: 40,
      },
      btn_peca:{
        borderRadius: 30,
        backgroundColor: '#5E3ACE',
        width: 130,
        height: 30,
        display:"flex",
        justifyContent:"center",
        margin: 25,
        color:  'white',
        textAlign:"center",
        fontSize: 12,
      },
      peca_agora:{
        display: "flex",
        alignItems: "flex-end"
      },
      entregador:{
        width: 300,
        height: 300,
        alignSelf: "center",
        marginTop: 40,
      },

})

export default styles