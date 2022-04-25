var estadomenu = 0;
var estadonoturno = 0;
const itemmenu = document.querySelector(".item-menu-esquerdo");
const menutopo = document.querySelector(".menu-topo");
const itensmenu = document.querySelectorAll(".menu-topo li a, #menu-esquerdo,#topo-esquerdo p");
	


function mostra() {
	if (estadomenu === 0) {
		itemmenu.style.display = "flex";
		estadomenu = 1;
		} else {
			itemmenu.style.display = "none";
			estadomenu = 0;
		}
}

function modonoturno() {
	
	if (estadonoturno === 0) {
		menutopo.style.backgroundColor = "#333";
		menutopo.style.color = "#ffffff";
		for (var i = 0; i < itensmenu.length; i++) {
		itensmenu[i].style.color = "#ffffff";
		itemmenu.style.backgroundColor = "#333"
		}
		estadonoturno = 1;
	} else {
		menutopo.style.backgroundColor = "#ffffff";
		menutopo.style.color = "#1c1e21";
		for (var i = 0; i < itensmenu.length; i++) {
		itensmenu[i].style.color = "#1c1e21";
		itemmenu.style.backgroundColor = "#ffffff";
		}
		estadonoturno = 0;
	}

}