// App.jsx
import React from 'react';
import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
    return (
        <div className="flex w-screen h-screen bg-[url('assets/images/coffee-bg.jpg')] bg-cover">
            <div className="m-auto max-w-[40rem] drop-shadow-lg">
                <div className="bg-[#4c453d7a] text-white p-8 text-center rounded-3xl">
                    <h1 className="animate-slideRight font-['Source_Serif_4'] text-[3.5rem] pb-3">Before the Law Game</h1>
                    <div className="">
                      <Game />
                    </div>
                    <h2 className="font-['VT323'] text-xl leading-none pt-4">&copy; 2024 CC Ly. All Rights Reserved.</h2>
                </div>
            </div>
        </div>
    );
}
 
export default App;