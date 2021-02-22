import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from "react-admin";

const UserList = (props) => (
	<List {...props}>
		<Datagrid rowClick='edit'>
			<TextField source='id' />
			<TextField source='name' />
			<EmailField source='email' />
			<TextField source='phone' />
			<TextField source='country' />
		</Datagrid>
	</List>
);

export default UserList;
