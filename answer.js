unction getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return	"Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}

function getDrinkByProfession(param){
    switch(param.split(" ").map(x=>`${x.charAt(0).toUpperCase()}${x.slice(1).toLowerCase()}`).join("")){
        case "Jabroni":
        return "Patron Tequila"
        break
        case "School Counselor":
        return "Anything with Alcohol"
        break
        case "Programmer":
        return 	"Hipster Craft Beer"
        break
        case "Bike Gang Member":
        return "Moonshine"
        break
        case "Politician":
        return "Your tax dollars"
        break
        case "Rapper":
        return 	"Cristal"
        break
        default:
        return "Beer"
    }
}
