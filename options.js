const nameInput = document.getElementById("name-input")
const btnInput = document.getElementById("btn")

btnInput.addEventListener("click" , ()=> {
    const name = nameInput.value
    chrome.storage.sync.set({ name } , () => {
        console.log(`The name is ${name}`);
      });
})

chrome.storage.sync.get(["name"] , (res) => {
    nameInput.value = res.name ?? '???'
  });