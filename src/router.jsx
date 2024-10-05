import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/home';
import Hardware from './components/header-hardware/hardware';
import HarePage from './pages/hare/hare';
import MateriasPage from './pages/materias/materias';

const Router = ()=>{


    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/hardware' element={<Hardware/>}/>
            <Route path='/hare' element={<HarePage />}/>
            <Route path='/materias' element={<MateriasPage />}/>
        </Routes>
    )
}

export default Router;