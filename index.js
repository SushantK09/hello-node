const user = {
    name: "Susan Khadka",
    age: 19,
    gender: "Male",
    education: "B. Tech CE",
    university: "Marwadi University",
    currentYear: "3rd year",
    country: "Nepal",
};

const userDetails = () => {
    
    const userDetailString = `My name is ${user.name} and I am from ${user.country}.`+
    ` I am ${user.age} years old. I am currently studying ${user.education} - ${user.currentYear} at ${user.university}.`;
    return userDetailString;
};

console.log(userDetails());
