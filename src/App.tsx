import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Dashboard from './components/Layout';

const App: React.FC = () => {
    
    return(
        <>
            <GlobalStyles />
            <Dashboard />
        </>
    )

}   


export default App;