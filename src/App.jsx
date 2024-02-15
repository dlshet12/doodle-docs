import React from 'react';
import Background from './component/Background';
import Foreground from './component/Foreground';

function App() {
  return (
    <div className='w-full h-screen bg-zinc-800 relative'>
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
