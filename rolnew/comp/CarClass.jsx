"use client";

import Pic from "rolnew/util/Pic";
import Button from "rolnew/ui/Button";
import Category from "./Category";
import { useEffect, useState } from "react";

// const carCategoryList = [
//   {
//     id: "carcat1",
//     category: "Business Class",
//   },
//   {
//     id: "carcat2",
//     category: "First Class",
//   },
//   {
//     id: "carcat3",
//     category: "Luxury Class",
//   },
//   {
//     id: "carcat4",
//     category: "Electric",
//   },
//   {
//     id: "carcat5",
//     category: "SUV",
//   },
//   {
//     id: "carcat6",
//     category: "MVP",
//   },
//   {
//     id: "carcat7",
//     category: "Sprinter",
//   },
// ];

const vehicleCategories = [
  {
    vehCatName: "supecar",
    vehCatImg: null,
    vehTypeId: null,
    vehCatId: "01405ff7-74f3-480d-a669-edfa380927f9",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Business V class",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Business%20V%20class_car1.png",
    vehTypeId: "7c6fc6a8-fa3c-45bc-8557-6f0c47a4f8e0",
    vehCatId: "02b65338-d62b-48de-9f6e-9f3570fa157e",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Paris Car13",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Paris%20Car13_mercedes-sprinter-19.png",
    vehTypeId: null,
    vehCatId: "05a3da83-df6a-42ba-b920-308a068d0b8f",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "CG_Maruti",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/CG_Maruti_info_icon.png",
    vehTypeId: null,
    vehCatId: "0ddf07cd-27fd-4403-ad9a-747e4878b304",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Economy Sedan",
    vehCatImg: null,
    vehTypeId: null,
    vehCatId: "1165d62a-bb83-43db-8bf2-a4b6e5fc8a71",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "UK - CG - Business",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "151f4cd1-a2aa-47c9-8c6d-67f7d2174f3e",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Paris Car13",
    vehCatImg: null,
    vehTypeId: null,
    vehCatId: "1761e719-a43a-4544-80ef-11846904e0b6",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "A new vehicle category updated",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "18f34525-c414-4934-9809-7c3893481173",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Sprinters",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/rd-vehicle-category-list/sprinter-Mercedes.png",
    vehTypeId: null,
    vehCatId: "1a542015-5f49-4c7b-9371-0fa24dfda18e",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Anirban Test Vehicle",
    vehCatImg:
      "https://rdbucket1.s3.amazonaws.com/Anirban%20Test%20Vehicle_png-transparent-flag-of-the-united-states-t-shirt-mozilla-add-ons-usa-flag-miscellaneous-flag-text%20%281%29.png",
    vehTypeId: null,
    vehCatId: "213fc307-9328-43b0-a633-537bba626eab",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "UAE Vehicle",
    vehCatImg:
      "https://rdbucket1.s3.amazonaws.com/UAE%20Vehicle_car-vector.jpg",
    vehTypeId: "e72b792f-2a6a-46d1-b488-3c6b5080857f",
    vehCatId: "2584df45-5c80-4487-94b6-9b089062672d",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 1,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "New Sprinters updated 1",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "2d62eb58-98ab-4cc4-b426-da6a16c8e54f",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Paris Car13",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Paris%20Car13_mercedes-sprinter-19.png",
    vehTypeId: "1ff2214d-1a50-4513-8bfe-a187b9b73755",
    vehCatId: "312d4b60-5b9e-41aa-a803-680fdff02a31",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "New Super Car",
    vehCatImg:
      "https://rdbucket1.s3.amazonaws.com/New%20Super%20Car_usa-flag%20%282%29.png",
    vehTypeId: null,
    vehCatId: "3198b0a0-6a54-4c47-8718-879d5c396e54",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: " A UK Category updated 12",
    vehCatImg:
      "https://rdbucket1.s3.amazonaws.com/A%20UK%20Category%20updated_sprinter-Mercedes.png",
    vehTypeId: null,
    vehCatId: "3742ea7a-5123-45ae-995a-a477183d348a",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Test Veh cat 1",
    vehCatImg: null,
    vehTypeId: "73f8c4b4-8a3d-4dac-8f41-429ed35a179e",
    vehCatId: "3c0e3916-14b1-425c-853c-010ca4d02509",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Test Veh cat 3",
    vehCatImg: null,
    vehTypeId: "62438c9f-f29a-4a92-8a6a-7fa9f27ab09f",
    vehCatId: "404525bd-434b-4512-8be6-a31dc5f12ad1",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Sprinter Category",
    vehCatImg:
      "https://rdbucket1.s3.amazonaws.com/Sprinter%20Category_sprinter-Mercedes.png",
    vehTypeId: null,
    vehCatId: "4157291e-ff13-4cf3-8d13-6854daac5dd6",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "CarTest category",
    vehCatImg:
      "https://rdbucket1.s3.amazonaws.com/CarTest%20category_download%20%281%29.png",
    vehTypeId: null,
    vehCatId: "41cb85ca-f41f-46f4-bbe8-8e0d3795d284",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "VDC-TEST-01",
    vehCatImg: null,
    vehTypeId: null,
    vehCatId: "4899bf97-10cd-4d1f-b8d5-b918a953e46a",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "SUV",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/rd-vehicle-category-list/suv-Range-Rover-Defender.png",
    vehTypeId: null,
    vehCatId: "493461b8-2d0f-4e21-904c-88ac6558bb11",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Test ",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Test%20_sprinter-Mercedes.png",
    vehTypeId: null,
    vehCatId: "520e9387-5e3d-4c50-bdc4-6cecc24459b9",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Paris Car12",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Paris%20Car12_roldrive-booking-background.jpg",
    vehTypeId: "14948fc5-fead-42ad-be91-ef2dd3257142",
    vehCatId: "5a1591b8-eb81-425d-b2fb-cc20cc2a1104",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 0,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "business-IND",
    vehCatImg: null,
    vehTypeId: null,
    vehCatId: "5d0e9c3f-acf7-4ecd-91b9-c51fe58b7fbc",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Sprinter 1 updated",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "6591a137-cf33-4f0e-be9b-5ef124c89eed",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "TES2 Veh",
    vehCatImg: null,
    vehTypeId: "6d70025b-896c-4fd3-b4a6-94fe7ab621cf",
    vehCatId: "6611d12c-ec48-430c-ad60-96353dae10f2",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Business class Paris",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Business%20class%20Paris_Screenshot%202023-04-20%20at%207.47.40%20PM.png",
    vehTypeId: null,
    vehCatId: "6c34687c-280d-4cc6-96bb-8da26e4d598e",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "6efa5bb0-dc36-43a8-af17-04170a308314",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Test Vehicle Category",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Test%20Vehicle%20Category_usa-flag.png",
    vehTypeId: null,
    vehCatId: "71c0e043-d79f-4428-882b-867171fc4b80",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Veh Cat 1",
    vehCatImg: null,
    vehTypeId: "30de680c-6701-46b5-ae1a-cc31ad94148a",
    vehCatId: "73211b23-c01d-42c6-9aa3-10f30f609c3b",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Marcedez Test",
    vehCatImg: null,
    vehTypeId: null,
    vehCatId: "739d9e4e-6048-4f9d-9e46-7f27470da863",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Sprinter MPV 1",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Sprinter%20MPV%201_sprinter-Mercedes.png",
    vehTypeId: null,
    vehCatId: "73fbc7be-d3b4-4539-b5d7-499ea8973e27",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "hhhhhh",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/hhhhhh_download.jpg",
    vehTypeId: null,
    vehCatId: "7d25d853-142a-475b-9d70-e5b8a50cc938",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Deep Test Veh Cat",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Deep%20Test%20Veh%20Cat_Screenshot%205.png",
    vehTypeId: "f2e9aa39-d380-47df-9df9-340f18e353b4",
    vehCatId: "8fbe43fc-a7e8-41ef-a29d-b40e0fd4817a",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 2,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Electric",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/rd-vehicle-category-list/electric-tesla-model-x.png",
    vehTypeId: null,
    vehCatId: "95644f96-e399-4710-aa4e-28951828252b",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Economy test",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "96272be8-0abf-473b-bb2b-a06cfb9284cb",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Anirban Veh Cat",
    vehCatImg: null,
    vehTypeId: null,
    vehCatId: "96cf8f77-e97f-4abd-9cfa-2ff523accde9",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Test Vehicle Car Category",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Test%20Vehicle%20Car%20Category_download%20%281%29.jpg",
    vehTypeId: null,
    vehCatId: "97825557-4762-4a0f-a078-2ad51883b61c",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Luxuary Sedan",
    vehCatImg: null,
    vehTypeId: null,
    vehCatId: "99294165-777f-49bc-8309-dbfb29a6d67e",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Business S Class",
    vehCatImg:
      "https://rdbucket1.s3.amazonaws.com/Business%20S%20Class_car1.png",
    vehTypeId: "30f1df8e-238b-4e7a-afcb-909bcc315637",
    vehCatId: "9f29f04b-34a9-45f4-b6db-59edef811963",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 4,
    luggageCount: 3,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "mohit",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "a22a45e1-264f-4f52-8bcb-88b8dec8c0d2",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "MPV",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/rd-vehicle-category-list/MPV-v-class.png",
    vehTypeId: null,
    vehCatId: "a3f2bd62-3eb3-495e-9560-6a71f591a63a",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Business updated UAE",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Business%20updated%20UAE_sprinter-Mercedes.png",
    vehTypeId: null,
    vehCatId: "a76d5883-9881-43bb-a94e-6fc4ba40825d",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Buisness",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "a99d0d3a-14db-45ef-89c5-e35f9991d85e",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Test Category",
    vehCatImg:
      "https://rdbucket1.s3.amazonaws.com/Test%20Category_sprinter-Mercedes.png",
    vehTypeId: null,
    vehCatId: "ac5e3f8f-1807-44aa-bbd6-2c2ee25eb56f",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Economy MPV",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "bdeac0a8-65e8-48bd-ab22-9564927c6912",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "test veh 1",
    vehCatImg: null,
    vehTypeId: "f98dc205-8f06-43be-81ad-a8ae2bcd5552",
    vehCatId: "c0930d1f-f3f1-469c-85af-ac6f5541167d",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Paris Car1",
    vehCatImg: "https://rdbucket1.s3.amazonaws.com/Paris%20Car1_paris.jpg",
    vehTypeId: null,
    vehCatId: "c1fffad0-6a69-4ac6-97cb-951ae9389b02",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Economic test updated 1",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "c71bbefd-c9c0-45fd-b06f-ddf3a2652f6c",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "BMW 7 Series",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "d02664d8-21ed-41dc-91e5-150d4f7fed32",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Business E class",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Business%20E%20class_car1.png",
    vehTypeId: "4e54863f-af85-4eb7-b89f-668a6479ad87",
    vehCatId: "d12d4da4-e10d-42a8-95ea-fd21cafc0613",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 4,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Vehicle test 1",
    vehCatImg: null,
    vehTypeId: "f9dbd553-7671-4c4a-85c5-95e452309ffb",
    vehCatId: "d32756e2-ece6-4f93-9d58-c98a1cf916bf",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 3,
    luggageCount: 2,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "dhamaka",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "d9935575-202e-4329-b6ad-122f7eedff73",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Test Veh cat 2",
    vehCatImg: null,
    vehTypeId: "5895289f-3239-4fb4-b51c-407a11dc741f",
    vehCatId: "e1bf5985-d167-4ac9-b784-16bf03b83811",
    vehMake: "(N/A)",
    vehModel: "(N/A)",
    vehImgUrl: null,
    isActive: true,
    adultSeatCount: 2,
    luggageCount: 0,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Test",
    vehCatImg: "https://rdbucket1.s3.amazonaws.com/Test_sprinter-Mercedes.png",
    vehTypeId: null,
    vehCatId: "e20a7cfd-d264-435b-ba50-6a9eaabd52bb",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Test category 1",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/Test%20category%201_sprinter-Mercedes.png",
    vehTypeId: null,
    vehCatId: "e39bc985-e99b-46ed-b81b-37d8e8ea7bb2",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Economic Saloon",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "e85e95fa-fb78-411f-b3d6-c0950b1aaa4b",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "erter",
    vehCatImg: "",
    vehTypeId: null,
    vehCatId: "efdd2b6d-e283-4d54-8bd8-87ab945d14ac",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "Luxury",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/vehicle+images/Rolls+Royce/kisspng-rolls-royce-ghost-car-rolls-royce-phantom-rolls-ro-rolls-royce-ghost-black-car-5a74946a6c1c91.8610381215175896104428.jpg",
    vehTypeId: null,
    vehCatId: "f4ad666e-a548-4ef2-b9a8-0d5f8b7df55b",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
  {
    vehCatName: "First",
    vehCatImg:
      "https://rdbucket1.s3.eu-west-2.amazonaws.com/rd-vehicle-category-list/first-S-Class.png",
    vehTypeId: null,
    vehCatId: "f4c122b0-a938-4d53-9b72-db5009c10a32",
    vehMake: null,
    vehModel: null,
    vehImgUrl: null,
    isActive: null,
    adultSeatCount: null,
    luggageCount: null,
    description: null,
    ChildSeat: null,
    gps: null,
  },
];

function CarClass({ hideArrow }) {
  const [carData, setCarData] = useState();

  // useEffect(() => {
  //   const fetchCarsDetails = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api-dev.roldrive.com/api/v1/vehicle-categories/allDetails"
  //       );

  //       const data = await response.json();
  //       setCarData(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching car details:", error);
  //     }
  //   };

  //   fetchCarsDetails();
  // }, []);

  return (
    <>
      {/* <Container className="bg-[#11202D] sm:pt-[20px] py-8 text-center">

        <Category categorys={carData} />
      </Container> */}
      {/* <Container className="bg-[#11202D] hidden sm:block sm:pt-[8px]  text-center">
          <div className='bg-[#223544] w-[750px] h-[50px] mt-[50px] rounded-xl border-0 ml-[310px] flex items-center justify-center'><ClassCategory categorys={carCategoryList} /></div>

      </Container>
      <Container className="bg-[#11202D] sm:hidden pt-[30px]  text-center">
          <div className='bg-[#223544] w-[750px] h-[50px] rounded-xl border-0 flex items-center justify-center'><ClassCategory categorys={carCategoryList} /></div>

      </Container> */}

      <div className='bg-[#11202D] pt-4 sm:pt-[10px] text-center xs:pt-16 xl:!px-[70px] lg:px-[45px] md:px-[32px] sm:px-[20px] px-4'>
        {hideArrow && (
          <Category categorys={vehicleCategories} setCarData={setCarData} />
        )}
        <div className='bg-[#11202D] xs:pt-12 sm:px-12 md:px-16 pb-6'>
          <div className='flex flex-col gap-y-16 2xl:container mx-auto pb-4'>
            <div className='flex md:flex-row xs:flex-col sm:flex-col'>
              <div className='w-full hidden sm:block'>
                <div className=' gap-[24px] w-[360px] h-[298px]'>
                  <div className=''>
                    <div className='sm:mt-6 mt-2 text-[#B2B2B2] leading-5'>
                      <h2 className='sm:text-3xl leading-9 text-left font-medium text-[#FFFFFF]'>
                        Mercedes Benz E class
                      </h2>
                      <p className='sm:text-base font-medium sm:leading-6 mt-4 text-left text-[#FFF8F3]'>
                        The Mercedes E-Class is a great option for business
                        because of its balance of luxury, performance, and
                        technology. Mercedes Benz is known for their brilliant
                        vehicles and truly stands by what they call its cars to
                        be - &apos;The best or nothing&apos;. The car has a
                        sleek, professional design and a spacious, comfortable
                        interior that suits any businessman&apos;s needs. A
                        Mercedes E Class hire is what most businessmen prefer
                        for their travel needs.
                      </p>
                      <Button className='w-[260px] h-[50px] text-xl mt-4 mb-4 mr-[100px]'>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full h-[370px] max-w-[705px] hidden md:block'>
                <div className='w-full h-full relative'>
                  <Pic
                    alt='trust'
                    className='rounded-xl w-[495px]'
                    src='/images/airports/car1.png'
                    objectFit='fit'
                  />
                </div>
              </div>
              <div className='h-[210px] w-full mt-4 sm:mt-0  md:hidden ml-4'>
                <div className='w-[350px] sm:w-[450px] h-full'>
                  <Pic
                    alt='trust'
                    className='rounded-xl'
                    src='/images/airports/car1.png'
                    objectFit='fit'
                  />
                </div>
              </div>
              <div className='w-full mx-auto sm:hidden'>
                <div className='w-full h-[298px]'>
                  <div className='min-w-[350px] w-[550px] mx-auto'>
                    <div className='mt-6 text-[#B2B2B2] leading-5 mx-2'>
                      <h2 className='text-[20px] leading-7 text-center font-medium text-[#FFFFFF] my-6 mt-2'>
                        Mercedes Benz E class
                      </h2>
                      <p className='text-sm font-normal leading-7 text-left text-[#FFF8F3] mt-4'>
                        The Mercedes E-Class is a great option for business
                        because of its balance of luxury, performance, and
                        technology. Mercedes Benz is known for their brilliant
                        vehicles and truly stands by what they call its cars to
                        be - &apos;The best or nothing&apos;. The car has a
                        sleek, professional design and a spacious, comfortable
                        interior that suits any businessman&apos;s needs. A
                        Mercedes E Class hire is what most businessmen prefer
                        for their travel needs.
                      </p>
                      <Button className='w-full h-[50px] text-xl mt-4 mb-4 mr-[100px]'>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden max-w-[912px] h-[130px] sm:grid sm:grid-cols-4 lg:ml-[260px] md:ml-[130px] sm:ml-[30px] sm:mr-8 gap-16 mb-6'>
              <div className='w-[190px] h-[130px]'>
                <Pic
                  alt='trust'
                  className='rounded-xl'
                  src='/images/airports/car4.png'
                  objectFit='fit'
                />
                <p className='w-full text-center text-base font-medium leading-6 text-[#FFFFFF]'>
                  Mercedes Benz E class
                </p>
              </div>
              <div className='w-[190px] h-[130px]'>
                <Pic
                  alt='trust'
                  className='rounded-xl'
                  src='/images/airports/car4.png'
                  objectFit='fit'
                />
                <p className='w-full text-center text-base font-medium leading-6 text-[#FFFFFF]'>
                  Mercedes Benz E class
                </p>
              </div>
              <div className='w-[190px] h-[130px]'>
                <Pic
                  alt='trust'
                  className='rounded-xl'
                  src='/images/airports/car4.png'
                  objectFit='fit'
                />
                <p className='w-full text-center text-base font-medium leading-6 text-[#FFFFFF]'>
                  Mercedes Benz E class
                </p>
              </div>
              <div className='w-[190px] h-[130px]'>
                <Pic
                  alt='trust'
                  className='rounded-xl'
                  src='/images/airports/car4.png'
                  objectFit='fit'
                />
                <p className='w-full text-center text-base font-medium leading-6 text-[#FFFFFF]'>
                  Mercedes Benz E class
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarClass;
