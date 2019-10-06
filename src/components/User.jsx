import React from 'react';
import { StyledWidget } from '../styled';

class UsesContextConsumer extends React.Component {
  render() {
    return (
      <StyledWidget color='orange'>
        UsesContextConsumer <span className='bold'>{this.props.name}</span>
      </StyledWidget>
    );
  }
}

class UsesStaticContextType extends React.Component {
  render() {
    return (
      <StyledWidget color='green'>
        UsesStaticContextType, <span className='bold'>{this.props.name}</span>
      </StyledWidget>
    );
  }
}

function FunctionUsingContextHook({ name }) {
  return (
    <StyledWidget color='turquoise'>
      FunctionUsingContextHook, <span className='bold'>{name}</span>
    </StyledWidget>
  );
}

export default function User({ name }) {
  return (
    <StyledWidget color='gold'>
      <div>This is the <span className='bold'>User</span> component.</div>
      <div>
        It renders three components that use
        the context API in different ways, to get the `name`
        of the fav user straight from the top of the app
      </div>

      <UsesContextConsumer name={name} />
      <UsesStaticContextType name={name} />
      <FunctionUsingContextHook name={name} />
    </StyledWidget>
  );
}
