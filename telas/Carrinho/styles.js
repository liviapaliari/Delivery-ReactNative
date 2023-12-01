import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9D90EC",
      },
      titulo:{
        color: 'white',
        fontSize: 40,
        fontWeight: "700",
        margin: 10,
        marginTop: 35,
      },
      linha:{
        backgroundColor: 'white',
        width: '100%',
        height: 1,
      },
      localizacao:{
        width: 200,
        height: 29,
        left: 10,
        marginBottom: 5,
      },
      card:{
        marginTop: 25,
        backgroundColor: '#5E3ACE',
        flexDirection: "row",
        alignItems: "center"
      },
      descricao:{
        color: "white",
        width: 200,
        fontSize: 15,
        margin: 5,
      },
      txt_total:{
        fontWeight: "400",
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
      },
      linha_total:{
        backgroundColor: 'black',
        width: '35%',
        height: 1,
        alignSelf: "center"
      },
      valor:{
        textAlign: 'center',
        color: "white",
        fontSize: 20,
      },
      btn_finalizar:{ 
        alignSelf: 'flex-end'
      },
      txt_finalizar:{
        borderRadius: 30,
        backgroundColor: '#5E3ACE',
        width:110,
        height: 20,
        color:  'white',
        textAlign:"center",
        fontSize: 13,
        fontWeight: "bold",
      }
      
})

export default styles