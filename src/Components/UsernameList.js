function UsernameList(props) {
    return (
        <table className="result">
            <thead>
            <th>Registered User</th>
            <th>Id</th>
            </thead>
            <tbody>
            {props.allUsers.map(user => <tr>
                <td>{user.username}</td>
                <td>{user.id}</td>
            </tr>)}</tbody>
        </table>
    );
}

export default UsernameList;