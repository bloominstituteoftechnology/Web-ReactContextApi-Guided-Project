import React from 'react';
import { StyledWidget as Div } from '../styled';

class UsesContextConsumer extends React.Component {
  render() {
    return (
      <Div color='red'>
        UsesContextConsumer <span className='bold'>{this.props.count.number}</span>
      </Div>
    );
  }
}

class UsesStaticContextType extends React.Component {
  render() {
    return (
      <Div color='blue'>
        UsesStaticContextType, <span className='bold'>{this.props.count.number}</span>
      </Div>
    );
  }
}

function FunctionUsingContextHook({ count }) {
  return (
    <Div color='green'>
      FunctionUsingContextHook, <span className='bold'>{count.number}</span>
    </Div>
  );
}

export default function Counter({ count }) {
  return (
    <Div color='yellow'>
      <div>This is the <span className='bold'>Counter</span> component.</div>
      <div>
        It renders three components that use
        the context API in different ways, to get the `count`
        straight from the top of the app
      </div>

      <UsesContextConsumer count={count} />
      <UsesStaticContextType count={count} />
      <FunctionUsingContextHook count={count} />
    </Div>
  );
}
