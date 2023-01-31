const Time = () => {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    
    if(Number(hours) < 10) {
        hours = '0' + hours;
    }

    if(Number(minutes) < 10) {
        minutes = '0' + minutes;
    }

    return ( 
        <p>{hours}:{minutes}</p>
    );
}
 
export default Time;