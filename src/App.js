import './App.css';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import {StoreProvider} from './StoreContext.jsx'
import {Route, Routes } from 'react-router-dom'
function App() {

 

  return (
    <>    
    <StoreProvider>
    <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/:id" element={<ProductPage/>} />
    {/* <Route path='*' element={<Error/>}/> */}
    </Routes>
    </StoreProvider>
    </>
  );
}

export default App;
