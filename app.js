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