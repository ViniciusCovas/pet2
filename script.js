let petData = [
    { name: "Buddy", age: 2, type: "dog", image: "https://cdn.usegalileo.ai/sdxl10/4da8e833-a65e-43d6-a050-fbf16b422222.png", description: "Friendly and energetic Labrador Retriever" },
    { name: "Whiskers", age: 1, type: "cat", image: "https://cdn.usegalileo.ai/sdxl10/d3c20ac5-b614-4c0f-b715-e40f5aa19552.png", description: "Playful Siamese cat" },
    { name: "Bones", age: 3, type: "dog", image: "https://cdn.usegalileo.ai/stability/a4dc105e-ea77-4b6a-9db1-8bd1881a1c6a.png", description: "Loyal German Shepherd" },
    { name: "Socks", age: 4, type: "cat", image: "https://cdn.usegalileo.ai/sdxl10/b2502453-7a8a-4955-a8a5-29046f91ea7f.png", description: "Calm and cuddly Persian cat" },
    { name: "Rex", age: 2, type: "dog", image: "https://cdn.usegalileo.ai/sdxl10/ccb7b535-00c3-4ef9-be6c-0d041aebe4a1.png", description: "Energetic Jack Russell Terrier" },
    { name: "Mittens", age: 3, type: "cat", image: "https://cdn.usegalileo.ai/sdxl10/58fede56-b8c1-471c-9b99-d70d6d339709.png", description: "Friendly Maine Coon" }
];

function createPetCard(pet) {
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.innerHTML = `
        <div class="pet-info">
            <div class="pet-image" style="background-image: url('${pet.image}')"></div>
            <div class="pet-details">
                <h3>${pet.name}</h3>
                <p>${pet.age} year${pet.age !== 1 ? 's' : ''} old</p>
            </div>
        </div>
        <button class="adopt-btn" data-name="${pet.name}">Adopt</button>
    `;
    return card;
}

function displayPets(filter = 'all') {
    const petList = document.getElementById('pet-list');
    petList.innerHTML = '';
    petData.forEach(pet => {
        if (filter === 'all' || pet.type === filter) {
            petList.appendChild(createPetCard(pet));
        }
    });
}

function showPetDetails(petName) {
    const pet = petData.find(p => p.name === petName);
    if (pet) {
        document.getElementById('modal-pet-name').textContent = pet.name;
        document.getElementById('modal-pet-image').src = pet.image;
        document.getElementById('modal-pet-age').textContent = `Age: ${pet.age} year${pet.age !== 1 ? 's' : ''}`;
        document.getElementById('modal-pet-type').textContent = `Type: ${pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}`;
        document.getElementById('modal-pet-description').textContent = pet.description;
        document.getElementById('pet-modal').style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayPets();

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList