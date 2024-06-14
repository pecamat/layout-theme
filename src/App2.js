import React from 'react';
import Dialog from './dialog';
import Button from './button';


const App2 = () => {
  return (
    <div>
      <Dialog>
        <Button onClick={() => console.log('Button clicked')}>Click me</Button>
        <Button onClick={() => console.log('Button clicked')}>Click me</Button>
      </Dialog>
    </div>
  );
};

export default App2;