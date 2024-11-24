import React from "react";

const Address = (props) => {
    return (<div style={style.container_Address}>
        <h2>{props.cityName}</h2>
        <h2>{props.society}</h2>
        <h2>{props.residationType}</h2>
    </div>)
}
const style = {
    container_Address: {
        display: 'flex',
        flexDirection: 'row'

    }
}

export default Address 
