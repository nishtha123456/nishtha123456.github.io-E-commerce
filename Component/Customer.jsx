export default function Product()
{
    var Customers=[
        {id:1,Name:"asha",photo:"http://picsum.photos/id/1010/100"},
        {id:2,Name:"Nishtha",photo:"http://picsum.photos/id/1011/100"},
        {id:3,Name:"Yaksh",photo:"http://picsum.photos/id/1012/100"}
    ];

return(
<table className="table">
    <thead>
        <tr>
        <th>Id</th>
        <th>Images</th>
        <th>Name</th>
        
        </tr>
    </thead>
    <tbody>
    {Customers.map((Customer)=>
    <tr>
    <td>{Customer.id}</td>
    <td><img src={Customer.photo} alt="product" /></td>
    <td>{Customer.Name}</td>
    
    </tr>
    )}
    </tbody>
    </table>

);

}