import { MemUserRepo } from "../../repos/userrepo"


test("get users", () => {
    const repo = new MemUserRepo()
    const users = repo.getUsers()

    expect(users.length).toBe(2)
    expect(users[0].id).toBe(1)
    expect(users[0].state).toBe("active")
})