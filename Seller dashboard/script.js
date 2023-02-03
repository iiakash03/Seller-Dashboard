let submit=document.getElementById("submit");
submit.addEventListener('click',submitBtn);

window.addEventListener('DOMContentLoaded',loadContent);

function loadContent(){

    for(let i=0;i<localStorage.length;i++){
        console.log(localStorage.getItem(localStorage.key(i)));

        showItem(localStorage.getItem(localStorage.key(i)));
    }
}

function submitBtn(e){
    e.preventDefault();
    let id=document.getElementById("id").value;
    let product=document.getElementById("product").value;
    let price=document.getElementById("price").value;
    let category=document.getElementById("items").value;

    let obj={
        id:id,
        product:product,
        price:price,
        category:category
    }

    localStorage.setItem(id,JSON.stringify(obj));
    showItem(JSON.stringify(obj));
   

}
function updateUser(id){
    let categ=JSON.parse(localStorage.getItem(id));
    document.getElementById("id").value=categ.id;
   document.getElementById("product").value=categ.product;
    document.getElementById("price").value=categ.price;
   document.getElementById("items").value=categ.category;
   deleteUser(id);
}

function deleteUser(id){
    

    let categ=JSON.parse(localStorage.getItem(id));
    if(categ.category==='Electronics'){
        let parent=document.getElementById("listelect");
        parent.removeChild(document.getElementById(id));
        localStorage.removeItem(id);
    }else if(categ.category==='Skincare'){
        let parent=document.getElementById("listskin");
        parent.removeChild(document.getElementById(id));
        localStorage.removeItem(id);
    }if(categ.category==='Carparts'){
        let parent=document.getElementById("listcar");
        parent.removeChild(document.getElementById(id));
        localStorage.removeItem(id);
    }if(categ.category==='clothing'){
        let parent=document.getElementById("listcloth");
        parent.removeChild(document.getElementById(id));
        localStorage.removeItem(id);
    }
   
}




function showItem(object){
    document.getElementById("id").value="";
    document.getElementById("product").value="";
     document.getElementById("price").value="";
    document.getElementById("items").value="";
    let newObj=JSON.parse(object);
    const childHTML=`<li id=${newObj.id}> ${newObj.product}-${newObj.price}
    <button class="btn btn-danger" onclick=deleteUser('${newObj.id}')> delete </button>
    <button onclick=updateUser('${newObj.id}')> Update </button>
    </li>`
    
    if(newObj.category==='Electronics'){
        let element=document.getElementById("listelect");
        element.innerHTML=element.innerHTML+childHTML;
    }else if(newObj.category==='Skincare'){
        let element=document.getElementById("listskin");
        element.innerHTML=element.innerHTML+childHTML;
    }else if(newObj.category==='Carparts'){
        let element=document.getElementById("listcar");
        element.innerHTML=element.innerHTML+childHTML;
    }else if(newObj.category==='clothing'){
        let element=document.getElementById("listcloth");
        element.innerHTML=element.innerHTML+childHTML;
    }

}


