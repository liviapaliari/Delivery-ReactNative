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
        marginTop: 25,
      },
      pedidos:{
        marginTop: 40,
        width: '100%',
        height: 150,
        backgroundColor: '#5E3ACE',
      },
      titulo_pedido:{
        marginLeft: 20,
        marginTop: 10,
        color: 'white',
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: '700',
      },
      txt_pedido:{
        marginTop: 10,
        marginLeft: 20,
        color: 'white',
        fontSize: 14,
      }

})

export default styles