import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/home';

const Router = ()=>{


    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/hardware' element={<h1>Olá página 2!</h1>}/>
        </Routes>
    )
}

export default Router;