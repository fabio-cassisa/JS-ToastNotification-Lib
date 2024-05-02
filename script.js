import Toast from "./Toast.js";

const toast = new Toast({position: "top-right", text: "Ciao!"})

setTimeout(() => {
    toast.remove()
}, 1000)