import { useState } from 'react';

const ListRender = () => {
  const [users] = useState([
    {
      id: 1,
      name: 'Elrond'
    },
    {
      id: 2,
      name: 'Galadriel'
    },
    {
      id: 3,
      name: 'Cirdan'
    }
  ]);
  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
