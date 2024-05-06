import React from "react";
import { Routes, Route } from "react-router-dom";
import Addtrans from "./TrackerComponents/AddTransition/Addtrans";
import GlobalProvider from "./TrackerComponents/GlobalContext/Context";
import Expensebox from "./TrackerComponents/Income&Expense/Expensebox";
import Incomebox from "./TrackerComponents/Income&Expense/Incomebox";
import Developer from "./TrackerComponents/Mainpagefolder/Developer";

import Mainpage from "./TrackerComponents/Mainpagefolder/Mainpage";
import Starterpage from "./TrackerComponents/StarterFolder/Starterpage";
import LoginPage from "./TrackerComponents/Forms/Login";
import SignupPage from "./TrackerComponents/Forms/Signup";

function App() {
	return (
		<div>
			{/* Route Section */}
			{/* <Starterpage /> */}
			<GlobalProvider>
				<Routes>
					<Route path="/" element={<Starterpage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/transition-page" element={<Mainpage />} />
					<Route path="/addtransition" element={<Addtrans />} />
					<Route path="/incomebox" element={<Incomebox />} />
					<Route path="/expensebox" element={<Expensebox />} />
					<Route path="/developer-contact" element={<Developer />} />
				</Routes>
			</GlobalProvider>
		</div>
	);
}

export default App;
