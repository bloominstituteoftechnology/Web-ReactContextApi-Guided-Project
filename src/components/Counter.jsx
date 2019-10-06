import React, { useContext } from 'react';
import countContext from '../contexts/countContext';
import './Counter.less';

class UsesContextConsumer extends React.Component {
  render() {
    return (
      <countContext.Consumer>
        {({ number }) => <div>UsesContextConsumer {number}</div>}
      </countContext.Consumer>
    );
  }
}

class UsesStaticContextType extends React.Component {
  render() {
    return (
      <div>
        UsesStaticContextType, {this.context.number}
      </div>
    );
  }
}
UsesStaticContextType.contextType = countContext;

function FunctionUsingContextHook() {
  const context = useContext(countContext);
  return (
    <div>
      <div>FunctionUsingContextHook, {context.number}</div>
    </div>
  );
}

export default function Counter() {
  return (
    <div>
      <UsesContextConsumer />
      <UsesStaticContextType />
      <FunctionUsingContextHook />
    </div>
  );
}
