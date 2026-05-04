import { GEOGRAPHY_PAPER_1_EXAM_DATE, GEOGRAPHY_PAPER_2_EXAM_DATE, GEOGRAPHY_PAPER_3_EXAM_DATE } from "../../constants/exam-dates.js";
import { startCountdown } from "../../countdown.js";

startCountdown(GEOGRAPHY_PAPER_1_EXAM_DATE, "COUNTDOWN_PAPER_1", "Paper 1: ");
startCountdown(GEOGRAPHY_PAPER_2_EXAM_DATE, "COUNTDOWN_PAPER_2", "Paper 2: ");
startCountdown(GEOGRAPHY_PAPER_3_EXAM_DATE, "COUNTDOWN_PAPER_3", "Paper 3: ");