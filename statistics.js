let videos = JSON.parse(localStorage.getItem("videos")) || [];

let totalViews = 0;
let totalLikes = 0;

videos.forEach(v => {
    totalViews += v.views;
    totalLikes += v.likes;
});

document.getElementById("views").innerText = totalViews;
document.getElementById("likes").innerText = totalLikes;

/* ===== GRAPH ===== */
let ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Views", "Likes"],
        datasets: [{
            label: "Your Stats",
            data: [totalViews, totalLikes],
            borderWidth: 1
        }]
    }
});