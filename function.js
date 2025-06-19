function hello(){
    console.log("hello js");
}

hello();

function add(a,b){
    console.log(a+b);
}

add(1,2);

function displayAnotherFunction(func){
    func(1,2);
}

displayAnotherFunction(add)

let varFunc = add;
varFunc(1,4);

let newFuncVar = function () {
    console.log("variable Function");
};

newFuncVar();

let ArrowFuncVar = () => {
    console.log("Arrow Function");
};

ArrowFuncVar();