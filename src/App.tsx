import Input from "./components/Input";
import Button from "./components/Button";
import { useRef } from "react";

function App() {

  const inputRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)

  return (
    <main>
      <p>Example Inputfields</p>
      <Input label="Your Name" id="name" type='text' ref={inputRef}/>
      <Input label="Your Age" id="age" type='number' ref={ageRef}/>
      <hr />
      <p>Example Button Components</p>
      <Button el="button" className="button">Click Me</Button>
      <br />
      <br />
      <Button el='link' href='/test' className="button">A Link</Button>
    </main>
  );
}

export default App;
