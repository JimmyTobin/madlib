

alert("hi");

function doStuff() {
		alert("Ok here are the questions");
		var malePerson = prompt("Please give me a male person");
		var noun1 = prompt("Please give me a noun")
		var male = prompt("Please give me the name of of male person")
		var adjective1 = prompt("Please give me an adjective")
		var noun2 = prompt("Please give me a noun")
		var verb1 = prompt("Please give me a verb")
		var noun3 = prompt("Please give me a noun")
		var adjective2 = prompt("Please give me an adjective")
		var noun4 = prompt("pPlease give me a noun")
		var verb2 = prompt("Please give me a verb")
		var noun5 = prompt("Please give me a noun")
		var number = prompt("Please give me a number")

		alert("Ok, here is your mad lib!")


		var story = 
		"Last week <span class='c'> " + malePerson + "</span>took a road trip across the country. As he drove his" + noun1 + "across the country side" + malePerson 
		+ "realized that he forgot his" + adjective1 + noun1+ "Once this news hit him there was immediate panic" + malePerson + "quikly turned his car around and floored it home to get his" + noun2 + "However, without realizing it" +
		malePerson + "sped past an" + adjective1 + "looking cop. This cop then took off after" + malePerson + 
		"and screamed through a" + noun3 + malePerson + "heard the officers command but just kept on driving. Eventually the cop caught up to" +
		"him and sent his car into the side of a" + noun4 + malePerson + "was then arrested for" + number + "years and never got to finish his road trip. "


		document.getElementById("finalMadlib").innerHTML = story;
}

/*
Last week ( male person) took a road trip across the country. 
As hedrove his/ (noun) across country side (male person) realized that 
he forgot his (adjective) (noun). Once this news hit him there was 
immediate (verb). (person) quikly turned his car around and floored it home to get his
(noun). However, without realizing it (male person) sped passed an (adjective) looking 
cop. This cop then took off after (male person) and screamed through a (noun), "Hey!
you better (verb) right now!!" ...(male person) heard the officers command but just kept 
on driving. Eventually the cop caught up to him and sent his car into the side of a   
(noun). (male person) was then arrested for (number) years and never got to finish 
his road trip. 

*/

