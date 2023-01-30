
export default function Login() {


    return(
   <>
   <div className="float-right  mt-5">
<center>
   <div className="form-signin mt-5  col-lg-4" >
  <form  className='shadow-lg p-3 mb-5 bg-white rounded'>
    
    <h1 className="h3  mb-3 fw-normal p-3">Please sign in</h1>

    <div className="form-floating p-3">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput pt-1">Email address</label>
    </div>
    <div className="form-floating p-3">
      <input type="password" className="form-control " id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword pt-1 ">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-10 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-muted">&copy; 2022–2023</p>
  </form>
</div>
</center>
  </div>
   </>


    );



}