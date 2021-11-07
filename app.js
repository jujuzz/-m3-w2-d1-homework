var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/statsdb"

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true},
    function(err, db){
        // if (err) throw err;
        // console.log("Database created!");
        // db.close();
        var dbo = db.db("statsdb");
        const collectionName = "uscensus"
        // dbo.createCollection(collectionName, function(err, res){
        //     if (err) throw err;
        //     console.log("Collection created.");
        //     db.close();
        // })
        // dbo.collection(collectionName).insertMany(stats, function(err, res){
        //         if (err) throw err;
        //         console.log("Documents inserted." + res.insertedCount);
        //         db.close();
        // });
        // var newData = [
        //     {
        //         'city': 'Pacoima', 
        //         'zip': '91331', 
        //         'state': 'CA', 
        //         'income': '60360',
        //         'age': '33'
        //     },
        //     {
        //         'city': 'Ketchikan', 
        //         'zip': '99950', 
        //         'state': 'AK', 
        //         'income': '00000',
        //         'age': '00'
        //     }
        // ]
        // dbo.collection(collectionName).insertMany(newData, function(err, res){
        //     if (err) throw err;
        //     console.log("Document inserted!" + res.insertedCount);
        //     db.close();
        // });
        // var query = {
        //     city: "Corona",
        //     state: "NY"
        // };
        // dbo.collection(collectionName).find(query).toArray(function(err, res){
        //     if (err) throw err;
        //     console.log(res[0].zip);
        //     db.close();
        // });
        // var query = {
        //     state: "CA"
        // };
        // dbo.collection("uscensus").find(query).toArray(function(err, res){
        //     if (err) throw err;
        //     incomeData = res.map(function(item){
        //         return item.income;
        //     })
        //     db.close();
        // });
        // var myquery = {state: 'AK'};
        // var newInfo = {$set: {income: '38910', age: "46"}};
        // dbo.collection("uscensus").updateOne(myquery, newInfo, function(err, res){
        //     if (err) throw err;
        //     db.close();
        // });
        var mysort = {state: 1};
        dbo.collection("uscensus").find().sort(mysort).toArray(function(err, res){
            if (err) throw err;
            console.log(res);
            db.close();
        });
        // var myquery = {address: 'Mountain 21'};
        // dbo.collection("uscensus").deleteOne(myquery,function(err, res){
        //     if (err) throw err;
        //     db.close();
        // });
    }
);