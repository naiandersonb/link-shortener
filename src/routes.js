import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/Home';
import Links from './pages/Links';
import Error from './pages/Error';

function RoutesApp() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/links' element={<Links/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </Router>
    )
}

export default RoutesApp;
