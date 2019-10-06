import React, { useContext } from 'react';
import countContext from '../contexts/countContext';
import { StyledWidget } from '../styled';


class UsesContextConsumer extends React.Component {
  render() {
    return (
      <countContext.Consumer>
        {({ number }) => <StyledWidget color='red'>UsesContextConsumer {number}</StyledWidget>}
      </countContext.Consumer>
    );
  }
}

class UsesStaticContextType extends React.Component {
  render() {
    return (
      <StyledWidget color='blue'>
        UsesStaticContextType, {this.context.number}
      </StyledWidget>
    );
  }
}
UsesStaticContextType.contextType = countContext;

function FunctionUsingContextHook() {
  const context = useContext(countContext);
  return (
    <StyledWidget color='green'>FunctionUsingContextHook, {context.number}</StyledWidget>
  );
}

export default function Counter() {
  return (
    <StyledWidget color='yellow'>
      <div>This is the Counter component.</div>
      <div>
        It renders three components that use
        the context API in different ways, to get the `count`
        straight from the top of the app
      </div>
      <UsesContextConsumer />
      <UsesStaticContextType />
      <FunctionUsingContextHook />
    </StyledWidget>
  );
}
