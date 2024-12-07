// 1
const users = [
    {
      name: "John",
      balance: 500,
      friends: ["James", "Bella", "Bred"],
      skills: ["fast runing, singing"],
    },
    {
      name: "Bred",
      balance: 900,
      friends: ["James", "Tom", "Bella", "Bred", "Miles"],
      skills: ["dancing"],
    },
    {
      name: "Bella",
      balance: 200,
      friends: ["Rebecca", "Tom", "Bred", "Miles",],
      skills: ["cooking", "good player"],
    },
    {
      name: "Tom",
      balance: 450,
      friends: ["Bred", "Bella", "John" ],
      skills: ["dancing"],
    },
    {
      name: "Miles",
      balance: 100,
      friends: ["James", "Bella"],
      skills: [ "high jumping"],
    },
  ];
  
  //  1 
  console.log("1");
  const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0);
  console.log(`Total amount of money: ${totalBalance}`);
  
  // 2 
  console.log("  2 ");
  const friendsByName = (name) =>
    users
      .filter((user) => user.friends.some((friend) => friend === name) === true)
      .reduce((acc, user) => {
        acc.push(user.name);
        return acc;
      }, []);
  console.log(`Names of users with a friend Bred:`, friendsByName("Bred"));
  console.log(`Names of users with a friend Bella:`, friendsByName("Bella"));
  
  // 3 
  console.log(" 3 ");
  const sortedByMoney = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .reduce((acc, user) => {
      acc.push(user.name);
      return acc;
    }, []);
  console.log(
    "Names in order by the amount of money",
    sortedByMoney
  );
  
  // 4 
  console.log(" 4 ");
  const allSkills = users
    .reduce((acc, user) => {
      acc.push(...user.skills);
      return acc;
    }, [])
    .reduce((acc, skill) => {
      if (acc.every((item) => item != skill) === true) {
        acc.push(skill);
      }
      return acc;
    }, [])
    .sort((a, b) => a.localeCompare(b));
  
  console.log("All skills in alphabetical order:", allSkills);