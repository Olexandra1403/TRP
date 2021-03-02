
console.log("--------------")
let i=1;
let r=100;
while(i<r){
    let bool=true;
    for (let j=2; j<i;j++){
        if (i%j==0)bool=false
    }
    if (bool)console.log(i);
    i++;
}
console.log("---------------")
let n=0;
do {
    if (n==0){
        console.log(n+ ' Це нуль')
    }else if (n%2==0){
        console.log(n+' Це парне число')
    }else {
        console.log(n+ ' Це не парне число')
    }
    ++n;
}while (n<=10)
console.log("--------------")
for (let k=0;k<=9;console.log(k),k++)
{
}
console.log("--------------")
let stars = prompt("enter stars count!", 7);
    let str = "*";
    while (str.length<=stars){
        console.log(str + "\n");
        str+="*";
    }

    let lines = line = stars, a=' ', b='*';{
    while(line-->0) console.log(Array(line+1).join(a) +Array(2*(lines-line)).join(b) +Array(line+1).join(a));

    const r = (n) => Array(n*2-1).fill().map((_, i) => (i < n ?
        (' '.repeat(n-i-1)+
            '*'.repeat(2*i+1)+
            ' '.repeat(n-i-1)) :
        (' '.repeat(-(n-i-1))+
            '*'.repeat(4*n-2*i-3)+
            ' '.repeat(-(n-i-1))))).join("\n");
    console.log(r(stars));}
console.log("--------------")
{
    let numb=10000;
    let counter=0;
    do{
        numb=numb/2;
        counter++;
    }while(numb>=50)
    console.log(`numb = ${numb}; counter = ${counter}`);
}
console.log("---------------")
{
    let month = +prompt("enter number of month", 1);
    switch (month){
        case 1:
            alert("its winter - january");
            break;
        case 2:
            alert("its winter - february");
            break;
        case 12:
            alert("its winter - december");
            break;
        case 3:
            alert("its spring - march ");
            break;
        case 4:
            alert("its spring - april");
            break;
        case 5:
            alert("its spring - may");
            break;
        case 6:
            alert("its summer - june");
            break;
        case 7:
            alert("its summer - july");
            break;
        case 8:
            alert("its summer - august");
            break;
        case 9:
            alert("its autumn - september");
            break;
        case 10:
            alert("its autumn - october");
            break;
        case 12:
            alert("its autumn - november");
            break;
        default:
            alert("its not mounts");
            break;
    }
}
console.log("--------------")
let temperature = prompt("enter temperature of Celsium", 0);
alert(temperature/(9/5)+32 + ` Farengeights its ${temperature} on Celsium`);
console.log("------------------")
{
    let numb = prompt("enter number - from 1 to 7", 1);
    switch (numb) {
        case '1':
            alert("its monday");
            break;
        case '2':
            alert("its tuesday");
            break;
        case '3':
            alert("its wednesday");
            break;
        case '4':
            alert("its thursday");
            break;
        case '5':
            alert("its friday");
            break;
        case '6':
            alert("its saturday");
            break;
        case '7':
            alert("its sunday");
            break;
        default:
            alert("its not day");
            break;
    }
}

