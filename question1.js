function deepClone(obj) {
    if (typeof obj === 'object' && obj !== null) {
      //array
      if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
      }
      //object
      let clonedObj = { ...obj };
      for (let key in clonedObj) {
        clonedObj[key] = deepClone(clonedObj[key]);
      }
      return clonedObj;
    }
    //premitive
    return obj;
  }
  

  const original = {
    name: "Faseh",
    address: {
      street: "123 Main St",
      city: "Lahore",
      country: "Pakistan",
      address: {
        street: "456 Elm St",
        city: "Karachi",
        country: "Pakistan",
        address: {
          street: "789 Maple St",
          city: "Islamabad",
          country: "Pakistan",
          address: {
            street: "101 Pine St",
            city: "Faisalabad",
            country: "Pakistan",
            address: {
              street: "202 Oak St",
              city: "Multan",
              country: "Pakistan",
              address: {
                street: "303 Birch St",
                city: "Peshawar",
                country: "Pakistan",
                address: {
                  street: "404 Cedar St",
                  city: "Quetta",
                  country: "Pakistan",
                  address: {
                    street: "505 Redwood St",
                    city: "Sialkot",
                    country: "Pakistan",
                    address: {
                      street: "606 Spruce St",
                      city: "Gujranwala",
                      country: "Pakistan",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    hobbies: ["Coding", "Reading"],
  };
  
  const cloned = deepClone(original);
  
  original.name = "Ali";
  original.hobbies.push("Writing");
  console.log("Original Object:");
  console.log(JSON.stringify(original, null, 2));
  
  console.log("Cloned Object:");
  console.log(JSON.stringify(cloned, null, 2));
  