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
      menu_bar:{
        width: 30,
        height: 25
      },
      barra_pesquisa:{
        width: 280,
        height: 28,
        backgroundColor: 'white',
      },
      linha:{
        backgroundColor: 'white',
        width: '100%',
        height: 1,
        marginTop: 25,
      },
      localizacao:{
        width: 200,
        height: 29,
        left: 100,
        marginTop: 20,
      },
      titulo:{
        color: 'white',
        marginTop: 30,
        left: 15,
        fontWeight: "900",
      },
      cards:{
        flexDirection: "row",
      },
      card:{
        margin: 15,
        backgroundColor: '#5E3ACE',
        width: 150,
      },
      imagem_prato:{
        margin: 8,
      },
      btn_comprar:{
        color: 'white',
        textAlign: 'center'
      }


})

export default styles