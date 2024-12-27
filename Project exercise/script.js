document.addEventListener("DOMContentLoaded", () => {
    
    const classesContainer = document.getElementById("classes-container");

   
    fetch("data/classes.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch classes data: ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            if (Array.isArray(data)) {
                displayClasses(data);
            } else {
                console.error("Invalid data format. Expected an array of classes.");
            }
        })
        .catch((error) => console.error("Error fetching data:", error));
});

/**
 * Displays a list of classes in the container.
 * @param {Array} classes - An array of class objects.
 */
function displayClasses(classes) {
    const classesContainer = document.getElementById("classes-container");
    classesContainer.innerHTML = ""; // Clear the container before adding new content

    classes.forEach((classItem) => {
        const classCard = `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${classItem.name}</h5>
                        <p class="card-text">${classItem.description}</p>
                        <button class="btn btn-primary" onclick="logClassDetails('${classItem.name}', '${classItem.description}')">View Details</button>
                    </div>
                </div>
            </div>`;
        classesContainer.innerHTML += classCard;
    });
}

/**
 * Logs class details to the console.
 * @param {string} name - The name of the class.
 * @param {string} description - The description of the class.
 */
function logClassDetails(name, description) {
    console.log(`Class Name: ${name}`);
    console.log(`Description: ${description}`);
}
