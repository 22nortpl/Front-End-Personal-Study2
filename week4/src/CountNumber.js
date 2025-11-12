function CountNumber(properties){
    function coloredNumber(){
        if(properties.count > 0){
            return `rgb(${properties.count*10}, 0, 0)`
        }

        else if(properties.count < 0){
            return `rgb(0, ${properties.count*-10}, 0)`
        }
        else
            return `rgb(0, 0, 255)`
    }
    const h2Style = {
        fontSize : '30px',
        color: `${coloredNumber()}`
    }
    return(
        <h2 style={h2Style}>{properties.count}</h2>
    )
}
export default CountNumber