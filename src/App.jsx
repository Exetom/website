import { useEffect } from 'react';
import './App.scss';
import Navigation from "./navigation/navigation";
import Loader from './components/loader/loader';

function App() {
  return (
    <>
      <Loader />
      <Navigation />
    </>
  );
}

export default App;
