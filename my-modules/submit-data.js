
// Cloud Firestoreにデータを送信する
export const submitData = async (e, addDoc, collection, db) => {
    e.preventDefault();
    const form_data = new FormData(e.target);

    console.log("Test1");
    try {
        const docRef = await addDoc(collection(db, "reports"), {
            date: new Date(),
            name: form_data.get("name"),
            work: form_data.get("work"),
            comment: form_data.get("comment")
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};