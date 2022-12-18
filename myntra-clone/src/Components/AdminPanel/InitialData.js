const initalData = [
    {
        id: 1,
        categories: "Users",
    
        images: {
          image1:
            "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
        },
    },
    {
        id: 2,
        categories: "Order",
    
        images: {
          image1:
            "https://prod4-sprcdn-assets.sprinklr.com/200052/4c9025d6-2514-4045-9fd9-a9589ac70c5d-258997166/svgviewer-png-output_(6).png",
        },
    },
    {
        id: 3,
        categories: "Delevry",
    
        images: {
          image1:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAACIlBMVEXu7u69CQilm5z////x8fGglZbi4ODsAAIDFj6imJkAAADvAADPAwLu9/foREXkAwXLCAjECAjup6bnYWHYBAXL0dG6CQnx/v7I2NjpUVPnAAAiXnrRAAC7AAAAADYAADPmOjrssrEAADwAACwAADDmw8LsbW6VlZUAACnp2doAADnaAADg6OnqkJFcAAAAEjzS5eQAABsAAEHAGBgAACVYaWmHoaBzj4/ru7vx48YcUXAAABMUJ0yKoqLSf37coKCP0M+oAACbAADrhob58O8pMTHoHx//tQAASGG109MARWhKWlphc3JleYScsLBZYHMbAACIpK5xiJgwOVV9maVBQmfNyMjJbW7GXVvQOzjER0mmNSnccFfGUT7QaGLBOjhvUkPTl3f/u5O1e13/+Oy9ISGcZkvypXt3aGHtuJTt0tLgIyPgw6i/ybr/sYbq3tPfkIS+6+o4GxuKZE3DZU7kqoSgwLZ0vruRZ03Ms6XWj2ieS0zLpYiFMyqjcFWyjHR8TzGgg4ImHiC2OhpNPjOtThPFeUjDd1y5tKjprZrCkJLEpaY8AAD108MqLDMAGyJ8XBDWWUNwMS+TcF/z5J5TAACYdSBERkbz2mC5b3B4KjyZKDBvQVNVRVtUTTGCYGDMkQAyb4duAACtTk2Dg5NGID08VWhimptOUG+xssBhHDRtan8tXGkrAACMVmM4LT9vv76UAB95ACWGh5yawMMyM14YucaXAAAYq0lEQVR4nO2dj0Mbx5XHBZpoCav1SiDJeNFKCBBY7BJkBJIOAzKWwrEGgQGbH07OpHA0sUjtutfUubrX1Gnv2suPptdrL5e4uR4OAVO7bVLL/9+9N7v6OSshQtqr0/26EdYwu9r57Htv3ptZ1TZiqVo2S9WymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLCymLB6BpgQ4eQ61jD/+pmQ8KmTK3mccf71MxHa+ZPrjHCMT3wmmDjd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",
        },
    },
    {
        id: 4,
        categories: "Mens",
    
        images: {
          image1:
            "https://i.pinimg.com/736x/ba/d7/86/bad786dfe4f227555be6fa2484b0b9a3.jpg",
        },
    },
    {
        id: 5,
        categories: "Products",
    
        images: {
          image1:
            "data:image/png;base64,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",
        },
    },
   
    {
        id: 7,
        categories: "Womens",
    
        images: {
          image1:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKfdlN9OGLIoeO37cDz0flfsWPuovSR72Hg&usqp=CAU",
        },
    },
    {
        id: 8,
        categories: "Kids",
    
        images: {
          image1:
            "https://m.media-amazon.com/images/I/31AWFCkio3L.jpg",
        },
    },

];
export default initalData