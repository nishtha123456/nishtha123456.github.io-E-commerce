import { useState } from "react";
//import { useNavigate } from "react-router-dom";
export default function Product()
{
  //const Navigate=useNavigate();
    const [ Products,setProducts]=useState([
        {id:1,Name:"pen",Price:45,photo:"http://picsum.photos/id/1010/100",Quantity:0},
        {id:2,Name:"notebook",Price:45,photo:"http://picsum.photos/id/1011/100",Quantity:0},
        {id:3,Name:"eraser",Price:45,photo:"http://picsum.photos/id/1012/100",Quantity:0},
        {id:4,Name:"pencil",Price:45,photo:"http://picsum.photos/id/1013/100",Quantity:0},
        {id:5,Name:"compass",Price:45,photo:"http://picsum.photos/id/1014/100",Quantity:0},
    ]);
    const  handleIncrement=(product,maxvalue) =>{
       let allproducts=[...Products];
       let  index=allproducts.indexOf(product)
        console.log("index",index) 
        if(allproducts[index].Quantity<maxvalue)  
        {allproducts[index].Quantity++;
       setProducts(allproducts);
        }
       console.log("quantity",product.Quantity)

     }

     const  handleDecrement=(product,minvalue) =>{
        let allproducts=[...Products];
        let  index=allproducts.indexOf(product)
         console.log("index",index) 
         if(allproducts[index].Quantity>minvalue)  
         {allproducts[index].Quantity--;
        setProducts(allproducts);
         }
        console.log("quantity",product.Quantity)
 
      }
      const  handleDelete=(product) =>{
        let allproducts=[...Products];
        let  index=allproducts.indexOf(product)
         console.log("index",index) 
         
         allproducts.splice(index,1);
        setProducts(allproducts);
         
        console.log("quantity",product.Quantity)
 
      }
 
 
return(
    <>
    <div className="container-fluid">
        <h1 className="text-center">Shopping cart</h1>
    <div class="row m-3" >
        {Products.map((product)=>

  <div class="col-lg-6" key={product.id}>
    <div class="card m-2">
      <div class="card-body">
      <h5 class="card-text">{product.id}</h5>
        <h5 class="card-title">{product.Name}</h5>
        <h5 class="card-text">{product.Price}</h5>
    </div>
        <div className="card-footer">
   
            <div className="float-left">
            <span className="h5 card-text m-2 ">Quantity :{product.Quantity}</span>
              <div className="btn-group">
                              
                  <div className="btn btn-outline-success" onClick={()=>{handleIncrement(product,10);}}>+</div>
                    <div className="btn btn-outline-success" onClick={()=>{handleDecrement(product,0);}}>-</div>
              </div>
            </div>
            
            <div className="float-right">
           
           <div className="btn btn-danger m-2" onClick={()=>{handleDelete(product);}}>Delete Item</div>
            </div>
            
        </div>
      </div>
    </div>
  
  

    )}
    </div>
    </div>
</>
);

}