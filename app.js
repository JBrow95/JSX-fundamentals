// imports should be here

const myNav = (
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
);

ReactDOM.render(
    myNav,
    document.getElementById('app')
);


ReactDOM.render(
    <div>
        <h1>Without a var</h1>
    </div>,
    document.getElementById('app')
);

// giving jsx class names is different than Html.

const myDiv = (
	<div className="big">
  	I AM A BIG DIV
  </div>
);

ReactDOM.render(
	myDiv,
  document.getElementById('app')
);


// adding Javascript inside of JSX elements

ReactDOM.render( 
    <h1>{2 + 3}</h1>, // This will print out 5 on the webpage
    document.getElementById('app') 
  );