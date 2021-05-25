// NOTE: Make sure that when you are running this code, you have this html:
// <script src="https://cdn.jsdelivr.net/npm/gun/gun.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/gun/lib/radix.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/gun/lib/radisk.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/gun/lib/store.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/gun/lib/rindexed.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/gun/lib/unset.js"></script>
// <script src="https://unpkg.com/zenbase/dist/main.js"></script>

// WebPC Files API
// Written by Brenden2008
// 2021

window.gun = new Gun({
    localStorage: true,
    secret: "WebPC-DB",
    portal: "https://skyportal.xyz",
    debug: false,
    until: 2*1000
})
const user = gun.user()

function createUser(username, password){
    return user.create(username, password);
}

function loginUser(username, password){
    return user.auth(username, password);
}

function logoutUser(){
    return user.leave();
}

function deleteUser(username, password){
    return user.delete(username, password);
}

function getFile(file){
    user.get('files/' + file).on(function(data, key){
        return data["rawdata"];
    })
}

function setFile(file, data){
    return user.get('files/' + file).put(data);
}

function deleteFile(file){
    return user.unset('files/' + file);
}