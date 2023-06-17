const heading = document.querySelector("h1")
function toggleText() {
    if (heading.innerText === "PW skills") {
        heading.innerText = "The most affordable learning platform"
    }
    else {
        heading.innerText = "PW skills"
    }
}