import instance from "./index";


async function getAllPets() {
    const response = await instance.get("/pets");
    return response;
};



async function getPetById(id) {

    const response = await instance.get("/pets/", id);
    return response;

};


export { getAllPets, getPetById };