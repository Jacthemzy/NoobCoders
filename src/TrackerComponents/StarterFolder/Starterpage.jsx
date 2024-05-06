import React from "react";
import styles from "./Starterpage.module.css";
import { useNavigate } from "react-router-dom";
function Starterpage() {
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.pinkdiv}></div>
				<div className={styles.darkbluediv}></div>
				<div className={styles.greenbluediv}></div>
				<div className={styles.softdiv}></div>

				<div>
					<h4>
						Your <span className={styles.wallet}>Wallet</span>
					</h4>
					<h4>
						Your <span className={styles.money}>Money</span>
					</h4>
				</div>

				<button className={styles.btn} onClick={() => navigate("login")}>
					Start
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25">
						<g id="_01_align_center" data-name="01 align center">
							<path d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z" />
						</g>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default Starterpage;
