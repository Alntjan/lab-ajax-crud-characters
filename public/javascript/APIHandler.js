class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get("http://localhost:8000/characters")
      .then((allCharacters) => console.log(allCharacters.data))
      .catch((error) => console.log(error));
  }

  getOneRegister(id) {
    axios
      .get(`http://localhost:8000/characters/${id}`)
      .then((aCharacter) => console.log(aCharacter.data))
      .catch((error) => console.log(error));
  }

  createOneRegister(newCharacter) {
    axios
      .post(`http://localhost:8000/characters`, { newCharacter })
      .then((created) => console.log(created))
      .catch((error) => console.log(error));
  }

  updateOneRegister(editId, editCharacter) {
    axios
      .put(`http://localhost:8000/characters/${editId}`, editCharacter)
      .then((edited) => console.log(edited))
      .catch((err) => console.log(err));
  }

  deleteOneRegister(id) {
    axios
      .delete(`http://localhost:8000/characters/${id}`)
      .then((deleted) => console.log(deleted))
      .catch((error) => console.log(error));
  }
}
