/*  const name = "Roe";
function displayMessage() {
  return "wow!";
} 
function Hello() {
  return <h1>Hello from a component!{displayMessage()}</h1>;
}

export default Hello;
 */
//props
/* function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.message}{props.name}</h1>
      
    </div>
  );
}

export default Hello;
 */
//destructuring
/* function Hello({ name, message, emoji }) {
  //const { name, message } = props;
  return (
    <div>
      <h1>
        {message}
        {name}
        {emoji}
      </h1>
    </div>
  );
}

export default Hello; */

//immutability
/* function Hello(props) {
   props.name ="jake";
  //const { name, message } = props;
  return (
    <div>
      <h1>
        {props.message}
        {props.name}
        {props.emoji}
      </h1>
    </div>
  );
}

export default Hello; */

//pass array in props
function Hello({person}) {
 
  
  return (
    <div>
      <h1>
        {person.message}
        {person.name}
        {person.emoji}
        {person.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello; 
