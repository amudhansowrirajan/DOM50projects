# 50 PROJECTS IN 50 DAYS

## Project Setup

We set the direction of the flex box as column and used flex because we will be working in specific block/chunks so we want them centered. We use align item to center everything horizontally (column) and justify content to center everything vertically.

```css
* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  display: flex;
  /* stops the flex from adding elements in a row */
  flex-direction: column;
  /* centers it horizontally */
  align-items: center;
  /* centers it verticall in the screen */
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}
```

## DAY 1: EXPANDING CARDS
