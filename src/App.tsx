import Input from "./components/Input";
import Button from "./components/Button";
import { useRef } from "react";
import Form from "./components/Form";

function App() {

  const inputRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)

  function handleSave(data: unknown){
    const extractedData = data as {name: string, age: string}

    console.log(extractedData)
  }

  return (
    <main>
      <p>Example Inputfields</p>
      <Input label="Your Name" id="name" type='text' ref={inputRef} />
      <Input label="Your Age" id="age" type='number' ref={ageRef} />
      <hr />
      <p>Example Button Components</p>
      <Button el="button" className="button">Click Me</Button>
      <br />
      <br />
      <Button el='link' href='/test' className="button">A Link</Button>
      <hr />
      <Form onSave={handleSave}>
        <Input label="Your Name" id="name" type='text' name='name' />
        <Input label="Your Age" id="age" type='number'  name='age'/>
        <p>
          <Button el='button' className="button">Submit Form</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
