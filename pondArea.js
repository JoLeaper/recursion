const pondMap = [
  ['L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L'],
  ['L', 'W', 'W', 'W', 'L', 'W', 'L', 'L', 'L', 'L'],
  ['W', 'W', 'W', 'L', 'L', 'L', 'L', 'L', 'L', 'L'],
  ['L', 'L', 'L', 'W', 'W', 'W', 'L', 'L', 'L', 'L'],
  ['L', 'L', 'L', 'W', 'W', 'W', 'L', 'W', 'L', 'L'],
  ['L', 'W', 'L', 'L', 'W', 'L', 'L', 'W', 'W', 'L'],
  ['L', 'W', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L'],
  ['L', 'L', 'W', 'L', 'L', 'L', 'L', 'L', 'L', 'L']
  ];
  
  const findPondArea = (map, column, row) => {
    // step 1: make sure all the inputs are going in
    console.log(map, column, row);
  
    // step 2: pinpoint the starting location
    console.log(map[row][column])
  
    // step 3: define variables you need
  
    // the starting coordinates
    let startingColumn = column;
    let startingRow = row;
    // the value at the starting coordinates
    let startingValue = map[row][column];
  
    // a value to signal that the value has been counted toward the area
    let countedValue = 'C';
    let area = 0;
    
    function calcArea(map, row, column, startingValue, countedValue) {
      if(!map[row][column] || map[row][column] === 'L' || map[row][column] === 'C') {
        return;
      }

      area++;
      map[row][column] = countedValue;

      // determinnes vertical movement
      calcArea(map, row - 1, column, startingValue, countedValue)
      calcArea(map, row + 1, column, startingValue, countedValue)

      // determinves horizontal movement
      calcArea(map, row, column + 1, startingValue, countedValue)
      calcArea(map, row, column - 1, startingValue, countedValue)
    }

    calcArea(map, startingRow, startingColumn, startingValue, countedValue)
    console.log(map);
    return area;
  }
  
  findPondArea(pondMap, 3, 1)
