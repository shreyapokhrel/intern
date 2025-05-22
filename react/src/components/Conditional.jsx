import Code from "./Code";
import Welcome from "./Welcome";
export default function Conditional() {
  // let message;
  const display = true;;
  /* if(display){
     message=<h1>This is message 1</h1>;
  }else{
    message= <h1>This is message 2</h1>;;
  } */
  {
    return display ? <h1>Message 1</h1> : <h1>Message 2</h1>;
    
  }
}

/*  const display = true;
    if(display){
        return (
            <div>
                <h3>This is a conditional component</h3>
            </div>
        );
    }else{
        return (<div>
            <h3>Code everyday!</h3>
        </div>
        );
    } */
/* const display = false;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}
 */
