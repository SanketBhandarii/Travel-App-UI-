interface TransportItem {
    iconName: string;
    titleName: string;
    bgTheme: string;
    color:string;
  }
  
  const transportData: TransportItem[] = [
    {
      bgTheme: "#baf2ff",
      color:"#06718a",
      iconName: "airplane",
      titleName: "Flights",
    },
    {
      bgTheme: "#BBF7D0",
      color:"#06718a",
      iconName: "beach",
      titleName: "Beaches",
    },
    {
      bgTheme: "#baf2ff",
      color:"#06718a",
      iconName: "food",
      titleName: "Dining",
    },
    {
      bgTheme: "#BBF7D0",
      color:"#06718a",
      iconName: "account-group",
      titleName: "Groups",
    },
    {
      bgTheme: "#baf2ff",
      color:"#06718a",
      iconName: "compass",
      titleName: "Guides",
    },
  ];
  
  export default transportData;
  