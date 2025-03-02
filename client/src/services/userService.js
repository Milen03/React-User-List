const baseUrl = 'http://lacalhost:3030/jsonstore/users'

export default {
    async getAll() {
        const response = await fetch(baseUrl)
        const result = await response.json()
        const user = Object.values(result)
        return user
    }
}