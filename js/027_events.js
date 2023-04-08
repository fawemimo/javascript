document.querySelector('.clear-tasks').addEventListener('click',onClick,false);

function onClick(e) {
    e.preventDefault();
    let val;

    val = e;

    // Eevent target element
    val = e.target;

    //  Event Type
    val = e.type

    // Timestamp
    val = e.timeStamp;
    
    console.log(val);

}