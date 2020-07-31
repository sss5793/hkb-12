import './hkb.scss';
import {
  Layout, HkbForm, HkbSum, DailyHistory,
} from '../../components';
import { getState } from '../../store';
import { daysOfHistory, getAllIncome, getAllExpense } from '../../utils';

const HkbPage = () => {
  // function init() {
  //     // 초기 데이터
  //     const user = getState('user');
  //     console.log(user);
  //     // 이벤트 등록
  //     registerEvent('user',(data) => console.log(data));
  //     registerEvent('account',(data) => console.log(data));
  //
  //     // 데이터 변경
  //     setState('user', '사용자 1');
  // }
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  const monthHistory = hkbHistory.filter(
    (item) => item.createdAt.getMonth() + 1 === currentMonth
  );
  const monthIncome = getAllIncome(monthHistory);
  const monthExpense = getAllExpense(monthHistory);

  const daysHistory = daysOfHistory(monthHistory).reverse();

  return Layout(`
    <div class="hkb_page">
      ${HkbForm()}
      ${HkbSum(monthIncome,monthExpense)}
      <div class='history_list'>
        ${daysHistory.map((item) => DailyHistory(item)).join('')}
      </div>
    </div>
  `);
};

export default HkbPage;
