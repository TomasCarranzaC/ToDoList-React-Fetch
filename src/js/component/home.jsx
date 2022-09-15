import React from "react";
import Lista from "/workspace/react-hello/src/js/component/Lista.jsx";

const Home = () => {
	return (
		<div className="container-fluid">
			<div className="pt-5 text-center">
				<h1
					className="display-1 opacity-50"
					style={{ color: "grey" }}
				>
					To-do List
				</h1>
			</div>
			<div>
				<Lista />
			</div>
		</div>
	);
};

export default Home;
