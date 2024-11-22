import instance from "./index";


async function getAllPets() {
    const response = await instance.get("/pets");
    return response;
};



async function getPetById(id) {

    const response = await instance.get("/pets/", id);
    return response;

};

async function addPet(pet) {

    const response = await instance.post("/pets/", pet);
    return response;

};

async function detetePet(id) {

    const response = await instance.delete("/pets/", id);
    return response;

};



export { getAllPets, getPetById, addPet, detetePet };