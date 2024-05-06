import React, { useContext } from "react";
import styles from "./Transitionlist.module.css";
import Transitem from "../Transitionitem/Transitem";
import { GLobalContext } from "../GlobalContext/Context";
function Transitionlist() {
	const { transitionList } = useContext(GLobalContext);
	
	return (
		<div className={styles.container}>
			<div className={styles.textwrapper}>
				<h5 className={styles.history}>Recent History</h5>

				<h5 style={{ color: "red" }}>Swipe left to delete items</h5>
			</div>

			<div className={styles.transContainer}>
				<ul>
					{transitionList.map((transition) => (
						<Transitem transition={transition} key={transition.id} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default Transitionlist;
