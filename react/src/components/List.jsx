export default function List({ name, price, emoji , soldout}) {
  return (
    <>
     <li>
          {emoji}
          {name}
          {price} {soldout ?"soldout":""}
        </li>
        </>
  );
}
