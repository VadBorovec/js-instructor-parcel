[5,10,15,20,25].reduce(((e,a)=>e+a),0),Object.values({mango:100,poly:50,ajax:150}).reduce(((e,a)=>e+a),0),[{id:"player-1",name:"Mango",timePlayed:310,online:!1},{id:"player-2",name:"Poly",timePlayed:470,online:!0},{id:"player-3",name:"Kiwi",timePlayed:230,online:!0},{id:"player-4",name:"Ajax",timePlayed:150,online:!1},{id:"player-5",name:"Chelsey",timePlayed:80,online:!0}].reduce(((e,{timePlayed:a})=>e+a),0),[{label:"Apples",price:100,quantity:2},{label:"Bananas",price:120,quantity:3},{label:"Lemons",price:70,quantity:4}].reduce(((e,{price:a,quantity:i})=>e+a*i),0),[{id:"000",likes:5,tags:["js","nodejs"]},{id:"001",likes:2,tags:["html","css"]},{id:"002",likes:17,tags:["html","js","nodejs"]},{id:"003",likes:8,tags:["css","react"]},{id:"004",likes:0,tags:["js","nodejs","react"]}].reduce(((e,{tags:a})=>[...e,...a]),[]).reduce(((e,a)=>({...e,[a]:e[a]?e[a]+1:1})),{});
//# sourceMappingURL=!08-iterating-array-mathods.c1216e46.js.map