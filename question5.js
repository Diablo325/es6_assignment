function userfunction({name, contact}){
    console.log("User Name: ", name ,"\nContact: ",contact);
    

}

const user = {
    name: 'John Doe',
    address: {
      street: '123 Main St',
      city: {
        name: 'New York',
        zipCode: '10001'
      }
    },
    contact: {
      email: 'john.doe@example.com',
      phone: '555-1234'
    }
  };
  
 userfunction(user);