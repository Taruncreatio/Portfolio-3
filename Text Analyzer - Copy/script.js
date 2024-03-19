console.log("script wrorks")
uppercase.addEventListener("click", () => {
    console.log("Transforming to Uppercase")
    inptext.value = inptext.value.toUpperCase()
})

lowercase.addEventListener("click", () => {
    console.log("Removind Extra Spaces ..")
    inptext.value = inptext.value.toLowerCase()
})
removespaces.addEventListener("click", () => {
    console.log("Transforming to LowerCase")
    inptext.value = inptext.value.replace(/\s+/g,' ').trim();
})
removelines.addEventListener("click", () => {
    console.log("Transforming to LowerCase")
    inptext.value = inptext.value.replace(/\n+/g,'\n').trim();
})

inptext.addEventListener("input" , () => { 
    console.log("changed")
    charCount.innerText = inptext.value.length
    wordCount.innerText = inptext.value.trim().split(" ").length

 })