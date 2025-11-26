let table=3;
let operator='subtraction';
let i=1;
let msg1=' ';
let msg2=' ';
for (let i=1; i<11; i++) {
    msg1+=i+' + '+table+' = '+(i+table)+'<br>';
}
for (let i=1; i<11; i++) {
    msg2+=i+' x '+table+' = '+(i*table)+'<br>';
}
let el1=document.getElementById('blackboard');
el1.innerHTML=msg1;
let el2=document.getElementById('blackboard');
el2.innerHTML=msg2;