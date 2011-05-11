function(doc) {
  if (doc.name) {
    emit(doc._id, {
      uri:doc._id,
      age:doc.age,
      name:doc.name,
      ram:doc.storage.ram,
      snippet:doc.description.slice(0, 200),
      imageUrl:doc.images[0]
    });
  }
}