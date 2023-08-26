const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const tls = require('tls');
const Swal = require('sweetalert');
const bodyParser = require('body-parser');

// Serve static files from the "public" directory
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://binxer:naheem123@binx-match.zpc4dfx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
  app.get("/data", (req, res) => {
    const dbName = "course";
    const collectionName = "students";
    client.connect()
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
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
    
            // Count the number of documents in the collection
            return collection.countDocuments()
                .then((count) => {
                    return { documents, count };
                });
        })
        .then(({ documents, count }) => {
            console.log(count);
            
            let table = '';
            table += '<tr><th>Fullname</th><th>Email</th><th>Phone</th><th>Date of Birth</th><th>Mode</th><th>Country</th><th>Gender</th></tr>';
            
            // Loop through the documents and add rows to the table
            documents.forEach((document) => {
                table += `<tr><td>${document.Fullname}</td><td>${document.email}</td><td>${document.phone}</td><td>${document.dob}</td><td>${document.mode}</td><td>${document.country}</td><td>${document.gender}</td></tr>`;
            });
            
            table += '</table>';
            const response = {
                table: table,
                count: count
            };
            // Send the table as a response
            res.send(response);
        })
        .catch(console.error)
        .finally(() => {
        });
    
  });  

app.post('/sendEmail', function(req, res) {
    const {Fullname, email, phone, dob, mode, country, gender} = req.body
    
    var transportar = nodemailer.createTransport({
        service: "gmail",
        tls: {
          rejectUnauthorized: false
        },
        auth: {
          user: "info.tekcify", // Your Gmail ID
          pass: "tpkjsjrsurxamkzl",         // Your Gmail Password
        },
      });
      
      // Email body template
      const body = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
            /* Email styles */
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
            }
            
            h2 {
                color: #444;
            }
            
            .user-info {
                margin-bottom: 10px;
            }
            
            .user-info span {
                font-weight: bold;
                margin-right: 5px;
            }
            
            .action-button {
                display: inline-block;
                padding: 10px 15px;
                background-color: #007bff;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
            }
            
            .action-button:hover {
                background-color: #0056b3;
            }
            </style>
        </head>
        <body>
            <h2>New User Registered</h2>
            
            <div class="user-info">
            <span>Name:</span> ${Fullname}
            </div>
            
            <div class="user-info">
            <span>Email:</span> ${email}
            </div>
            
            <div class="user-info">
            <span>Phone:</span> ${phone}
            </div>
            
            <div class="user-info">
            <span>Date of Birth:</span> ${dob}
            </div>
            
            <div class="user-info">
            <span>Mode of Contact:</span> ${mode}
            </div>
            
            <div class="user-info">
            <span>Country:</span> ${country}
            </div>
            
            <div class="user-info">
            <span>Gender:</span> ${gender}
            </div>
            
            <p>Please take appropriate action.</p>
            
            <a href="#" class="action-button">Check Dashboard</a>
        </body>
        </html>
        `;
      
      // Deifne mailing options like Sender Email and Receiver.
      var mailOptions = {
        from: "info.tekcify@gmail.com", // Sender ID
        to: "naheemolaide5@gmail.com", // Reciever ID
        subject: "Email Subjects", // Mail Subject
        html: body, // Description
      };
      
      
const uri = "mongodb+srv://binxer:naheem123@binx-match.zpc4dfx.mongodb.net/?retryWrites=true&w=majority";

// Database Name
const dbName = "course";

// Collection Name
const collectionName = "students";

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
client.connect()
  .then(() => {
    console.log("Connected to the MongoDB server");

    // Select the database
    const db = client.db(dbName);

    // Select the collection
    const collection = db.collection(collectionName);

    // Create the document to be inserted
    const user = {
      Fullname,
      email,
      phone,
      dob,
      mode,
      country,
      gender,
    };

    // Insert the document into the collection
    return collection.insertOne(user);
  })
  .then(() => {
    console.log("User registration saved successfully");
    // Send an Email
    transportar.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).json({message: 'AN error occured '})
            console.log(error)
        };
        res.status(200).json({ message: 'Email sent successfully' });
      });
  })
  .catch(console.error)
  .finally(() => {
    client.close();
  });
    
      
      
  
  });

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
  console.log('http://localhost:3000');
});
