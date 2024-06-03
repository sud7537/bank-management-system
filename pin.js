import axios from "axios"
import { useState } from "react"
function Pin()
{
    var [ac,setac]=useState()
    var [pin,setpin]=useState()
    var [newpin,setnewpin]=useState()
    var [msg,setmsg]=useState()

   async function Pinchange()
    {
        var res=await axios.get(`http://localhost:3000/account`)
        var d=res.data.filter(item=>item.acno&&item.pin===pin)
        if(d.length>0)
        {
            var pinO = d[0]
            var id=d[0].id
            pinO.pin=newpin
            console.log(pinO.pin)
            res=await axios.put(`http://localhost:3000/account/${id}`,pinO)
             setmsg("New PIN updated!")            
        }
        else{
            setmsg("Invalid account or pin")
        }
    }

    return(
        <div>
            <center><h1>Account Pin Change Page</h1></center><hr/>
            <h3>{msg}</h3>
            <div className="row">
           <div className="col-md-3"></div>
            <div className="col-md-6">
           
  <label for="formGroupExampleInput" class="form-label">Enter Account Number</label>
  <input type="text" class="form-control" id="formGroupExampleInput" onChange={(e) => setac(e.target.value)} />


  <label for="formGroupExampleInput2" class="form-label">Enter Pin Number</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" onChange={(e) => setpin(e.target.value)} />

  <label for="formGroupExampleInput2" class="form-label">Enter new pin</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" onChange={(e) => setnewpin(e.target.value)}/>
 <br/>
  <button className="btn btn-success" onClick={Pinchange}>Change</button>
            
           </div>
           
           </div>
           
        </div>
        )
}
export default Pin





