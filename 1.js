document.getElementById("myBtn").onclick = function removeLinesWithoutGmail() {
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/\"/g, "").replace(/ /g, "").replace(/#EANF#/g, "");
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/^\s*\n/gm, "").replace(/ /g, "").replace(/,/g, "	").replace(/:/g, "	");
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/boite-oki	/g, "")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/boite-not-work	/g, "")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@gmail.com/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@yahoo.com/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@naver.com/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@mailsac.com/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@hotmail.com/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@1secmail.org/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@mailnesia.com/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@hotmail.fr/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@1secmail.net/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@yopmail.com/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@outlook.com/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@yopmail.com/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@smith.com/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/@maildrop.cc/g, "@gmail.com#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/#(.*?)#/g, "#")
        document.getElementById("valeur3").value = document.getElementById("valeur3").value.replace(/#/g, "")
        var textArea1 = document.getElementById("valeur3");
        // Split the content of text areas into lines
        var lines1 = textArea1.value.split('\n');
        // Filter out lines that contain "@gmail.com"
        var filteredLines1 = lines1.filter(function(line) {
          return line.includes("@gmail.com");
        });
        // Join the filtered lines and update the second text area
        textArea1.value = filteredLines1.join('\n');
      } 
