const data = {
  activities: ["press ups", "sit ups", "jogging"],
  currentWeekTargets: [{ activity: "press ups", target: 200, current: 50 }],
  history: [
    [
      "2018-09-16T23:00:00.000Z",
      { activity: "press ups", target: 50, current: 60 },
      { activity: "sit ups", target: 100, current: 100 },
      { activity: "jogging", target: 30, current: 20 }
    ],
    [
      "2018-09-23T23:00:00.000Z",
      { activity: "sit ups", target: 50, current: 50 },
      { activity: "jogging", target: 30, current: 0 }
    ]
  ]
};

export default data;
