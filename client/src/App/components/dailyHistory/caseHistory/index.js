import './caseHistory.scss';
import { numberWithCommas } from '../../../utils';

const CaseHistory = (data) => {
  const { category, content, payment, amount, type } = data;
  const historyType = type === '수입' ? '+' : '-';
  const historyTypeColor = type === '수입' ? '#3a78fe' : '#29b7ad';

  return `
	<tr class='case_history'>
    <td>
      <div class='category' style='background-color:${historyTypeColor}'>
        ${category}
      </div>
    </td>
    <td>
      <div class='content'>
        ${content}
      </div>
    </td>
    <td>
      <div class='payment'>
        ${payment}
      </div>
    </td>
    <td>
      <div class='amount' style='color:${historyTypeColor}'>
        ${historyType + numberWithCommas(amount)}원
      </div>
    </td>
  </tr>`;
};

export default CaseHistory;
