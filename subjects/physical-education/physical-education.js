import { PHYSICAL_EDUCATION_PAPER_1_EXAM_DATE, PHYSICAL_EDUCATION_PAPER_2_EXAM_DATE } from "../../constants/exam-dates.js";
import { startCountdown } from "../../countdown.js";

startCountdown(PHYSICAL_EDUCATION_PAPER_1_EXAM_DATE, "COUNTDOWN_PAPER_1", "Paper 1: ");
startCountdown(PHYSICAL_EDUCATION_PAPER_2_EXAM_DATE, "COUNTDOWN_PAPER_2", "Paper 2: ");