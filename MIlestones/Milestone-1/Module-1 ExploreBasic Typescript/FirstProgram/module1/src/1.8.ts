//destructuring 
{  
    
const userInfo = { 
    id: 324,
    name: { 
      firstName: "Ibrahim",
      middleName: 'Rahamath',
      lastName: "Ullah",
    },
    contact: "01723242272",
    address:  "Uganda",
  
  }
  const {id, name:{middleName: midname}} = userInfo;

  // array destructuring
  const myFriends = ['Chandler', 'joey', 'ross', 'rachel', 'monica', 'pakhi']
  const [a, b, bestfriend] = myFriends;
  const [, , c] = myFriends;

  const [, , r,...rest]= myFriends;

}