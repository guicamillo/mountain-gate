const heatPumpLoad = 3.5;
const evLoad = 7.7;

const calculateLoad = (load: number, units: number, adoptionFactor: number) => {
  return load * units * adoptionFactor * 0.6;
};

export const electricityConsumptionData = {
  "26730028": {
    name: "Moorside",
    maxRating: "50kva",
    totalNumberOfServicedUnits: 20,
    currentUsage: {
      max: {
        Night: 17.5,
        Morning: 18.87,
        Afternoon: 28.51,
        Evening: 31.0,
      },
    },
    projections: [
      {
        timeChunk: "Night",
        currentMaxLoad: 17.5,
        projectedEvLoad: calculateLoad(evLoad, 20, 0.3),
        projectedHeatPumpLoad: 0,
        get projectedTotalLoad() {
          return this.currentMaxLoad + this.projectedEvLoad + this.projectedHeatPumpLoad;
        },
        get projectedTotalLoadWithThrottledEVs() {
          return this.currentMaxLoad + this.projectedEvLoad / 2 + this.projectedHeatPumpLoad;
        },
        maxRatedLoad: 50,
      },
      {
        timeChunk: "Morning",
        currentMaxLoad: 18.87,
        projectedEvLoad: 0,
        projectedHeatPumpLoad: calculateLoad(heatPumpLoad, 20, 0.5),
        get projectedTotalLoad() {
          return this.currentMaxLoad + this.projectedEvLoad + this.projectedHeatPumpLoad;
        },
        get projectedTotalLoadWithThrottledEVs() {
          return this.currentMaxLoad + this.projectedEvLoad / 2 + this.projectedHeatPumpLoad;
        },
        maxRatedLoad: 50,
      },
      {
        timeChunk: "Afternoon",
        currentMaxLoad: 28.51,
        projectedEvLoad: 0,
        projectedHeatPumpLoad: calculateLoad(heatPumpLoad, 20, 0.5),
        get projectedTotalLoad() {
          return this.currentMaxLoad + this.projectedEvLoad + this.projectedHeatPumpLoad;
        },
        get projectedTotalLoadWithThrottledEVs() {
          return this.currentMaxLoad + this.projectedEvLoad / 2 + this.projectedHeatPumpLoad;
        },
        maxRatedLoad: 50,
      },
      {
        timeChunk: "Evening",
        currentMaxLoad: 31,
        projectedEvLoad: calculateLoad(evLoad, 20, 0.3),
        projectedHeatPumpLoad: calculateLoad(heatPumpLoad, 20, 0.5),
        get projectedTotalLoad() {
          return this.currentMaxLoad + this.projectedEvLoad + this.projectedHeatPumpLoad;
        },
        get projectedTotalLoadWithThrottledEVs() {
          return this.currentMaxLoad + this.projectedEvLoad / 2 + this.projectedHeatPumpLoad;
        },
        maxRatedLoad: 50,
      },
    ],
  },
  "26730050": {
    name: "Ridgemoor",
    maxRating: "25kva",
    totalNumberOfServicedUnits: 15,
    currentUsage: {
      averages: {},
      max: {
        Night: 12.84,
        Morning: 16.71,
        Afternoon: 22.75,
        Evening: 22.52,
      },
    },
    projections: [
      {
        timeChunk: "Night",
        currentMaxLoad: 12.84,
        projectedEvLoad: calculateLoad(evLoad, 15, 0.3),
        projectedHeatPumpLoad: 0,
        get projectedTotalLoad() {
          return this.currentMaxLoad + this.projectedEvLoad + this.projectedHeatPumpLoad;
        },
        get projectedTotalLoadWithThrottledEVs() {
          return this.currentMaxLoad + this.projectedEvLoad / 2 + this.projectedHeatPumpLoad;
        },
        maxRatedLoad: 25,
      },
      {
        timeChunk: "Morning",
        currentMaxLoad: 16.71,
        projectedEvLoad: 0,
        projectedHeatPumpLoad: calculateLoad(heatPumpLoad, 15, 0.5),
        get projectedTotalLoad() {
          return this.currentMaxLoad + this.projectedEvLoad + this.projectedHeatPumpLoad;
        },
        get projectedTotalLoadWithThrottledEVs() {
          return this.currentMaxLoad + this.projectedEvLoad / 2 + this.projectedHeatPumpLoad;
        },
        maxRatedLoad: 25,
      },
      {
        timeChunk: "Afternoon",
        currentMaxLoad: 22.75,
        projectedEvLoad: 0,
        projectedHeatPumpLoad: calculateLoad(heatPumpLoad, 15, 0.5),
        get projectedTotalLoad() {
          return this.currentMaxLoad + this.projectedEvLoad + this.projectedHeatPumpLoad;
        },
        get projectedTotalLoadWithThrottledEVs() {
          return this.currentMaxLoad + this.projectedEvLoad / 2 + this.projectedHeatPumpLoad;
        },
        maxRatedLoad: 25,
      },
      {
        timeChunk: "Evening",
        currentMaxLoad: 22.52,
        projectedEvLoad: calculateLoad(evLoad, 15, 0.3),
        projectedHeatPumpLoad: calculateLoad(heatPumpLoad, 15, 0.5),
        get projectedTotalLoad() {
          return this.currentMaxLoad + this.projectedEvLoad + this.projectedHeatPumpLoad;
        },
        get projectedTotalLoadWithThrottledEVs() {
          return this.currentMaxLoad + this.projectedEvLoad / 2 + this.projectedHeatPumpLoad;
        },
        maxRatedLoad: 25,
      },
    ],
  },
  "26730039": {
    name: "Braemoor",
    maxRating: "50kva",
    totalNumberOfServicedUnits: 10,
    currentUsage: {
      max: {
        Night: 10.21,
        Morning: 15.22,
        Afternoon: 18.32,
        Evening: 18.18,
      },
    },
    projections: [
      {
        timeChunk: "Night",
        currentMaxLoad: 10.21,
        projectedEvLoad: 27.72,
        projectedHeatPumpLoad: 0,
        get projectedTotalLoad() {
          return this.currentMaxLoad + this.projectedEvLoad + this.projectedHeatPumpLoad;
        },
        get projectedTotalLoadWithThrottledEVs() {
          return this.currentMaxLoad + this.projectedEvLoad / 2 + this.projectedHeatPumpLoad;
        },
        maxRatedLoad: 50,
      },
      {
        timeChunk: "Morning",
        currentMaxLoad: 15.22,
        projectedEvLoad: 0,
        projectedHeatPumpLoad: calculateLoad(heatPumpLoad, 10, 0.5),
        get projectedTotalLoad() {
          return this.currentMaxLoad + this.projectedEvLoad + this.projectedHeatPumpLoad;
        },
        get projectedTotalLoadWithThrottledEVs() {
          return this.currentMaxLoad + this.projectedEvLoad / 2 + this.projectedHeatPumpLoad;
        },
        maxRatedLoad: 50,
      },
      {
        timeChunk: "Afternoon",
        currentMaxLoad: 18.32,
        projectedEvLoad: 0,
        projectedHeatPumpLoad: calculateLoad(heatPumpLoad, 10, 0.5),
        get projectedTotalLoad() {
          return this.currentMaxLoad + this.projectedEvLoad + this.projectedHeatPumpLoad;
        },
        get projectedTotalLoadWithThrottledEVs() {
          return this.currentMaxLoad + this.projectedEvLoad / 2 + this.projectedHeatPumpLoad;
        },
        maxRatedLoad: 50,
      },
      {
        timeChunk: "Evening",
        currentMaxLoad: 18.18,
        projectedEvLoad: calculateLoad(evLoad, 10, 0.3),
        projectedHeatPumpLoad: calculateLoad(heatPumpLoad, 10, 0.5),
        get projectedTotalLoad() {
          return this.currentMaxLoad + this.projectedEvLoad + this.projectedHeatPumpLoad;
        },
        get projectedTotalLoadWithThrottledEVs() {
          return this.currentMaxLoad + this.projectedEvLoad / 2 + this.projectedHeatPumpLoad;
        },
        maxRatedLoad: 50,
      },
    ],
  },
};

