import React from 'react';
import Swal from 'sweetalert2';

const AddedCarts = ({cart,setCart,cards}) => {

    const {_id,name,brand_name,photo,details,price}=cart
console.log(cart)
    const imageStyles = {
        width: '200px', 
        height: '150px', 
    };

    const handelDelete=(_id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
              fetch(`http://localhost:5000/cart/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )

                      const remaining=cards.filter(card=>card._id !== _id)
                      setCart(remaining)

                }
            })
            }
          })
        
    }
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl"> 
                <figure className="px-10 pt-10">
                    <img src={photo} style={imageStyles} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">{brand_name}</h2>
                    <h2 className="card-title">{price}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                    <button onClick={()=>handelDelete(cart._id)} className="btn btn-outline btn-secondary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedCarts;