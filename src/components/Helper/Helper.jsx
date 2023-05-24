export const fillSpaces = (event) =>{
    if(event.includes(" "))
        return event.replaceAll(" ", "-");
    return event;
}

export const fillDots = (event) =>{
    if(event.includes("."))
        return event.replaceAll(".", "-");
    return event;
}

export const matchUrlMaker = (left, right, event, date) =>{
    return fillSpaces(left) + "-"  + fillSpaces(right) + "-" + fillSpaces(event) + "-" + fillDots(date);
}