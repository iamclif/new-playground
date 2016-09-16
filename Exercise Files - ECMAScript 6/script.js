for(let i= 0; i<5; i++){
        var div = document.createElement('div');
        div.onclick = function() {
          alert("you clicked on a box #" + i);
        };
        document.getElementsByTagName('b')[0].appendChild(div);
      }

        function print(firstName) {
            console.log(`Hello ${firstName}`);
        }
        print('Clif');

        var cats = ['tabby', 'siamese', 'persian'];
        var dogs = ['mutt', 'boxer', 'pug'];
        var animals = ['whale', 'snake', ...cats, ...dogs, 'coyote', 'bear'];
        console.log(animals);

        var container = document.getElementById("existingDiv");
        for (var item in animals) {
            var paragraph = document.createElement("p");
            paragraph.innerHTML = animals[item];
            container.appendChild(paragraph);
        }