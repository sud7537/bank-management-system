import { useState } from "react";
import axios from "axios";

function CAcc()
{
    var[pin,setPin]=useState()
    var[name,setname]=useState()
    var[fname,setfname]=useState()
    var[email,setemail]=useState()
    var[phone,setphone]=useState()
    var[gender,setgender]=useState()
    var[country,setcountry]=useState()
    var[city,setcity]=useState()
    var[state,setstate]=useState()
    var[amount,setamount]=useState()
    var [acno,setacno]=useState()
    var [msg,setmsg]=useState()

  async function getAcc()
  {
        var ac="SBI"
        var res=await axios.get("http://localhost:3000/account")
        var x=res.data.length;
        
        if(x>0)
        {
            x=x+101
            ac=ac+x
            setacno(ac)
        }
        else{
             ac="SBI101"
             setacno(ac)
        }
        console.log(x);
        return ac
  }
  
   async function createAccount()
    {
        var a= await getAcc();
        var dt={"acno":a,"pin":pin,"name":name,"fname":fname,"phone":phone,"email":email,"gender":gender,"city":city,"country":country,"state":state,"amount":amount}
        let res=await axios.post("http://localhost:3000/account",dt)
        setmsg("Account open succesfully with account number: "+a) 
    }

    return(
        <div>
            <center><h1>Create Account Page</h1></center><hr/><hr/>
            <h3>{msg}</h3>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6" style={{"border":"2px solid gray","padding":"30px"}}>
                    <div className="row">
                        <div className="col">
                            Enter Pin 
                            <input type="password" className="form-control" placeholder="SET YOUR PIN IN 4 DIGIT" onInput={(e)=>setPin(e.target.value)}/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            Enter Name
                            <input type="text" className="form-control" onInput={(e)=>setname(e.target.value)}/>
                        </div>
                        <div className="col">
                            Enter Father name
                            <input type="text" className="form-control" onInput={(e)=>setfname(e.target.value)}/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            Enter Email
                            <input type="gmail" className="form-control" onInput={(e)=>setemail(e.target.value)}/>
                        </div>
                        <div className="col">
                            Enter Phone
                            <input type="text" className="form-control" onInput={(e)=>setphone(e.target.value)}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col">
                        Enter Gender
                        <select className="form-control" onInput={(e)=>setgender(e.target.value)}><option> male</option>
                        <option> female</option>
                        <option> male</option>
                        </select>
                        {/* <input type="text" className="form-control" onInput={(e)=>setgender(e.target.value)}/> */}
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            Enter Country
                            <input type="text" className="form-control" onInput={(e)=>setcountry(e.target.value)}/>
                        </div>
                        <div className="col">
                            Enter State
                            <input type="text" className="form-control" onInput={(e)=>setstate(e.target.value)}/>
                        </div>
                        <div className="col">
                            Enter City
                            <input type="text" className="form-control" onInput={(e)=>setcity(e.target.value)}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col">
                        Enter Amount Deposit in YOUR Account
                        <input type="text" className="form-control" onInput={(e)=>  "$."+setamount +(e.target.value)}/>
                    </div>
                </div>
                <br/>
                <br/>
                <button className="btn btn-success" onClick={createAccount}>Create Account</button>
            </div>
        </div>
        </div>
        </div>
    )
}
export default CAcc