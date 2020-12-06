import React from 'react';
// import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
  age?: number;
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <>
      {/* <Counter /> */}
      <CounterWithReducer />
    </>);
};

App.defaultProps = {
  message: "Hello defaultProps",
  age: 1234
}

export default App;
