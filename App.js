import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {AppNavigator} from './navigator'
import {MyContextControllerProvider} from './provider'

function App() {
    return (  
        <MyContextControllerProvider>
          <SafeAreaProvider>
            <AppNavigator/>
          </SafeAreaProvider>
        </MyContextControllerProvider>
    );
}

export default App;