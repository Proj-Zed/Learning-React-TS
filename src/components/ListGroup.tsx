const ListGroup = () => {
  const items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Chicago",
    "Houston",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
