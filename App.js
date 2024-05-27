import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Páginas
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import CriarTreino from './pages/CriarTreino';
import ConfigScreen from './pages/Configuracao';
import CalculoIMC from './pages/CalculoIMC';
import Treino from './pages/Treino';
import GerenciarTreinos from './pages/GerenciarTreinos';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();

function App() {
  // const [fontsLoaded] = useFonts({
  //   'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Treino'>
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
        <Stack.Screen options={{ headerShown: false }} name='Treino' component={Treino} />
        <Stack.Screen options={{ headerShown: false }} name='Configuracao' component={ConfigScreen} />
        <Stack.Screen options={{ headerShown: false }} name='IMC' component={CalculoIMC} />
        <Stack.Screen options={{ headerShown: false }} name='CriarTreino' component={CriarTreino} />
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} name='Cadastro' component={Cadastro} />
        <Stack.Screen options={{ headerShown: false }} name='GerenciarTreinos' component={GerenciarTreinos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;