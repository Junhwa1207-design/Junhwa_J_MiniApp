export default {
    Name: "miniCooperCard",

    props: ["cooper"],

    // data needs to be a function inside a component
    data: 
    
    
    
    
    function() {
        return {
            myName: this.cooper.name,
            myPrice: this.cooper.price,
            myDescription: this.cooper.description,
            program: "IDP",
            removeAformat: true,
            showBioData: false
        }
    },

    template: 
    `<li @click="logClicked">
        <img :src="'images/' + cooper.image" :alt='cooper.name + " image"'>
        
        <p class=" remove-cooper">{{ cooper.name }}</p>

        <!-- <a href="" class="remove-cooper">More Info {{ cooper.name }}'s info</a>                 
        <a href="" class="remove-cooper">Remove {{ cooper.name }}</a>-->
    </li>`,

    created: function () {
        console.log(`created ${this.cooper.name}'s card`);
    },

    methods: {
        logClicked() {
            console.log(`fired from inside ${this.cooper.name}'s component!`);
            this.$emit("showmydata", this.cooper)
        }

        // removeMiniCooper(target) {
        //    // remove this prof from the professors array
        //    console.log('clicked to remove miniCooper', target, target.name);
        //     //the "this" keyword inside a vue instance REFERS to the Vue instance itself by default
        //     this.showBioData = this.showBioData ? false : true;
        // }

        // showMiniCooper(target) {
        //     console.log('clicked to view miniCooper bio data', target.name);
        //     this.showBioData = this.showBioData ? false : true;
        //     //this.showBioData = target;
        //     }

        
    }
}