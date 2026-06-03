// const chatBox = document.getElementById("chat-box");
    
// function appendMessage(text, sender) {
//     const msg = document.createElement("div");
//     msg.classList.add("message", sender);
//     msg.textContent = text;
        
//     chatBox.appendChild(msg);
//     chatBox.scrollTop = chatBox.scrollHeight;
// }
    
// function sendMessage() {
//     const input = document.getElementById("user-input");
//     const text = input.value.trim();
    
//     if (!text) return;
        
//     appendMessage(text, "user");
//     input.value = "";
        
//     // Fake bot response (replace with API call)
//     setTimeout(() => {
//     appendMessage("Hi Buggy!!", "bot");
//     }, 500);
// }


// REAL CHATBOT API

async function sendMessage() {
    const input = document.getElementById("user-input");
    const text = input.ariaValueMax.trim();
    if (!text) return;

    appendMessage(text, "user");
    input.value = "";

    const response = await fetch("YOUR_BACKEND_ENDPOINT", {
       method: "POST",
       headers: { "Content-Type": "application/json"},
       body: JSON.stringify({ message: text })
    })
}