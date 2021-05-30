import {User, IUserRepo} from "../core/entities/userlogin"

export class MemUserRepo implements IUserRepo {
    users: User[] = [
        {
            id: 1
            , state: "active"
            , login: "tcat"
            , user: "Top Cat"
            , body: "User is Active"
        }
        , {
            id: 2
            , state: "inactive"
            , login: "ybear"
            , user: "Yogi Bear"
            , body: "User is Inactive"
        }
    ]

    getUsers(): User[] {
        return this.users
    }

}