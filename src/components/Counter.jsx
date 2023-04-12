import React from 'react';
import Card from './ui/card/Card';

function Counter() {
  return (
    <Card>
      <h2>Push ups</h2>
      <p className="value">0</p>
      <div className="control">
        <button>Up</button>
        <button>Down</button>
      </div>
    </Card>
  );
}

export default Counter;
