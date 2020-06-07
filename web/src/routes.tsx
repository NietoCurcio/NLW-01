import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter>
            {/* cada rota vai ser um Route */}
            <Route component={Home} path="/" exact/>
            {/* o react olha o começo, por isso '/' */}
            {/* na create-point route, e como o react faz essa verificação de igualdade */}
            {/* poe exact pra ver se a rota eh igual a '/' */}
            <Route component={CreatePoint} path="/create-point" />
        </BrowserRouter>
        // SPA = single page application
    )
}

export default Routes;