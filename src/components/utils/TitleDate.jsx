import React from "react";

function TitleDate(props) {
    
    const makeDate = new Date()

    const date = {
        day     : makeDate.getDate(),
        month   : makeDate.getMonth(),
        year    : makeDate.getFullYear(),

        hour    : makeDate.getHours(),
        min     : makeDate.getMinutes(), 
    }
    
    date['hour'] = date['hour'] < 10 ? '0'+ date['hour'] : date['hour']
    date['min'] = date['min'] < 10 ? '0'+ date['min'] : date['min']
    date['day'] = date['day'] < 10 ? '0'+ date['day'] : date['day']
    date['month'] = date['month'] < 10 ? '0'+ date['month'] : date['month']

    return (
        <div>
            <div>
                <p>{date['hour']}:{date['min']}</p>
                <p>{date['day']}/{date['month']}/{date['year']}</p>
            </div>
        </div>
    )
}

export default TitleDate;
