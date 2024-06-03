
import axios from "axios"
import { useState } from "react"

function Dp()
{

  

  var[ac,setac]=useState()
  var[pin,setpin]=useState()
  var[amount,setamount]=useState()
  var[msg,setmsg]=useState()

async function DepositAmount()
{
  
    var res=await axios.get("http://localhost:3000/account")
    var d=res.data.filter(item=>item.acno==ac && item.pin==pin)
    if(d.length>0)
    {
        console.log(d)
        var amt=parseInt(d[0].amount)
        amt=amt+parseInt(amount)
        
        
          amt=amt+parseInt(amount)
          var d1=d[0]
          var id=d[0].id
          d1.amount=amt
          res= await axios.put(`http://localhost:3000/account/${id}`,d1)
          setmsg("After withdraw:"+ ' '+amount+"Your balance:"+amt)
        
        
        }
    
    else{
         setmsg("Invalid Account")
    }
}



    return(
      <div>
        <h3>{msg}</h3>
        <div className="row mt-2">
            <div className="col-md-4"></div>
            <div className="col-md-4">


            
        <div className="dp">

<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Enter Account Number </label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" onInput={(e)=>setac(e.target.value)}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Enter Pin Number</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" onInput={(e)=>setpin(e.target.value)}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Enter Amount to Deposit</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" onInput={(e)=>setamount(e.target.value)}/>
</div>
<div class="col-12">
    <button type="submit" class="btn btn-success" onClick={ ()=>DepositAmount()}>Deposit</button>
  </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Dp
