const admin = require('firebase-admin')

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)

});

const db = admin.firestore();
const data = require('./data.json');

async function uploadData() {
    try {
        for (const doc of data) {
            await db.collection('questions').add(doc);
        }
        console.log('Data uploaded successfully');
    } catch (error) {
        console.error('Error uploading data:', error);
    }
}

uploadData();

