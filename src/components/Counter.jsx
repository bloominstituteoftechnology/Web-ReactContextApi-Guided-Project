import React from 'react';
import { StyledWidget as Div } from '../styled';
import countContext from '../contexts/countContext';

// this works with both class & functional components
// 1- import context at the top
// 2- use the countContext.Consumer in the jsx
// 3- inside the consumer, put a function of "context" that
//         returns the desired jsx
// 4- use the context inside the jsx, instead of props!!!
function Output({ count }) {
  return (
    <Div color='red'>
      UsesContextConsumer, <span className='bold'>{count.number}</span>
    </Div>
  );
}

class UsesContextConsumer extends React.Component {
  render() {
    return (
      <countContext.Consumer>
        {
          (count) => (
            <Output count={count} />
          )
        }
      </countContext.Consumer>
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
      <div>This is the <span className='bold'>CounterIntermediate</span> component.</div>
      <div>
        It does not use the `count` object itself, but
        it renders three components that will use the
        context API in different ways, to get the `count` object
        straight from the top of the app
      </div>

      <UsesContextConsumer />
      <UsesStaticContextType count={count} />
      <FunctionUsingContextHook count={count} />
    </Div>
  );
}
