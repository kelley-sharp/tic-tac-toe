# Tic Tac Toe

This is my React version of the game "Tic Tac Toe"! I really enjoyed making this classic. It can be ended and restarted at any time. Players, X and O, alternate turns until either a player wins by making three marks in a line, or it's a "scratch" (the board is filled, but neither player wins).

## Design choices

- I used [create-react-app](https://github.com/facebook/create-react-app) as a starter kit for this project.

- In keeping with React's "downward data flow" principle, I concentrated most of the state and business logic in the root App component and passed down the necessary props to child components. The two children, the Board and Square components, are pure components because they have no state and we can get some easy performance gains from that.

- Helper functions like `didWin` and `processTurn` were brought in to make the code more concise, readable, and testable.

- The board is represented as a 2-dimensional array - it seemed a logical choice; the data structure maps nicely to the grid layout. An array is technically slower to loop through than say an object representation, but because N is fixed at 3 in this case (the 3x3 grid), I reasoned that the 0(n^2) time complexity was technically constant. Also, because I was storing an array in state, I made a deep copy of the board so that unwanted mutations would be prevented (i.e. I tried to keep state immutable outside of calls to `setState`).

- I used flexbox to style the board, and across the app in general. It made centering easy, and the app more responsive.

- I did smoke tests and snapshot tests for the UI components and more advanced unit tests for the helper functions. This is typically how I approach testing.

## Install and Start the App

```sh
npm install && npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing

```sh
npm test -- -- watch
```

Launches the test runner (Jest) in the interactive watch mode.

Press `q` to quit.
