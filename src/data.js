// transaction based logging

const data = {
  activities: ['press ups', 'sit ups', 'jogging'],
  targets: [
    { activity: 'press ups', amount: 200 },
    { activity: 'sit ups', amount: 100 }
  ],
  logs: [
    { dateTime: '2018-10-02 13:01', activity: 'press ups', amount: 50 },
    { dateTime: '2018-10-01 18:30', activity: 'press ups', amount: 10 },
    { dateTime: '2018-10-01 11:59', activity: 'press ups', amount: 10 }
  ]
}

export default data
