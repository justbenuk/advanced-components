import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <p>Example Inputfields</p>
      <Input label="Your Name" id="name" type='text'/>
      <Input label="Your Age" id="age" type='number'/>
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
