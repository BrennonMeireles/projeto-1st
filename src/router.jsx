import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/home';
import Hardware from './components/header-hardware/hardware';
import HarePage from './pages/hare/hare';

const Router = ()=>{


    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/hardware' element={<Hardware/>}/>
            <Route path='/hare' element={<HarePage />}/>
        </Routes>
    )
}

export default Router;