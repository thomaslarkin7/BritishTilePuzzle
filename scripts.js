let count = 0;
function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }
  
  function shuffle() {
  //Use nested loops to access each cell of the 3x3 grid
  for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
     for (var column=1;column<=3;column++) { //For each column in this row
    
      var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
      var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
       
      swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
      count = 0;
      document.getElementById("clickerCount").innerHTML = "Counter: 0";
    } 
  } 
  }
  

  //Write a function to change the image tile being used
  function changeImage(clicked_id){
    let para1 = document.getElementById('p1');
    let para2 = document.getElementById('p2');
    let para3 = document.getElementById('p3');
    let para4 = document.getElementById('p4');
    let para5 = document.getElementById('p5');
    let para6 = document.getElementById('p6');
    let para7 = document.getElementById('p7');
    para1.style.display = "none";
    para2.style.display = "none";
    para3.style.display = "none";
    para4.style.display = "none";
    para5.style.display = "none";
    para6.style.display = "none";
    para7.style.display = "none";

    let head1 = document.getElementById('h1');
    let head2 = document.getElementById('h2');
    let head3 = document.getElementById('h3');
    let head4 = document.getElementById('h4');
    let head5 = document.getElementById('h5');
    let head6 = document.getElementById('h6');
    let head7 = document.getElementById('h7');
    head1.style.display = "none";
    head2.style.display = "none";
    head3.style.display = "none";
    head4.style.display = "none";
    head5.style.display = "none";
    head6.style.display = "none";
    head7.style.display = "none";

    let ref1 = document.getElementById('r1');
    let ref2 = document.getElementById('r2');
    let ref3 = document.getElementById('r3');
    let ref4 = document.getElementById('r4');
    let ref5 = document.getElementById('r5');
    let ref6 = document.getElementById('r6');
    let ref7 = document.getElementById('r7');
    ref1.style.display = "none";
    ref2.style.display = "none";
    ref3.style.display = "none";
    ref4.style.display = "none";
    ref5.style.display = "none";
    ref6.style.display = "none";
    ref7.style.display = "none";

    //if a certain image is clicked, display this image and shuffle the tiles
      if (clicked_id == 'evening'){
        shuffle();
        document.documentElement.style.setProperty('--someImg', 'url(evening.jpg)');
        para1.style.display = "block";
        head1.style.display = "block";
        ref1.style.display = "block";
    }
      if (clicked_id == 'daysWork'){
        shuffle();
        document.documentElement.style.setProperty('--someImg', 'url(dayswork.jpg)');
        para3.style.display = "block";
        head3.style.display = "block";
        ref3.style.display = "block";
      }
      if (clicked_id == 'excitement'){
        shuffle();
        document.documentElement.style.setProperty('--someImg', 'url(excitement.jpg)');
        para4.style.display = "block";
        head4.style.display = "block";
        ref4.style.display = "block";
      }
      if (clicked_id == 'greyMare'){
        shuffle();
        document.documentElement.style.setProperty('--someImg', 'url(greyMare.jpg)');
        para7.style.display = "block";
        head7.style.display = "block";
        ref7.style.display = "block";
      }
      if (clicked_id == 'poacher'){
        shuffle();
        document.documentElement.style.setProperty('--someImg', 'url(poacher.jpg)');
        para6.style.display = "block";
        head6.style.display = "block";
        ref6.style.display = "block";
      }
      if (clicked_id == 'villageSmithy'){
        shuffle();
        document.documentElement.style.setProperty('--someImg', 'url(villageSmithy.jpg)');
        para2.style.display = "block";
        head2.style.display = "block";
        ref2.style.display = "block";
      }
      if (clicked_id == 'waitingBoats'){
        shuffle();
        document.documentElement.style.setProperty('--someImg', 'url(waitingBoats.jpg)');
        para5.style.display = "block";
        head5.style.display = "block";
        ref5.style.display = "block";
      }
  }

  function clickTile(row,column) {
    var cell = document.getElementById("cell"+row+column);
    //console.log(cell11);
    //console.log(cell12);
    //checkGrid();
    var tile = cell.className;
    if (tile!="tile3") { 
         //Checking if white tile on the right
         if (column<3) {
           if ( document.getElementById("cell"+row+(column+1)).className=="tile3") {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             return;
           }
         }
         //Checking if white tile on the left
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="tile3") {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             return;
           }
         }
           //Checking if white tile is above
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="tile3") {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }
         //Checking if white tile is below
         if (row<3) {
           if ( document.getElementById("cell"+(row+1)+column).className=="tile3") {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         } 
    }
  }

  function checkGrid(){
    console.log("chekky boi");
    var cell11 = document.getElementById("cell11").className;
    var cell12 = document.getElementById("cell12").className;
    var cell13 = document.getElementById("cell13").className;
    var cell21 = document.getElementById("cell21").className;
    var cell22 = document.getElementById("cell22").className;
    var cell23 = document.getElementById("cell23").className;
    var cell31 = document.getElementById("cell31").className;
    var cell32 = document.getElementById("cell32").className;
    var cell33 = document.getElementById("cell33").className;
    if (cell11 =="tile1" && cell12 =="tile2" && cell13 =="tile3"  && cell21 == "tile4" && cell22 == "tile5" 
    && cell23 == "tile6" && cell31 == "tile7" && cell32 == "tile8" && cell33 == "tile9" )
    {
       alert("Congratulations!");
    }else{
        alert("Not quite, keep trying!");
    }
  }

  //var button = document.getElementById("clickerCount");
  //console.log(button);
  //var counterDisp = document.getElementById("table");
  function clickerCounter() {
    count += 1;
    //console.log(count);
    document.getElementById("clickerCount").innerHTML = "Counter: " + count;
  };