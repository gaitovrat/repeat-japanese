import { useSelector } from 'react-redux';

function App() {
  const hiragana = useSelector((state) => state.hiragana);

  return (
    <div className="app">{ hiragana[0].kana }</div>
  );
}

export default App;
