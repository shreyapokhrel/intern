/*  const name = "Roe";
function displayMessage() {
  return "wow!";
} 
function Hello() {
  return <h1>Hello from a component!{displayMessage()}</h1>;
}

export default Hello;
 */

function Hello() {
  return (
    <div>
      <h1>Hello from a component! </h1> <h1>Wow!</h1>
    </div>
  );
}

export default Hello;
