import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);

  const dispatch = useDispatch();

  console.log(counter);

  return (
    <div className="App">
      <h1>hellow redux</h1>
      <h3>カウント: {counter} </h3>

      {isLogin ? <h3>ログインに成功</h3> : <h3>ログインに失敗</h3>}

      <button onClick={() => dispatch(increment(7))}>増やす</button>
      <button onClick={() => dispatch(decrement())}>減らす</button>
      <button onClick={() => dispatch(login())}>ユーザーステイト</button>
    </div>
  );
}

export default App;
