function ListRender() {
  const users = ["Venki", "Ravi", "Kiran"];
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
export default ListRender;