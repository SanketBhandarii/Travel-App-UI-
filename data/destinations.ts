interface desti {
  id: number;
  city: string;
  country: string;
  imgurl: string;
}

const destination: desti[] = [
  {
    id: 1,
    city: "Paris",
    country: "France",
    imgurl:
      "https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_1280.jpg",
  },
  {
    id: 2,
    city: "Mumbai",
    country: "India",
    imgurl:
      "https://cdn.pixabay.com/photo/2022/01/19/08/46/mumbai-6949194_1280.jpg",
  },

  {
    id: 3,
    city: "London",
    country: "United Kingdom",
    imgurl:
      "https://cdn.pixabay.com/photo/2022/02/15/13/00/building-7014904_960_720.jpg",
  },
  {
    id: 4,
    city: "Dubai",
    country: "UAE",
    imgurl:
      "https://images.unsplash.com/photo-1508842486971-80e43cd3b916?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    city: "New York",
    country: "USA",
    imgurl:
      "https://cdn.pixabay.com/photo/2021/01/09/02/13/buildings-5901178_960_720.jpg",
  },
];

export default destination;
