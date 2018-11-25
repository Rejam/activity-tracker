import id from 'uuid/v4';
// transaction based logging

const data = {
  activities: ['press ups', 'sit ups', 'jogging'],
  targets: [
    { 
      id: id(),
      activity: 'press ups',
      amount: 200
    },
    { 
      id: id(),
      activity: 'sit ups',
      amount: 100
    }
  ],
  logs: [
    {
      id: id(), 
      dateTime: '2018-10-02 13:01', activity: 'press ups',
      amount: 50
    },
    {
      id: id(), 
      dateTime: '2018-10-01 18:30', activity: 'press ups',
      amount: 10
    },
    {
      id: id(), 
      dateTime: '2018-10-01 11:59', activity: 'press ups',
      amount: 10
    }
  ]
}

export default data
