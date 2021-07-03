
"use strict"

// ======================================================================
//  GET route API - Main
// ======================================================================
// fetch("./Front/jsonAPI/teddy.json")  ==>  When put project on GitHub Page

const getAllData_API = async () => {
    return await fetch("./Front/jsonAPI/teddy.json")
    .then(response => response.json())
    .then(jsonData => {return jsonData});
}


// ======================================================================
//  GET route API - Item ID
// ======================================================================
// fetch(`../jsonAPI/${itemID}.json`)  ==>  When put project on GitHub Page

const getTeddyData_API = async (itemID) => {
    return await fetch(`../jsonAPI/${itemID}.json`)
    .then(response => response.json())
    .then(jsonData => {return jsonData});
}


// ======================================================================
//  POST route API - Order
// ======================================================================
const postData_API = async (contact, products) => {

    const response = await fetch("http://localhost:3000/api/teddies/order", {
        
        headers: {"Content-Type": "application/json; charset=UTF-8"},
        method: "POST",
        body: JSON.stringify({contact, products})
    });
    
    try {return await response.json()}
    catch(error) {console.log("error", error)}
    return {}
}