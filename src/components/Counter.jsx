import React from 'react';
import { StyledWidget } from '../styled';

class UsesContextConsumer extends React.Component {
  render() {
    return (
      <StyledWidget color='red'>
        UsesContextConsumer <span className='bold'>{this.props.count.number}</span>
      </StyledWidget>
    );
  }
}

class UsesStaticContextType extends React.Component {
  render() {
    return (
      <StyledWidget color='blue'>
        UsesStaticContextType, <span className='bold'>{this.props.count.number}</span>
      </StyledWidget>
    );
  }
}

function FunctionUsingContextHook({ count }) {
  return (
    <StyledWidget color='green'>
      FunctionUsingContextHook, <span className='bold'>{count.number}</span>
    </StyledWidget>
  );
}

export default function Counter({ count }) {
  return (
    <StyledWidget color='yellow'>
      <div>This is the <span className='bold'>Counter</span> component.</div>
      <div>
        It renders three components that use
        the context API in different ways, to get the `count`
        straight from the top of the app
      </div>

      <UsesContextConsumer count={count} />
      <UsesStaticContextType count={count} />
      <FunctionUsingContextHook count={count} />
    </StyledWidget>
  );
}
