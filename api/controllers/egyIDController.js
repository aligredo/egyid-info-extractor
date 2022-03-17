'use strict';

const { json } = require("express/lib/response");
const ID_NUMBER_REGEX = new RegExp(/(2|3)[0-9][1-9][0-1][1-9][0-3][1-9](01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)\d\d\d\d\d/);
var moment = require('moment');

module.exports.isValidIDNumber = function(req, res){
    var isValidRequest = req.query.id_number &&
     typeof (req.query.id_number) === 'string'
    
    if(!isValidRequest){
        return res.status(422).json({
			error: null,
            message: "id_number (String) Is A Required Parameter.",
			data: null
		});
    }
    if(isValid(req.query.id_number)){
        return res.status(200).json({
			error: null,
			message: "ID Number Validity Was Checked Successfully.",
			data: {"isValid": "true"}
		});
    }
    else{
        return res.status(200).json({
			error: null,
			message: "ID Number Validity Was Checked Successfully.",
			data: {"isValid": "false"}
		});
    }
};


module.exports.extractInfoFromIDNumber = function(req, res){
    var isValidRequest = req.query.id_number &&
     typeof (req.query.id_number) === 'string'
    
    if(!isValidRequest){
        return res.status(422).json({
			error: null,
            message: "id_number (String) Is A Required Parameter.",
			data: null
		});
    }

    if(isValid(req.query.id_number)){
        return res.status(200).json({
			error: null,
			message: "ID Number Info Was Extracted Successfully.",
			data: getInfo(req.query.id_number)
		});
    }
    else{
        return res.status(422).json({
			error: null,
			message: "Invalid ID Number.",
			data: null
		});
    }

};


// A Function To Check The Validity Of A Given Id Number
var isValid = function(id_number){
    var today = moment();
    return ID_NUMBER_REGEX.test(id_number) && (today.diff(getBirthdate(id_number), 'days') > 0);
}
// A Function To Extract Info From A Given Id Number
var getInfo = function (id_number){
    return {"Birthdate" : getBirthdate(id_number).format("MMMM Do YYYY"),
            "Birth Governorate" : getGovernorate(id_number),
            "Gender" : getGender(id_number),
            "Serial" : getSerial(id_number),
            "Check Digit" : getCheckDigit(id_number)
            }
}

// A Function To Extract Birthdate From A Given Id Number
var getBirthdate = function (id_number){
    var year = "".concat(19 + parseInt(id_number.charAt(0)) - 2, parseInt(id_number.substring(1,3)));
    var month = id_number.substring(3,5);
    var day = id_number.substring(5,7);
    return moment(year.concat(month, day), "YYYYMMDD");

};

// A Function To Extract Governorate Of Birth From A Given Id Number
var getGovernorate = function (id_number){
    const governorates = {
                '01': 'Cairo',
                '02': 'Alexandria',
                '03': 'Port Said',
                '04': 'Suez',
                '11': 'Damietta',
                '12': 'Dakahlia',
                '13': 'Ash Sharqia',
                '14': 'Kaliobeya',
                '15': 'Kafr El - Sheikh',
                '16': 'Gharbia',
                '17': 'Monoufia',
                '18': 'El Beheira',
                '19': 'Ismailia',
                '21': 'Giza',
                '22': 'Beni Suef',
                '23': 'Fayoum',
                '24': 'El Menia',
                '25': 'Assiut',
                '26': 'Sohag',
                '27': 'Qena',
                '28': 'Aswan',
                '29': 'Luxor',
                '31': 'Red Sea',
                '32': 'New Valley',
                '33': 'Matrouh',
                '34': 'North Sinai',
                '35': 'South Sinai',
                '88': 'Foreign'}
    return governorates[id_number.substring(7,9)];
};

// A Function To Extract Serial From A Given Id Number
var getSerial = function (id_number){
    return id_number.substring(9,13);
};

// A Function To Extract Gender From A Given Id Number
var getGender = function (id_number){
    if(parseInt(id_number.substring(12,13)) % 2 == 0)
        return "Female";
    else
        return "Male";
};

// A Function To Extract Check Digit From A Given Id Number
var getCheckDigit = function (id_number){
    return id_number.substring(13);
};

