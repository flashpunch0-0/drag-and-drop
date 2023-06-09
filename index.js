// fetcing all the necessary classes and id's

// queryselectorall is selecting all elements with class item
const items = document.querySelectorAll(".item");

const container1 = document.getElementById("container1");
const droppableContainer = document.getElementById("container2");
const successMessage = document.getElementById("successMessage");

// for each items we iterate and setup EvetnListener on dragstart
items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
});

// adding drag events to drpppablecontainer where we are going to drop our items
// these are default drag events being called given by javascript
droppableContainer.addEventListener("dragenter", dragEnter);
droppableContainer.addEventListener("dragover", dragOver);
droppableContainer.addEventListener("dragleave", dragLeave);
droppableContainer.addEventListener("drop", drop);

// here we are assigning the data(or text) of the item to be dragged to a " drag-item-data" for useful purpose
function dragStart(event) {
  event.dataTransfer.setData("drag-item-data", event.target.innerHTML);
  //we can use drag-item-data in future to get the data of the dragged item so that we can later add in the droppable container
}

//event.preventDefault() prevents the default behavior (which is to not allow dropping) and can be used to provide visual feedback, such as highlighting the droppable area.
function dragEnter(event) {
  event.preventDefault();
}
function dragOver(event) {
  event.preventDefault();
}
function dragLeave(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  // as discussed we are getting the retreiving data of the dragged item
  const itemContent = event.dataTransfer.getData("drag-item-data");
  //command document.createElement("div") create a div when "drop" function is called so we are assigning this commmand to newItem variable
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.innerHTML = itemContent;
  //The appendChild() method appends a element as the last child of an element.
  //   droppableContainer.appendChild(newItem);
  // we can use either append or appendChild
  droppableContainer.append(newItem);
  // adding succes message to container successMessage
  successMessage.innerText = "Item dropped successfully!";
}

function reset() {
  droppableContainer.innerHTML = "";
  successMessage.innerText = "";
  items.forEach((item) => {
    container1.appendChild(item);
  });
}
