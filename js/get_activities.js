(function () {
    const activityList = document.querySelector(".activities-list");

    const activities =  [
        {
            date: "Thursday, July 21",
            img: "./assets/passes/festival.png",
            title: "",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad reprehenderit iste velit ipsam libero non dolore. Vitae reiciendis ipsam ipsum aliquam culpa, ullam iste eaque excepturi dicta corporis nostrum.",
        },
        {
            date: "Friday, July 22",
            img: "./assets/passes/festival.png",
            title: "",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad reprehenderit iste velit ipsam libero non dolore. Vitae reiciendis ipsam ipsum aliquam culpa, ullam iste eaque excepturi dicta corporis nostrum.",
        },
        {
            date: "Saturday, July 23",
            img: "./assets/passes/festival.png",
            title: "",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad reprehenderit iste velit ipsam libero non dolore. Vitae reiciendis ipsam ipsum aliquam culpa, ullam iste eaque excepturi dicta corporis nostrum.",
        },
    ];

    const createActivities = () => {
        activities.forEach(activity => {
            const card = document.createElement("div");
            card.className = "activities-card";
            card.innerHTML = `
                <img src="${activity.img}" alt="${activity.title}"></img>
                <div class="activities-card-info">
                    <div>
                        <h3>${activity.date}</h3>
                        <p>${activity.description}</p>
                    </div>
                    <button class="activities-expand-button">Expand +</button>
                </div>
            `;
            activityList.append(card);
        });
    }

    createActivities();
}())