console.log("live")

function productPage(){
    let arr=JSON.parse(localStorage.getItem("products")) || [];

    let all_products = document.getElementById("all_products");

    all_products.innerHTML = null;

    arr.forEach(function(elem, index){
     
        let div = document.createElement("div");
  
         let img = document.createElement("img");
         img.src= elem.image;

        let p1 = document.createElement("p1");
        p1.innerText= elem.type;
         
        let p2 = document.createElement("p2");
        p2.innerText= elem.desc;

        let p3=document.createElement("p3");
        p3.innerText= elem.price;
         let remove_product =document.createElement("remove_product");
         remove_product.innerText="Remove";
          remove_product.addEventListener("click", function(){
               remove_product(elem,index);
          })
         div.append(img,p1,p2,p3,remove_product)
         all_products.append(div);
    
     })

}

productPage();

function remove_product(){
    let arr=JSON.parse(localStorage.getItem("products")) || [];

    let newArr= arr.filter(function(el ,i){
        if(i===index){
            let remove_product= JSON.parse(localStorage.getItem("remove_product"));
            remove_product.push(el);
            localStorage.setItem("remove_product",JSON.stringify(remove_product));
        }
        else{
            return i!= index;
        }
    })
    localStorage.setItem("products",JSON.stringify(newArr));
    productPage();

}


