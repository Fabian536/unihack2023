document.getElementById('uploadbutton').addEventListener('click', function () {
    let fileInput = document.getElementById('file');
    for (let i = 0; i < fileInput.files.length; i++) {
        let file = fileInput.files[i];
        let storageRef = firebase.storage().ref("Files/" + file.name);
        let task = storageRef.put(file);
        task.on('state_changed', function progress(snapshot) {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + percentage + '% done');
        });
    }
});
