import React from 'react'
import HooksOne from './components/HooksOne';
// import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'

const App = () => {
    return (
        <>
        <HooksOne/>
            {/* <Navbar title="Textutils" aboutText="About" /> */}
            {/* <Navbar/> */}
            <div className='container'>
                <div className='container my-3'>
                    {/* <TextForm heading="Enter the text to analyze below" /> */}
                </div>
            </div>
        </>
    )
}

export default App;

