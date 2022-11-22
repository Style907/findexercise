const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

  function findUserByUsername(arr, str){
    return arr.find(function(val){return val.username === str})
    }

    function removeUser(arr, str){
        let idx = arr.findIndex(function(val){return val.username === str})
        let removedUser = users[idx]
        users.splice(idx, 1)
        return removedUser
        
        }    