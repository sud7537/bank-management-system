import axios from "axios"
import { useState } from "react"
import React from "react"
function Ft() {

  var [ac, setac] = useState()
  var [pin, setpin] = useState()
  var [amount, setamount] = useState()
  var [tac, settca] = useState()
  var [msg, setmsg] = useState()

  async function ftransfer() {

    var res = await axios.get("http://localhost:3000/account")
    var d = res.data.filter(item => item.acno === ac && item.pin === pin)
    if (d.length > 0) {

      var amt = parseInt(d[0].amount)
      if (amt >= parseInt(amount)) {

        var d2 = res.data.filter(item => item.acno === tac)

        if (d2.length > 0) {
          var tamt = parseInt(d2[0].amount)
          amt = amt - parseInt(amount)
          tamt = tamt + parseInt(amount)
          var d1 = d[0]
          var id = d[0].id
          d1.amount = amt

          var d3 = d2[0]
          var id1 = d2[0].id

          d3.amount = tamt
          res = await axios.put(`http://localhost:3000/account/${id}`, d1)

          res = await axios.put(`http://localhost:3000/account/${id1}`, d3)

          setmsg("After transfer:" + amount + "Your balance:" + amt)
        }
        else {
          setmsg("Invalid  banificIary Account ")
        }
      }
      else {
        setmsg("Insufficient")
      }
    }
    else {
      setmsg("Invalid Account")
    }
  }



  return (
    <div className="row mt-2">
      <h3>{msg}</h3>
      <div className="col-md-4"></div>
      <div className="col-md-4">



        <div className="dp">

          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Enter Account Number</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" onInput={(e => setac(e.target.value))} />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Enter Pin Number</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" onInput={(e => setpin(e.target.value))} />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Enter Amount to Transfer</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" onInput={(e => setamount(e.target.value))} />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Enter Account to Transfer</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" onInput={(e => settca(e.target.value))} />
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-success" onClick={ftransfer}>Fund Transfer</button>
          </div>
        </div>
      </div>
    </div>

  )

}
export default Ft