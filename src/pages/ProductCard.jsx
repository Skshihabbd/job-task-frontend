

const ProductCard = ({item}) => {
    const {Product_Name,Product_Image,Description,Price,Category,Ratings,Product_Creation_date_and_time }=item
    return (
        <div className=" ">
           <div className=" border-4 rounded-xl border-cyan-600 h-[450px] ">
            <img className="h-48 w-48 mx-auto  " src={Product_Image} alt="branded laptop" />
           <div className="flex justify-between ">
           <h1 className="font-bold ">{Product_Name}</h1> 
           <p className="font-bold text-orange-500 ">{Price}$</p>
           </div>

            <p className="mt-5"><span className="font-bold">  Product details:</span>{ Description}</p> 
            <div className="flex justify-between mt-5 pb-10">
                <p className="font-bold">Category: <span className="text-orange-500">{Category}</span></p>
                <p ><span className="font-bold mr-3">rating:</span>{Ratings}</p>
            </div>
            </div> 
            
        </div>
    );
};

export default ProductCard;