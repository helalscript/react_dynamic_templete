import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
  {/*  preloader start */}
  <div id="tb-preloader">
    <div className="tb-preloader-wave" />
  </div>
  {/* preloader end */}
  
<Home/>


</>

  );
}

export default App;
