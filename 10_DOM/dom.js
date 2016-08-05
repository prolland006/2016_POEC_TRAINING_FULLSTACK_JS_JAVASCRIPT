// console.log(document.childNodes); // doctype, html
// console.log(document.childNodes[1]); // html
// console.log(document.childNodes[1].hasChildNodes());
//
// console.log(document.childNodes[1].childNodes); // head, text, body

function printChildNodes(node, depth) {
    // pour utiliser for..of convertir la NodeList en array avec la méthode ES6 Array.from(node.childNodes)
    for(let i = 0; i < node.childNodes.length; i++) {
        if(node.childNodes[i].nodeType === Node.ELEMENT_NODE) {
            let attributes = node.childNodes[i].attributes;
            let attrStr = ' ';
            for(let j = 0; j < attributes.length; j++) {
                // attrStr += attributes.item(j).nodeName + ' = "' + attributes.item(j).nodeValue + '" ';
                attrStr += `${attributes.item(j).nodeName} = ${attributes.item(j).nodeValue} `; // ES6 Template String
            }
            // console.log("\t".repeat(depth) + node.childNodes[i].nodeName + attrStr); // Array(depth).join("\t") avant ES6
            console.log(`${"\t".repeat(depth)} ${node.childNodes[i].nodeName} ${attrStr}`);
            printChildNodes(node.childNodes[i], depth + 1);
        }
    }
}

printChildNodes(document,0);

// par nom de tag
let everySections = document.getElementsByTagName('section');
// par classe
let everyElementWithClassSomeClass = document.getElementsByClassName("someClass");
// par id
let theElementOfIdSectionId = document.getElementById("sectionId");

// via selecteur CSS
let allElementsMatchingCSSSelector = document.querySelectorAll(".someClass");
let theFirstElementMatchingCSSSelector = document.querySelector("#sectionId");

// création dynamique de contenu
// innerHTML
let innerHTMLSection = document.querySelector("#innerHTMLSection");
innerHTMLSection.innerHTML = "<h1>Bonjour le monde.</h1>";

// creation manuelle de nodes
let appendChildSection = document.querySelector("#appendChildSection");
let h1Node = document.createElement("h1");
let textNode = document.createTextNode("Bonjour le monde.");
h1Node.appendChild(textNode);
appendChildSection.appendChild(h1Node);

// accès aux classes d'un élément
appendChildSection.classList.add("rouge");























// function printNodes(node, depth) {
//     for(let i = 0; i < node.childNodes.length; i++) {
//         let child = node.childNodes[i];
//         if(child.nodeType === Node.ELEMENT_NODE) {
//             console.log('\t'.repeat(depth), child.nodeName);
//             printNodes(child, depth + 1);
//         }
//     }
// }
//
// printNodes(document,0);

