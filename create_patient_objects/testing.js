var _ = require('underscore');
//_.max function
// var list = [{name: 'Sam', age: 10}, {name: 'Joe', age: 12}, {name: 'Rob', age: 15}]

// var result = _.max(list, function(list){ return list.age});
// console.log(result);
   

// // _.each function
// var list =_.each([1, 2, 3], function(x) { list += x + ' ' });
// console.log(list);

// var list=_.each({one: 1, two: 2, three: 3}, function(value, key) { list += key + ':' + value + ' ' });
// console.log(list);


// //_.map function
// // var list = _.map([1, 2, 3], function(x) { return x*x });
// // console.log(list);

// list = _.map({one: 1, two: 2, three: 3}, function(value, key) { return value*value });
// console.log(list);

// _.reduce function
// var sum = _.reduce([1, 2, 3], function(memo, num) {
//     console.log(memo+"m");
//     console.log(num+"n");
//     return memo + num }, 0);

// console.log(sum+"***");


var patients=[

    {
            "Firstname": "arul",
            "LastName": "nithi",
            "DOB": "02-22-1986",
            "MRN": "1461922",
            "visits": [
                {
                    "NPI": "1003802901",
                    "ServiceDate": "05-06-2022",
                    "Visit Reason": "stroke"
                },
                {
                    "NPI": "1013955343",
                    "ServiceDate": "09/16/2020",
                    "Visit Reason": "chickenpox"
                }
            ]
        },
        {
            "Firstname": "rashmika",
            "LastName": "mandanna",
            "DOB": "05-02-1992",
            "MRN": "1183028",
            "visits": [
                {
                    "NPI": "1013955343",
                    "ServiceDate": "09-08-2020",
                    "Visit Reason": "stress"
                }
            ]
        }
    ]
    
    

// var result = _.map(patients, function(value,key) { return value.visits.NPI });
// console.log(result);

// var result =_.filter(patients, function(value) { return value.visits[0].NPI=="1003802901"});
// console.log(result);

// var result = _.find(patients, function(num) { return num.visits[0].NPI=="1983928"});
// console.log(result);

var result = _.findWhere(patients, { "DOB": "05-02-1992" });
console.log(result);

var result = _.findWhere(patients, {"": "1003802901" });
console.log(result);


// var student1 = _.omit(patients, 'name','visits');
// console.log(student1);



// var result = _.findWhere(patients, { "MRN": "1461922" });
// console.log(result);



