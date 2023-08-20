import axios from "axios";
import "./index.scss";

const Form = ({onChange}) => {

    const onSubmitFunction = (e) => {
        e.preventDefault();
        const data = {
            firstName: e.target.firstName.value,
            surname: e.target.surname.value,
            gender: e.target.gender.value,
            age: e.target.age.value,
            isAdmin: e.target.isAdmin.value
        };

        axios.post("http://localhost:5000/user", data).then((res) => {
            console.log(res);
            onChange(res.data.id);
        });
    }

    return (   <form className="userForm" onSubmit={onSubmitFunction}>
        <input type="text" name="firstName" placeholder="First Name"/>
        <input type="text" name="surname" placeholder="Surname"/>
        <label><input type="radio" name="gender" value="female"/>Female</label>
        <label><input type="radio" name="gender" value="male"/>Male</label>
        <input type="number" name="age" min={0} placeholder="Age"/>
        <select name="isAdmin">
         <option value="true">Admin</option>
         <option value="false">Not Admin</option>
        </select>
        <button type="submit">Submit</button>
 
     </form>); 

}

export default Form;