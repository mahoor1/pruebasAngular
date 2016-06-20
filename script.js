var app = angular.module("app", [])
	.controller('ControladorTareas', ['$scope', function($scope){
		var ctrl = this;
		ctrl.tareas = [
		{texto:'Primera Tarea', hecho: true},
		{texto:'Segunda Tarea', hecho: false}];

		ctrl.agregarTarea = function(){
			ctrl.tareas.push({texto: ctrl.textoNuevaTarea, hecho: false});
			ctrl.textoNuevaTarea = '';
			ctrl.formVisible = false;
		};

		ctrl.restantes = function(){
			var cuenta = 0;
			angular.forEach(ctrl.tareas, function(tarea){
				cuenta += tarea.hecho ? 0 : 1;
			});
			return cuenta;
		};

		ctrl.eliminar = function(){
			var tareasViejas = ctrl.tareas;
			ctrl.tareas = [];
			angular.forEach(tareasViejas, function(tarea){
				if (!tarea.hecho) 
					ctrl.tareas.push(tarea);
			});
		};

		ctrl.mensaje = "Hola mundo";
		ctrl.cantidad = 0;
		ctrl.precio = 0;

		ctrl.Calcular = function(){
			var precioTotal = 0;
			precioTotal = parseFloat(ctrl.cantidad) * parseFloat(ctrl.precio);
			return precioTotal;
		};

		ctrl.Mostrar = function(){
			ctrl.formVisible = true;
		}
	}]
);


