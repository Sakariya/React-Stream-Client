import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      PageOne
      {/* BAD!! to use href */}
      <a href='/pageTwo'>
        Navigate to Page Two
      </a><br/>
      <Link to="/pageTwo">
      Navigate to Page Two
      </Link>
    </div>
  );
}

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
      <Link to="/">
      Navigate to Page One
      </Link>
    </div>
  )
}

const App = () => {
  return (
    <div>
      App....
      <BrowserRouter>
        <div>
          <Route path='/' exact component={PageOne} />
          <Route path='/PageTwo' exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;
