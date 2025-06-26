class TaskService
{

        number

        constructor(number)
        {
                if (number)
                {
                        this.number = number
                }
                else
                {
                        this.number = ""
                }
        }

        getListTitle()
        {
                return 'IT Support Tasks: ' + this.number
        }

        // async/await pattern makes working with promises easier
        async getTasks()
        {
                const swapi = await axios.get("https://swapi.info/api/people")
                console.log(swapi.data)

                // make a REQUEST to the API server
                // axios.get(url) - is available from the AXIOS library
                const response =  await axios.get('http://localhost:3001/tasks')

                // the server response has a body - response.data is the body
                console.log(response.data)

                return response.data
        
        }
}