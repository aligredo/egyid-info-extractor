# egyid-info-extractor
A minimal API to extract info from Egyptian ID number.

## EndPoints 

* [/api/is-valid-id-number/]() ___requires URL query "?id_number"___.
* [/api/extract-info-from-id/]() ___requires URL query "?id_number"___.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install egyid-info-extractor.

```bash
npm install
```

## To Run It
```bash
npm start
```
that would result in 
```bash
egyid-info-extractor Info Extractor Started On Port: 3000
```
now you should be able to use it using curl, your browser or [postman](https://www.postman.com/).

## Examples 

1. The following request:
```bash
curl http://localhost:3000/api/is-valid-id-number/?id_number=29001011234567
```
should result in the following response:
```bash
{
  "error": null,
  "message": "ID Number Validity Was Checked Successfully.",
  "data": {
    "isValid": "false"
  }
}
```
2. The following request:
```bash
curl http://localhost:3000/api/extract-info-from-id/?id_number=29808060103281
```
should result in the following response:
```bash
{
  "error": null,
  "message": "ID Number Info Was Extracted Successfully.",
  "data": {
    "Birthdate": "August 6th 1998",
    "Birth Governorate": "Cairo",
    "Gender": "Female",
    "Serial": "0328",
    "Check Digit": "1"
  }
}
```
## External Used Packages

* [ExpressJS](https://expressjs.com/)
* [Morgan](https://www.npmjs.com/package/morgan)
* [MomentJS](https://momentjs.com/)

## References
[Wikipedia's Egyptian Natonal ID Number](https://ar.wikipedia.org/wiki/%D8%A8%D8%B7%D8%A7%D9%82%D8%A9_%D8%A7%D9%84%D8%B1%D9%82%D9%85_%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A_%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9)
[NomgomFM's Article On Egyptian Natonal ID Number](https://www.nogoumfm.net/news/2019/04/%D8%A7%D9%84%D8%A3%D8%B1%D9%82%D8%A7%D9%85-%D8%A7%D9%84%D9%8014-%D8%B9%D9%84%D9%89-%D8%A8%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%82%D9%85-%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A-%D9%87%D9%84/)
