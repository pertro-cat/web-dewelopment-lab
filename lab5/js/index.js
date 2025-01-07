let rocketsData = {};

async function fetchRockets() {
  try {
    const response = await fetch("http://localhost:8080/rockets");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rockets = await response.json();
    console.log("Fetched rockets:", rockets);

    rocketsData = rockets.reduce((acc, rocket) => {
      acc[rocket.id] = rocket;
      return acc;
    }, {});

    renderRockets(rockets);
  } catch (error) {
    console.error("Error fetching rockets:", error);
  }
}

async function addRocket(event) {
  event.preventDefault();

  const newRocket = {
    name: document.getElementById("rocket-name").value,
    video_url: document.getElementById("rocket-video-url").value,
    image: document.getElementById("rocket-image").value,
    manufacturer: document.getElementById("rocket-manufacturer").value,
    country: document.getElementById("rocket-country").value,
    count_mission: document.getElementById("rocket-count-mission").value,
    about_rocket: document.getElementById("rocket-about").value,
    mission_title: document.getElementById("rocket-mission-title").value,
    mission_description: document.getElementById("rocket-mission-description")
      .value,
  };

  try {
    const response = await fetch("http://localhost:8080/rockets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRocket),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("Rocket added successfully:", await response.json());

    document.getElementById("rocket-name").value = "";
    document.getElementById("rocket-video-url").value = "";
    document.getElementById("rocket-image").value = "";
    document.getElementById("rocket-manufacturer").value = "";
    document.getElementById("rocket-country").value = "";
    document.getElementById("rocket-count-mission").value = "";
    document.getElementById("rocket-about").value = "";
    document.getElementById("rocket-mission-title").value = "";
    document.getElementById("rocket-mission-description").value = "";

    fetchRockets();
  } catch (error) {
    console.error("Error adding rocket:", error);
  }
}

function showVideo(videoUrl, missionTitle, missionDescription) {
  const videoPlayer = document.getElementById("videoPlayer");
  const titleOfMission = document.getElementById("title__of__mission");
  const prOfMission = document.getElementById("pr__of__mission");

  videoPlayer.src = videoUrl;
  titleOfMission.textContent = missionTitle;
  prOfMission.textContent = missionDescription;

  const videoModal = new bootstrap.Modal(document.getElementById("videoModal"));
  videoModal.show();
}

document.addEventListener("DOMContentLoaded", () => {
  fetchRockets();
  const addRocketForm = document.getElementById("addRocketForm");
  addRocketForm.addEventListener("submit", addRocket);
});

async function handleSearch() {
  const nameQuery = nameInput.value.toLowerCase().trim();
  const countryQuery = countrySelect.value.toLowerCase().trim();
  const manufacturerQuery = manufacturerSelect.value.toLowerCase().trim();
  const launchMin = launchMinInput.value.trim();
  const launchMax = launchMaxInput.value.trim();
  const sortOrder = sortOrderSelect.value;

  if (
    !nameQuery &&
    !countryQuery &&
    !manufacturerQuery &&
    !launchMin &&
    !launchMax &&
    !sortOrder
  ) {
    fetchRockets();
    return;
  }

  const queryParams = new URLSearchParams({
    name: nameQuery,
    country: countryQuery,
    manufacturer: manufacturerQuery,
    launchMin,
    launchMax,
    sortOrder,
  }).toString();

  try {
    const response = await fetch(
      `http://localhost:8080/rockets?${queryParams}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    renderRockets(await response.json());
  } catch (error) {
    console.error("Rocket search error:", error);
  }
}

const nameInput = document.getElementById("name-input");
const countrySelect = document.getElementById("country-select");
const manufacturerSelect = document.getElementById("manufacturer-select");
const launchMinInput = document.getElementById("launch-min");
const launchMaxInput = document.getElementById("launch-max");
const sortOrderSelect = document.getElementById("sort-order-select");
const counterElement = document.getElementById("counter");

const clearNameButton = document.getElementById("clear__button");
clearNameButton.addEventListener("click", () => {
  nameInput.value = "";
  counterElement.textContent = "Total launches: 0";
  renderAllRockets();
});

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

function renderRockets(rockets) {
  const rocketContainer = document.getElementById("rocket__cards");
  rocketContainer.innerHTML = "";

  if (!rockets || rockets.length === 0) {
    rocketContainer.innerHTML = "<p>No rockets found</p>";
    return;
  }

  rockets.forEach((rocket) => {
    const cardHtml = `
      <div class="col-md-3 mb-4">
        <div class="card__rocket text-center p-3 bg-dark text-light">
          <h2 class="rocket__name">${rocket.name}</h2>
          <img src="${rocket.image}" alt="${rocket.name}" class="img-fluid mb-3" />
          <p><strong>Manufacturer:</strong> ${rocket.manufacturer}</p>
          <p><strong>Country:</strong> ${rocket.country}</p>
          <p><strong>Count mission:</strong> ${rocket.count_mission}</p>
          <p class="rocket__description">${rocket.about_rocket}</p>
          <button class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#videoModal" onclick="updateRocketDataById(${rocket.id})">Watch Launch</button>
          <button class="btn btn-warning mt-2" onclick="editRocket(${rocket.id})">Edit</button>
          <button class="btn btn-danger mt-2" onclick="deleteRocket(${rocket.id})">Delete</button>
        </div>
      </div>
    `;
    rocketContainer.innerHTML += cardHtml;
  });
}

function editRocket(rocketId) {
  const rocketData = rocketsData[rocketId];

  if (!rocketData) {
    alert("Rocket not found!");
    return;
  }

  const newName = prompt("Enter new name for the rocket:", rocketData.name);
  const newManufacturer = prompt(
    "Enter new manufacturer:",
    rocketData.manufacturer
  );
  const newCountry = prompt("Enter new country:", rocketData.country);
  const newMissionCount = prompt(
    "Enter new mission count:",
    rocketData.count_mission
  );
  const newAbout = prompt(
    "Enter new description about the rocket:",
    rocketData.about_rocket
  );
  const newVideoUrl = prompt("Enter new video URL:", rocketData.video_url);
  const newImageUrl = prompt("Enter new image URL:", rocketData.image);
  const newMissionTitle = prompt(
    "Enter new mission title:",
    rocketData.mission_title
  );
  const newMissionDescription = prompt(
    "Enter new mission description:",
    rocketData.mission_description
  );

  if (
    newName === null ||
    newManufacturer === null ||
    newCountry === null ||
    newMissionCount === null ||
    newAbout === null ||
    newVideoUrl === null ||
    newImageUrl === null ||
    newMissionTitle === null ||
    newMissionDescription === null
  ) {
    alert("Edit cancelled");
    return;
  }

  updateRocketOnServer(
    rocketId,
    newName,
    newVideoUrl,
    newImageUrl,
    newManufacturer,
    newCountry,
    newMissionCount,
    newAbout,
    newMissionTitle,
    newMissionDescription
  );
}

window.editRocket = editRocket;

async function updateRocketOnServer(
  rocketId,
  name,
  video_url,
  image,
  manufacturer,
  country,
  count_mission,
  about_rocket,
  mission_title,
  mission_description
) {
  try {
    const response = await fetch(`http://localhost:8080/rockets/${rocketId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        video_url,
        image,
        manufacturer,
        country,
        count_mission,
        about_rocket,
        mission_title,
        mission_description,
      }),
    });

    if (response.ok) {
      alert("Rocket updated successfully");
      fetchRockets();
    } else {
      throw new Error("Failed to update rocket");
    }
  } catch (error) {
    console.error("Error updating rocket:", error);
  }
}

