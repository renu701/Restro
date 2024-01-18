import {useState} from "react";

const ContactUs = () => {

    const [formData, setFormData] = useState({
        username: "Renu",
        email: "",
        password: ""
    });


    const changeValue = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
        console.log("Data",e);
    }

    const displayData = async (e) => {
        e.preventDefault();
       const response = await fetch('/submit',{
            method: 'post',
            body:JSON.stringify(formData)
        });
        console.log(formData,response)
    }

    return (
        <div>
            <form id="myForm" onSubmit={displayData}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={formData.username} onInput={(e) => changeValue(e)} required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onInput={(e) => changeValue(e)} required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onInput={(e) => changeValue(e)} required />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default ContactUs;