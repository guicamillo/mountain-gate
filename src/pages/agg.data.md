# Transformer data

```json
{
  "26730028": {
    "name": "Moorside",
    "maxRating": "50kva",
    "totalNumberOfServicedUnits": 10,
    "currentUsage": {
      "max": {
        "Night": 17.5,
        "Morning": 18.87,
        "Afternoon": 28.51,
        "Evening": 31.0
      }
    },
    "projections": [
      {
        "timeChunk": "Night",
        "currentMaxLoad": 17.5,
        "projectedEvLoad": 27.72,
        "projectedHeatPumpLoad": 0,
        "projectedTotalLoad": 45.22,
        "maxRatedLoad": 50,
        "Exceeds?": "No"
      },
      {
        "timeChunk": "Morning",
        "currentMaxLoad": 18.87,
        "projectedEvLoad": 0,
        "projectedHeatPumpLoad": 15,
        "projectedTotalLoad": 33.87,
        "maxRatedLoad": 50,
        "Exceeds?": "No"
      },
      {
        "timeChunk": "Afternoon",
        "currentMaxLoad": 28.51,
        "projectedEvLoad": 0,
        "projectedHeatPumpLoad": 15,
        "projectedTotalLoad": 43.51,
        "maxRatedLoad": 50,
        "Exceeds?": "No"
      },
      {
        "timeChunk": "Evening",
        "currentMaxLoad": 31,
        "projectedEvLoad": 27.72,
        "projectedHeatPumpLoad": 0,
        "projectedTotalLoad": 58.72,
        "maxRatedLoad": 50,
        "Exceeds?": "Yes"
      }
    ]
  },
  "26730050": {
    "name": "Ridgemoor",
    "maxRating": "25kva",
    "totalNumberOfServicedUnits": 10,
    "currentUsage": {
      "averages": {},
      "max": {
        "Night": 12.84,
        "Morning": 16.71,
        "Afternoon": 22.75,
        "Evening": 22.52
      }
    },
    "projections": [
      {
        "timeChunk": "Night",
        "currentMaxLoad": 12.84,
        "projectedEvLoad": 27.72,
        "projectedHeatPumpLoad": 0,
        "projectedTotalLoad": 40.56,
        "maxRatedLoad": 25,
        "Exceeds?": "Yes"
      },
      {
        "timeChunk": "Morning",
        "currentMaxLoad": 16.71,
        "projectedEvLoad": 0,
        "projectedHeatPumpLoad": 15,
        "projectedTotalLoad": 31.71,
        "maxRatedLoad": 25,
        "Exceeds?": "Yes"
      },
      {
        "timeChunk": "Afternoon",
        "currentMaxLoad": 22.75,
        "projectedEvLoad": 0,
        "projectedHeatPumpLoad": 15,
        "projectedTotalLoad": 37.75,
        "maxRatedLoad": 25,
        "Exceeds?": "Yes"
      },
      {
        "timeChunk": "Evening",
        "currentMaxLoad": 22.52,
        "projectedEvLoad": 27.72,
        "projectedHeatPumpLoad": 0,
        "projectedTotalLoad": 50.24,
        "maxRatedLoad": 25,
        "Exceeds?": "Yes"
      }
    ]
  },
  "26730039": {
    "name": "Braemoor",
    "maxRating": "50kva",
    "totalNumberOfServicedUnits": 10,
    "currentUsage": {
      "max": {
        "Night": 10.21,
        "Morning": 15.22,
        "Afternoon": 18.32,
        "Evening": 18.18
      }
    },
    "projections": [
      {
        "timeChunk": "Night",
        "currentMaxLoad": 10.21,
        "projectedEvLoad": 27.72,
        "projectedHeatPumpLoad": 0,
        "projectedTotalLoad": 37.93,
        "maxRatedLoad": 50,
        "Exceeds?": "No"
      },
      {
        "timeChunk": "Morning",
        "currentMaxLoad": 15.22,
        "projectedEvLoad": 0,
        "projectedHeatPumpLoad": 15,
        "projectedTotalLoad": 30.22,
        "maxRatedLoad": 50,
        "Exceeds?": "No"
      },
      {
        "timeChunk": "Afternoon",
        "currentMaxLoad": 18.32,
        "projectedEvLoad": 0,
        "projectedHeatPumpLoad": 15,
        "projectedTotalLoad": 33.32,
        "maxRatedLoad": 50,
        "Exceeds?": "No"
      },
      {
        "timeChunk": "Evening",
        "currentMaxLoad": 18.18,
        "projectedEvLoad": 27.72,
        "projectedHeatPumpLoad": 0,
        "projectedTotalLoad": 45.9,
        "maxRatedLoad": 50,
        "Exceeds?": "No"
      }
    ]
  }
}
```

### ID: 26730050

# Chunks

```json
{
  "Night": "12 AM - 6 AM",
  "Morning": "6 AM - 12 PM",
  "Afternoon": "12 PM - 6 PM",
  "Evening": "6 PM - 12 AM"
}
```

# Current avgs:

```json
{
  "Night": {
    "26730028": 6.78653,
    "26730039": 4.10668,
    "26730050": 5.46378
  },
  "Morning": {
    "26730028": 9.654,
    "26730039": 6.24147,
    "26730050": 7.38963
  },
  "Afternoon": {
    "26730028": 11.9943,
    "26730039": 7.83361,
    "26730050": 9.6967
  },
  "Evening": {
    "26730028": 13.0385,
    "26730039": 7.8205,
    "26730050": 9.06881
  }
}
```

### avg2

```json
{
  "26730028": {
    "Night": 6.78653,
    "Morning": 9.654,
    "Afternoon": 11.9943,
    "Evening": 13.0385
  },
  "26730039": {
    "Night": 4.10668,
    "Morning": 6.24147,
    "Afternoon": 7.83361,
    "Evening": 7.8205
  },
  "26730050": {
    "Night": 5.46378,
    "Morning": 7.38963,
    "Afternoon": 9.6967,
    "Evening": 9.06881
  }
}
```

# Current max limits

```json
{
  "26730028": {
    "Night": 17.5,
    "Morning": 18.87,
    "Afternoon": 28.51,
    "Evening": 31.0
  },
  "26730039": {
    "Night": 10.21,
    "Morning": 15.22,
    "Afternoon": 18.32,
    "Evening": 18.18
  },
  "26730050": {
    "Night": 12.84,
    "Morning": 16.71,
    "Afternoon": 22.75,
    "Evening": 22.52
  }
}
```
