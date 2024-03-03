function main(){
    let a = new Complex("hola");
    console.log(a.dev());
    console.log(a.dev2());
    console.log(a.dev3());
    console.log(a.dev4());
}

class Complex{
    constructor(real){
        this.real = real;
    }

    dev(){
        return this.real;
    }

    dev4(){
        return this.real+" dev4";
    }
}

main();