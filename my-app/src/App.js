import * as React from 'react';
import * as Bluetooth from 'react-bluetooth';
import './style.css';

// import the fingerprintjs opensource library
import FingerprintJS from '@fingerprintjs/fingerprintjs';

export default function App() {
  // The fingerprint can be stored in the state or
  // in the localstorage of the browser

  const [fpHash, setFpHash] = React.useState('');

  // create and set the fingerprint as soon as
  // the component mounts
  React.useEffect(() => {
    const setFp = async () => {
      const fp = await FingerprintJS.load();

      const { visitorId } = await fp.get();

      setFpHash(visitorId);
    };

    setFp();
  }, []);
  return (
    <div>
      <h1>This is the fingerprint hash</h1>
      <h3>Hash: {fpHash}</h3>
    </div>
  );
}