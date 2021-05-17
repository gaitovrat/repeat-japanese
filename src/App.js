import { useSelector } from 'react-redux';

function App() {
  const msg = useSelector((state) => state.msg);

  return (
    <div className="app">{ msg }</div>
  );
}

export default App;
