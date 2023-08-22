import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
// import ErrorBound from './ErrorBound';
// import Forms from './components/Forms';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [btnText, setbtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, typ) => {
    setAlert('This is alert text');

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

        {/* Below code is with routes */}

        {/* <Router>
          <Navbar title="yo yo!" aboutUs="About Us" mode={mode}
            toggleMode={toggleMode} btnText={btnText} />
          < Alert alert={alert} />

          <Routes>

            <Route exact path='/'
              element={< TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />}
            />

            <Route exact path='/about' element={< AboutUs />} />

          </Routes>
        </Router> */}

        {/* Below code is without routes used for github hosting */}

        < Navbar title="yo yo!" aboutUs="About Us" mode={mode}
          toggleMode={toggleMode} btnText={btnText} />
        < Alert alert={alert} />
        < TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
        < AboutUs />

      </div>
    </>
  );
}

export default App;
