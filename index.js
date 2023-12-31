//pagination by default function
const pagination = (page = 1, size = 5) => {
  for (let i = page; i <= size; i++) {
    console.log(i);
  }
};

pagination();

// inline function--> assigning nameless/anonymous function to a variable which can be used repeatedly wherever we want
//reusability.
const footer = function () {
  console.log("Anonymous");
};

footer();
footer();
footer();
