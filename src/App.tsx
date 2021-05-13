import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './components/Layout';

import dark from './styles/Themes/dark';
import light from './styles/Themes/light';

const App: React.FC = () => {
    
    return(
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Dashboard />
        </ThemeProvider>
    )

}   


export default App;