const rocketsData = {
  "Falcon 9": {
    videoUrl: "https://www.youtube.com/embed/3pv01sSq44w",
    image: "images/falcon9.jpg",
    manufacturer: "SpaceX",
    country: "USA",
    countMission: 375,
    aboutRocket:
      "Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.",
    missionTitle: "Inspiration 4",
    missionDescription:
      "Inspiration4 was a 2021 human spaceflight operated by SpaceX on behalf of Shift4 Payments CEO Jared Isaacman. The mission launched the Crew Dragon Resilience on 16 September 2021 at 00:02:56 UTC from Kennedy Space Center's Launch Complex 39A atop a Falcon 9 launch vehicle. It placed the Dragon capsule into low Earth orbit with mission termination on 18 September 2021 at 23:06:49 UTC when Resilience splashed down in the Atlantic Ocean.",
  },
  "Atlas V": {
    videoUrl: "https://www.youtube.com/embed/JIB3JbIIbPU?si=UHGOOMDXJsRgsOeF",
    image: "images/atlasV.jpg",
    manufacturer: "ULA",
    country: "USA",
    countMission: 91,
    aboutRocket:
      "Atlas V is an expendable launch system that has been used in a variety of missions, including sending spacecraft to Mars and launching satellites into orbit. It's known for its reliability and flexibility.",
    missionTitle: "Mars 2020",
    missionDescription:
      "Mars 2020 is a NASA space mission that includes the Perseverance rover and the Ingenuity helicopter, both launched by Atlas V. The mission aims to explore Mars' Jezero Crater, search for signs of past life, and prepare for future human exploration.",
  },
  "Ariane 5": {
    videoUrl: "https://www.youtube.com/embed/7nT7JGZMbtM?si=Yic8IZfmN37oYou6",
    image: "images/ariane5.jpg",
    manufacturer: "Airbus Space",
    country: "EU",
    countMission: 45,
    aboutRocket:
      "Ariane 5 is a single-use European launch vehicle designed to launch payloads into low Earth orbit or geostationary orbit. The project is supported by the European Space Agency (ESA), and its main contractor is Astrium. Launches are conducted from the Kourou Cosmodrome in French Guiana.",
    missionTitle: "James Webb Space Telescope",
    missionDescription:
      "The James Webb Space Telescope is a cutting-edge observatory designed to explore the formation of galaxies, stars, and planetary systems using infrared light. It offers unprecedented insights into cosmic events, helping scientists to study the universe's origins.",
  },
  "Delta 4 Heavy": {
    videoUrl: "https://www.youtube.com/embed/AlyuSwRSVHU?si=mh58hMYZSqK6_Bus",
    image: "images/delta-4.jpg",
    manufacturer: "ULA",
    country: "USA",
    countMission: 16,
    aboutRocket:
      "Delta IV Heavy is a heavy-lift rocket used by the ULA for launching high-priority missions for national security and NASA, including the Parker Solar Probe and Orion spacecraft.",
    missionTitle: "Parker Solar Probe",
    missionDescription:
      "The Parker Solar Probe is a NASA spacecraft designed to study the Sun by flying closer to it than any previous mission. It gathers data on the Sun's outer atmosphere, helping scientists better understand solar winds and space weather.",
  },
  "Space Shuttle": {
    videoUrl: "https://www.youtube.com/embed/wI00SpcMCAs?si=ja2poMOJFT5O1eWk",
    image: "images/space-shuttle.jpg",
    manufacturer: "Boeing",
    country: "USA",
    countMission: 135,
    aboutRocket:
      "The Space Shuttle was NASA's reusable spacecraft that operated from 1981 to 2011. It was designed to transport astronauts and cargo to low Earth orbit, playing a key role in satellite deployment, space station construction, and scientific research.",
    missionTitle: "STS-87",
    missionDescription:
      "STS-87 was a space shuttle mission in 1997 that carried Ukrainian astronaut Leonid Kadenyuk, marking a milestone for Ukraine's space exploration. Kadenyuk conducted biological experiments on the Columbia shuttle.",
  },
  Zenit: {
    videoUrl: "https://www.youtube.com/embed/bTdJOP3fFeA?si=s9OvxCbzFDMNtddF",
    image: "images/zenit.jpg",
    manufacturer: "Pivdenne",
    country: "Ukraine",
    countMission: 84,
    aboutRocket:
      "Zenit is a family of space launch vehicles designed by Pivdenne Design Bureau in Ukraine, originally built in the 1980s. It was used for the Sea Launch program, showcasing Ukrainian aerospace capabilities.",
    missionTitle: "International Sea Launch",
    missionDescription:
      "Zenit became known for its participation in the international Sea Launch program in 1999. Launches were conducted from a floating platform in the Pacific Ocean, making Zenit one of the most reliable launch vehicles in the world.",
  },
  Starship: {
    videoUrl: "https://www.youtube.com/embed/9Kw6MRZZQ6E?si=z-7c8DJKjZQF-3OB",
    image: "images/starship.jpg",
    manufacturer: "SpaceX",
    country: "USA",
    countMission: 5,
    aboutRocket:
      "Starship is SpaceX's next-generation spacecraft designed for deep space exploration, including missions to the Moon, Mars, and beyond. It is fully reusable and aims to carry both cargo and humans, making space travel more affordable and accessible.",
    missionTitle: "SpaceX Starship Orbital Launch",
    missionDescription:
      "The SpaceX Starship Orbital Launch 3 was a critical test in demonstrating Starship's ability to reach orbit and perform controlled returns, bringing SpaceX closer to achieving missions to the Moon, Mars, and other deep space destinations.",
  },
  "Falcon Heavy": {
    videoUrl: "https://www.youtube.com/embed/xLIb8glag-0?si=bgDiBzjAkb7zuVTY",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg/220px-Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg",
    manufacturer: "SpaceX",
    country: "USA",
    countMission: 375,
    aboutRocket:
      "Falcon Heavy is a powerful reusable rocket developed by SpaceX, designed to carry heavy payloads into orbit. It features three Falcon 9 engine cores, making it capable of lifting up to 63,800 kg to low Earth orbit. Known for its notable launches, including sending a Tesla Roadster into space, Falcon Heavy supports a variety of missions from commercial satellites to deep-space exploration.",
    missionTitle: "Falcon Heavy Test Flight",
    missionDescription:
      "The Falcon Heavy Test Flight, launched on February 6, 2018, marked the rocket's first mission and a major milestone for SpaceX. During the flight, Falcon Heavy successfully demonstrated its capabilities by launching a Tesla Roadster into space as its payload, accompanied by a mannequin astronaut named `Starman.` Two of the three booster rockets safely returned to Earth, showcasing the rocket's reusability, while the third core was lost during landing. This historic flight showcased Falcon Heavy as the most powerful operational rocket at the time.",
  },
};
// Елементи пошуку
const nameInput = document.getElementById("name-input");
const countrySelect = document.getElementById("country-select");
const manufacturerSelect = document.getElementById("manufacturer-select");
const launchMinInput = document.getElementById("launch-min");
const launchMaxInput = document.getElementById("launch-max");
const sortOrderSelect = document.getElementById("sort-order-select");
const counterElement = document.getElementById("counter");

