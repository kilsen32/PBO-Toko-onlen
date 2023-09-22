import Navbar from "../../layouts/navbar/navbar.jsx"
import Iklan from "../../layouts/iklan/iklan.jsx"
import Cards from "../../layouts/cards/cards.jsx"
import Promosi from "../../layouts/promosi/promosi.jsx"
import Footer from "../../layouts/footer/footer.jsx"


function home(){
    return(
        <div>
            <Navbar/>
            <Iklan/>
            <Cards/>
            <Promosi/>
            <Footer/>
        </div>
    )
}

export default home;