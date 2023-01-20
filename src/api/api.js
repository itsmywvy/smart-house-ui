import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://60e301959103bd0017b476e8.mockapi.io'
// })
const instance = axios.create({
  baseURL: 'https://60d6d2aa307c300017a5f50c.mockapi.io',
});

export const roomsAPI = {
  getRoomsData: () => instance.get('/rooms').then((res) => res.data),
};

export const membersAPI = {
  addMember: () => instance.post(`/members`).then((res) => console.log(res, 'Got it')),
  getMembers: () => instance.get('/members').then((res) => res.data),
};

export const billingAPI = {
  getHistoryData: () => instance.get('/billingHistory').then((res) => res.data),
  getChartData: () => instance.get('/billingChart').then((res) => res.data),
  payBill: (id) => instance.put(`/billingHistory/${id}`),
};