// Очищення пошуку по імені
const clearNameButton = document.getElementById("clear__button");
clearNameButton.addEventListener("click", () => {
  nameInput.value = "";
  counterElement.textContent = "Total launches: 0";
  renderAllRockets();
});

// Очищення форми сортування
const clearSortButton = document.getElementById("clear__sort__button");
clearSortButton.addEventListener("click", () => {
  countrySelect.value = "";
  manufacturerSelect.value = "";
  launchMinInput.value = "";
  launchMaxInput.value = "";
  sortOrderSelect.value = "";
  counterElement.textContent = "Total launches: 0";
  renderAllRockets();
});

// Додаємо обробники подій для автоматичного пошуку при зміні полів
[
  nameInput,
  countrySelect,
  manufacturerSelect,
  launchMinInput,
  launchMaxInput,
  sortOrderSelect,
].forEach((inputField) => {
  inputField.addEventListener("input", handleSearch);
});

const form = document.getElementById("name__form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSearch();
});

// Функція для пошуку і сортування
function handleSearch() {
  const nameQuery = nameInput.value.toLowerCase().trim();
  const countryQuery = countrySelect.value.toLowerCase().trim();
  const manufacturerQuery = manufacturerSelect.value.toLowerCase().trim();
  const launchMin = parseInt(launchMinInput.value.trim()) || 0;
  const launchMax = parseInt(launchMaxInput.value.trim()) || Infinity;
  const sortOrder = sortOrderSelect.value;
  const rocketsArray = Object.keys(rocketsData);

  let filteredRockets = rocketsArray.filter((rocketName) => {
    const rocketData = rocketsData[rocketName];
    const countMission = rocketData.countMission;

    return (
      (nameQuery === "" || rocketName.toLowerCase().includes(nameQuery)) &&
      (countryQuery === "" ||
        rocketData.country.toLowerCase().includes(countryQuery)) &&
      (manufacturerQuery === "" ||
        rocketData.manufacturer.toLowerCase().includes(manufacturerQuery)) &&
      countMission >= launchMin &&
      countMission <= launchMax
    );
  });

  // Сортуємо масив ракет
  if (sortOrder === "asc") {
    filteredRockets.sort(
      (a, b) => rocketsData[a].countMission - rocketsData[b].countMission
    );
  } else if (sortOrder === "desc") {
    filteredRockets.sort(
      (a, b) => rocketsData[b].countMission - rocketsData[a].countMission
    );
  }

  const totalMissions = filteredRockets.reduce((sum, rocketName) => {
    return sum + rocketsData[rocketName].countMission;
  }, 0);

  counterElement.textContent = `Total launches: ${totalMissions}`;
  renderRockets(filteredRockets);

  if (
    filteredRockets.length === 0 &&
    nameQuery === "" &&
    countryQuery === "" &&
    manufacturerQuery === "" &&
    launchMin === 0 &&
    launchMax === Infinity
  ) {
    renderAllRockets();
  } else {
    renderRockets(filteredRockets);
  }
}

