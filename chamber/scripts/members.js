const url = "data/members.json"

const cards = document.querySelector(".cards");

async function getCompanyData(){
    const response = await fetch(url)
    const data = await response.json()
    displayCompany(data.companies)
}

getCompanyData()

const displayCompany = (companies) => {
    companies.forEach((company) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let name = document.createElement('h2'); // fill in the blank
        let p1 = document.createElement("p1")
        let p2 = document.createElement("p2")
        let p3 = document.createElement("p3")
        let portrait = document.createElement('img');
        let p5 = document.createElement("p3")

   
        

        name.textContent = `Company name: ${company.name}`;
        p1.textContent = ` Company Address: ${company.address}`;
        p2.textContent = ` Conatact number: ${company.contact}`;
        p3.textContent = ` Website: ${company.website}`;
        portrait.setAttribute('src', company.imageurl);
        portrait.setAttribute('alt', `Portrait of ${company.name}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        p5.textContent = ` Membership Level: ${company.membershipLevel}`;

        card.appendChild(name)
        card.appendChild(p1)
        card.appendChild(p2)
        card.appendChild(p3)
        card.appendChild(portrait)
        card.appendChild(p5)
     

        cards.appendChild(card)

    })  
    

} 