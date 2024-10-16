import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Bottom_Tab_Navigation } from './Bottom_Tab_Navigation';
import { Login_SignUp_Button } from '../../Screens/Login_SignUp_Button';
import { Login } from '../../Screens/Login';
import { Signup } from '../../Screens/Signup';


const Stack = createNativeStackNavigator();

const App_Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator  screenOptions={{headerShown:true}} >

                <Stack.Screen name='Login_SignUp_Button' component={Login_SignUp_Button} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen name='Bottom-Tabs' component={Bottom_Tab_Navigation} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default App_Navigation