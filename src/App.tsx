import ListGroup from './components/ListGroup';
import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Buttons';

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

const handleSelectItem = (item: string) =>{
  console.log(item);
  
}

const[alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <ListGroup 
        items={items} 
        heading='Cities' 
        onSelectItem={handleSelectItem}
      />
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
      <Button color='dark' onClick={() => setAlertVisible(true)}>My Button</ Button>
    </>
  );
}

export default App
