var _ = require('underscore');
var patient =
{
    "Firstname": "rashmika",
    "LastName": "mandanna",
    "DOB": "08-26-2021",
    "MRN": "1183028",
    "visit": [
        {
            "MRN": "1183028",
            "NPI": "1013955343",
            "ServiceDate": "03/29/2022",
            "Visit Reason": "Unlisted preventive medicine service",
            "code": "99429", 
            "code system": "CPT",
            "value set name": "Encounter-Influenza",
            "value set oid": "2.16.840.1.113883.3.526.3.1252"
        },
        {
            "MRN": "1183028",
            "NPI": "1013955343",
            "ServiceDate": "03/29/2022",
            "Visit Reason": "Unlisted preventive medicine service",
            "code": "99241", 
            "code system": "CPT",
            "value set name": "Encounter",
            "value set oid": ""
        },
        {
            "MRN": "1183028",
            "NPI": "1013955343",
            "ServiceDate": "03/29/2020",
            "Visit Reason": "Unlisted preventive medicine service",
            "code": "99429",
            "code system": "CPT",
            "value set name": "Encounter-Influenza",
            "value set oid": "2.16.840.1.113883.3.526.3.1252"
        }
    ]
}


// var result=_.pluck(patient.MRN);
// console.log(result);

// var result=_.sortBy(patient.NPI);
// console.log(result);


// var result=_.sortBy(patient.visit,"code");
// var a=parseInt("99429")
// console.log(a);


// var result = _.last(patient.visit,2);
// console.log(result)

// var result = _.rest(patient.visit);  rest method returns the all elements of array excluding first one. If index is passed then elements from index are returned.
// console.log(result)

