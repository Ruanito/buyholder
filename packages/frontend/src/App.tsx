import React from 'react';
import './App.css';
import { SignIn } from '@clerk/clerk-react';

function App() {
  return (
    <div className="container mx-auto mt-14">
      <div className="grid justify-items-center">
        <div>
          <SignIn/>
        </div>
      </div>
    </div>
  );
}

export default App;
