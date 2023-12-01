import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tela_inicial from "./telas/Tela_inicial";
import Login from "./telas/Login";
import Cadastro from "./telas/Cadastro";
import Carrinho from "./telas/Carrinho";
import Menu_cliente from "./telas/Menu_cliente";
import Menu_entregador from "./telas/Menu_entregador";
import Pedido from "./telas/Pedido";

const Pilha = createStackNavigator();

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>

                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                /> 

                <Pilha.Screen
                    name="Menu_cliente"
                    component={Menu_cliente}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Carrinho"
                    component={Carrinho}
                    options={{ headerShown: false }}
                />

                {/* NÃO IREI USAR */}
                <Pilha.Screen
                    name="Tela_inicial"
                    component={Tela_inicial}
                    options={{ headerShown: false }}
                />

                

                <Pilha.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Menu_entregador"
                    component={Menu_entregador}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Pedido"
                    component={Pedido}
                    options={{ headerShown: false }}
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}