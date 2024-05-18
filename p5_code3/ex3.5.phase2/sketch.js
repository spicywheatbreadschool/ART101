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
let rc_griddar = [ 
  // 20 x 26
  [11, 11, 11, 11, 11, 11, 11, 11, 3, 3, 3, 11, 11, 11, 11, 11, 11, 11, 11, 11], // 1
  [11, 11, 11, 11, 11, 11, 11, 3, 14, 14, 14, 3, 11, 11, 11, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 11, 11, 3, 14, 14, 14, 3, 11, 11, 11, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 11, 11, 3, 14, 14, 14, 3, 3, 11, 11, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 11, 11, 3, 5, 14, 14, 3, 5, 11, 11, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 11, 3, 4, 4, 4, 3, 4, 4, 4, 11, 11, 11, 11, 11, 11], // 5
  [11, 11, 11, 11, 11, 11, 5, 4, 15, 4, 5, 4, 15, 4, 5, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 11, 5, 4, 4, 4, 5, 4, 4, 4, 5, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 11, 3 , 5, 5, 5, 14, 5, 5, 5, 11, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 11, 3, 14, 14, 14, 14, 14, 14, 14, 11, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 11, 3, 14, 6, 6, 6, 6, 14, 3, 11, 11, 11, 11, 11, 11], // 10
  [11, 11, 11, 11, 11, 11, 14, 14, 6, 6, 6, 6, 14, 14, 3, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 3, 3, 7, 7, 6, 6, 6, 6, 14, 3, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 3, 3, 7, 7, 7, 7, 6, 6, 14, 3, 11, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 3, 14, 8, 8, 8, 8, 6, 6, 6, 3, 14, 11, 11, 11, 11],
  [11, 11, 11, 11, 11, 3, 14, 8, 8, 8, 8, 6, 6, 6, 14, 14, 11, 11, 11, 11],
  [11, 11, 11, 11, 3, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 11, 11, 11, 11],
  [11, 11, 11, 11, 3, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 3, 11, 11, 11, 11],
  [11, 11, 11, 11, 3, 14, 3, 14, 14, 14, 13, 13, 13, 13, 13, 13, 12, 11, 11, 11],
  [11, 11, 11, 3, 14, 14, 3, 14, 13, 13, 10, 10, 10, 10, 12, 12, 12, 11, 11, 11],
  [11, 11, 11, 3, 14, 3, 13, 13, 12, 12, 12, 10, 10, 10, 12, 12, 12, 12, 11, 11], // 20
  [11, 11, 11, 3, 3, 13, 12, 12, 12, 12, 12, 10, 10, 10, 12, 12, 12, 12, 11, 11],
  [11, 11, 11, 11, 13, 12, 12, 12, 12, 12, 13, 13, 13, 13, 12, 12, 13, 14, 11, 11],
  [11, 11, 11, 11, 13, 12, 12, 12, 12, 12, 12, 13, 13, 12, 12, 13, 14, 14, 14, 11],
  [11, 11, 11, 11, 11, 13, 12, 12, 12, 10, 10, 12, 14, 13, 14, 14, 14, 14, 14, 14],
  [11, 11, 11, 11, 11, 11, 13, 3, 10, 10, 10, 14, 14, 14, 11, 14, 14, 14, 14, 14],
  [11, 11, 11, 11, 11, 11, 11, 13, 13, 12, 14, 14, 14, 14, 14, 11, 14, 14, 14, 11],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 14, 14, 14, 14, 14, 11, 11, 11, 11, 11], // 26
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
function patrick(arr,lx,ly,rot,sc, fade) {
  push();
  noStroke();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < rc_griddar.length; i++) {
      for (var j = 0; j < rc_griddar.length; j++) {
          a = rc_griddar[i][j];
          if (a === 1) {
              fill(244, 0, 0); // 
          } else if (a === 2) {
                  fill(201, 139, 136); // outline
          } else if  (a === 3) {
              fill(201, 139, 136); // pink; skin // (244, 146, 141, 60);
          } else if  (a === 4){
                  fill (255, 255, 255); // white
          } else if  (a === 5) {
                  fill (209, 208, 209); // grey pupil
          } else if  (a === 6) {
                  fill (108, 3, 7); // red inner mouth 108, 3, 7
          } else if  (a === 7) {
                  fill (64, 0, 0); // dark red
          } else if  (a === 8) {
                  fill (216, 1, 52); // tongue
          } else if  (a === 9) {
                  fill (205, 174, 174); //undereye
          } else if  (a === 10) {
                  fill (214, 45, 219); // red violet flowers
          } else if  (a === 11) {
                  fill (0, 0, 0, 80); // teal bg
          } else if  (a === 12) {
                  fill (129, 217, 87); // green- 129, 217, 87
          } else if  (a === 13) {
                  fill (117, 124, 70); // dark green pants
          } else if  (a === 14) {
                  fill (244, 146, 141); // baby pink skin
          } else if  (a === 15) {
                  fill (170, 169, 170); // grey

          }  else {
                  fill(0, 0,0); // teal

          }
          // shapes and outline
          noStroke();
          rect((j * 20) + 5, (i * 20) + 10, 20, 20);
      }
  }
  pop();

}
// Rachel's
let rc_pafish = [
  // 27 x 26
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 1
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 3, 6, 6, 3, 4, 4, 4, 4, 4, 4, 4, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 3, 6, 6, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 3, 6, 6, 6, 3, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 3, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 3, 6, 6, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 3, 6, 6, 3, 4, 4, 4, 4, 3, 9, 3, 9, 9, 3, 9, 3, 9, 3, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 3, 6, 6, 3, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 6, 6, 3, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 6, 6, 3, 4, 4, 4, 4, 4, 4, 6, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 6, 6, 3, 4, 4, 4, 4, 4, 4, 3, 6, 6, 6, 6, 6, 6, 6, 2, 9, 9, 9, 2, 2, 2, 2],
  [2, 3, 6, 6, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 2, 2, 9, 9, 2, 2, 2],
  [2, 2, 3, 6, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 2, 2, 9, 9, 2, 2, 2],
  [2, 2, 3, 6, 3, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 3, 2, 2, 2, 2, 9, 9, 2, 2, 2],
  [2, 3, 6, 6, 3, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 3, 2, 2, 2, 2, 9, 9, 2, 2, 2],
  [2, 3, 6, 3, 4, 4, 4, 4, 8, 4, 4, 4, 6, 6, 6, 6, 6, 3, 2, 2, 2, 9, 9, 9, 2, 2, 2],
  [2, 3, 6, 3, 4, 4, 8, 8, 8, 4, 4, 6, 6, 6, 6, 6, 6, 3, 3, 2, 9, 9, 9, 9, 9, 2, 2],
  [2, 3, 6, 3, 4, 4, 8, 4, 8, 4, 4, 6, 6, 6, 6, 6, 6, 4, 4, 3, 9, 9, 9, 9, 9, 2, 2],
  [2, 3, 6, 4, 4, 4, 8, 4, 8, 4, 6, 6, 6, 6, 6, 6, 6, 3, 4, 4, 10, 10, 10, 10, 10, 2, 2],
  [2, 2, 3, 4, 4, 8, 4, 4, 8, 4, 6, 6, 6, 6, 6, 6, 6, 3, 3, 4, 10, 10, 10, 10, 10, 2, 2],
  [2, 2, 3, 4, 4, 8, 4, 8, 4, 4, 6, 6, 6, 6, 6, 6, 6, 3, 2, 3, 10, 10, 10, 8, 8, 2, 2],
  [2, 2, 3, 4, 4, 8, 4, 8, 4, 4, 6, 6, 6, 6, 6, 6, 6, 3, 2, 2, 10, 10, 8, 4, 4, 8, 2],
  [2, 2, 3, 4, 8, 4, 4, 8, 4, 4, 6, 6, 6, 6, 6, 6, 6, 3, 2, 2, 10, 10, 8, 4, 4, 8, 2],
  [2, 2, 3, 8, 4, 4, 4, 8, 4, 4, 6, 6, 6, 6, 6, 6, 6, 3, 2, 2, 10, 10, 8, 4, 4, 8, 2],
  [2, 2, 8, 4, 4, 4, 4, 8, 4, 6, 6, 6, 6, 6, 6, 6, 6, 3, 2, 2, 10, 10, 10, 8, 8, 2, 2], // 26
];
function soda(arr,lx,ly,rot,sc, fade) {
  push();
  noStroke();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < rc_pafish.length; i++) {
      for (var j = 0; j < rc_pafish.length; j++) {
          a = rc_pafish[i][j];
          if (a === 1) {
              fill(244, 0, 0); // 
          } else if (a === 2) {
                  fill(0,0,0,10); // start
          } else if  (a === 3) {
              fill(0, 80, 255 ); // outline
          } else if  (a === 4){
                  fill (255, 255, 15); // yellow
          } else if  (a === 5) {
                  fill (209, 208, 209); // grey pupil
          } else if  (a === 6) {
                  fill (122, 111, 255); // purp belly
          } else if  (a === 7) {
                  fill (64, 0, 0); // ???
          } else if  (a === 8) {
                  fill (156, 74,0); // tongue
          } else if  (a === 9) {
                  fill (255,255,255); // white
          } else if  (a === 10) {
                      fill (237, 133, 183); // pink
          }  else {
                  fill(0,0,0,0);

          }
          // Draw the rectangles
          noStroke();
          rect((j * 20) + 5, (i * 20) + 10, 20, 20);
      }
  }
  pop();

}
// End of rachels
let images =[];
let images2 = [];
function preload()  {

       font1 = loadFont('assets/taller.ttf');
       font2 = loadFont('assets/krabbypatty.ttf');
       images[0] = loadImage('assets/krabbypatty.png');
       images[1] = loadImage('assets/pineapple.jpg');
       images[2] = loadImage('assets/fish.png');
       images[3] = loadImage('assets/jellyfish.webp');
       images2[0] = loadImage('assets/squiddey.jpeg');
       images2[1] = loadImage('assets/chum.jpg');
       images2[2] = loadImage('assets/smile.png');
       images2[3] = loadImage('assets/hotdog.jpeg');

}
var a = 0;
let currentPage = 0;
function setup() {
  createCanvas(800,800);
  textFont(font2);
  textSize(25);
}
function draw() {
  if(currentPage == 0) {
    background(191, 219, 255)
    push();    

    fill(0);
    textSize(25);
    text ("My groups members were Janine, Rachel, and Evelyn",50 ,100, 800 );
    text ("We like Spongebob!", 50,200,800 );

    mapToPixelSquid(squidArr, 300, 200, 0, 1.5, 255);
    pop();

  } else if(currentPage == 1) {
    background(178, 235, 199);
    push()

    fill(0);
    textFont(font2);
    text ("Here are my bitmaps, say hello to Squidward\nand his favorite burger =)",50 ,100, 800 );

    mapToPixelSquid(squidArr, 50, 300, 55, 1, 255);
    rotate(radians(55));
    text("Who said I like Krabby Patties?!", 350, 120);
    rotate(radians(-55));

    mapToTextPatty(pattyArr, 500, 400, 0, 1, 255);

    pop();
  } else if(currentPage == 2) {
    background(248, 255, 199);
    push();

    mapToCirclePatty(pattyArr, 705, 705, 180, 10, 122);
    fill(0);
    textSize(25);
    text ("That wasn't an ordinary krabby patty!!",50 ,50, 800 );
    mapToImgs(squidArr, images, 600, 600, 195, 1.5);
    text("Oh my god Spongebob what did\n you put in this", 450, 100, 800);
    soda(squidArr, 50, 650, 0, .25, 255);
    text("Do you mind? I'm trying to order.", 80, 650, 800);
  } else if(currentPage == 3) {
    background(245, 203, 227);

    fill(0);
    textSize(25);
    mapToCircleSquid(squidArr, 100, 100, 15, .8, 155);
    text("Patrick why do you even have that", 300, 100, 800);

    patrick(squidArr, 400, 400, 0, 1, 255);
    text ("Squidward, that was my \nmapToImages patty!!",400 ,350, 800 );
  } else if(currentPage == 4) {
    background(245, 209, 176);
    fill(0);
    textSize(25);
    text("here's what you ordered!", 50, 50, 800);
    mapToTextPatty2(pattyArr, 500, 200, 50, 1,255);
    mapToImgs(squidArr, images2, 50, 600, -20, 1, 255);
    text("I feel sick.", 100, 500, 800);
  }
}

