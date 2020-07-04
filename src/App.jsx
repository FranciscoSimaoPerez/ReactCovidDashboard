import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './styles/App.css';

function App() {
    const exampleOptions = [
        {
            name: 'About',
            link: '/about',
        },
        {
            name: 'Covid',
            link: '/covid',
        },
    ];
    return (
        <div className="App">
            <Navbar options={exampleOptions} />
        </div>
    );
}

export default App;
