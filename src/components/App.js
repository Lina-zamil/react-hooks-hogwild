import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const [hogList, setHogList] = useState(hogs);
	const [greasedOnly, setGreasedOnly] = useState(false);
	const [sortOption, setSortOption] = useState("name");

	const toggleGreasedFilter = () => {
		setGreasedOnly(!greasedOnly);
	};

	const handleSort = (option) => {
		setSortOption(option);
	};

	return (
		<div className="App">
			<Nav
				toggleGreasedFilter={toggleGreasedFilter}
				handleSort={handleSort}
				sortOption={sortOption}
				greasedOnly={greasedOnly}
			/>
			<HogList hogList={hogList} greasedOnly={greasedOnly} sortOption={sortOption} />
		</div>
	);
}

export default App;