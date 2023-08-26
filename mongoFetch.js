const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://binxer:naheem123@binx-match.zpc4dfx.mongodb.net/?retryWrites=true&w=majority";
const dbName = "course";
const collectionName = "students";
const express = require('express')
const app = express()

// Function to fetch data from MongoDB and return a Promise
function fetchData() {
  const client = new MongoClient(uri);
  app.get("/data", (req, res) => {
    return client.connect()
        .then(() => {
            console.log("Connected to the MongoDB server");

            // Select the database
            const db = client.db(dbName);

            // Select the collection
            const collection = db.collection(collectionName);

            // Retrieve all documents from the collection
            return collection.find().toArray();
        })
        .then((documents) => {
            
            let table = '<table>';
            table += '<tr><th>Fullname</th><th>Email</th><th>Phone</th><th>Date of Birth</th><th>Mode</th><th>Country</th><th>Gender</th></tr>';
            
            // Loop through the documents and add rows to the table
            documents.forEach((document) => {
                table += `<tr><td>${document.Fullname}</td><td>${document.email}</td><td>${document.phone}</td><td>${document.dob}</td><td>${document.mode}</td><td>${document.country}</td><td>${document.gender}</td></tr>`;
            });
            
            table += '</table>';
            
            res.send(table);
            if (error) {
                res.status(500).json({message: 'AN error occured '})
                console.log(error)
            };
            res.status(200).json({ message: 'Retrieved successfully' });
            console.log(table)
            
        })
        .catch(console.error)
        .finally(() => {
            client.close();
        });
    });
}

module.exports = {
  fetchData,
};
