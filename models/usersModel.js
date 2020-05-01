const users = {
    "user1": {
        email: "email1@uit.edu.vn",
        address: "hahhahahahah",
        password: "123456"
    },
};

module.exports.read = function (fullName) {
    return users[fullName];
}

module.exports.register = function (fullName, address, email, password) {
    if (users[fullName]) {
        return 'Error';
    } else {
        users[fullName] = {
            address: address,
            email: email,
            password: password
        };
        return 'Success';
    }
}