import { MATHEMATICS_PAPER_1_EXAM_DATE, MATHEMATICS_PAPER_2_EXAM_DATE, MATHEMATICS_PAPER_3_EXAM_DATE } from "../../constants/exam-dates.js";
import { startCountdown } from "../../countdown.js";

startCountdown(MATHEMATICS_PAPER_1_EXAM_DATE, "COUNTDOWN_PAPER_1", "Paper 1: ");
startCountdown(MATHEMATICS_PAPER_2_EXAM_DATE, "COUNTDOWN_PAPER_2", "Paper 2: ");
startCountdown(MATHEMATICS_PAPER_3_EXAM_DATE, "COUNTDOWN_PAPER_3", "Paper 3: ");