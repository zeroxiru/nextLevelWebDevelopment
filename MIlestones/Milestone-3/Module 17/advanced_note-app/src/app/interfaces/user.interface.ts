export interface IUSer{ 
    firstName: string,
    lastName: string,
    age: number
    email: string,
    password: string,
    role: 'user' | 'admin'
}