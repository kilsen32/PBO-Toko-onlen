import Navbar from "../../layouts/navbar/navbar.jsx";
import Iklan from "../../layouts/iklan/iklan.jsx";
import Cards from "../../layouts/cards/cards.jsx";
import Promosi from "../../layouts/promosi/promosi.jsx";
import Footer from "../../layouts/footer/footer.jsx";
import { useState, useEffect } from "react";

function home() {
	const [laptop, setLaptop] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("./data/product.json");
				const jsonData = await response.json();
				const laptops = jsonData.laptop;
				setLaptop(laptops);
			} catch (error) {
				console.error("error ffetching data", error);
			}
		};
		fetchData();
	}, []);
	console.log(laptop);

	return (
		<div>
			<Navbar />
			<Iklan />
			<Cards />
			<Promosi />
			<Footer />
		</div>
	);
}

export default home;
