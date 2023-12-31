const headers = {
    1: "who-we-are",
    2: "our-services",
    3: "h2-portfolio",
    4: "location",
    5: "email-us"
};

// click listener
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (key >= "1" && key <= "5" && headers[key]) {
        const headerElement = document.getElementById(headers[key]);
        if (headerElement) {
            headerElement.scrollIntoView();
        }
    }
});