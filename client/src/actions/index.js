// console.log(formRef);
// console.log(input);

// console.log(input);
//   useEffect(() => {
//         //do it with articles
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(res => { console.log(res.data) 
//     setArticles(res.data);
//       console.log(articles);
//   })
    
//     },[]);
import axios from 'axios';

export function getArticles(){

    return(dispatch)=>{

        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => { 
                dispatch(changeArticles(res.data)) 
            })
    }
}

export function changeArticles(articles){

    return{

articles
    }
}