import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Registration = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
     console.log(watch("name")); // watch input value by passing the name of it
  
    

  return (
    <div className="flex flex-col md:flex-row w-full md:h-screen justify-around  ">
      <div className=" my-auto bg-no-repeat bg-cover md:w-6/12 md:h-full  md:bg-[url('https://media.licdn.com/dms/image/C560BAQGTJDv2cJ7Plw/company-logo_200_200/0/1630643699365/login_logo?e=2147483647&v=beta&t=GEB-hqn_FAJ71E1UXhD9t-3SbzWFPj2LMGqDL-_5RUI')]">
        {/* <h1 className="text-7xl  ">Please Login Here</h1> */}
      </div>
      <div className=" md:w-6/12  ">
        <form onSubmit={handleSubmit(onSubmit)} className=" lg:mt-16 flex flex-col px-14 lg:px-28  border-l-2 space-y-0 lg:space-y-3 items-center justify-center">
         <div className=" w-full">
         <label className="text-2xl font-bold" >Name</label> <br />
          <input 
          
            className=" outline-none  py-2 w-full  outline-none   text-left  border-b-2 border-r-emerald-700  border-r-emerald-700  "
          
            placeholder="input name"
            type="text"
            name=""
            {...register("name")}
            id=""
          />
         </div>
         <div className="w-full">
         <label className="text-2xl font-bold">Email</label> <br />
          <input 
          
            className=" outline-none w-full py-2   border-b-2 border-r-emerald-700   "
           placeholder="input email"
            type="email"
            {...register("email")}
            id=""
          />
         </div>
         <div className="w-full ">
         <label className="text-2xl font-bold">Number</label> <br />
          <input 
          
            className=" outline-none  py-2  w-full border-b-2 border-r-emerald-700  "
            placeholder="input number"
            type="number"
            {...register("number")}
            id=""
          />
         </div>
         <div className="w-full ">
         <label className="text-2xl font-bold">Password</label> <br />
          <input 
          
            className=" outline-none  py-2  w-full border-b-2 border-r-emerald-700  "
           placeholder="input password"
            type="password"
            {...register("password")}
            id=""
          />
         </div>
         <div className="w-full ">
         <label className="text-2xl font-bold">Confirm Password*</label> <br />
          <input 
          
            className=" outline-none  py-2  w-full border-b-2 border-r-emerald-700  "
           placeholder="confirm password"
            type="password"
            {...register("cpassword")}
            id="" 
            title="input password"
          />
         </div>

<div className="pt-2">
    <button className="bg-gradient-to-r from-orange-800 to-slate-900 px-4 py-2 rounded-lg text-lg text-white " type="submit"> Sign Up </button>
    <Link to='/'>
    <button className="bg-gradient-to-r from-slate-700   to-red-900 px-6 py-2 rounded-lg text-lg text-white  ml-3  " type="submit"> Login </button>
    </Link>
</div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
