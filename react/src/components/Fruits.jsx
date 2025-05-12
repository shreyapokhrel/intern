export default function Fruits() {
  const fruits = ["Apple", "Mango", "Orange"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
          //<h1>{fruit}</h1>
        ))}
      </ul>
    </div>
  );
}
