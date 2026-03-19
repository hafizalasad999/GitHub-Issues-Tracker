let allIssuesData = [];
let issueCound = [];
let currentFilter = "all"
let selectedIssue = null;
// let searchTimer;

// all dutton -> id
const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");
const totalIssuesCound = document.getElementById("issuesCound");
const cardContainer = document.getElementById("card-container");
const searchBtn = document.getElementById("serchBtn");
const loading = document.getElementById("loading");
const selectedIssueModal = document.getElementById("selectedIssueModal");

function coundIssue() {
    totalIssuesCound.innerText = cardContainer.children.length
}

// api function call 
async function loadIssues() {
    loading.classList.remove("hidden")
    loading.classList.add("flex")
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json();
    loading.classList.add("hidden")
    allIssuesData = data.data;
    applyFilter();
}

function renderIssues(issues) {
    cardContainer.innerHTML = "";
    issues.forEach(issu => {
        const card = document.createElement("div")
        card.className = "shadow-md rounded-2 border-t-4 border-[#00A96E]"
        card.innerHTML = `
            <div  onclick="openModal()">
                <div class="p-4">
                    <div class="flex justify-between">
                        <img src="./assets/Open-Status.png" alt="">
                        <h3 class="bg-[#FEECEC] px-6 py-2 rounded-full badge badge-warning">${issu.priority}</h3>
                    </div>

                    <h2 class="font-semibold text-[14px] mt-3">${issu.title}</h2>
                    <p class="text-[12px] text-[#64748B] mt-2 line-clamp-2">${issu.description}</p>

                    <div class="flex gap-1 mt-3">
                        <span class="bg-[#FEECEC] px-2 py-2 rounded-full border-2 border-[#FECACA] text-[#EF4444] badge">
                            <i class="fa-solid fa-bug"></i>
                            ${issu.labels[0]}
                        </span>

                        <span class="badge text-[12px] bg-[#FDE68A] px-2 py-2 rounded-full border-2 border-[#FECACA] text-[#EF4444]">
                            <img src="./assets/help_wanted.png" alt="">
                            ${issu.labels[1]}
                        </span>
                    </div>
                </div>

                <hr class="mt-4 border-2 border-[#E4E4E7]">

                <div class="p-4 text-[#64748B] text-[12px]">
                    <p>${issu.createdAt}</p>
                    <p>${issu.updatedAt}</p>
                </div>
            </div>
        `
        cardContainer.appendChild(card);
    });
    coundIssue();
};

function applyFilter() {
    let filtered = [];
    if (currentFilter === "all") {
        filtered = allIssuesData;
    } else if (currentFilter === "open") {
        filtered = allIssuesData.filter(i => i.status === "open");
    } else if (currentFilter === "closed") {
        filtered = allIssuesData.filter(i => i.status === "closed");
    }

    activeBtn(filtered);
    renderIssues(filtered);
};

function activeBtn() {
    allBtn.classList.remove("btn-active");
    openBtn.classList.remove("btn-active");
    closedBtn.classList.remove("btn-active");
    if (currentFilter === "all") {
        allBtn.classList.add("btn-active");
    }
    else if (currentFilter === "open") {
        openBtn.classList.add("btn-active");
    }
    else {
        closedBtn.classList.add("btn-active");
    }
};

async function openModal(issues) {
    const res = fetch("https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}");
    const data = (await res).json()
    const issueData = data.data;
    console.log(issueData)
    selectedIssueModal.showModal()
    const title = document.getElementById("title").innerText= issueData.title
    const description = document.getElementById("description")

}

allBtn.addEventListener("click", () => {
    currentFilter = "all";
    applyFilter();
});

openBtn.addEventListener("click", () => {
    currentFilter = "open";
    applyFilter();
});

closedBtn.addEventListener("click", () => {
    currentFilter = "closed";
    applyFilter()
});

loadIssues();