function keyPressed() { 

  console.log(key);
  if ( key == '1' ) { 
    console.log("Page 1");
    currentPage = 1;
  } else if ( key == '2' ) { 
      console.log("Page 2");
      currentPage = 2;
  } else if ( key == '3' ) { 
      console.log("Page 3");
      currentPage = 3;   
  } else if( key == '4') {
    currentPage = 4; 
  } else {
      currentPage = 0;
  }
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
        rect((j * 22) + 15, (i * 22) + 15, 20, 20);
    }
}
  pop();

}
function mapToCircleSquid(arr,lx,ly,rot,sc, fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        a = arr[i][j];
        if (a === 0) {
          fill(189, 94, 148);
        } else if(a == 1) {
          fill(102, 106, 148);
        } else if(a == 2) {
          // Darker Blue
          fill(144,191,173);
        } else if(a == 3) {
          // Pupil
          fill(173,144,44);
        } else if(a == 4) {
          // Background
          fill(158, 219, 210);
        }
        ellipse((j * 22) + 15, (i * 22) + 15, 20, 20);
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
          image(nuimg, j * 12, i * 12, 14, 14);
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
  textFont(font1);
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == "krabby" ) {
                fill(237, 149, 26, fade);
            } else if ( value == "lettuce" ){
                fill(63, 227, 14, fade);
            } else if( value == "patty") {
                fill(150, 11, 34, fade);
            } else if( value == "cheese") {
              fill(234, 237, 24, fade);
            } else {
              value = "money";
              fill(255, 255, 255, fade);
            }
             text(value, j * 15, i * 15);
      }
  }
  pop();
}
function mapToTextPatty2(arr,lx,ly,rot,sc,fade, cols) {
  push();
  textSize(15);
  textAlign(CENTER);
  textFont(font2);
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
             text(value, j * 20, i * 20);
      }
  }
  pop();
}
function mapToCirclePatty(arr,lx,ly,rot,sc,fade, cols) {
  push();

  textSize(15);
  noStroke();
  textAlign(CENTER);
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

    