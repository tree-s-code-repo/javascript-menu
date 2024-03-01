import { Console } from "@woowacourse/mission-utils";

class InputView {
  async readCoachName() {
    return await Console.readLineAsync(
      "코치의 이름을 입력해 주세요. (, 로 구분)"
    );
  }
  async readAntiFood(name) {
    return await Console.readLineAsync(
      `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`
    );
  }
}

export default InputView;
