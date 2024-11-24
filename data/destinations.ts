interface desti {
  id: number;
  city: string;
  country: string;
  imgurl: string;
  description: string;
}

const destination: desti[] = [
  {
    id: 1,
    city: "Paris",
    country: "France",
    imgurl:
      "https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_1280.jpg",
    description:
      "Paris, the City of Light, is famed for its romantic ambiance, iconic landmarks like the Eiffel Tower, and world-class art at the Louvre Museum. It's a must-visit destination for culture, history, and cuisine.",
  },
  {
    id: 2,
    city: "Mumbai",
    country: "India",
    imgurl:
      "https://cdn.pixabay.com/photo/2022/01/19/08/46/mumbai-6949194_1280.jpg",
    description:
      "Mumbai, the bustling financial capital of India, offers a unique blend of colonial architecture, vibrant street food, and iconic landmarks like the Gateway of India. It's a city of dreams and contrasts.",
  },
  {
    id: 3,
    city: "London",
    country: "United Kingdom",
    imgurl:
      "https://cdn.pixabay.com/photo/2022/02/15/13/00/building-7014904_960_720.jpg",
    description:
      "London, a city rich in history, is home to landmarks like the Tower of London, Buckingham Palace, and Big Ben. Enjoy its world-renowned theaters, museums, and the charm of its parks and neighborhoods.",
  },
  {
    id: 4,
    city: "Dubai",
    country: "UAE",
    imgurl:
      "https://images.unsplash.com/photo-1508842486971-80e43cd3b916?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Dubai, the jewel of the UAE, is known for its modern skyline, luxury shopping, and iconic landmarks like the Burj Khalifa. Experience desert adventures and vibrant nightlife in this global city.",
  },
  {
    id: 5,
    city: "New York",
    country: "USA",
    imgurl:
      "https://cdn.pixabay.com/photo/2021/01/09/02/13/buildings-5901178_960_720.jpg",
    description:
      "New York City, the city that never sleeps, is a hub for culture, art, and entertainment. Explore Times Square, Central Park, and the Statue of Liberty in this vibrant metropolis.",
  },
];

export default destination;
