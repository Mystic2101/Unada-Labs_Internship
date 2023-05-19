const data = [];

function create(item) {
  data.push(item);
}

function read() {
  return data;
}

function update(index, newItem) {
  if (index >= 0 && index < data.length) {
    data[index] = newItem;
  }
}

function del(index) {
  if (index >= 0 && index < data.length) {
    data.splice(index, 1);
  }
}

function displayOptions() {
  console.log("Options:");
  console.log("1. Add an item");
  console.log("2. Read all items");
  console.log("3. Update an item");
  console.log("4. Delete an item");
  console.log("5. Exit");
}

function Choice(choice) {
  switch (choice) {
    case "1":
      const newItem = prompt("Enter the item to add:");
      create(newItem);
      console.log("Item added successfully!");
      break;
    case "2":
      console.log(read());
      break;
    case "3":
      const updateIndex = prompt("Enter the index of the item to update:");
      const updatedItem = prompt("Enter the new item value:");
      update(Number(updateIndex), updatedItem);
      console.log("Item updated successfully!");
      break;
    case "4":
      const deleteIndex = prompt("Enter the index of the item to delete:");
      del(Number(deleteIndex));
      console.log("Item deleted successfully!");
      break;
    case "5":
      console.log("You have exited");
      return;
    default:
      console.log("Invalid choice. Please try again.");
  }

  displayOptions();
  const nextChoice = prompt("Enter your choice (1-5):");
  Choice(nextChoice);
}

displayOptions();
const initialChoice = prompt("Enter your choice (1-5):");
Choice(initialChoice);
