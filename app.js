window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function() {
		var nombre = document.getElementById("nombre").value;
		var edad = parseInt(document.getElementById("edad").value);
		var sexo = document.getElementById("sexo").value;

		function Persona(nombre, edad, sexo) {
			this.nombre = nombre;
			this.edad = edad;
			this.sexo = sexo;
			this.mayorDeedad = (this.edad >= 18)
		} 	Persona.prototype.presentacion= function(){
			if(this.edad >=18) {
				return "Hola mi nombre es " + this.nombre + ", tengo " + this.edad + " años, soy " + this.sexo + " y soy " + " mayor de edad.";
			} 
			else{
				return "Hola mi nombre es " + this.nombre + ", tengo " + this.edad + " años, soy " + this.sexo + " y soy " + " menor de edad.";
			}
	}
	var saludar = document.getElementById("saludar");
	var Persona = new Persona(nombre, edad, sexo);
		saludar.innerHTML=Persona.presentacion();
	}); 
});
