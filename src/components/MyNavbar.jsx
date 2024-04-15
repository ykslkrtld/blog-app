const MyNavbar = ({blogCards}) => {
  return (
    <nav className="container navbar bg-warning my-3 px-3 rounded-4">
        <a className="navbar-brand">Yksl Blog</a>
        <div className="d-flex justify-content-center align-items-center">
        <a className="text-decoration-none text-black" href="#" role="button">Posts <sup className="bg-danger rounded-circle p-1 text-warning">{blogCards.length}</sup></a>
          <a href="#" role="button"><i className="fa-solid fa-bars px-2 text-black"></i></a>
          <a href="#" role="button"><i className="fa-solid fa-bell px-2 text-black"></i></a>
          <a href="#" role="button"><img className="image" src={"https://ca.slack-edge.com/T06BXPTNG1H-U06BK5LFNDD-35895782569c-512"} /></a>        
        </div>
    </nav>
  );
};

export default MyNavbar;
