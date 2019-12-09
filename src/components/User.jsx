import React from 'react';
import { StyledWidget as Div } from '../styled';

class UsesContextConsumer extends React.Component {
  render() {
    return (
      <Div color='orange'>
        UsesContextConsumer, <span className='bold'>{this.props.user.name}</span>
      </Div>
    );
  }
}

class UsesStaticContextType extends React.Component {
  render() {
    return (
      <Div color='green'>
        UsesStaticContextType, <span className='bold'>{this.props.user.name}</span>
      </Div>
    );
  }
}

function FunctionUsingContextHook({ user }) {
  return (
    <Div color='turquoise'>
      FunctionUsingContextHook, <span className='bold'>{user.name}</span>
    </Div>
  );
}

export default function User({ user }) {
  return (
    <Div color='gold'>
      <div>This is the <span className='bold'>UserIntermediate</span> component.</div>
      <div>
        It renders three components that use
        the context API in different ways, to get the fav `user`
        straight from the top of the app
      </div>

      <UsesContextConsumer user={user} />
      <UsesStaticContextType user={user} />
      <FunctionUsingContextHook user={user} />
    </Div>
  );
}
