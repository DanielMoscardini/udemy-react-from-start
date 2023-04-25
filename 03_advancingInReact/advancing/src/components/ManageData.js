import { useState } from 'react';

const ManageData = () => {
  const [number, setNumber] = useState(10);
  return (
    <div>
      <p>value: {number}</p>
      <button onClick={() => setNumber(25)}>Change the value</button>
    </div>
  );
};

export default ManageData;
