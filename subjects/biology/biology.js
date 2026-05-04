import { BIOLOGY_PAPER_1_EXAM_DATE, BIOLOGY_PAPER_2_EXAM_DATE } from "../../constants/exam-dates.js";
import { startCountdown } from "../../countdown.js";

startCountdown(BIOLOGY_PAPER_1_EXAM_DATE, "COUNTDOWN_PAPER_1", "Paper 1: ");
startCountdown(BIOLOGY_PAPER_2_EXAM_DATE, "COUNTDOWN_PAPER_2", "Paper 2: ");