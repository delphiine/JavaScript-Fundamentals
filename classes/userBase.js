User = require('./user')

class UserBase {
    constructor(user) {
        this.user = user;
    }

    getNames () { 
        return users.map((user) => user.getName());
    }

    getIntroductions () {
        return users.map((user) => user.getIntroduction())
    }

    count () {
        return this.user.length;
    }

}

