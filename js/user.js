var objPeople = [
	{
        username: "admin",
        password: "admin"
    },
    {
        username: "tamagotchi15",
        password: "1234"
    },
    {
        username: "pou2019",
        password: "2019"
    },
    {
        username: "usuario4",
        password: "usuario4"
    },
    {
        username: "estudiante1",
        password: "Ipc2_"
    }
]



function getInfo() {
    
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
    var a =0;
	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			
			a=1;
           
           
          
           
		}
    }
    
    if (a==1) {
       
        document.location.assign('principal.html')
    }else{

        window.alert("DATOS INCORRECTOS");
        
    }
	
}