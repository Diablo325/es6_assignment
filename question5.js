const user = {
  personalInfo: {
      name: {
          firstName: 'John',
          lastName: 'Doe'
      },
      birthDate: {
          day: 15,
          month: 'June',
          year: 1990
      }
  },
  address: {
      residential: {
          street: {
              name: 'Main St',
              number: '123'
          },
          city: {
              name: 'New York',
              details: {
                  zipCode: '10001',
                  region: 'NY',
                  country: 'USA'
              }
          }
      },
      mailing: {
          street: {
              name: 'Post Office St',
              number: '456'
          },
          city: {
              name: 'Los Angeles',
              details: {
                  zipCode: '90001',
                  region: 'CA',
                  country: 'USA'
              }
          }
      }
  },
  contact: {
      primary: {
          email: 'john.doe@example.com',
          phone: {
              mobile: '555-1234',
              landline: '555-5678'
          }
      },
      secondary: {
          email: 'johndoe_alt@example.com',
          phone: {
              mobile: '555-8765',
              landline: '555-4321'
          }
      }
  }
  };
  function extract(obj, ...properties) {
    const result = {};

    function search(obj, prop) {
        if (obj.hasOwnProperty(prop)) {
            return obj[prop];
        }

        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                const found = search(obj[key], prop);
                if (found !== undefined) {
                    return found;
                }
            }
        }

        return undefined;
    }

    properties.forEach(prop => {
        result[prop] = search(obj, prop);
    });

    return result;
}
const prop1 = extract(user, 'zipCode', 'mobile', 'email', 'firstName', 'nonExistingProperty');
console.log(prop1);


// function userfunction({name, contact}){
//   console.log("User Name: ", name ,"\nContact: ",contact);
  

// }

// const user = {
//   name: 'John Doe',
//   address: {
//     street: '123 Main St',
//     city: {
//       name: 'New York',
//       zipCode: '10001'
//     }
//   },
//   contact: {
//     email: 'john.doe@example.com',
//     phone: '555-1234'
//   }
// };

// userfunction(user);

