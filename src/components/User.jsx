import React, { useContext } from 'react';
import userContext from '../contexts/userContext';
import { StyledWidget } from '../styled';

class UsesContextConsumer extends React.Component {
  render() {
    return (
      <userContext.Consumer>
        {name => (
          <StyledWidget color='orange'>
            UsesContextConsumer {name}
          </StyledWidget>
        )}
      </userContext.Consumer>
    );
  }
}

class UsesStaticContextType extends React.Component {
  render() {
    return (
      <StyledWidget color='green'>
        UsesStaticContextType, {this.context}
      </StyledWidget>
    );
  }
}
UsesStaticContextType.contextType = userContext;

function FunctionUsingContextHook() {
  const context = useContext(userContext);
  return (
    <StyledWidget color='turquoise'>
      FunctionUsingContextHook, {context}
    </StyledWidget>
  );
}

export default function Counter() {
  return (
    <StyledWidget color='gold'>
      <div>This is the User component.</div>
      <div>
        It renders three components that use
        the context API in different ways, to get the `name`
        of the fav user straight from the top of the app
      </div>

      <UsesContextConsumer />
      <UsesStaticContextType />
      <FunctionUsingContextHook />
    </StyledWidget>
  );
}
