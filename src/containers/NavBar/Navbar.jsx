function Navbar() {
  return (
    <div className="">
      <div
        className=" d-flex justify-content-between "
        style={{ backgroundColor: "rgb(26,36,47)",height: "72px" , position: "fixed",top: "0",width: "100%",overflow:"hidden",zIndex:"1"}}
      >
        <img
          style={{ padding: "20px 0px 0px 21px",  marginLeft: "3rem" }}
          className=""
          src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png"
          height="55px"
          width="140px"
        ></img>
          <ul style={{"list-style-type": "none" ,color:"#3b7dba", position: "absolute", color:"white", border:"",left:"10.3rem",top: "1.6rem",right: "27rem"}} className="d-flex d-none d-lg-flex">
          <li className="ms-3 " style={{textDecoration:"underline"}}> Home</li>
          <li className="ms-3">Store</li>
          <li className="ms-3">Channels</li>
          <li className="ms-3">Categories</li>
          <li className="ms-4">My Stuff</li>
        </ul>

        
    <i className="fa fa-search  "  style={{ position: "absolute", color:"white", border:"",top: "1.6rem",right: "9rem" ,fontSize:"1.2rem"}}></i>
   <span className=""  style={{ position: "absolute", color:"rgb(225,170,183)", height:"40px",width:"40px",backgroundColor:"rgb(190,54,68)",top: "1rem",right: "5.3rem", borderRadius:"50%"}}> <i className="fa fa-user" style={{fontSize:"22px",marginTop:"7px"}}  aria-hidden="true"></i> </span> 
 </div>
    </div>
  );
}
export default Navbar;
