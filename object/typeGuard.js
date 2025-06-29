function getUser(user) {
    if ("role" in user) {
        return "I am an admin and my role is ".concat(user.role);
    }
    else {
        return "I am a normal User";
    }
}
var normalUser1 = { name: "x" };
var adminUser1 = { name: "sourav", role: "admin" };
getUser(adminUser1);
console.log(getUser(normalUser1));
