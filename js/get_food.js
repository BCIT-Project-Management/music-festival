(function () {
    const foodDisplay = document.querySelector(".food-display");


    const streetFoodList = [
        {
            name: "Fried & Crispy",
            src: "./assets/food/fried_crispy.png",
            description: "Perfect for walking, sharing, or snacking between sets — everything here is deep-fried to perfection.",
        },
        {
            name: "Grill & Chill",
            src: "./assets/food/grill_chill.png",
            description: "From burgers to skewers, this is where smoke meets soul. Everything’s hot, hearty, and full of bold flavor.",
        },
        {
            name: "Global Eats",
            src: "./assets/food/global_eats.png",
            description: "International street food inspired by cultures across the globe — all served hot, handheld, and ready to party.",
        },
    ];

    const veganFoodList = [
        {
            name: "Vegan Wraps & Bowls",
            src: "./assets/food/vegan_wraps_bowls.png",
            description: "Quinoa & roasted veggie power bowls.",
        },
        {
            name: "Global Plant-Based Goodness",
            src: "./assets/food/global_plant_based_goodness.png",
            description: "Seasoned potato fries topped with vegan tzatziki, hummus drizzle, chopped tomatoes, cucumber, and fresh herbs.",
        },
        {
            name: "Vegan Desserts",
            src: "./assets/food/vegan_desserts.png",
            description: "Chill out with our most refreshing treat — creamy, dairy-free ice cream served on juicy, cold slices of watermelon.",
        },
    ];

    const sweetsAndBeveragesList = [
        {
            name: "Craft Beverages",
            src: "./assets/food/craft_beverages.png",
            description: "Discover handcrafted drinks made with love and local flair. From caffeine boosts to fruity blends, we’ve got a cup for every craving.",
        },
        {
            name: "Sweet Cravings",
            src: "./assets/food/sweet_cravings.png",
            description: "Right, fun, and festival-worthy—these treats will satisfy your sweet tooth in the most delightful ways.",
        },
        {
            name: "Cool Treats",
            src: "./assets/food/cool_treats.png",
            description: "Cool off with frozen favorites that bring the chill to the thrill. Perfect for a mid-day pick-me-up or a post-dance reward.",
        },
    ];

    const createFoodListing = (category, foodList) => {
        const title = document.createElement("h2");
        title.innerText = category;

        foodDisplay.append(title);

        const foodGrid = document.createElement("div");
        foodGrid.className = "food-grid";
        let innerHtml = "";
        foodList.forEach(food => {
            innerHtml += `
                <div class="food-grid-card">
                    <img src="${food.src}" alt="${food.name}">
                    <div>
                        <h3>${food.name}</h3>
                        <p>${food.description}</p>
                    </div>
                </div>
            `;
        });
        foodGrid.innerHTML = innerHtml;
        foodDisplay.append(foodGrid);
    }

    createFoodListing("Street Foods", streetFoodList);
    createFoodListing("Vegan Vibes", veganFoodList);
    createFoodListing("Sweet and Beverages", sweetsAndBeveragesList);
}())