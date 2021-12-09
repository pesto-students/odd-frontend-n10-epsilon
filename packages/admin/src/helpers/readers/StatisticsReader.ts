import _ from "lodash";


// const _ = require("lodash");  

// // Given object
// var object = { 'c': [{ 'python': { 'java': 3 } }] };

// // Use of _.get method 
// console.log(_.get(object, ['c', '0', 'python', 'java'])); 

class StatisticsReader {
    public static TotalUsers(_object: any) {
        return _.get(_object, ["user"], 0);
    }

    public static TotalDrivers(_object: any) {
        return _.get(_object, ["driver"], 0);
    }

    public static TotalOrders(_object: any) {
        return _.get(_object, ["order"], 0);
    }

    public static TotalEarningsValue(_object: any) {
        return _.get(_object, ["earning", "value"], 0);
    }

    public static TotalEarningsChange(_object: any) {
        return _.get(_object, ["earning", "change"], 0);
    }

    public static GetChartValue(_object: any, key: string) {
        return _.get(_object, ["chart", key], 1);
    }
}

export default StatisticsReader;