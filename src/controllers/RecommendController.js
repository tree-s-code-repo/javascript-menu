import InputView from "../views/InputView.js";

class RecommendController {
  constructor() {}

  async start() {
    const coachNames = await InputView.readCoachName();
  }
}

export default RecommendController;
