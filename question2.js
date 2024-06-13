function transformDateFormat(dates) {
    let result = [];
    dates.forEach(date => {
        let day, month, year;
        if (/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/.test(date)) {

            [year, month, day] = date.split('/');

        } else if (/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(date)) {
            [day, month, year] = date.split('/');
        }
        else if (/[0-9]{2}-[0-9]{2}-[0-9]{4}/.test(date)) {
            [month, day, year] = date.split('-');
        }

        if (year && month && day && parseInt(month) <= 12) {
            result.push(year + month + day);
        }
    });
    return result;
}
const dates = ["2010/02/20", "19/12/2016", "11-18-2012", "20130720", "30-12-2015", "12/13/2014"];
console.log(transformDateFormat(dates));
