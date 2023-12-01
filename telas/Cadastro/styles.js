import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9D90EC",
      },
      titulo:{
        color: 'white',
        fontSize: 30,
        fontWeight: "700",
        margin: 13,
        marginTop: 35,
      },
      linha:{
        backgroundColor: 'white',
        width: '100%',
        height: 1,
      },
      login:{
        display: "flex",
        alignItems: "center",
      },
      texto:{
        color: '#5E3ACE',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 8,
      },
      input:{
        width: 259,
        height: 36,
        backgroundColor: 'white',
      },
      cadastrar:{
        display: 'flex',
        alignItems: "center",
        alignSelf:"flex-end",
        margin: 20,
        marginTop: 200,
      },
      btn_login:{
        borderRadius: 30,
        backgroundColor: '#5E3ACE',
        width: 75,
        height: 30,
        display:"flex",
        justifyContent:"center",
        marginTop: 30,
        marginLeft: 180, 
        color:  'white',
        textAlign:"center",
        fontSize: 12,
        fontWeight: "bold",
      },
      btn_cadastrar:{
        borderRadius: 30,
        backgroundColor: '#5E3ACE',
        width:122,
        height: 30,
        display:"flex",
        justifyContent:"center",
        color:  'white',
        textAlign:"center",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 30
      },
})

export default styles