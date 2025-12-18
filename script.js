function checkFriday() {
    const day = document.getElementById("day-select").value;
    const result = document.getElementById("result");
    if (!day) {
        result.textContent = "Select a day to proceed.";
        return;
    }
    if (day === "Friday") {
        result.textContent = "Yes. It is Friday. The universe aligns.";
    } else {
        result.textContent = "No. It is not Friday. Our sensors detect disappointment.";
    }
}