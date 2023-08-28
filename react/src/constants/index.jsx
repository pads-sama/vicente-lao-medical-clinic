import { mobileCheckup, mobileConfinement, mobileHomeMedication, mobileHospitalization } from "../asset/mobile"; 
import { desktopCheckup, desktopConfinement, desktopHomeMedication, desktopHospitalization } from "../asset/desktop";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "doctor",
    title: "Doctor",
  },
  {
    id: "services",
    title: "services",
  },
  {
    id: "about",
    title: "about",
  },
];

export const mobileServices = [
  {
    id: "checkup",
    image: mobileCheckup,
    content: "General Checkup"
  },
  {
    id: "confinement",
    image: mobileConfinement,
    content: "Confinement"
  },
  {
    id: "homeMedication",
    image: mobileHomeMedication,
    content: "Home Medication"
  },
  {
    id: "hospitalization",
    image: mobileHospitalization,
    content: "Hospitalization"
  },
]
export const desktopServices = [
  {
    id: "checkup",
    image: desktopCheckup,
    content: "General Checkup"
  },
  {
    id: "confinement",
    image: desktopConfinement,
    content: "Confinement"
  },
  {
    id: "homeMedication",
    image: desktopHomeMedication,
    content: "Home Medication"
  },
  {
    id: "hospitalization",
    image: desktopHospitalization,
    content: "Hospitalization"
  },
]