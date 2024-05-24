import { useEffect } from 'react';
import './App.scss';
import Navigation from "./navigation/navigation";

function App() {

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollColor);
  // }, []);

  // const scrollColor = () => {
  //   const root = document.documentElement;
  //   const heroSection = document.getElementById('hero').getBoundingClientRect().height - 300;
  //   const partnersSection = (document.getElementById('partners').getBoundingClientRect().height * 2) - 200;
  //   const offset = window.pageYOffset;
  //   console.log(heroSection, partnersSection, offset);
  //   if (offset >= heroSection && offset < partnersSection) {
  //     root.style.setProperty('--themeColor1', '#222831');
  //   } else {
  //     root.style.setProperty('--themeColor1', '#fdf3ff');
  //   }
  //   // if (screenHeight > (screenHeight + section2Height) - 10) {
  //   //   root.style.setProperty('--themeColor1', '#fdf3ff');
  //   // }
  // }

  return (
    <Navigation />
  );
}

export default App;
