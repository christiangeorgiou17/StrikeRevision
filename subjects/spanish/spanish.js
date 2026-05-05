import { SPANISH_LISTENING_EXAM_DATE, SPANISH_READING_EXAM_DATE, SPANISH_WRITING_EXAM_DATE } from "../../constants/exam-dates.js";
import { startCountdown } from "../../countdown.js";

startCountdown(SPANISH_LISTENING_EXAM_DATE, "COUNTDOWN_LISTENING", "Listening: ");
startCountdown(SPANISH_READING_EXAM_DATE, "COUNTDOWN_READING", "Reading: ");
startCountdown(SPANISH_WRITING_EXAM_DATE, "COUNTDOWN_WRITING", "Writing: ");
