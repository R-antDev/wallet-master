// header menu section
//
// const hamburger = document.querySelector("#hamburger");
// const menu = document.querySelector("#menu");
// const hLink = document.querySelectorAll("#hLink");
// // const faSolid = document.querySelector(".fa-bars");
// const faSolid = document.querySelector("#header-bars");
//
// hamburger.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
//   faSolid.classList.toggle("fa-xmark");
// });
// hLink.forEach((link) => {
//   link.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
//     faSolid.classList.toggle("fa-xmark");
//   });
// });
//start body add section dom

document.getElementById("move-div").addEventListener("mouseenter", () => {
  const hover = document.getElementById("leve-div");
  hover.style.backgroundColor = "#0095ff";
});
document.getElementById("move-div").addEventListener("mouseleave", () => {
  const hover = document.getElementById("leve-div");
  hover.style.backgroundColor = "";
});

// start chirt section

const chartConfig = {
  series: [
    {
      name: "Money",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500]
    }
  ],
  chart: {
    type: "bar",
    height: 240,
    toolbar: {
      show: false
    }
  },
  title: {
    show: ""
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#0A429C"],
  plotOptions: {
    bar: {
      columnWidth: "30%",
      borderRadius: 2
    }
  },
  xaxis: {
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      style: {
        colors: "#0A429C",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400
      }
    },
    categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  yaxis: {
    labels: {
      style: {
        colors: "#0A429C",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400
      }
    }
  },
  grid: {
    show: true,
    borderColor: "#ddd",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true
      }
    },
    padding: {
      top: 5,
      right: 20
    }
  },
  fill: {
    opacity: 0.8
  },
  tooltip: {
    theme: "dark"
  }
};

const chart = new ApexCharts(document.querySelector("#bar-chart"), chartConfig);

chart.render();

// nest chart

const lineConfig = {
  series: [
    {
      name: "Money",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500]
    }
  ],
  chart: {
    type: "line",
    height: 240,
    toolbar: {
      show: false
    }
  },
  title: {
    show: ""
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#0A429C"],
  stroke: {
    lineCap: "round",
    curve: "straight",
    width: 2
  },
  markers: {
    size: 0
  },
  xaxis: {
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      style: {
        colors: "#616161",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400
      }
    },
    categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  yaxis: {
    labels: {
      style: {
        colors: "#616161",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400
      }
    }
  },
  grid: {
    show: true,
    borderColor: "#ddd",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true
      }
    },
    padding: {
      top: 5,
      right: 20
    }
  },
  fill: {
    opacity: 0.8
  },
  tooltip: {
    theme: "dark"
  }
};

const lchart = new ApexCharts(
  document.querySelector("#line-chart"),
  lineConfig
);

lchart.render();

// next
const cConfig = {
  series: [44, 55, 13, 43, 22],
  chart: {
    type: "pie",
    width: 280,
    height: 280,
    toolbar: {
      show: false
    }
  },
  title: {
    show: ""
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#00C246", "#0061FF", "#FFC700", "#00C1FA", "#12016F"],
  legend: {
    show: false
  }
};

const cchart = new ApexCharts(document.querySelector("#pie-chart"), cConfig);

cchart.render();

// create record modal
const recordModalContent = document.getElementById("record-modal-content");
const btnOpenRecordModal = document.getElementById("btn-open-record-modal");
btnOpenRecordModal.addEventListener("click", () => {
  openModal("record-modal");
  anime({
    targets: recordModalContent,
    opacity: [0, 1],
    scale: [0.7, 1],
    duration: 200,
    easing: "easeOutCubic"
  });
});

const btnCloseRecordModal = document.getElementById("btn-close-record-modal");
btnCloseRecordModal.addEventListener("click", () => {
  anime({
    targets: recordModalContent,
    opacity: [1, 0],
    scale: [1, 0.7],
    duration: 200,
    easing: "easeInCubic",
    complete: function() {
      closeModal("record-modal");
    }
  });
});

// modal open and close

function openModal(modal) {
  document.getElementById(modal).classList.remove("hidden");
}

function closeModal(modal) {
  document.getElementById(modal).classList.add("hidden");
}

// income and expanse form selection
const expenseTab = document.getElementById("expense-tab");
const incomeTab = document.getElementById("income-tab");
const expenseForm = document.getElementById("form-expense");
const incomeForm = document.getElementById("form-income");

expenseTab.addEventListener("click", () => {
  anime({
    targets: "#form-income",
    opacity: 0,
    translateX: -100,
    duration: 300,
    easing: "easeInOutQuad",
    complete: function() {
      incomeForm.classList.add("hidden");
      expenseForm.classList.remove("hidden");
      anime({
        targets: "#form-expense",
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 300,
        easing: "easeInOutQuad"
      });
    }
  });

  expenseTab.classList.add("bg-green-700", "text-white");
  incomeTab.classList.remove("bg-green-700", "text-white");
  expenseTab.classList.remove("text-green-700");
  incomeTab.classList.add("text-green-700");
});

incomeTab.addEventListener("click", () => {
  anime({
    targets: "#form-expense",
    opacity: 0,
    translateX: -100,
    duration: 300,
    easing: "easeInOutQuad",
    complete: function() {
      expenseForm.classList.add("hidden");
      incomeForm.classList.remove("hidden");
      anime({
        targets: "#form-income",
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 300,
        easing: "easeInOutQuad"
      });
    }
  });

  incomeTab.classList.add("bg-green-700", "text-white");
  expenseTab.classList.remove("bg-green-700", "text-white");
  incomeTab.classList.remove("text-green-700");
  expenseTab.classList.add("text-green-700");
});

// add wallet model

const btnOpenAddWalletModal = document.getElementById("btn-open-wallet-modal");

btnOpenAddWalletModal.addEventListener("click", () => {
  anime({
    targets: "#add-wallet-content",
    opacity: [0, 1],
    scale: [0.7, 1],
    duration: 200,
    easing: "easeOutCubic"
  });
  openModal("add-wallet-modal");
});

const btnCloseWalletModal = document.getElementById("btn-close-wallet-model");
btnCloseWalletModal.addEventListener("click", () => {
  anime({
    targets: "#add-wallet-content",
    opacity: [1, 0],
    scale: [1, 0.7],
    duration: 200,
    easing: "easeInCubic",
    complete: function() {
      closeModal("add-wallet-modal");
    }
  });
});

// notification modal
const btnNotification = document.getElementById("btn-notification");
btnNotification.addEventListener("click", () => {
  console.log("notification clicked");
  openModal("notification-modal");
});

const btnCloseNotification = document.getElementById("btn-close-notification");
btnCloseNotification.addEventListener("click", () => {
  closeModal("notification-modal");
});

const notificationModalBackground = document.getElementById(
  "notification-modal-background"
);
notificationModalBackground.addEventListener("click", () => {
  closeModal("notification-modal");
});
//

// mobile version hamburger menu

const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const menuCloseButton = document.getElementById("menu-close");

hamburger.addEventListener("click", () => {
  menu.classList.remove("hidden"); // Show the menu
});

menuCloseButton.addEventListener("click", () => {
  menu.classList.add("hidden"); // Hide the menu
});


//