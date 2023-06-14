export const formData = {
  fields: [
    {
      name: "title",
      displayName: "Title",
      validation: true,
    },
    {
      name: "streetName",
      displayName: "Street Name",
      validation: false,
    },
    {
      name: "flowers",
      displayName: "Flowers",
      validation: false,
    },
    {
      name: "dateAcquired",
      displayName: "Date Acquired",
      validation: false,
    },
    {
      name: "sunlight",
      displayName: "Sunlight",
      validation: false,
    },
    {
      name: "temp",
      displayName: "Temperature",
      validation: false,
    },
    {
      name: "humidity",
      displayName: "Humidity",
      validation: false,
    },
    {
      name: "soilMix",
      displayName: "Soil Mix",
      validation: false,
    },
    {
      name: "daysBetweenWatering",
      displayName: "Days Between Watering",
      validation: true,
    },
    {
      name: "wateringConditions",
      displayName: "Watering Conditions",
      validation: false,
    },
    {
      name: "daysBetweenFertilizing",
      displayName: "Days Between Fertilizing",
      validation: true,
    },
    {
      name: "fertilizerPlan",
      displayName: "Fertilizer Plan",
      validation: false,
    },
    {
      name: "plantingTime",
      displayName: "Planting Time",
      validation: false,
    },
    {
      name: "pruning",
      displayName: "Pruning",
      validation: false,
    },
    {
      name: "harvestTime",
      displayName: "Harvest Time",
      validation: false,
    },
    {
      name: "propogation",
      displayName: "Propogation",
      validation: false,
    },
    {
      name: "pestsDiseases",
      displayName: "Pests and Diseases",
      validation: false,
    },
    {
      name: "notes",
      displayName: "Notes",
      validation: false,
      textArea: true,
    },
  ],
  arrayFields: ["images", "watering", "fertilizing"],
};
