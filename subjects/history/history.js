import { HISTORY_PAPER_1A_EXAM_DATE, HISTORY_PAPER_1B_EXAM_DATE, HISTORY_PAPER_2A_EXAM_DATE, HISTORY_PAPER_2B_EXAM_DATE } from "../../constants/exam-dates.js";
import { startCountdown } from "../../countdown.js";

startCountdown(HISTORY_PAPER_1A_EXAM_DATE, "COUNTDOWN_PAPER_1A", "Paper 1A: ");
startCountdown(HISTORY_PAPER_1B_EXAM_DATE, "COUNTDOWN_PAPER_1B", "Paper 1B: ");
startCountdown(HISTORY_PAPER_2A_EXAM_DATE, "COUNTDOWN_PAPER_2A", "Paper 2A: ");
startCountdown(HISTORY_PAPER_2B_EXAM_DATE, "COUNTDOWN_PAPER_2B", "Paper 2B: ");