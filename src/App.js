import './App.css';
import MainPage from './pages/MainPage';
import {StoreProvider} from './StoreContext'
function App() {

 

  return (
    <>
    <StoreProvider>
    <MainPage/>
   </StoreProvider>
    </>
  );
}

export default App;
