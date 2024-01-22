function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction(){
    return function name(){
        console.log("The girl is Arya.")
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("This girl has no name.")
    }
}