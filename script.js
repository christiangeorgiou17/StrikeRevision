import { MEETING_INFORMATION } from "./constants/meeting-information.js";


function displayMeetingInformation() {
    const meetingInfoContainer = document.getElementById("MEETING_INFORMATION");
    for (const subject in MEETING_INFORMATION) {
        const info = MEETING_INFORMATION[subject];
        const subjectElement = document.createElement("div");
        subjectElement.className = "meeting-grid-item";
        let linkInfo;
        if (info.link === "TBD") {
            linkInfo = "TBD";
        } else if (info.link.startsWith("https://calendar.app.google/")) {
            linkInfo = `<a href="${info.link}">Click here to join</a>`;
        } else if (info.link.startsWith("https://drive.google.com/")) {
            linkInfo = `<a href="${info.link}">Click here to rewatch</a>`;
        } else {
            linkInfo = info.link;
        }
        subjectElement.innerHTML = `<h3>${info.name}</h3>
                                     <p><strong>Link:</strong> ${linkInfo}</p>
                                     <p><strong>Time:</strong> ${info.time}</p>
                                     <p><strong>Paper:</strong> ${info.paper}</p>
                                     <p><strong>Host:</strong> ${info.host}</p>`;
        meetingInfoContainer.appendChild(subjectElement);
    }
}

displayMeetingInformation();