import {
  HkbForm, HkbSum, DailyHistory,
} from '../../components';
import { getState } from '../../store';
import {
  getDaysHistory, getAllIncome, getAllExpense, getMonthHistory,
} from '../../utils';
import { getAllHkbHist } from "../../apis";

const data = async () => {
  // api 호출 test
  const dataaaa = await getAllHkbHist();
  console.log(dataaaa);
};

const HkbPage = () => {
  // 이 부분에서 호출을 하게 되면 api의 return 결과를 렌더링 해주어서 일단 따로 분리하였다.
  // 추후에 개선 방법을 찾아보자..!
  const res = data();
  console.log(res);
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  const monthHistory = getMonthHistory(currentMonth, hkbHistory);
  const monthIncome = getAllIncome(monthHistory);
  const monthExpense = getAllExpense(monthHistory);

  const daysHistory = getDaysHistory(monthHistory);
  const days = Object.keys(daysHistory).sort().reverse();

  return (`
    <div class="hkb_page">
      ${HkbForm()}
      ${HkbSum(monthIncome, monthExpense)}
      <div class='history_list'>
        ${days.map((day) => DailyHistory(new Date(day), daysHistory[day])).join('')}
      </div>
    </div>
  `);
};

export default HkbPage;
