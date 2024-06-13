function transformDateFormat(dates) {
    let result = [];
    dates.forEach(date => {
        if (date.includes('/')) {
            let dateArr = date.split('/');
            if (dateArr[0].length === 4) {
                result.push(dateArr[0] + dateArr[1].padStart(2, '0') + dateArr[2].padStart(2, '0'));
            } else {
                result.push(dateArr[2] + dateArr[1].padStart(2, '0') + dateArr[0].padStart(2, '0'));
            }
        } else if (date.includes('-')) {
            let dateArr = date.split('-');
            result.push(dateArr[2] + dateArr[0].padStart(2, '0') + dateArr[1].padStart(2, '0'));
        }
    });
    return result;
}
const dates = ["2010/02/20", "19/12/2016", "11-18-2012", "20130720"];
console.log(transformDateFormat(dates));
