//night mode
!function(){var t,e=document.getElementById("night");e&&(t=null!==localStorage.getItem("night")&&"night"===localStorage.getItem("night"),(e.checked=t)?document.body.setAttribute("data-theme","night"):document.body.removeAttribute("data-theme"),e.addEventListener("change",function(t){e.checked?(document.body.setAttribute("data-theme","night"),localStorage.setItem("night","night")):(document.body.removeAttribute("data-theme"),localStorage.removeItem("night"))}))}();
//materialize
$(document).ready(function(){$(".button-collapse").sideNav({draggable:!1}),$(".tabs").tabs({swipeable:!0}),$(".modal").modal(),$(".tooltipped").tooltip({delay:50}),$(".dropdown-button").dropdown({constrainWidth:!1,hover:!0,gutter:0,belowOrigin:!0})});
