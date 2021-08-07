import React from 'react'

export const Form = () => {
    return (
        <div className="container ">
            <div className="row  " style={{justifyContent:"space-around"}} >
                <div className="col-md-6">
                <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Subject</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
          <label  className="form-label">Message</label>

      <textarea className="form-control"></textarea>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

                </div>
            </div>
        </div>
        
    )
}
