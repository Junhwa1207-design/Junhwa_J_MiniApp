// import your packages here
 import { fetchData} from "./modules/TheDataMiner.js";
 import miniCooperCard from "./modules/miniCooperCard.js";

(()=> {
    let vue_vm = new Vue ({

        data: {
            message: "MINICOOPER EVENT!",
            anotherMessage: "Find your 3 Doors Mini.",
            removeAformat: true,
            showBioData: false,
            miniCooper: [ ],
            currentMiniCooperData:{}
            
        },
        mounted: function(){
            console.log("Vue is mounted, trying a fetch for the initial data");

            fetchData("./includes/index.php")
            .then(data => {
            data.forEach(miniCooper => this.miniCooper.push(miniCooper));
            })
            .catch(err => console.error(err));
     },
     updated: function(){
             console.log ('Vue just updated the DOM');

     },

     methods:{
        logclicked(){
            console.log("clicked on a list item")
        },
        clickHeader() {
            console.log("clicked on the header");
        },

        showCooperData (target) {
 
            console.log('clicked to view miniCooper bio-data', target, target.name);
      
            this.showBioData = this.showBioData ? false : true;

            this.currentMiniCooperData = target;
        }

        //removeMiniCooper(target) {
            // remove this prof from the professors array
           // console.log('clicked to remove miniCooper', target, target.name);
            // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

            // make the selected prof's data visible
            // this.professors.splice(this.professors.indexOf(target), 1);
           // this.$delete(this.miniCooper, target);
        //},

        // currentMiniCooperData(target) {
        //     console.log('clicked to view miniCooper bio data', target);
        //     this.showBioData = this.showBioData ? false : true;
        //     this.currentMiniCooperData = target;
        //     }
    },
        components: {
            "minicooper-card": miniCooperCard      
        }
    }).$mount("#app");
})();



// (() => {
    // stub * just a place for non-component-specific stuff
//     console.log('loaded');
//     function popErrorBox(message) {
//         alert("Something has gone horribly, horribly wrong");
//     }
//     //show the individual content after a click
//     function openLightbox(data) {
//          //populate a lightbox with this data
//         // and then open it
//         let lightbox = document.querySelector(".lightbox"),
//             closeButton = lightbox.querySelector('span');

//             closeButton.addEventListener("click", ()=> { lightbox.classList.remove('show-lightbox')})

//         lightbox.classList.add('show-lightbox');
//         //lightbox should open but nothing inside yet
//         //lightbox.querySelector('img').src = `images/${data[0].image}`;
//         lightbox.querySelector('h3').textContent = data[0].price; 
//         lightbox.querySelector('p').textContent = data[0].description; 
//     }
//     function retrieveProjectInfo(event) {
//         // test for an ID
//         //check for an id, and if there isn't one, then don't try the fetch call
//         if (!event.target.id) { return }

//         //need to write some lightbox functionality here - pass the data into that function and then show it

//         fetchData(`./includes/index.php?id=${event.target.id}`).then(data => openLightbox(data)).catch(err => console.log(err));
//     }
//     function renderPortfolioThumbnails(thumbs) {
//         let userSection = document.querySelector('.user-section'),
//             userTemplate = document.querySelector('#user-template').content;

//         for (let user in thumbs) {

//             let currentUser = userTemplate.cloneNode(true),
//                 currentUserText = currentUser.querySelector('.user').children;

//             currentUserText[1].src = `images/${thumbs[user].image}`;
//             currentUserText[1].id = thumbs[user].id;
//             // add this new user to the view
//             userSection.appendChild(currentUser);
//         }

//         userSection.addEventListener("click", retrieveProjectInfo);
//     }
//     // we can add a catch handler to a thenable if things go wrong during our data retrieval attempt
//     // really, we should move all of this to an external class or function and pass arguments into it.

//     // that would make it really flexible and able to handle all kinds of requests and we could pass in a callback depending on what we want to do with our data

//     // but then we'd be on our way to rewriting the Axios API (you should research it)

//     fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err)); 
  
// })();