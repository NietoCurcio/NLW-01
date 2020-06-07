import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Points from './pages/Points';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        // like Browser Routes in react js, define como as rotas devem se comportas
        <NavigationContainer> 
            {/* como se fosse o Route do reactjs */}
            {/* primeira chave = JS segunda chave eh pq eh um objeto */}
            <AppStack.Navigator 
            headerMode="none" 
            screenOptions={{
                cardStyle: {
                backgroundColor: '#f0f0f5'
                }
            }}> 
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Points" component={Points}/>
                <AppStack.Screen name="Detail" component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;

// navigation stack, call others windows without lost previous windows