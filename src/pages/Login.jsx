import { Link } from "react-router-dom";
import useCustom from "../hook/useCustom";


const Login = () => {
const{name}=useCustom()
console.log(name)

    return (
        <div className="flex flex-col md:flex-row w-full lg:h-screen justify-around  ">
          
        <div className=" my-auto bg-no-repeat bg-cover md:w-6/12 md:h-screen  md:bg-[url('https://media.licdn.com/dms/image/C560BAQGTJDv2cJ7Plw/company-logo_200_200/0/1630643699365/login_logo?e=2147483647&v=beta&t=GEB-hqn_FAJ71E1UXhD9t-3SbzWFPj2LMGqDL-_5RUI')]">
          
        </div>
        <div className=" md:w-6/12 ">
          <form className="  flex flex-col px-12 h-screen border-l-2 space-y-3 items-center justify-center">
           <div className=" w-full">
           <label className="text-2xl font-bold" >Name</label> <br />
            <input 
            
              className=" outline-none  py-2 w-full  outline-none   text-left  border-b-2 border-r-emerald-700  border-r-emerald-700  "
            
              placeholder="input name"
              type="text"
              name=""
              id=""
            />
           </div>
           <div className="w-full">
           <label className="text-2xl font-bold">Email</label> <br />
            <input 
            
              className=" outline-none w-full py-2   border-b-2 border-r-emerald-700   "
             placeholder="input email"
              type="email"
              name=""
              id=""
            />
           </div>
           {/* <div className="w-full ">
           <label className="text-2xl font-bold">Number</label> <br />
            <input 
            
              className=" outline-none  py-2  w-full border-b-2 border-r-emerald-700  "
              placeholder="input number"
              type="number"
              name=""
              id=""
            />
           </div>
           <div className="w-full ">
           <label className="text-2xl font-bold">Password</label> <br />
            <input 
            
              className=" outline-none  py-2  w-full border-b-2 border-r-emerald-700  "
             placeholder="input password"
              type="password"
              name=""
              id=""
            />
           </div>
           <div className="w-full ">
           <label className="text-2xl font-bold">Confirm Password*</label> <br />
            <input 
            
              className=" outline-none  py-2  w-full border-b-2 border-r-emerald-700  "
             placeholder="confirm password"
              type="password"
              name=""
              id="" 
              title="input password"
            />
           </div> */}
  
  <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
      <button className="bg-gradient-to-r from-orange-800 to-slate-900 px-4 py-2 rounded-lg text-lg text-white " type="submit">Login </button>
      <Link to='/registration'>
      <button className="bg-gradient-to-r from-slate-700   to-red-900 px-6 py-2 rounded-lg text-lg text-white  ml-3  " type="submit"> Go To Registration </button>
      </Link>
  </div>
          </form>
        </div>
      </div>
    );
};

export default Login;