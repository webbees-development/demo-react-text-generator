import React, {useState} from "react";

function Select({setState}) {
    const [value, setValue] = useState("");
    
    function handleChange(event){
        setValue(event.target.value);
        setState(event.target.value === "true" ? true : false);
    }

    return <div>
        <select className="form-control" onChange={handleChange} value={value}>
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
    </div>
}

export default Select;