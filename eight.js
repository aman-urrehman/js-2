function countdown(eventDate){
    const today = new Date();
    const daysUntilEvent = Math.floor((eventDate - today) /(1000 * 60 * 60 * 24));
    return daysUntilEvent;
}
const eventDateInput = prompt("Enter Event Date(YYYY-MM-DD):");
const eventDate = new Date(eventDateInput);
const daysLeft = countdown(eventDate)
console.log(`Days until event: ${daysLeft}`)