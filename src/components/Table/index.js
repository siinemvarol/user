import { useEffect, useState } from "react";
import axios from "axios";

const Table = ({newUserId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        let unmounted = false;
        const source = axios.CancelToken.source();

        axios.get("http://localhost:5000/user", {cancelToken: source.token})
        .then((userData) => {
            if(!unmounted){
                setUsers(userData.data);
            }           
        }).catch((err) => {
            if(!unmounted){
                console.log(err.message);
            }
        });
        
        return () => {
            unmounted = true;
            source.cancel();
        }      

    }, [newUserId]);


    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME SURNAME</th>
                    <th>GENDER</th>
                    <th>ADMIN</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return (
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName} {user.surname}</td>
                        <td>{user.gender}</td>
                       {user.isAdmin==="true" ? <td>X</td> : <td> </td>} 
                    </tr>
                    )
                })                
                }
            </tbody>
        </table>
    );
}

export default Table;