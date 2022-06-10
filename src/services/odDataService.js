import firebase from "../firebase";

const db = firebase.ref("/ods");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(od) {
    return db.push(od);
  }

  setuuID(id,word) {
    return firebase.ref("/pmts/"+id).set(word);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }


  getRef() {
    return db.no('value',(snapshot) => {

console.log(snapshot.val());

      });
  }
}

export default new TutorialDataService();
