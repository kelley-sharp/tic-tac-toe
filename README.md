# Tic Tac Toe

## Description

This is the game "tic tac toe"! It can be ended and restarted at any time. Players, X and O, alternate turns until either a player wins by making three marks in a line, or it's a "scratch" (the board is filled, but niether player wins).

## Design choices

I built the interface with Create-React-App. Concerns are intuitively separated by various pieces of the app via atomic design. For example, the grid is a Board component which is made up of smaller Square components, similar to how molecules are to atoms.

I concentrated most of the functions and business logic in the App component and passed down the necessary props to children components from there, bringing in helper functions to keep code concise/readable.

The board is represented as a 2d array. It seemed a logical choice and the data structure maps nicely to the layout. An array is technically slower to loop through than say an object representation, but because n is always 3 (3x3 grid), I figured the 0(n^2) was pretty trivial. Storing as an array in state, I had to be careful to make a deep copy to prevent mutations.

I used flexbox to build the board. I like Flexbox! It makes centering easy, and the app is inherently responsive.

## Installation

```bash
npm install
```

## Testing

```bash
npm test -- -- watch
```

Launches the test runner in the interactive watch mode.<br>
See the CRA section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Run the Server

```bash
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
