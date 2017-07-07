import axios from 'axios';

export function getSchools(){
    return (dispatch) => {
        return axios.get('http://localhost:3030/highschools')
        .then(function (response) {
            console.log(response);
            dispatch({type:'GET_SCHOOLS', payload: response.data.data});
        })
        .catch(function (error) {
            console.log('problem receiving sch');
            console.log(error);
        });

    }
}