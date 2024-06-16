"use strict";
import { parseHTML } from "/web/js/utils/parseHTML.js";

const reminderRenderer = {
    asCard: function (reminder) {
        let html = `<div class="col-md-4">
        <div class="card bg-light text-dark" id="cardReminder">
                        <div class="card-body">
                            <p class="card-text">${reminder.body}</p>
                            <p class="text-muted small">Fecha: ${reminder.date}</p>
                        </div>
                    </div>
                    </div>`;
        let card = parseHTML(html);
        return card
    }
}

export { reminderRenderer };