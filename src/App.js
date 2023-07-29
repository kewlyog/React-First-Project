import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
// import ErrorBound from './ErrorBound';
// import Forms from './components/Forms';

function App() {

  const [mode, setMode] = useState('light');
  const [btnText, setbtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, typ) => {
    //setAlert('This is alert text');

    setAlert({
      message: msg,
      type: typ
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setbtnText('Enable Light Mode');
      document.body.style.backgroundColor = '#41464b';
      showAlert('Dark Mode is enabled', 'success');
    }
    else {
      setMode('light');
      setbtnText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is enabled', 'success');
    }
  }

  return (
    <>
      <div>
        <Navbar title="yo yo!" aboutUs="About Us" mode={mode}
          toggleMode={toggleMode} btnText={btnText} />
        {/* <Alert alert={alert} /> */}
        <TextForm heading="Enter the text to analyze below" mode={mode}
          showAlert={showAlert} />
        <AboutUs />
        {/* <ErrorBound><Users /></ErrorBound> */}
        {/* <Forms /> */}
      </div>
    </>
  );
}

export default App;
