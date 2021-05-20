const contacts = document.querySelectorAll(".contact-item");
const contactLength = contacts.length;

const numPages = Math.ceil(contactLength / 10); //This will retrieve the total number of pages required
const numModulo = contacts.length & numPages; // This will store the module, which is used when the last page is clicked to avoid null errors.

function sortContacts(contactList, index = 1) {
    //reset contactList html.
  document.querySelector("#contactList").innerHTML = "";
  let contactArray = [];        //create a new array storing only the required contacts
  let count = (index - 1) * 10;
  if (index != numPages) {
    while (count < index * 10) {
      contactArray.push(contactList[count]); // add the new contactList array in the now empty HTML.
      console.log(contactList[count]);
      count++;
    }
  } else {
    while (count < index * 10 - numModulo) { // This while loop runs only when the last page button is clicked, and uses the numModulo to avoid null errors in the last page.
      contactArray.push(contactList[count]);
      console.log(contactList[count]);
      count++;
    }
  }

  contactArray.map((contact) =>
      (document.querySelector("#contactList").innerHTML += contact.outerHTML) //Add the li for each contact to the contactList element
  );

  return contactArray;
}

//This function generates the page number buttons at the bottom
function generatePagination() {
  let navHTML = `<div style="margin: auto; text-align: center;">`;
// for loop that gathers how many pages I need, and adds a button for each page
  for (let count = 1; count <= numPages; count++) {
    navHTML += `<button onClick="sortContacts(contacts, ${count})">${count}</button>`;
  }

  navHTML += `</div>`;

  return navHTML;
}

let newContactList = sortContacts(contacts);

document.querySelector(".page").innerHTML += generatePagination();
