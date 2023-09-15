import './footerLogin.css'

function footerLogin(){
    return (
        <footer className="footer">
      <div className="footer-links">
        <a href="/">Help</a>
        <a href="/">About</a>
      </div>
      <div className="copyright">
      Copyright Kasir  &copy; {new Date().getFullYear()} 
      </div>
    </footer>
    );
}

export default footerLogin;