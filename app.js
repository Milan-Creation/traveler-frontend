async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const apiKey = "your_api_key"; // Replace with a real API key
  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById(
      "result"
    ).innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  } catch (error) {
    document.getElementById("result").innerText =
      "Error fetching exchange rate";
  }
}

document.querySelectorAll('input[name="tripType"]').forEach((radio) => {
  radio.addEventListener("change", (event) => {
    console.log("Selected Trip Type:", event.target.value);
  });
});

let currentLocationUrl = window.location.pathname;

if (currentLocationUrl == `/flight/search`) {
  document.addEventListener("DOMContentLoaded", function () {
    new Glider(document.querySelector("#weeklyFareItems"), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: true,
      arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
      },
      responsive: [
        {
          breakpoint: 576, // Small devices
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // Medium devices
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992, // Large devices
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
}

$(document).ready(function () {
  $("#departure").daterangepicker(
    {
      singleDatePicker: true,
      showDropdowns: true,
      showWeekNumbers: true,
      timePicker: false,
      autoUpdateInput: false,
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
      alwaysShowCalendars: true,
      startDate: moment(),
      endDate: moment(),
    },
    function (start, end, label) {
      $("#departure").val(start.format("YYYY-MM-DD"));
      console.log(
        "New date range selected: " +
          start.format("YYYY-MM-DD hh:mm:ss A") +
          " to " +
          end.format("YYYY-MM-DD hh:mm:ss A") +
          " (predefined range: " +
          label +
          ")"
      );
    }
  );
});

$(document).ready(function () {
  $("#return").daterangepicker(
    {
      singleDatePicker: true,
      showDropdowns: true,
      showWeekNumbers: true,
      timePicker: false,
      autoUpdateInput: false,
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
      alwaysShowCalendars: true,
      startDate: moment(),
      endDate: moment(),
    },
    function (start, end, label) {
      $("#return").val(end.format("YYYY-MM-DD"));
      console.log(
        "New date range selected: " +
          start.format("YYYY-MM-DD hh:mm:ss A") +
          " to " +
          end.format("YYYY-MM-DD hh:mm:ss A") +
          " (predefined range: " +
          label +
          ")"
      );
    }
  );
});

const cities = [
  { name: "Mumbai, India", code: "BOM" },
  { name: "New Delhi, India", code: "DEL" },
  { name: "Bangkok, Thailand", code: "BKK" },
  { name: "Bengaluru, India", code: "BLR" },
  { name: "Pune, India", code: "PNQ" },
  { name: "Hyderabad, India", code: "HYD" },
  { name: "Kolkata, India", code: "CCU" },
  { name: "Chennai, India", code: "MAA" },
  { name: "Goa, India", code: "GOI" },
  { name: "Dubai, UAE", code: "DXB" },
];

$(document).ready(function () {
  let select = $(".citySelect");

  // Populate dropdown with city options
  cities.forEach((city) => {
    select.append(new Option(`${city.name} (${city.code})`, city.code));
  });

  // Handle selection change
  select.change(function () {
    $(".citySelect option:selected").text();
  });
});

// Aside Price Slider
let loader = document.querySelector(".loader");
window.addEventListener("load", (event) => {
  if (loader) {
    loader.style.display = "none";
  }
});

// Price Slider
const slider = document.getElementById("priceSlider");
const selectedPrice = document.getElementById("selectedPrice");

slider.addEventListener("input", function () {
  selectedPrice.textContent = `₹ ${parseInt(slider.value).toLocaleString()}`;
});
