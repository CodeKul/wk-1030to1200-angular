// camel casing 
function myName() { // function defination
   
    let dt = '15/06/2015'

    let mltStr = `  
    sa;dgs;fgl
        sadpfasdpg
        ${dt}
    s'gd[sgp][sadgp]s''gpo'sffpog
    s;lgk;lskg
    s;lafkgs;flkg
    s;lkg;zslfgk
    `
}
myName() // function call

function add(num1, num2) { // function with parameters
    let rs = num1 + num2
    console.log('Addition is '+rs)
}

function multiplication( num1, num2) {
    let rs = num1 * num2
    return rs // function in returning value
}

add(10, 20)
add(10, 'sdadgj')