window.updateRocketOnServer = updateRocketOnServer;

function updateRocketDataById(rocketId) {
  const rocketData = rocketsData[rocketId];

  if (rocketData) {
    document.getElementById("title__of__mission").textContent =
      rocketData.mission_title;
    document.getElementById("pr__of__mission").textContent =
      rocketData.mission_description;

    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = "";
    setTimeout(() => {
      videoPlayer.src = rocketData.video_url;
    }, 100);
  } else {
    console.error("Rocket data not found for ID:", rocketId);
  }
}

document
  .getElementById("videoModal")
  .addEventListener("hidden.bs.modal", function () {
    document.getElementById("videoPlayer").src = "";
  });

function renderAllRockets() {
  renderRockets(Object.keys(rocketsData));
}

async function deleteRocket(rocketId) {
  const confirmDelete = confirm("Are you sure you want to delete this rocket?");
  if (!confirmDelete) {
    return;
  }
  try {
    const response = await fetch(`http://localhost:8080/rockets/${rocketId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Rocket deleted");
      fetchRockets();
    } else {
      throw new Error(`Error deleting rocket with ID ${rocketId}`);
    }
  } catch (error) {
    console.error("Error deleting rocket:", error);
  }
}

window.deleteRocket = deleteRocket;

renderAllRockets();
