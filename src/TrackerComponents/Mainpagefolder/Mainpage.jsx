import React, { useState, useEffect } from "react";
import styles from "./Mainpage.module.css";
import Balance from "../Balance/Balance";
import { FaUserCircle } from "react-icons/fa";
import Incexp from "../Income&Expense/Incexp";
import Transitionlist from "../TransitionList/Transitionlist";
import { useNavigate } from "react-router-dom";
import LoginPage from "../Forms/Login";

function Mainpage() {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	//check if user is logged in using sessionStorage
	useEffect(()=>{
		let currentUser = sessionStorage.getItem("token");
		currentUser = currentUser ? JSON.parse(currentUser) : null;

		if(currentUser?.username){
			setIsLoggedIn(true);
		}else{
			setIsLoggedIn(false)
			navigate("/login")
			return;
		}
	}, []);
	
	
	


	return (
		!isLoggedIn ? (
			<LoginPage />
		) : (
			<>
			<div className={styles.maincontainer}>
				<div className={styles.top_row}>
					<button className={styles.backBtn} onClick={() => navigate("/login")}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25">
							<g id="_01_align_center" data-name="01 align center">
								<path d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z" />
							</g>
						</svg>
						Logout
					</button>
					<h3>Dashboard</h3>
					<h1 className={styles.userprofile} onClick={() => navigate("/developer-contact")}>
						<FaUserCircle />
					</h1>
				</div>
				<Balance />
				<Incexp />
				<Transitionlist />
				<div className={styles.addBtn} onClick={() => navigate("/addtransition")}>
					+
				</div>
			</div>
		</>
		)
	);
}

export default Mainpage;
