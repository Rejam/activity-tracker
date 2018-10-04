// transaction based logging

const data = {
  activities: ["press ups", "sit ups", "jogging"],
  targets: [
    { activity: "press ups", target: 200 },
    { activity: "sit ups", target: 100 }
  ],
  logs: [
    { date: "2018-10-02", activity: "press ups", amount: 50 },
    { date: "2018-10-01", activity: "press ups", amount: 10 },
    { date: "2018-10-01", activity: "press ups", amount: 10 }
  ]
};

export default data;
