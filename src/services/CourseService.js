import Request from 'superagent';

export function getCourse(){
    return Request.get("http://206.221.177.87:8894/rest-api/courses");
}

