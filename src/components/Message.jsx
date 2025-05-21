export default function Message() {
  function handleClick() {
    console.log("BUtton Clicked");
  }

  return (
    <div>
      <button onClick={handleClick}>Click here to get a message</button>
    </div>
  );
}
