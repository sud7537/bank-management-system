function Nav()
{
    return <div>
      <div className="row">
        <div className="col-md-4" ><img src="1.jpeg" height={"200px"} width={"100%"} ></img></div>
        <div className="col-md-7"><img src="2.jpeg" height={"200px"} width={"100%"}></img></div>
      </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Banking</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Ca">Create Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Wd">Withdraw</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Dp">Deposit</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Ft">Fund Transfer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/pi">Pin Change</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
    
}
export default Nav