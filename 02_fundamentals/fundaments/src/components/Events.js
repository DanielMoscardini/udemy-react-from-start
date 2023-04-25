const Events = () => {
  const handleMyEvent = () => {
    alert('Event worked');
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Click Here</button>
      </div>
    </div>
  );
};

export default Events;
