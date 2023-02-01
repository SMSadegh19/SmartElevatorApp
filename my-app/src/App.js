import * as React from 'react';
import * as Bluetooth from 'react-bluetooth';
import './style.css';

async function pairRequest() {
  try {
    const result = await Bluetooth.requestDeviceAsync();
  
    if (result.type === 'cancel') {
      return;
    }
  
    const device = result.device;
  } catch ({ message, code }) {
    console.log('Error:', message, code);
  }
}

export default function App() {
  const [isBluetoothRequested, setIsBluetoothRequested] = React.useState(false);

  const handleBluetoothRequest = async () => {
    setIsBluetoothRequested(true);
    await pairRequest();
  };

  return (
    <div>
      <h1>Connect to Bluetooth</h1>
      {!isBluetoothRequested && (
        <button onClick={handleBluetoothRequest}>Request Bluetooth</button>
      )}
    </div>
  );
}
