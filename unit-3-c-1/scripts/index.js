//store the products array in localstorage as "products"
console.log("live")

function Data(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function storeData(event){
    event.preventDefault();
    
    let form= document.getElementById("products");
    
    let type= form.type.value;
    let desc= form.desc.value;
    let price= form.price.value;
    let image= form.image.value;

    let constructor = new Data(type,desc,price,image);
    
    let arr=JSON.parse(localStorage.getItem("products")) || [];
    
    arr.push(constructor);
    localStorage.setItem("products",JSON.stringify(arr));
    console.log(constructor)



}
