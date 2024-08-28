

const user = {
      name: "Faseh",
      address: {
        street: "123 Main St",
        city: "Lahore",
        country: "Pakistan",
        address1: {
          street1: "456 Elm St",
          city1: "Karachi",
          country1: "Pakistan",
          address2: {
            street2: "789 Maple St",
            city2: "Islamabad",
            country3: "Pakistan",
            address3: {
              street3: "101 Pine St",
              city3: "Faisalabad",
              country3: "Pakistan",
              address4: {
                street4: "202 Oak St",
                city4: "Multan",
                country4: "Pakistan",
                address5: {
                  street5: "303 Birch St",
                  city5: "Peshawar",
                  country5: "Pakistan",
                  address6: {
                    street6: "404 Cedar St",
                    city6: "Quetta",
                    country6: "Pakistan",
                    address7: {
                      street7: "505 Redwood St",
                      city7: "Sialkot",
                      country7: "Pakistan",
                      address8: {
                        street8: "606 Spruce St",
                        city8: "Gujranwala",
                        country8: "Pakistan",
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

    function extract(objs, property){
        for(let key in objs){
          if(key==property){
            return objs[key];
          }
          else if(typeof objs[key] == 'object'){
            let result = extract(objs[key], property);
           if(result!= undefined){
            return result;
           }

        }
    }
    return undefined;
  }

    const  city = extract(user,'city8');
    const  country = extract(user , 'country6');
    const street = extract(user, 'street3');

    console.log("The city u search is : ",city);
    console.log("The country u search is : ",country);
    console.log("The street u search is : ",street);

    

