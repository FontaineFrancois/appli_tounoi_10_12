

var currentElement = null

function afficher_cacher(id,id2)
{
    if (currentElement != null)
      currentElement.style.display = "none";

  	  currentElement = document.getElementById(id);
  	  currentElement.style.display = "block";
      currentElement = document.getElementById(id2);
      currentElement.style.display = "block";
    return true;
}
