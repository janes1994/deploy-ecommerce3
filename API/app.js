const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser")
const path = require("path")
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '../build')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Buat koneksi
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'ecommerce3'
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }else {
     console.log('Mysql Connected');
   }
})

// Cors Handling
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
			'Access-Control-Allow-Headers', 
			'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	if (req.method === "OPTIONS") {
			res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
			return res.status(200).json({});
	}
	next();
})

// ROUTES
app.get('/kategori/:val', (req, res) => {
	const fetch = `SELECT * from products WHERE kategori = "${req.params.val}"`;
	db.query(fetch, (err, record) => {
			if (err) {
					console.log(err)
			}
			// res.end(JSON.stringify(record))
			res.json(record)
	})    
})

app.get("/buypage/:val", (req,res) => {
	const fetch = `SELECT * FROM products WHERE link = "${req.params.val}"`
	db.query(fetch, (err, record) => {
		if (err) {
			console.log(err)
		}
		res.json(record)
	})
})

app.listen(port, () => {
  console.log(`Server runs on port ${port}`);
});
