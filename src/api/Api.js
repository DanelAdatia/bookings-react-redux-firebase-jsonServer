import axios from "axios";

export const FetchHotelDetails = async () => {
  const details = await axios.get("http://localhost:3000/Hotels");
  return details;
};

export const SendBookedHotels = async (AllData) => {
  const result = await axios.post("http://localhost:3005/ReceivingData", {
    ...AllData,
  });
  return result;
};

export const ShowBookedData = async () => {
  const result = await axios.get("http://localhost:3005/ReceivingData");
  return result;
};

export const DeleteBookedData = async (id) => {
  const result = await axios.delete(
    `http://localhost:3005/ReceivingData/${id}`
  );
  return result;
};

export const FetchFlightDetails = async () => {
  const details = await axios.get("http://localhost:3000/Flights");
  return details;
};

export const SendFlightDetails = async (AllData) => {
  const result = await axios.post("http://localhost:3005/ReceivingFlightData", {
    ...AllData,
  });
  return result;
};

export const ShowFlightData = async () => {
  const result = await axios.get("http://localhost:3005/ReceivingFlightData");
  return result;
};
export const DeleteFlightBookedData = async (id) => {
  const result = await axios.delete(
    `http://localhost:3005/ReceivingFlightData/${id}`
  );
  return result;
};

export const FetchTrainDetails = async () => {
  const details = await axios.get("http://localhost:3000/Trains");
  return details;
};

export const sendTrainDetails = async (AllData) => {
  const result = await axios.post("http://localhost:3005/ReceivingTrainDetails", {
    ...AllData,
  });
  return result;
};

export const ShowTrainDetailsBooked = async () => {
  const result = await axios.get("http://localhost:3005/ReceivingTrainDetails");
  return result;
};

export const DeleteTrainBooked = async (id) => {
  const result = await axios.delete(
    `http://localhost:3005/ReceivingTrainDetails/${id}`
  );
  return result;
};