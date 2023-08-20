import { useState } from "react";
import Form from "../../components/Form";
import Table from "../../components/Table";


const User = () => {

    const [newUserId, setNewUserId] = useState();
    const [isVisible, setIsVisible] = useState(true);

    const onChange = (id) => {
        setNewUserId(id);
    };
    const onChangeCheckBox = (e) => {
        const value = e.target.checked;
        setIsVisible(value);
    }


    return (
        <>
        <Form onChange={onChange}/>
        <label><input type="checkbox" onChange={onChangeCheckBox} defaultChecked={true}/>Table gorunsun mu?</label>
        {isVisible && <Table newUserId={newUserId}/> }
        </>
    );
}

export default User;

