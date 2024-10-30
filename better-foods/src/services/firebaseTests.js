import db from './firebaseConfig';
import {collection, getDocs} from 'firebase/firestore';

 // test groc data

const getGroc = async () => {
      try {
        const grocCollect = collection(db, "groceries");
        const snapshot = await getDocs(grocCollect);
        snapshot.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
      } catch(error) {
        console.error("Error getting grocery data:", error);
      }
    };
    getGroc();