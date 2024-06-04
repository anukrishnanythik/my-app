import "./App.css";

function App() {
  const name = "anu";
  const a = 3;
  const b = 4;
  const fnname = () => {
    return "good morning";
  };
  return (
    // <div className="App">
    //   <h1 className="heading">hello</h1>
    //   <h1>my name is {name}</h1>
    //   <h1>{a + b}</h1>
    //   <h1>3+4</h1>
    //   <h1>{3+4}</h1>
    //   <h2>{fnname()}</h2>
    // </div>

    // React fragment
    <>
      <h1 className="heading">hello</h1>
      <h1>my name is {name}</h1>
      <h1>{a + b}</h1>
      <h1>3+4</h1>
      <h1>{3 + 4}</h1>
      <h2>{fnname()}</h2>

    
      <table>
        <Row />
        <Column />
      </table>

    </>
  );
}


function Row() {
  return (
    <>
      <tr>
        <th>element1</th>
        <th>element2</th>
        <th>element3</th>
      </tr>
    </>
  );
}

function Column() {
  return (
    <>
      <tr>
        <td>mobile</td>
        <td>lap</td>
        <td>tab</td>
      </tr>
    </>
  );
}

export default App;

