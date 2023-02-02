console.log('hello world')
let sachhay  = [
    {'id':'mht', 'ten':'Mùi Hương Trầm','gia': 72000},       
    {'id':'n20', 'ten':'Nói với tuổi 20','gia': 25000},   
    {'id':'quanglo', 'ten':'Quẳng gánh lo đi','gia': 81000},
    {'id':'sm', 'ten':'Sức mạnh của thói quen','gia': 125000},
];
vt  = _.findIndex(sachhay, (s) =>{ return s.ten.indexOf('a')>=0; })
console.log(vt);  // 3


arr = _.find(sachhay, function(s){ return s.gia>=75000; })
console.log(arr); //{'id':'qlo', 'ten':'Quẳng gánh lo đi','gia': 81000}, 

let chunk = _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
console.log(chunk)