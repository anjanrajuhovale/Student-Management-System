
function add(){
let name=document.getElementById("one").value;
let id=document.getElementById("two").value;
let course=document.getElementById("three").value;
let tr=document.createElement("tr");
let td1=document.createElement("td");
td1.innerText=name;
let td2=document.createElement("td");
td2.innerText=id;
let td3=document.createElement("td");
td3.innerText=course;
let td4=document.createElement("td");
let button=document.createElement("button");
button.innerText="Delete";
button.onclick=function(){
    tr.remove();
}
td4.appendChild(button);

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
document.getElementById("parent").appendChild(tr);
}
