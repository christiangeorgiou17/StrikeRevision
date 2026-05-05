import { ENGLISH_LITERATURE_PAPER_1_EXAM_DATE, ENGLISH_LITERATURE_PAPER_2_EXAM_DATE } from "../../constants/exam-dates.js";
import { startCountdown } from "../../countdown.js";

startCountdown(ENGLISH_LITERATURE_PAPER_1_EXAM_DATE, "COUNTDOWN_PAPER_1", "Paper 1: ");
startCountdown(ENGLISH_LITERATURE_PAPER_2_EXAM_DATE, "COUNTDOWN_PAPER_2", "Paper 2: ");