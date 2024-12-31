function getRecipe() {
    const location = document.getElementById('location').value.trim();

    if (!location) {
        alert('Please enter your location.');
        return;
    }

    fetch(`/suggest-plans?location=${location}`)
        .then(response => response.json())
        .then(data => {
            const plansDiv = document.getElementById('plans');
            plansDiv.innerHTML = '';

            for (const activity in data.suggested_plans) {
                const locations = data.suggested_plans[activity];

                if (locations.length > 0) {
                    const activityHeading = document.createElement('h2');
                    activityHeading.textContent = activity.charAt(0).toUpperCase() + activity.slice(1);

                    const locationsList = document.createElement('ul');
                    locations.forEach(location => {
                        const listItem = document.createElement('li');
                        listItem.textContent = location;
                        locationsList.appendChild(listItem);
                    });

                    plansDiv.appendChild(activityHeading);
                    plansDiv.appendChild(locationsList);
                }
            }
        })
        .catch(error => {
            console.error('Error fetching weekend plans:', error);
            alert('An error occurred while fetching weekend plans. Please try again later.');
        });
}
