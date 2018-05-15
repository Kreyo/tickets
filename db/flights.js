const MongoClient = require('mongodb').MongoClient;
const flightsCollection = 'flights';

class Connector {
  constructor (host = 'localhost', port = '27017', database = 'tickets')  {
    this.host = host;
    this.port = port;
    this.database = database;
  }

  /**
   * Connection function to remove extra code
   * @param callback
   */
  connect(callback) {
    MongoClient.connect(
        `mongodb://${this.host}:${this.port}`,
        (err, client) => {
          if (err) {
            throw err;
          }
          const db = client.db(this.database);

          callback(db);
        }
    );
  }

  fetchFlights(callback) {
    this.connect(db => {
      db.collection(flightsCollection).find().toArray()
        .then(result => callback(result));
    });
  }
}

module.exports = Connector;
