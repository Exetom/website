import { useEffect, useState } from 'react';
import './App.scss';
import Navigation from "./navigation/navigation";
import Loader from './components/loader/loader';

function App() {
  const [openView, setOpenView] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpenView(true);
    }, (300));
  }, [])
  return (
    <>
      <Loader />
      {openView && (
        <Navigation />
      )}
    </>
  );
}

export default App;
