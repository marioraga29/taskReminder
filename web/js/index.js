"use strict";
import { listReminders } from "./renderers/listRemindersRenderer.js";

let boddy = document.getElementById("changeColor");
let title = document.getElementById("title");

function main() {
    cargarReminders();
    let toggleButton = document.getElementById("tglbtn");
    let sidebar = document.getElementById('sidebar');
    let whiteButton = document.getElementById("white");
    let blackButton = document.getElementById("btnblack");
    whiteButton.onclick = changeWhite;
    blackButton.onclick = changeBlack;
    toggleButton.onclick = toggleSidebar;
    document.addEventListener('click', (event) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.remove('open');
        }
    });
}

function changeBlack() {
    boddy.style.backgroundColor = "black";
    title.style.color = "white";
    cardBlack();
}
function changeWhite() {
    boddy.style.backgroundColor = "white";
    title.style.color = "black";
    cardLight();
}

function cardBlack() {
    let container = document.getElementById("listCard");
    let cards = container.querySelectorAll(".card")
    for (let card of cards) {
        card.classList.remove("bg-light", "text-dark");
        card.classList.add("bg-dark", "text-light");
    }
}

function cardLight() {
    let container = document.getElementById("listCard");
    let cards = container.querySelectorAll(".card")
    for (let card of cards) {
        card.classList.remove("bg-dark", "text-light");
        card.classList.add("bg-light", "text-dark");
    }
}

function toggleSidebar() {
    sidebar.classList.toggle('open');
}

function cargarReminders() {
    const reminders = [
        {
            body: "Este es el cuerpo del recordatorio",
            date: "2024-06-30"
        },
        {
            body: "Este es el cuerpo del recordatorio",
            date: "2024-06-30"
        },
        {
            body: "Este es el cuerpo del recordatorio",
            date: "2024-06-30"
        },
        {
            body: "Este es el cuerpo del recordatorio",
            date: "2024-06-30"
        },

    ];
    let container = document.getElementById("remindersList");
    let cards = listReminders.asListOfCards(reminders);
    container.appendChild(cards);

}
document.addEventListener("DOMContentLoaded", main);