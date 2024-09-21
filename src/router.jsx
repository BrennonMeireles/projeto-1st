import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/home';
import Hardware from './components/header-hardware/hardware';

const Router = ()=>{


    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/hardware' element={<Hardware/>}/>
        </Routes>
    )
}

export default Router;