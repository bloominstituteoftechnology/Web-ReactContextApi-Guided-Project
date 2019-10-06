import React, { useContext } from 'react';
import userContext from '../contexts/userContext';
import './Container.less';

class UsesContextConsumer extends React.Component {
  render() {
    return (
      <userContext.Consumer>
        {({ number }) => <div>UsesContextConsumer {number}</div>}
      </userContext.Consumer>
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
UsesStaticContextType.contextType = userContext;

function FunctionUsingContextHook() {
  const context = useContext(userContext);
  return (
    <div>
      <div>FunctionUsingContextHook, {context.number}</div>
    </div>
  );
}

export default function Container() {
  return (
    <div>
      <UsesContextConsumer />
      <UsesStaticContextType />
      <FunctionUsingContextHook />
    </div>
  );
}
