const container = document.querySelector(".container-item");
const items = document.querySelectorAll(".list-item");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        item.classList.add("dragging")
    })

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging")
    })

    const reorderList = (e) => {
        e.preventDefault()
        const draggingItem = document.querySelector(".dragging")
        
        const remainingItem = [...container.querySelectorAll(".list-item:not(.dragging)")]
        const nextElement = remainingItem.find(item => {
            return e.clientY <= item.offsetTop + item.offsetHeight / 2;
        })
        container.insertBefore(draggingItem, nextElement)
    }

    container.addEventListener("dragover", reorderList);
    container.addEventListener("dragenter", (e) => e.preventDefault())
});
