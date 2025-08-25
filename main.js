let subMenuVisible = false;

function toggleSubMenu() {
    event.preventDefault();
    const subMenu = document.getElementById('subMenu');
    const parrafo = document.getElementById('parrafo-cat');
    const titulo = document.getElementById('menu-title');

    if (!subMenuVisible) {
        const buttonsHTML = `
        <div class="div-botones-submenu" data-button-number="1">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-1">
                        <img src="./img-productos/200-be.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/200-ne.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/200-bla.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(1)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(1)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="1">200</p>
                <button class="boton-consulta" onclick="hacerConsulta(1)">Consultar</button>
            </div>
        </div>



        <div class="div-botones-submenu" data-button-number="2">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-2">
                        <img src="./img-productos/210-be.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/210-be2.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/210-gris.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/210-gris2.jpg" alt="Imagen 4" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/210-ne.jpg" alt="Imagen 5" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/210-ne2.jpg" alt="Imagen 6" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(2)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(2)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="2">210</p>
                <button class="boton-consulta" onclick="hacerConsulta(2)">Consultar</button>
            </div>
        </div>

         <div class="div-botones-submenu" data-button-number="3">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-3">
                        <img src="./img-productos/300-2.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/300-ne.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/300-animal.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(3)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(3)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="3">300</p>
                <button class="boton-consulta" onclick="hacerConsulta(3)">Consultar</button>
            </div>
        </div>



         <div class="div-botones-submenu" data-button-number="4">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-4">
                        <img src="./img-productos/315.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/315-2.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/315-3.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(4)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(4)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="4">315</p>
                <button class="boton-consulta" onclick="hacerConsulta(4)">Consultar</button>
            </div>
        </div>

         <div class="div-botones-submenu" data-button-number="5">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-5">
                        <img src="./img-productos/350-ma.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/350-ne.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/350-ma2.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/350-ne2.jpg" alt="Imagen 4" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(5)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(5)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="5">350</p>
                <button class="boton-consulta" onclick="hacerConsulta(5)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="6">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-6">
                        <img src="./img-productos/380.jpg" alt="Imagen 1" class="carousel-image"
                        style="width:150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/380-2.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/380-3.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(6)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(6)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="6">380</p>
                <button class="boton-consulta" onclick="hacerConsulta(6)">Consultar</button>
            </div>
        </div>

         <div class="div-botones-submenu" data-button-number="7">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-7">
                        <img src="./img-productos/400-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/400-ne2.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/400-be.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/400-be2.jpg" alt="Imagen 4" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(7)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(7)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="7">400</p>
                <button class="boton-consulta" onclick="hacerConsulta(7)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="8">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-8">
                        <img src="./img-productos/534-ne2.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/534-do2.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/534-gris2.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/534-ne.jpg" alt="Imagen 4" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/534-do.jpg" alt="Imagen 5" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/534-gris.jpg" alt="Imagen 6" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(8)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(8)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="8">534</p>
                <button class="boton-consulta" onclick="hacerConsulta(8)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="9">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-9">
                        <img src="./img-productos/570-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/570-do.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/570-gris.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(9)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(9)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="9">570</p>
                <button class="boton-consulta" onclick="hacerConsulta(9)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="10">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-10">
                        <img src="./img-productos/580-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/580-be.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/580-bl.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/580-ne2.jpg" alt="Imagen 4" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/580-be2.jpg" alt="Imagen 5" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/580-bl2.jpg" alt="Imagen 6" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(10)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(10)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="10">580</p>
                <button class="boton-consulta" onclick="hacerConsulta(10)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="11">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-11">
                        <img src="./img-productos/600-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/600-be.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/600-ne2.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/600-be2.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(11)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(11)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="11">600</p>
                <button class="boton-consulta" onclick="hacerConsulta(11)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="12">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-12">
                        <img src="./img-productos/650-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/650-be.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/650-ne2.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/650-be2.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(12)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(12)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="12">650</p>
                <button class="boton-consulta" onclick="hacerConsulta(12)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="13">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-13">
                        <img src="./img-productos/680-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/680-ma.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(13)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(13)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="13">680</p>
                <button class="boton-consulta" onclick="hacerConsulta(13)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="14">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-14">
                        <img src="./img-productos/705-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/705-ma.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(14)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(14)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="14">705</p>
                <button class="boton-consulta" onclick="hacerConsulta(14)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="15">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-15">
                        <img src="./img-productos/730-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/730-ma.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/730-animal.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(15)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(15)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="15">730</p>
                <button class="boton-consulta" onclick="hacerConsulta(15)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="16">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-16">
                        <img src="./img-productos/750-ma.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/750-ne2.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/750-ma2.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/750-ne2.jpg" alt="Imagen 4" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(16)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(16)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="16">750</p>
                <button class="boton-consulta" onclick="hacerConsulta(16)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="17">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-17">
                        <img src="./img-productos/760.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/760-2.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/760-3.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(17)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(17)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="17">760</p>
                <button class="boton-consulta" onclick="hacerConsulta(17)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="18">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-18">
                        <img src="./img-productos/770.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/770-2.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(18)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(18)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="18">770</p>
                <button class="boton-consulta" onclick="hacerConsulta(18)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="19"
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-19">
                        <img src="./img-productos/802-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/802-gris.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/802-do.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(19)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(19)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="19">802</p>
                <button class="boton-consulta" onclick="hacerConsulta(19)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="20">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-20">
                        <img src="./img-productos/810-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/810-ne2.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/810-gris.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/810-gris2.jpg" alt="Imagen 4" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/810-do.jpg" alt="Imagen 5" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/810-do2.jpg" alt="Imagen 6" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(20)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(20)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="20">810</p>
                <button class="boton-consulta" onclick="hacerConsulta(20)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="21">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-21">
                        <img src="./img-productos/850-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/850-cel.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/850-bla.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(21)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(21)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="21">850</p>
                <button class="boton-consulta" onclick="hacerConsulta(21)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="22">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-22">
                        <img src="./img-productos/870-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/870-animal.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/870-jean.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(22)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(22)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="22">870</p>
                <button class="boton-consulta" onclick="hacerConsulta(22)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="23">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-23">
                        <img src="./img-productos/910-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/910-bla.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/910-jean.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(23)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(23)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="23">910</p>
                <button class="boton-consulta" onclick="hacerConsulta(23)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="24">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-24">
                        <img src="./img-productos/1250-ne.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/1250-ce.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/1250-gris.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(24)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(24)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="24">1250</p>
                <button class="boton-consulta" onclick="hacerConsulta(24)">Consultar</button>
            </div>
        </div>


         <div class="div-botones-submenu" data-button-number="25">
            <div class="div-producto">

                <div class="carousel-container">
                    <div class="carousel-images" id="carousel-images-25">
                        <img src="./img-productos/venus-ne2.jpg" alt="Imagen 1" class="carousel-image"
                        style="width: 150px;
                        margin-left: 26px;
                        height: 250px;">
                        <img src="./img-productos/venus-ce2.jpg" alt="Imagen 2" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/venus-ne.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                        <img src="./img-productos/venus-ce.jpg" alt="Imagen 3" class="carousel-image"
                        style="width: 150px;
                        margin-left: 50px;
                        height: 250px;">
                    </div>
                    <button class="carousel-button prev" onclick="prevImage(25)">&#10094;</button> <!-- flecha izquierda -->
                    <button class="carousel-button next" onclick="nextImage(25)">&#10095;</button> <!-- flecha derecha -->
                </div>

                <p class="sub-menu-button" data-button-number="25">Venus</p>
                <button class="boton-consulta" onclick="hacerConsulta(25)">Consultar</button>
            </div>
        </div>

         `;

        titulo.style.color = "black";
        parrafo.style.display = "none";
        subMenu.innerHTML = buttonsHTML;

        subMenuVisible = true;
        subMenu.classList.add('active');
        subMenu.style.visibility = "visible";

        // Animar cada div-botones-submenu
        setTimeout(() => {
            document.querySelectorAll('.div-botones-submenu').forEach((el, i) => {
                setTimeout(() => el.classList.add('active'), i * 80);
            });
        }, 500);
    } else {
        subMenu.classList.remove('active');
        titulo.style.color = "white";
        parrafo.style.display = "block";

        // Animar ocultar cada div-botones-submenu
        document.querySelectorAll('.div-botones-submenu').forEach((el, i) => {
            setTimeout(() => el.classList.remove('active'), i * 80);
        });

        setTimeout(() => {
            subMenu.innerHTML = '';
            subMenu.style.visibility = "hidden";
        }, 700);

        subMenuVisible = false;
    }
}

    function prevImage(carouselId) {
        const carouselImages = document.getElementById(`carousel-images-${carouselId}`);
        const totalImages = carouselImages.children.length;
        let currentIndex = carouselImages.dataset.currentIndex ? parseInt(carouselImages.dataset.currentIndex) : 0;

        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // permite el bucle hacia atrás
        carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
        carouselImages.dataset.currentIndex = currentIndex;
    }

    function nextImage(carouselId) {
        const carouselImages = document.getElementById(`carousel-images-${carouselId}`);
        const totalImages = carouselImages.children.length;
        let currentIndex = carouselImages.dataset.currentIndex ? parseInt(carouselImages.dataset.currentIndex) : 0;

        currentIndex = (currentIndex + 1) % totalImages; // permite el bucle hacia adelante
        carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
        carouselImages.dataset.currentIndex = currentIndex;
    }

   function hacerConsulta(buttonNumber) {
    const productoDiv = document.querySelector(`.div-botones-submenu[data-button-number="${buttonNumber}"]`);
    let productName = '';

    if (productoDiv) {
        const subMenuButton = productoDiv.querySelector('.sub-menu-button');
        if (subMenuButton) {
            productName = subMenuButton.textContent.trim();
        }
    }

    // Forma el mensaje para enviar a WhatsApp
    const message = `Hola Terracota, quiero realizar una consulta sobre los zapatos: ${productName}`;
    const whatsappMessage = encodeURIComponent(message);
    const numeroWhatsApp = '541133556113';

    window.location.href = `https://wa.me/${numeroWhatsApp}?text=${whatsappMessage}`;
}