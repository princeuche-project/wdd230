const linksURL = "data/members.json";
const spotlight = document.querySelector("#Spotlight");

async function getRadomeMembers() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      filterGoldAndSilverMembers(data);
    } else {
      throw Error(await response.statusText);
    }
  } catch (error) {
   console.log(error);
  }
}

// async function getCompanyData(){
//     const response = await fetch(linksURL)
//     const data = await response.json()
//     filterGoldAndSilverMembers(data.companies)
// }


function filterGoldAndSilverMembers(companies) {
  let goldAndSilverCompany = [];
  companies.companies.forEach((company) => {
    if (
      company.membershipLevel === "Gold" ||
      company.membershipLevel === "Silver"
    ) {
      goldAndSilverCompany.push(company);
    }
  });
  getThreeMembers(goldAndSilverCompany);
}

function getThreeMembers(company) {
  let randomCompany = new Set();
  while (randomCompany.size < 3) {
    let randomCompanies = Math.floor(Math.random() * company.length);
    randomCompany.add(randomCompanies);
  }
  randomCompany = Array.from(randomMembers).map((index) => company[index]);
  displayCompany(randomCompany);
}

function displayCompany(companies) {
  companies.forEach((company) => {
    let section = document.createElement("section");
    let companyName = document.createElement("h3");
    let companySlogan = document.createElement("p");
    let companyWebsite = document.createElement("a");
    section.setAttribute("class", "spotlight");

    companyName.textContent = company.companyName;
    companySlogan.textContent = `"${company.slogan}"`;
    companyWebsite.textContent = company.website;
    companyWebsite.setAttribute("href", company.website);
    companyWebsite.setAttribute("target", "_blank");

    section.appendChild(companyName);
    section.appendChild(companySlogan);
    section.appendChild(companyWebsite);
    spotlight.appendChild(section);
  });
}

getRadomeMembers();
