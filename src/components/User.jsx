import React from 'react';
import { StyledWidget as Div } from '../styled';

class UsesContextConsumer extends React.Component {
  render() {
    return (
      <Div color='orange'>
        UsesContextConsumer <span className='bold'>{this.props.name}</span>
      </Div>
    );
  }
}

class UsesStaticContextType extends React.Component {
  render() {
    return (
      <Div color='green'>
        UsesStaticContextType, <span className='bold'>{this.props.name}</span>
      </Div>
    );
  }
}

function FunctionUsingContextHook({ name }) {
  return (
    <Div color='turquoise'>
      FunctionUsingContextHook, <span className='bold'>{name}</span>
    </Div>
  );
}

export default function User({ name }) {
  return (
    <Div color='gold'>
      <div>This is the <span className='bold'>User</span> component.</div>
      <div>
        It renders three components that use
        the context API in different ways, to get the `name`
        of the fav user straight from the top of the app
      </div>

      <UsesContextConsumer name={name} />
      <UsesStaticContextType name={name} />
      <FunctionUsingContextHook name={name} />
    </Div>
  );
}
