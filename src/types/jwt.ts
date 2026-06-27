export interface JwtUserPayload {
    login: string
    name: string
    email: string,
    group: {
        title: string
        totalMembers: number
    }
}