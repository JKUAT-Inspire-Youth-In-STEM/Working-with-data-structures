

function person(name, age){
    this.name = name
    this.age = age

    this.greet = function(){
        console.log("Hello my name is", name, " I am", age, "By the way")
    }
}




let john = new person("John Nwali", 20)

john.greet()

