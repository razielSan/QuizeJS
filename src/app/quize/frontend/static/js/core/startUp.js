import { Quize } from "../modules/question.js";

function startUp() {
    const quize = new Quize()
    quize.init()
}

export {startUp}