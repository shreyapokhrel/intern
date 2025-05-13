import Code from "./Code";
import Welcome from "./Welcome";
export default function Conditional() {
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
  const display = false;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}
