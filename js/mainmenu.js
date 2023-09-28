        // Reference to your Firestore document
        const docRef = db.collection("SEPTEMBER").doc("new app");

        // Reference to your HTML buttons
        const startButton = document.getElementById("startButton");
        const aboutButton = document.getElementById("aboutButton");

        // Listen for changes in Firestore document
        docRef.onSnapshot((doc) => {
            const data = doc.data();

            // Check the value field in Firestore
            if (data && data.value === true) {
                // If value is true, update button text from Firestore fields
                startButton.innerText = data.b1;
                aboutButton.innerText = data.b2;

                // Add click event listeners with redirection to MyWebApp.html
                startButton.addEventListener("click", () => {
                    window.location.href = "MyWebApp.html";
                });

                aboutButton.addEventListener("click", () => {
                    window.location.href = "MyWebApp.html";
                });
            }
            
            else {
                // If value is false, revert button text and change click behavior
                startButton.innerText = "Start Game";
                aboutButton.innerText = "About";

                // Add click event listeners with redirection to MyWebApp.html and MyAbout.html
                startButton.addEventListener("click", () => {
                    window.location.href = "MyWebApp.html";
                });

                aboutButton.addEventListener("click", () => {
                    window.location.href = "MyAbout.html";
                });
            }
        });