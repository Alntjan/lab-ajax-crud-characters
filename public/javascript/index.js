const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList();
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const id = document.getElementById("character-id").value;
      charactersAPI.getOneRegister(id);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const id = document.getElementById("character-id-delete").value;
      charactersAPI.deleteOneRegister(id);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const editId = document.getElementById("editID").value;

      const name = document.getElementById("editName").value;
      const occupation = document.getElementById("editOccupation").value;
      const weapon = document.getElementById("editWeapon").value;
      const cartoon = document.getElementById("editCartoon").value;

      editCharacter = { name, occupation, weapon, cartoon };
      console.log(editCharacter);
      charactersAPI.updateOneRegister(editId, editCharacter);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("addName").value;
      const occupation = document.getElementById("addOccupation").value;
      const weapon = document.getElementById("addWeapon").value;
      const cartoon = document.getElementById("addCartoon").value;
      const newCharacter = { name, occupation, weapon, cartoon };
      charactersAPI.createOneRegister(newCharacter);
    });
});
