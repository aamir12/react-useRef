import * as React from 'react';
import './style.css';

export default function App() {
  const [name, setName] = React.useState('');
  //const [renderCount, setRenderCount] = React.useState(0);

  //useRef persist data between each render
  //it does not allow component to re-render;
  //useRef is also used to reference any element;
  const renderCount = React.useRef(0); // it return object
  //it is also used to save previous value;
  const prevName = React.useRef(''); // it return object
  //<HTMLInputElement> optional; it is required for typescript
  const inputRef = React.useRef<HTMLInputElement>();

  //Problem: show number of time component render
  //it cause infinite loop
  //because whenever any state change, it will re-render the component
  // React.useEffect(() => {
  //   setRenderCount((prevRenderCount) => prevRenderCount + 1);
  // });

  React.useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  React.useEffect(() => {
    prevName.current = name;
  }, [name]);

  function focus() {
    inputRef.current.focus();
    //don't change the value by using useRef;
    //it is helpful in case of only reading data;
    //to change value always use state
    //do not append html using useRef;
    //inputRef.current.value = 'Some value';
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>

      <button onClick={focus}>Focus</button>
      {/* <div>I am render {renderCount}</div> */}
      <div>I am render {renderCount.current}</div>
    </div>
  );
}
