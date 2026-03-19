
// const cardContainer = document.getElementById("card-container");
// async function allIssues() {
//     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
//     const data = await res.json();
//     displayAll(data.data)
// };

// function coundIssue(){
//     totalIssuesCound.innerText = cardContainer.children.length
// };

// function displayAll(issues) {
//     console.log(issues)
//     issues.forEach(issu => {
//         console.log(issu);
//         const card = document.createElement("div")
//         card.className = "shadow-md rounded-1 border-t-4 border-[#00A96E]"
//         card.innerHTML = `
//             <div>
//                 <div class="p-4">
//                     <div class="flex  justify-between">
//                         <img src="./assets/Open-Status.png" alt="">
//                         <h3 class="bg-[#FEECEC] px-6 py-2 rounded-full badge badge-warning">${issu.priority}</h3>
//                     </div>
//                     <h2 class="font-semibold text-[14px] mt-3">${issu.title}</h2>
//                     <p class="text-[12px] text-[#64748B] mt-2 line-clamp-2">${issu.description}</p>
//                     <div class="flex gap-1 mt-3">
//                         <span
//                             class="bg-[#FEECEC] px-2 py-2.25 rounded-full gap-2 border-2 border-[#FECACA] text-[#EF4444] badge"><i
//                                 class="fa-solid fa-bug"></i>${issu.labels[0]}</span>
//                         <span
//                             class="badge font-medium text-[12px] bg-[#FDE68A] px-2 py-2.25 rounded-full gap-2 border-2 border-[#FECACA] text-[#EF4444] justify-center text-center"><img
//                                 src="./assets/help_wanted.png" alt="">${issu.labels[1]}</span>
//                     </div>
//                 </div>
//                 <hr class="mt-4 border-2 border-[#E4E4E7]">
//                 <div class="p-4 text-[#64748B] text-[12px]">
//                     <p>${issu.createdAt}</p>
//                     <p>${issu.updatedAt}</p>
//                 </div>
//             </div>
//         `
//         cardContainer.appendChild(card)
//     });
// };
// allIssues()