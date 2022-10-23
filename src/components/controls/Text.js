import React, {useState} from "react";

function Text({setState}) {
    const [value, setValue] = useState(4);

    function handleChange(event) {
        setValue(event.target.value);
        setState(Number(event.target.value));
    }

    return <div>
        <input onChange={handleChange} className="form-control" type="number" value={value} />
    </div>
}

export default Text;