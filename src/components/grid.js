import React from 'react';

function Grid() {
  return (
    <div className="Grid">
      <h1>Grid</h1>
    </div>
  );
}

export default Grid;

// const cols = 10;
// const rows = 10;
// let resolution = 40;
// let grid;

// function make2DArray(cols, rows) {
//   let arr = new Array(cols);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(rows);
//   }
//   return arr;
// }

// function setup() {
//   grid = make2DArray(cols, rows);
//   cols = width / resolution;
//   rows = height / resolution;
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       grid[i][j] = floor(random(2));
//     }
//   }
// }

// function draw() {
//   background(0);
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//         x = i * resolution;
//         y = j * resolution;
//         if (grid[i][j] == 1) {
//             fill(255);
//             rect(x, y, resolution, resolution);
//         }
//     }
//   }
// }
