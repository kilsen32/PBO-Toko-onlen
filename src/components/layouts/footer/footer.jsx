const Footer = () => {
    return (
      <div style={{ background: "#252525", color: "white" }}>
        <div className="p-5 pt-4">
  
          <p className="fs-1">ABOUT US</p>
          <p className="fs-5 text-">
          online shop with quality goods and collaboration with well-known brands
          </p>
          <br/>
          <div>
            <a href="https://www.instagram.com/accounts/login/">
              <i className="fa-brands fa-instagram me-2 fa-2xl"></i>
            </a>
            <a href="https://id-id.facebook.com/login/device-based/regular/login/?login_attempt=1">
              <i className="fa-brands fa-facebook me-2 fa-2xl"></i>
            </a>
            <a href="https://twitter.com/i/flow/login">
              <i className="fa-brands fa-twitter me-2 fa-2xl"></i>
            </a>
            <a href="https://web.whatsapp.com/">
            <i className="fa-brands fa-whatsapp fa-lg"></i>
            </a>
          </div>
  
        </div>
  
        <div>
  
          <p
            className="mb-0 p-2 opacity-50 text-center"
            style={{ background: "black" }}
          >
            copyright 2023 © | Developed by Kelompok 4
          </p>
  
        </div>
      </div>
    );
  };
  
  export default Footer;