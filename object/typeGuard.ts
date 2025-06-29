type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUser | AdminUser): string {
  if ("role" in user) {
    return `I am an admin and my role is ${user.role}`;
  } else {
    return `I am a normal User`;
  }
}

const normalUser1 = { name: "x" };
const adminUser1 = { name: "sourav", role: "admin" };

console.log(getUser(adminUser1));
console.log(getUser(normalUser1));
