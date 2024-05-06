import React from "react";
import styles from "./Mainpage.module.css";
import { useNavigate } from "react-router-dom";
function Developer() {
	const navigate = useNavigate();
	return (
		<div className={styles.maincontainer}>
			<div className={styles.top_row}>
				<button className={styles.backBtn} onClick={() => navigate("/transition-page")}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25">
						<g id="_01_align_center" data-name="01 align center">
							<path d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z" />
						</g>
					</svg>
					Back
				</button>
				<h3>Developer Contact & Usage</h3>
				<h2 style={{ visibility: "hidden" }}>o</h2>
			</div>
			<div className={styles.text}>
				<h1>About</h1>
				<p>
					Hello guys ! We're  <span className="name">Noob Coders</span>. "Welcome to our Expense Tracker app, your ultimate financial companion! With intuitive design and powerful features, we help you effortlessly manage your finances, track expenses, set budgets, and achieve your financial goals. Whether you're a seasoned budgeter or just starting your financial journey, our app simplifies the process, giving you control and insight into your spending habits. Take charge of your finances today with our Expense Tracker app."
				</p>
				<p>About this project i really put effort on this one .So hope you guys enjoy using it.</p>
				<p>
					If you guys feel unsatisfied with something , you can clearly suggest and criticize and send mail to
					me.I'm willingly to accept it.
				</p>
				<h5>
					Contact me Here :
					<a href="" onClick={() => (window.location = "mailto:ceddan2@gmail.com")}>
						Send Email
					</a>
				</h5>
			</div>

			<div className={styles.usage}>
				<h2>Guides</h2>
				<ul>
					<li>
						<h5>Slide Left to delete</h5>
					</li>
					<li>
						<h5>You can click Income and Expense box to see incom and expense items separately</h5>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Developer;
