import { atom } from "recoil";

export const projectsState = atom({
  key: "projectsState",
  default: [
    {
      id: 1,
      title: "Catmans Kennel",
      description: "En kort beskrivning",
      image: "https://placekitten.com/450/450",
    },
    {
      id: 2,
      title: "Nuggetdonalds",
      description: "En kort beskrivning",
      image: "https://placekitten.com/450/450"
    },
    {
      id: 3,
      title: "Joakims Korvmoj",
      description: "En kort beskrivning",
      image: "https://placekitten.com/450/450",
    },
    {
      id: 4,
      title: "Byggfirman",
      description: "En kort beskrivning",
      image: "https://placekitten.com/450/450",
    },
  ],
});
