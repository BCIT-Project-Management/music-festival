
(function () {
    const festivalGrid = document.querySelector(".tickets-grid.tickets-passes");
    const hotelGrid = document.querySelector(".tickets-grid.hotel-passes");

    const festivalPasses = [
        {
            name: "General Admission",
            price: "$599",
        },
        {
            name: "Group Pack",
            price: "$1,099",
        },
        {
            name: "VIP",
            price: "$1,099",
        },
        {
            name: "Weekend Bundle",
            price: "$1,099",
        }
    ];

    const hotelPasses = [
        {
            name: "General Admission",
            price: "$599",
        },
        {
            name: "Group Pack",
            price: "$1,099",
        },
        {
            name: "VIP",
            price: "$1,099",
        },
        {
            name: "Weekend Bundle",
            price: "$1,099",
        }
    ]

    const buildPasses = (grid, passes) => {
        let index = 1
        for (const pass of passes) {
            const newCard = document.createElement("div");
            newCard.className = "tickets-card";
            newCard.style.gridArea = "grid" + index;
            index++;

            newCard.innerHTML = `
                <h3>${pass.name}</h3>
                <h4>SERVICE FEES INCLUDED IN PRICE</h4>
                <div>
                    <p class="tickets-card-weekend-pass">Weekend Pass</p>
                    <p class="tickets-card-starting-at">STARTING AT</p>
                    <p class="tickets-card-price">${pass.price}</p>
                </div>
                <p>Allows entrance to the venue all three days. GA Pass holders may visit the GA camping areas.</p>
            `;

            grid.appendChild(newCard);
        }
    }

    buildPasses(festivalGrid, festivalPasses);
    buildPasses(hotelGrid, hotelPasses);
}())
