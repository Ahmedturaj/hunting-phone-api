const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}
const displayPhones = (phones) => {
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';
    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src=${phone.image} alt="phone"
            class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title text-black">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
        `;
        phonesContainer.appendChild(phoneCard);
    })
}

const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    loadPhone(searchFieldValue);
    console.log(searchFieldValue);

    searchField.value = '';
}


//............//

loadPhone('iPhone');