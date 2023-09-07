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

<div  class="contenedor_inicio" style="background-image:url(./public/img/caballos_inicio.jpg)"> 
<div class="contacto_ingreso">
                    
                    <form action="" method="post" class="formulario ingreso">
                      <h2>Iniciar Sesión</h2>
                        <p>
                        <label for="usuario"></label>
                        <input type="text" name="usuario" placeholder="Usuario" required>
                        </p>

                        <p>
                        <label for="clave"></label>  
                        <input type="password" name="clave" placeholder="Contraseña" required pattern="[A-Za-z0-9!?-]{8,12}">
                        </p>
                    
                        <p>
                        <input type="submit" name="" id="" value="Ingresar">
                        </p>
                        <div class="cuenta">
                          No tenes cuenta? <a href="registro.html" class="registrarse">Registrarse</a>
                        </div>
                    </form>
 </div> 
</div>