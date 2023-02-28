export function Greeting({ title, name = "user" }) {
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function UserCard({ name, amount, married, address, greet }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>💲{amount}</h2>
      <h2>💑{married ? "married" : "sigle"}</h2>
      <ul>
        <li>
          <h2>City: {address.city}</h2>
        </li>
        <li>
          <h2>Street: {address.street}</h2>
        </li>
      </ul>
    </div>
  );
}
