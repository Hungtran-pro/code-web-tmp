export async function getDataFromFirebase() {
  let filmData = await firebase.firestore().collection("FilmData").get();
  return filmData.docs;
}

//* làm mịn data from doc
export function getDataFromDoc(doc, except = []) {
  let data = doc.data();
  data.id = doc.id;
  return data;
}

//* làm mịn data from docs
export function getDataFromDocs(docs, excepts = []) {
  return docs.map(function(doc) {
      return getDataFromDoc(doc, excepts);
  });
}