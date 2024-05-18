var squidArr = [
  //           5        10        15        20
      [4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,4],
      [2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2],
      [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,2],
      [2,0,2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,2],
      [2,0,0,0,3,3,1,1,2,0,0,0,3,3,1,1,0,0,0,2], // 5
      [0,0,0,0,3,3,1,1,0,0,0,0,3,3,1,1,0,0,0,0],
      [0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0],
      [0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0],
      [0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0],
      [2,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,2], // 10
      [2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2],
      [2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2],
      [4,2,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,2,4],
      [4,4,4,2,0,0,2,0,0,0,0,0,0,2,0,0,2,4,4,4],
      [4,4,2,0,0,0,2,0,0,0,0,0,0,2,0,0,0,2,4,4], // 15
      [4,2,0,0,2,2,2,0,0,0,0,0,0,2,2,2,0,0,2,4],
      [4,2,0,2,0,0,2,0,0,0,0,0,0,2,0,0,2,0,2,4],
      [4,2,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,2,4],
      [4,2,0,2,2,2,0,0,2,2,2,2,0,0,2,2,2,0,2,4],
      [4,4,2,4,4,4,2,0,0,0,0,0,0,2,4,4,4,2,4,4], // 20
];
var patArr = [
  [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [1, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 1, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 1, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2,2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2,2 ,1, 1, 1,0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 1, 2, 2, 2, 2, 2, 2, 2, 1,1,1, 1, 1, 1,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2,2 ,2, 2, 2, 2,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 1, 2, 2, 2, 2, 2, 2, 2,2 ,2, 2, 2,2 ], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 2, 2, 2, 1, 1,1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 4, 4, 1, 2, 1, 1, 2, 2, 2, 2, 2,2 ,2, 2, 2, 2,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 2, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 4, 4, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2,2 ,2, 2,2,2 ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 4, 4, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2,2 ,2, 2, 2, 2,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 2, 2,1, 3, 1, 2, 2, 2, 2, 2,2 ,2, 2, 2,2, ], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2,2 ,2, 2, 2, 2,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 1, 1, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2,2 ,2, 2, 2, 2,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 4, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 3, 3, 1, 2, 2, 2, 2, 2,2 ,2, 2, 2, 2,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 0, 0, 0, 1, 1, 1, 1, 4, 4, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 3, 1, 2, 2, 2, 2, 2, 2,2,2,2,2,2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 1, 0, 0, 1, 1, 1, 4, 4, 4, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2,2 ,2, 2, 2, 2,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 1, 1, 1, 1, 4,4, 4, 4, 1, 2, 2, 2, 2, 2, 2, 2,1, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2,2 ,2, 2, 2, 2], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 1, 4, 4, 4, 4, 4, 1, 2, 2, 2, 2, 2, 2, 1, 1, 3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2,2 ,2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 3, 3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 1, 3, 3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 2, 1, 1, 3, 3, 3, 3, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1,2, 1, 1, 1, 3, 3, 3, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2,2,2,2,2,2,2,2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 1,2, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2,1,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2,2,1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];
