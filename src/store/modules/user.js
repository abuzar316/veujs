
const user = {}


const getters = {
    user: (user) => user
}

const actions = {
    async loginUser({ commit }, data) {
        try {
            console.log("first")
            console.log(data)
            const result = await axios.post('http://localhost:7000/api/v0/login', data)
            console.log("result")
            console.log(result)
            if (result.status) {
                // alert(result.data.message)
                localStorage.setItem('token', result.data.user.token)
                commit("loginUser", result.data.user);
                return this.$router.push({ path: '/dashboard' })
            } else {
                alert("error")
                console.log("error")
            }
        } catch (error) {
            // alert(error.response.data.message)
            console.log(error)
        }
    }
}

const mutations = {
    loginUser: (state, data) => state.push(data)
}


export default {
    user,
    getters,
    actions,
    mutations
}