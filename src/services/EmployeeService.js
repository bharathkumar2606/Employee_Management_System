import axios from 'axios';
const BASE_URL="http://localhost:8080/api/v1/employee";
class EmployeeService{
getEmployees(){
    return axios.get(BASE_URL);
    
}
createEmployee(employee){
    return axios.post(BASE_URL,employee)
    }

getEmployeeById(id) {
        return axios.get(`${BASE_URL}/${id}`)
            .then(response => {
                console.log('getEmployeeById response', response.data);
                return response.data; 
                // Return only the data
            })
            .catch(error => {

                throw error; // Rethrow the error to be handled by the caller
            });
    }
    
    
    UpdateEmployee(employee,id){
        return axios.put(`${BASE_URL}/${id}` , employee );
    
    }

    deleteEmployee(id){
return axios.delete(`${BASE_URL}/${id}`)
    }
}


export default new EmployeeService();
 
