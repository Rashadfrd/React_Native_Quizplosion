import { StyleSheet, StatusBar } from 'react-native';
import { Provider } from './context/appcontext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import LoadingScreen from './screens/LoadingScreen';
import AppInfoScreen from './screens/AppInfoScreen';
import QuizScreen from './screens/Quiz';
import FormScreen from './screens/FormScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider>
        <NavigationContainer>
        <StatusBar style='light' />
          <Stack.Navigator initialRouteName='Form' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="Loading" component={LoadingScreen} />
            <Stack.Screen name="AppInfo" component={AppInfoScreen} />
            <Stack.Screen name="Quiz" component={QuizScreen} />
            <Stack.Screen name="Form" component={FormScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