var bunArr = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1, 1, 1, 1, 1, 1, 1],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ,3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ,3, 3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ,2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ,2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ,2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0],
]; 
let pattyArr = [
  ["money","money","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","money","money"],
  ["money","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","money"],
  ["krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby"],
  ["krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby"],
  ["krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby"], 
  ["krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby"],
  ["krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby"],
  ["lettuce","lettuce","lettuce","lettuce","lettuce","lettuce","lettuce","lettuce","lettuce","lettuce","lettuce","lettuce","lettuce","lettuce","lettuce","lettuce"],
  ["lettuce","cheese","cheese","lettuce","cheese","cheese","lettuce","lettuce","lettuce","cheese","cheese","lettuce","cheese","cheese","lettuce","lettuce"],
  ["cheese","cheese","cheese","cheese","cheese","cheese","cheese","cheese","cheese","cheese","cheese","cheese","cheese","cheese","cheese","cheese"],
  ["patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty"],
  ["patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty"],
  ["patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty"],
  ["patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty","patty"],
  ["krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby"],
  ["krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby"],
  ["krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby"],
  ["krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby","krabby"],
];
let images =[];
function preload()  {

       font1 = loadFont('assets/taller.ttf');
       images[0] = loadImage('assets/krabbypatty.png');
       images[1] = loadImage('assets/pineapple.jpg');
       images[2] = loadImage('assets/fish.png');
       images[3] = loadImage('assets/jellyfish.webp');

}
var a = 0;
function setup() {

  createCanvas(1000, 1000);

  background(120);

  textFont(font1);
  textSize(64);
  // big Patty
  mapToTextPatty(pattyArr, 0, 0, 0, 6, 25);
  // normal squid
  mapToPixelSquid(squidArr, 30, 200, -45, 1, 255);
  // Image squid overlayed over the previous normal squid
  mapToImgs(squidArr, images, 28, 198, -45, 1, 255);
  // A transparent squid on the bottom of the screen
  mapToPixelSquid(squidArr, 300, 700, 0, 3, 255);
  // image squid
  mapToImgs(squidArr, images, 850, 100, 45, .8);
  // small patty
  mapToCirclePatty(pattyArr, 100, 500, -30, 1, 150);
  // more pattys surrounding squidward
  mapToCirclePatty(pattyArr, 500, 500, 0, .5, 100);
  mapToCirclePatty(pattyArr, 700, 500, 0, .5, 100);
  mapToCirclePatty(pattyArr, 900, 500, 0, .5, 100);
}
function mapToPixelSquid(arr,lx,ly,rot,sc, fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        a = arr[i][j];
        if (a === 0) {
          // Base Blue
          fill(187,223,209);
        } else if(a == 1) {
          // Eye Color
          fill(253,240,188);
        } else if(a == 2) {
          // Darker Blue
          fill(144,191,173);
        } else if(a == 3) {
          // Pupil
          fill(173,144,44);
        } else if(a == 4) {
          // Background
          fill(255, 255, 255);
        }
        rect((j * 15), (i * 15), 20, 20);
    }
}
  pop();

}
function mapToImgs(arr,imgarr,lx,ly,rot,sc) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  let nuimg;
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
              let value = arr[i][j];
              if ( value == 0 ) {
              nuimg = imgarr[0];
              } else if ( value == 1 ){
              nuimg = imgarr[2];
              } else if ( value == 2 ) {
              nuimg = imgarr[1];
              } else {
              nuimg = imgarr[3];
              }
          image(nuimg, j * 15, i * 15, 15, 15);
      }
  }
  pop();
}
function mapToTextPatty(arr,lx,ly,rot,sc,fade, cols) {
  textSize(15);
  textAlign(CENTER);
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == "krabby" ) {
                fill(231,181,82, fade);
            } else if ( value == "lettuce" ){
                fill(120,254,56, fade);
            } else if( value == "patty") {
                fill(150,31,33, fade);
            } else if( value == "cheese") {
              fill(255, 239, 8, fade);
            } else {
              value = "money";
              fill(255, 255, 255, fade);
            }
             text(value, j * 15, i * 15);
      }
  }
  pop();
}
function mapToCirclePatty(arr,lx,ly,rot,sc,fade, cols) {
  textSize(15);
  noStroke();
  textAlign(CENTER);
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == "krabby" ) {
                fill(231,181,82, fade);
            } else if ( value == "lettuce" ){
                fill(120,254,56, fade);
            } else if( value == "patty") {
                fill(150,31,33, fade);
            } else if( value == "cheese") {
              fill(255, 239, 8, fade);
            } else {
              value = "money";
              fill(255, 255, 255, fade);
            }
             ellipse(j * 15, i * 15, 15);
      }
  }
  pop();
}
    