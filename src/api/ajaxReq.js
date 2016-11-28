export default function({method, path, args}){
    var url = encodeURIComponent(path) + args? '?':'';
    var query = '';
    var formData = new FormData();
    for({key, value} of args){
        query += encodeURIComponent(key) + '&' + encodeURIComponent(value);
        formData.append(key, value);
    }
    url += query;

    var resData = '';
    var core = new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4) {
                if((xhr.status >= 200 && xhr.status <300) || xhr.status == 304){
                    resolve(JSON.stringify(resData));
                }else{
                    reject("error requesting ajax!");
                }
            }
        }

        if(method == 'post'){
            xhr.open(method, encodeURIComponent(path),true);
            xhr.send(formData);
        }else if(method == 'get'){
            xhr.open(method, url, true);
            xhr.send(null);
        }

    });

    return core;
}