export const transformerUsageDataByMonth = [
  { Month: "2024-02-01T00:00:00.000", Transformer: "26730028", Usage: 25.21 },
  { Month: "2024-03-01T00:00:00.000", Transformer: "26730028", Usage: 24.66 },
  { Month: "2024-04-01T00:00:00.000", Transformer: "26730028", Usage: 23.96 },
  { Month: "2024-05-01T00:00:00.000", Transformer: "26730028", Usage: 23.23 },
  { Month: "2024-06-01T00:00:00.000", Transformer: "26730028", Usage: 28.51 },
  { Month: "2024-07-01T00:00:00.000", Transformer: "26730028", Usage: 21.95 },
  { Month: "2024-08-01T00:00:00.000", Transformer: "26730028", Usage: 20.99 },
  { Month: "2024-09-01T00:00:00.000", Transformer: "26730028", Usage: 23.75 },
  { Month: "2024-10-01T00:00:00.000", Transformer: "26730028", Usage: 25.46 },
  { Month: "2024-11-01T00:00:00.000", Transformer: "26730028", Usage: 24.29 },
  { Month: "2024-12-01T00:00:00.000", Transformer: "26730028", Usage: 26.53 },
  { Month: "2025-01-01T00:00:00.000", Transformer: "26730028", Usage: 27.47 },
  { Month: "2025-02-01T00:00:00.000", Transformer: "26730028", Usage: 14.39 },
  { Month: "2024-02-01T00:00:00.000", Transformer: "26730039", Usage: 14.77 },
  { Month: "2024-03-01T00:00:00.000", Transformer: "26730039", Usage: 18.05 },
  { Month: "2024-04-01T00:00:00.000", Transformer: "26730039", Usage: 15.22 },
  { Month: "2024-05-01T00:00:00.000", Transformer: "26730039", Usage: 15.99 },
  { Month: "2024-06-01T00:00:00.000", Transformer: "26730039", Usage: 13.64 },
  { Month: "2024-07-01T00:00:00.000", Transformer: "26730039", Usage: 16.77 },
  { Month: "2024-08-01T00:00:00.000", Transformer: "26730039", Usage: 14.85 },
  { Month: "2024-09-01T00:00:00.000", Transformer: "26730039", Usage: 14.02 },
  { Month: "2024-10-01T00:00:00.000", Transformer: "26730039", Usage: 16.63 },
  { Month: "2024-11-01T00:00:00.000", Transformer: "26730039", Usage: 18.32 },
  { Month: "2024-12-01T00:00:00.000", Transformer: "26730039", Usage: 17.07 },
  { Month: "2025-01-01T00:00:00.000", Transformer: "26730039", Usage: 18.18 },
  { Month: "2025-02-01T00:00:00.000", Transformer: "26730039", Usage: 4.38 },
  { Month: "2024-02-01T00:00:00.000", Transformer: "26730050", Usage: 22.52 },
  { Month: "2024-03-01T00:00:00.000", Transformer: "26730050", Usage: 17.2 },
  { Month: "2024-04-01T00:00:00.000", Transformer: "26730050", Usage: 18.51 },
  { Month: "2024-05-01T00:00:00.000", Transformer: "26730050", Usage: 16.48 },
  { Month: "2024-06-01T00:00:00.000", Transformer: "26730050", Usage: 16.65 },
  { Month: "2024-07-01T00:00:00.000", Transformer: "26730050", Usage: 22.34 },
  { Month: "2024-08-01T00:00:00.000", Transformer: "26730050", Usage: 18.39 },
  { Month: "2024-09-01T00:00:00.000", Transformer: "26730050", Usage: 17.31 },
  { Month: "2024-10-01T00:00:00.000", Transformer: "26730050", Usage: 17.6 },
  { Month: "2024-11-01T00:00:00.000", Transformer: "26730050", Usage: 18.68 },
  { Month: "2024-12-01T00:00:00.000", Transformer: "26730050", Usage: 20.7 },
  { Month: "2025-01-01T00:00:00.000", Transformer: "26730050", Usage: 18.04 },
  { Month: "2025-02-01T00:00:00.000", Transformer: "26730050", Usage: 6.03 },
];
