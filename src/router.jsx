import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/home';
import HarePage from './pages/hare/hare';

const Router = ()=>{


    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/hare' element={<HarePage />}/>
        </Routes>
    )
}

export default Router;