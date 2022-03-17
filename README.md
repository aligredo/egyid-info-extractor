# egyid-info-extractor
----
A minimal API to extract info from Egyptian ID number.

## API Endpoints 
----
### Check Valid National ID

   - Checks if the given national ID number is valid or not. 
  - __(Notice that a given ID is consider invalid if its date is invalid; i.e a day that doesn't exist like 29/02/2021 or a day that has not come yet like 03/08/3030 even if the given ID matches the format)__.

* **URL**

  - [/api/is-valid-id-number/]()

* **Method:**
  

  `GET`
  
*  **URL Params**
   
   **Required:**
 
   requires URL query param: `?id_number`
   
 * **Success Response:**

      * **Code:** 200 SUCCESS <br />
         **Content:** `{ error : null, message : "ID Number Validity Was Checked Successfully.", data : {isValid : boolean} }`
    
 * **Error Response:**

      * **Code:** 422 UNPROCESSABLE ENTITY <br />
         **Content:** `{ error : null, message : "id_number (String) Is A Required Parameter.", data : null }`
    
 ### Extract Info From Id

   - Extracts all Info (Birthdate, Birth Governerate, Gender, Serial, Check Digit) from a given valid national ID.
* **URL**

  - [/api/extract-info-from-id/]()

* **Method:**

  `GET`
  
*  **URL Params**


   **Required:**
 
   requires URL query param: `?id_number`
   
 * **Success Response:**
      * **Code:** 200 SUCCESS <br />
         **Content:** `{ error : null, message : "ID Number Validity Was Checked Successfully.", data : {"Birthdate" : String, "Birth Governorate" : String,
         "Gender" : String, "Check Digit": String}`
    
 * **Error Response:**

      * **Code:** 422 UNPROCESSABLE ENTITY <br />
         **Content:** `{ error : null, message : "id_number (String) Is A Required Parameter.", data : null }`
      * **Code:** 422 UNPROCESSABLE ENTITY <br />
         **Content:** `{ error : null, message : "Invalid ID Number.", data : null }`
 
 
## Installation
----
Use the package manager [npm](https://www.npmjs.com/) to install egyid-info-extractor.

```bash
npm install
```

## To Run It
----
```bash
npm start
```
that would result in 
```bash
egyid-info-extractor Info Extractor Started On Port: 3000
```
now you should be able to use it using curl, your browser or [postman](https://www.postman.com/).

## Examples 
----
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
    "isValid": "true"
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
----
* [ExpressJS](https://expressjs.com/)
* [Morgan](https://www.npmjs.com/package/morgan)
* [MomentJS](https://momentjs.com/)

## References
----
* [Wikipedia's Egyptian Natonal ID Number](https://ar.wikipedia.org/wiki/%D8%A8%D8%B7%D8%A7%D9%82%D8%A9_%D8%A7%D9%84%D8%B1%D9%82%D9%85_%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A_%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9)
* [NomgomFM's Article On Egyptian Natonal ID Number](https://www.nogoumfm.net/news/2019/04/%D8%A7%D9%84%D8%A3%D8%B1%D9%82%D8%A7%D9%85-%D8%A7%D9%84%D9%8014-%D8%B9%D9%84%D9%89-%D8%A8%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%82%D9%85-%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A-%D9%87%D9%84/)
