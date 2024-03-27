const stateData = {
    pakistan: ["Punjab", "KPK", "Sindh", "Balochistan"],
    canada: [
      "Ontario",
      "Quebec",
      "British Columbia",
      "Alberta",
      "Manitoba",
    ],
    uk: ["England", "Scotland", "Wales", "Northern Ireland", "London"],
  };

  const cityData = {
    Punjab: ["Lahore", "Faisalabad", "Islamabad", "GujranWala", "Sialkot"],
    KPK: ["Mingora", "Peshawar", "Kohat", "Swabi", "Nowshera"],
    Sindh: ["Karachi", "Hyderabad", "Larkana", "Khairpur", "Mirpur Khas"],
    Balochistan: ["Quetta", "Turbat", "Khuzdar", "Chaman", "Gwadar"],
    Ontario: ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"],
    Quebec: ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil"],
    "British Columbia": [
      "Vancouver",
      "Surrey",
      "Burnaby",
      "Richmond",
      "Kelowna",
    ],
    Alberta: [
      "Calgary",
      "Edmonton",
      "Red Deer",
      "Lethbridge",
      "St. Albert",
    ],
    Manitoba: [
      "Winnipeg",
      "Brandon",
      "Steinbach",
      "Portage la Prairie",
      "Thompson",
    ],
    England: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
    Scotland: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Inverness"],
    Wales: ["Cardiff", "Swansea", "Newport", "Bangor", "St. Davids"],
    "Northern Ireland": [
      "Belfast",
      "Londonderry",
      "Newry",
      "Armagh",
      "Lisburn",
    ],
  };

  function populateStates() {
    const countrySelect = document.getElementById("countrySelect");
    const stateSelect = document.getElementById("stateSelect");
    const country = countrySelect.value;
    stateSelect.innerHTML = "<option value=''>Select State</option>";
    if (country !== "") {
      stateData[country].forEach(function (state) {
        const option = document.createElement("option");
        option.text = state;
        option.value = state;
        stateSelect.appendChild(option);
      });
      stateSelect.style.display = "inline-block";
    } else {
      stateSelect.style.display = "none";
    }
    document.getElementById("citySelect").style.display = "none";
  }

  function populateCities() {
    const stateSelect = document.getElementById("stateSelect");
    const citySelect = document.getElementById("citySelect");
    const state = stateSelect.value;
    citySelect.innerHTML = "<option value=''>Select City</option>";
    if (state !== "") {
      cityData[state].forEach(function (city) {
        const option = document.createElement("option");
        option.text = city;
        option.value = city;
        citySelect.appendChild(option);
      });
      citySelect.style.display = "inline-block";
    } else {
      citySelect.style.display = "none";
    }
  }