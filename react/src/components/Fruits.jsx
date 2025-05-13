/* export default function Fruits() {
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
} */
import List from "./List";
export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: false },
    { name: "Mango", price: 20, emoji: "🥭", soldout: false },
    { name: "orange", price: 15, emoji: "🍊", soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <List
            name={fruit.name}
            emoji={fruit.emoji}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
