function dtClk() {
    console.log(`Clicked `)

    var divDt = document.getElementById('myDt');
    divDt.innerHTML = new Date()
}

var btOk = document.getElementById('btOk')
btOk.onclick = function() {
    var divDt = document.getElementById('myDt');
    divDt.innerHTML = new Date()
}

function dtClk(myDt) { // data binding 
    myDt.innerHTML = new Date()
}