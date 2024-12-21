const text = document.getElementById("textId");

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const MySpan = document.querySelectorAll("span");

MySpan.forEach(span => {
    span.addEventListener("mouseover", () => {
        span.classList.add("active");
    });
});