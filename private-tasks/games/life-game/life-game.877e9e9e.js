const ROWS=50,COLS=50,CELL_SIZE=10,SPEED=100,canvas=document.getElementById("canvas");canvas.width=500,canvas.height=500;const ctx=canvas.getContext("2d");let grid=[];for(let t=0;t<50;t++){grid[t]=[];for(let e=0;e<50;e++)grid[t][e]=Math.floor(2*Math.random())}function drawGrid(){ctx.clearRect(0,0,canvas.width,canvas.height);for(let t=0;t<50;t++)for(let e=0;e<50;e++)1===grid[t][e]&&(ctx.fillStyle="#333",ctx.fillRect(10*e,10*t,10,10))}function updateGrid(){let t=[];for(let e=0;e<50;e++){t[e]=[];for(let r=0;r<50;r++){let a=0;for(let t=-1;t<=1;t++)for(let d=-1;d<=1;d++){if(0===t&&0===d)continue;let i=e+t,l=r+d;i<0?i=49:i>=50&&(i=0),l<0?l=49:l>=50&&(l=0),a+=grid[i][l]}1===grid[e][r]&&(a<2||a>3)?t[e][r]=0:0===grid[e][r]&&3===a?t[e][r]=1:t[e][r]=grid[e][r]}}grid=t}setInterval((()=>{updateGrid(),drawGrid()}),100);
//# sourceMappingURL=life-game.877e9e9e.js.map