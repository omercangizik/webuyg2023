//ecmascript 9 dan önce kullanılan değişken
// değişken tanımlama type safe değil
//var name= "ömer"  //pek kullanılmaz

//ecmascript 9 dan sonra let ve const 
//değişken tanımlama
//let name= "ömer"
//console.log(name)

//var ve let farkları:
// var function scope let block scope

//sabit tanımlama
//const name="ömer"

/*function test(){
    if(true){
        var degisken="merhaba dünya"   //let kullanılmıyor
    }
    if(true){
        console.log(degisken)
    }
}
test() */

//var keyword değişkenler tekrar tanımlanabilir. //aslında istenmeyen bi durum. let buna izin vermez.
/* var degisken="merhaba dünya"
var degisken="hello world"
console.log(degisken) */


//hoisting: bir değşkeni önce tanımlama sonra kullanmak
/* degisken="merhaba dünya"
console.log(degisken)
var degisken  */              //olmaması gereken bi durum.  // let kullanıldığında çalışmaz.


//let const farkları:
//let mutable const immutable
/* let name="ömer"
const adi="can"
name="can"
adi="ömer" */   //const farklı değişken değerleri alamaz. sabit.

/* var agirlik=50
if(agirlik>49){
    var miktar=1.4
    console.log(`${miktar} su içmelisin`)    //burada çalışıyor.

}
console.log(miktar) */
//*************************************************************************************************************************** */
/* let agirlik=50
if(agirlik>49){
    let miktar=1.4
    console.log(`${miktar} su içmelisin`)    //önce tanımlanması gerekiyor.

}
console.log(miktar) */



//geleneksel yöntem
/* function topla(a,b){
    return a+b
}
//arrow function                 //ikisi de aynı
const topla=(a+b)=>a+b */

/* function test(){
    console.log("merhaba"+this.name)
}
const person={
    name="ömer",
    soyle:test,
}
person.soyle()

//arrow function
const test=()=>{
    console.log("merhabadünya"+this.name)
}
const person={
    name="ömer",
    soyle:test,
}
person.tsoyle() */








/* function addToCart(urun_adi,adi,fiyat){

}
addToCart("elma",5,10)
addToCart("armut",3,24)                            //bu çok istenen bir yöntem değil!!!!!!!
addToCart("limon",4,15)

//*********************************************************************************************************

let urunler=[{(urun_adi:"elma",fiyat:4,adet:20),
             (urun_adi:"armut",fiyat:4,adet:20),
             (urun_adi:"limon",fiyat:4,adet:20)}]
function addToCart(urun){
    console.log(urun.urun_adi)
    console.log(urun.fiyat)
    console.log(urun.adet)
 }              
 addToCart(urunler)      */    




/* let urunler=[{(urun_adi:"elma",fiyat:4,adet:20),
            (urun_adi:"armut",fiyat:4,adet:20),
            (urun_adi:"limon",fiyat:4,adet:20)}]
console.log(urunler[0]["urun_adi"]) */







/* function topla(...sayilar){
    let toplam=0
    for(let i=0;i<sayilar.length;i++){
        toplam=toplam+sayilar[i]
    }
    console.log(toplam)
}
topla(10,20,30,40,50,60,70) */


/* let [birinci,ikinci,ücüncü]=[{adi:"iç anadolu",nufus:"20"},
                             {adi:"iç anadolu",nufus:"20"},
                             {adi:"iç anadolu",nufus:"20"}]
console.log(birinci) */




/* function test(){
    a+100
}

const test=()=>{
    a+100
}

(test)=>a+100


test=>a+100 */





///conditional ternary oparator
/* if(a<100){
    console.log("100 den küçük")
}else if(a==100){
    console.log("100 e eşit")
}
else{
    console.log("100 den küçük")
}


const sonuc=a==100?"100 e eşit":"100 e eşit değil"  */  


/* function example(){
    if(condition1){
        return value1
    }else if(condition2){
        return value2
    }else if(condition3){
        return value3
    }else {
        return value4
    }
}


Function example(){
    return condition1?value1:
    condition2?value2:
    condition3?value3:
    value4
} */




/* const sayilar=[1,2,3,4,5,6,7,8,9]
const ciftsayilar=sayilar.filter(function(sayilar){
    return sayilar%2===0
})
console.log(ciftsayilar)



const ciftsayilar=sayilar.filter((sayilar)=>sayilar%2===0)
console.log(ciftsayilar) */



const sayi=sayilar.find