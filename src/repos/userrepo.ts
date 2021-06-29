import {User, IUserRepo} from "../core/entities/user"

export class MemUserRepo implements IUserRepo {
    users: User[] = [
        {
            id: 1
            , userName: "tcat"
        }
        , {
            id: 2
            , userName: "ybear"
        }
    ]

    async getUsers(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            resolve(this.users);
        });
    }
}