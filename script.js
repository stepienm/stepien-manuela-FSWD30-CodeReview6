var Media=[{
          Titel: "Dylan",
          Author: "Bob Dylan",
          Genre: "Rock",
          Minutes: 34,
          Publisher :"United Artists",
          Image :"img/Bob_Dylan_-_Dylan_(1973_album).jpg",
          Price: "24,95 Euro",
          Rating : "&starf;&starf;&starf;&starf;&star;"
        },{
          Titel : "City lights",
          Author: "Charlie Chaplin",
          Genre: "Romantic Comedy",
          Minutes: 87,
          Publisher :"United Artists",
          Image :"img/citylights_image.jpg",
          Price: "10,99 Euro",
          Rating : "&starf;&starf;&starf;&starf;&starf;"
        },{
          Titel: "Lawrence of Arabia",
          Author: "T.E.Lawrence",
          Genre: " Historical Drama",
          Minutes: 222,
          Publisher :"Columbia Pictures",
          Image :"img/Lawrence_of_arabia.jpg",
          Price:"29,99 Euro",
          Rating : "&starf;&starf;&starf;&starf;&starf;"
        },{
          Titel: "Diamond Life",
          Author: "Sade",
          Genre: "Smooth Soul",
          Publisher :"Epic",
          Minutes: 45,
          Image :"img/sade-diamond-life.jpg",
          Price: "45,95Euro",
          Rating : "&starf;&starf;&starf;&starf;&star;"
        },{
          Titel: "Woodwalkers",
          Author: "Katja Brandis",
          Genre: "Belletristik",
          Minutes: 76,
          Publisher :"Bild",
          Image :"img/woodwalkers.jpg",
          Price:"28,99 Euro",
          Rating : "&starf;&starf;&starf;&starf;&starf;",
        
        },{
          Titel : "Foundation",
          Author: "Isaac Asimov",
          Genre: "Fantasy Science Fiction",
          Minutes: 98,
          Publisher :"Heyne",
          Image :"img/fondation-asimov.jpg",
          Price: "17,99 Euro",
          Rating : "&starf;&starf;&starf;&star;&star;"
        },{
          Titel: "The Sandman",
          Author: "Neil Gaiman",
          Genre: "Fantasy",
          Minutes: 56,
          Publisher:"Vertigo",
          Image:"img/Sandman.jpg",
          Price: "38,90 Euro",
          Rating : "&starf;&starf;&starf;&starf;&star;"
        },{
          Titel: "Modesty Blaise",
          Author: "Peter O'Donnell",
          Genre: "Mystery",
          Publisher:"Titan Books",
          Image:"img/modesty1.jpg",
          Price: "15,95 Euro",
          Rating: "&starf;&starf;&starf;&starf;&star;"
        }];
        //
        

        document.write("<div class='container' style='margin-top:80px;'><h3 class='text-primary'>Mediathek</h3>");
        for (var i = 0 ; i < Media.length ; i++) {
          document.write(`<div class="media col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="media-center">
              <a href='#'><img src="${Media[i].Image}" class="media-object items"style="width:210px;height:280px">
            </a></div>
            <div class="media-body">
              <h4 class="media-menu">${Media[i].Titel}</h4>
              <p>${Media[i].Author}</p>
              <p>${Media[i].Publisher}</p>
              <p>${Media[i].Genre}</p>
              <p>${Media[i].Price}</p>
              <p>${Media[i].Rating}</p>
            </div>
          </div>`)
        };
        document.write("</div>")

        
   