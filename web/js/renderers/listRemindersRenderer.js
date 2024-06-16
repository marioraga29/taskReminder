"use strict";

import { parseHTML } from "/web/js/utils/parseHTML.js";
import { reminderRenderer } from "./reminderRender.js";

const listReminders = {
    asListOfCards: function(reminders) {
        let listContainer = parseHTML('<div class="listCard" id="listCard"></div>');
        let row = parseHTML('<div class="row"></div>');
        listContainer.appendChild(row);

        let counter = 0;

        for (let reminder of reminders) {
            let card = reminderRenderer.asCard(reminder);
            row.appendChild(card);
            counter += 1;

            if (counter % 3 === 0) {
                row = parseHTML('<div class="row"></div>');
                listContainer.appendChild(row);
            }
        }
        return listContainer;
    }
}

export {listReminders};