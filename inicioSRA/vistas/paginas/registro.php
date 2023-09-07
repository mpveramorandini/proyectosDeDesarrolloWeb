<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>pruebaInicioSRA</title>
  <link rel="stylesheet" href="./public/css/estilo.css">
</head>

<body>
  
<div class="encabezado">  
<span class="bienvenido">Bienvenido al Sistema de tramites y consultas de la SRA</span>
</div>

<div  class="contenedor_registro" style="background-image:url(./public/img/caballos_inicio.jpg)"> 
<div class="contacto_registro">
                    
                    <form action="" method="post" class="formulario registro">
                      <h2>Registrarse</h2>
                    <p>
                        <label for="nombre">Nombre:</label>
                        <input type="text" name="registroNombre" id="nombre">
                    </p>
                    <p>
                        <label for="nombre">Apellido:</label>
                        <input type="text" name="registroApellido" id="apellido">
                    </p>
                    <p>
                        <label for="email">Email:</label>
                        <input type="text" name="registroEmail" id="email">
                    </p>
                    <p>
                        <label for="pwd">Contraseña</label>
                        <input type="password" name="registroPassword" id="pwd">
                    </p>
                    
                    <p class="boton">
                        <input type="submit" name="" id="enviar" value="Registrarse">
                    </p>
                       
                        <div class="cuenta">
                          Ya tenes cuenta? <a href="ingreso.html" class="registrarse">Iniciar Sesión</a>
                        </div>
                    </form>
 </div> 
</div>