// Функція для рендерингу карток ракет
function renderRockets(rockets) {
  const rocketContainer = document.getElementById("rocket__cards");
  rocketContainer.innerHTML = "";

  rockets.forEach((rocketName) => {
    const rocketData = rocketsData[rocketName];
    const cardHtml = `
      <div class="col-md-3 mb-4">
        <div class="card__rocket text-center p-3 bg-dark text-light">
          <h2 class="rocket__name">${rocketName}</h2>
          <img src="${rocketData.image}" alt="${rocketName}" class="img-fluid mb-3" />
          <p><strong>Manufacturer:</strong> ${rocketData.manufacturer}</p>
          <p><strong>Country:</strong> ${rocketData.country}</p>
          <p><strong>Count mission:</strong> ${rocketData.countMission}</p>
          <p class="rocket__description">${rocketData.aboutRocket}</p>
          <button class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#videoModal"
            onclick="updateRocketDataByName('${rocketName}')">Watch Launch</button>
          <button class="btn btn-warning mt-2" onclick="editRocket('${rocketName}')">Edit</button>
          <button class="btn btn-danger mt-2" onclick="deleteRocket('${rocketName}')">Delete</button>
        </div>
      </div>
    `;
    rocketContainer.innerHTML += cardHtml;
  });
}

// Функція для оновлення відео та інформації про місію
function updateRocketDataByName(rocketName) {
  const rocketData = rocketsData[rocketName];

  if (rocketData) {
    // Оновлення назви місії та опису
    document.getElementById("title__of__mission").textContent =
      rocketData.missionTitle;
    document.getElementById("pr__of__mission").textContent =
      rocketData.missionDescription;

    // Оновлення URL для відео з очищенням перед зміною
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = "";
    setTimeout(() => {
      videoPlayer.src = rocketData.videoUrl;
    }, 100);
  }
}

// Зупиняємо відео, коли модальне вікно закривається
document
  .getElementById("videoModal")
  .addEventListener("hidden.bs.modal", function () {
    document.getElementById("videoPlayer").src = "";
  });

// Функція для рендерингу всіх ракет
function renderAllRockets() {
  renderRockets(Object.keys(rocketsData));
}

renderAllRockets();

const addRocketForm = document.getElementById("addRocketForm");

addRocketForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Отримуємо дані з форми
  const newRocketName = document.getElementById("rocket-name").value;
  const newRocketManufacturer = document.getElementById(
    "rocket-manufacturer"
  ).value;
  const newRocketCountry = document.getElementById("rocket-country").value;
  const newRocketCountMission = parseInt(
    document.getElementById("rocket-count-mission").value
  );
  const newRocketImage = document.getElementById("rocket-image").value;
  const newRocketVideoUrl = document.getElementById("rocket-video-url").value;
  const newRocketAbout = document.getElementById("rocket-about").value;
  const newRocketMissionTitle = document.getElementById(
    "rocket-mission-title"
  ).value;
  const newRocketMissionDescription = document.getElementById(
    "rocket-mission-description"
  ).value;

  // Додаємо нову ракету до об'єкту даних
  rocketsData[newRocketName] = {
    videoUrl: newRocketVideoUrl,
    image: newRocketImage,
    manufacturer: newRocketManufacturer,
    country: newRocketCountry,
    countMission: newRocketCountMission,
    aboutRocket: newRocketAbout,
    missionTitle: newRocketMissionTitle,
    missionDescription: newRocketMissionDescription,
  };

  // Очищення форми
  addRocketForm.reset();

  // Оновлення відображення карток
  renderAllRockets();
});

// Функція для редагування ракети
function editRocket(rocketName) {
  const rocketData = rocketsData[rocketName];

  // Запитуємо нові дані у користувача
  const newName = prompt("Enter new name for the rocket:", rocketName);
  const newManufacturer = prompt(
    "Enter new manufacturer:",
    rocketData.manufacturer
  );
  const newCountry = prompt("Enter new country:", rocketData.country);
  const newCountMission = prompt(
    "Enter new count of missions:",
    rocketData.countMission
  );
  const newAboutRocket = prompt(
    "Enter new about rocket:",
    rocketData.aboutRocket
  );
  const newVideoUrl = prompt("Enter new video URL:", rocketData.videoUrl);
  const newImage = prompt("Enter new image URL:", rocketData.image);
  const newMissionTitle = prompt(
    "Enter new mission title:",
    rocketData.missionTitle
  );
  const newMissionDescription = prompt(
    "Enter new mission description:",
    rocketData.missionDescription
  );

  if (
    newName &&
    newManufacturer &&
    newCountry &&
    newCountMission &&
    newAboutRocket &&
    newVideoUrl &&
    newImage &&
    newMissionTitle &&
    newMissionDescription
  ) {
    // Оновлюємо дані
    rocketsData[newName] = {
      ...rocketData,
      videoUrl: newVideoUrl,
      image: newImage,
      manufacturer: newManufacturer,
      country: newCountry,
      countMission: parseInt(newCountMission),
      aboutRocket: newAboutRocket,
      missionTitle: newMissionTitle,
      missionDescription: newMissionDescription,
    };

    // Якщо ім'я змінилося, видаляємо старі дані
    if (newName !== rocketName) {
      delete rocketsData[rocketName];
    }

    renderAllRockets();
  } else {
    alert("Please fill all fields.");
  }
}

// Функція для видалення ракети
function deleteRocket(rocketName) {
  if (confirm(`Are you sure you want to delete ${rocketName}?`)) {
    delete rocketsData[rocketName];
    renderAllRockets();
  }
}

// Робимо функції доступними глобально
window.editRocket = editRocket;
window.deleteRocket = deleteRocket;
window.updateRocketDataByName = updateRocketDataByName;

// function inner() {
//   let count = 0;

//   return console.log("dasdsd");
//   // {
//   //   increment,
//   //   decrement,
//   // };
// }

// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner(count);
// }

// function inner() {
//   let count = 0;

//   return console.log("dasdsd");
//   // {
//   //   increment,
//   //   decrement,
//   // };
// }

// outer();

// // inner(){
// //   console.log()
// // }

// // const counter = inner();

// // counter.increment();
// // counter.increment();
// // counter.decrement();

// // const increment = outer();
// // increment();
// // increment();

loadRocket();
async function loadRocket() {
  try {
    const res = await fetch(
      "https://dcnpupconfyhpqligdqc.supabase.co/rest/v1/rocket-data", // Актуальний URL для твоєї таблиці
      {
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuanR1eHpxY2J5a253ZHllZWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MjgxMzcsImV4cCI6MjA0NDQwNDEzN30.0Jl_DSoFUwGRHWRwGzrG5uwYT2fke_vy8sBZ2ZC_jdA",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuanR1eHpxY2J5a253ZHllZWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MjgxMzcsImV4cCI6MjA0NDQwNDEzN30.0Jl_DSoFUwGRHWRwGzrG5uwYT2fke_vy8sBZ2ZC_jdA",
        },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch facts");
    const data = await res.json();
    createFactsList(data);
  } catch (error) {
    console.error(error);
    factList.innerHTML =
      '<p class="error">Unable to load facts at this time.</p>';
  }
}
