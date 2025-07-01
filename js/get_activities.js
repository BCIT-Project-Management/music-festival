(function () {
    const activityList = document.querySelector(".activities-list");

    const activities =  [
        {
            date: "Thursday, July 21",
            img: "./assets/passes/festival.png",
            title: "Glow Paint Station",
            description: "Unleash your inner artist with UV-reactive face and body paint. Whether you’re going full festival glam or just adding a splash of color, our neon station keeps you glowing all night long.",
        },
        {
            date: "Friday, July 22",
            img: "./assets/passes/festival.png",
            title: "DIY Craft Garden",
            description: "Take a breather and get hands-on with creative DIY booths. Design your own kandi bracelets, customize tote bags, or leave your mark on our collaborative community mural.",
        },
        {
            date: "Saturday, July 23",
            img: "./assets/passes/festival.png",
            title: "Lawn Games & Chill Zone",
            description: "Need a break from dancing? Head over to the grass for jumbo Jenga, hula hoops, and chill hammocks. It’s the perfect spot to reset, connect, and vibe out under the sky.",
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
                        <div>
                            <h3>${activity.title}</h3>
                            <h4>${activity.date}</h4>
                        </div>
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