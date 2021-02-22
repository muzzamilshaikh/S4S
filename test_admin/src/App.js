import React from "react";
import { Admin, Resource } from "react-admin";
import UserList from "./components/UserList";
import Dashboard from "./components/Dashboard";

import dataProvider from "./components/dataProvider";

function App() {
	return (
		<Admin dashboard={Dashboard} dataProvider={dataProvider}>
			<Resource name='users' list={UserList} />
		</Admin>
	);
}

export default App;
