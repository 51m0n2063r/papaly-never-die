let li = ["https://vuejs.org/v2/guide/","https://github.com/15Dkatz/vue-guides"]
let app = new Vue({
  el: '#app',
  data: {
    title: 'PapaVue',
      listCat: {},
      link: null,
      cat: null,
      linkArray: li,
      catError: false
    },
    methods: {
        addCategorie(){
          this.listCat[this.cat] = [this.link]
          this.listCat[this.cat].shift()
          console.table(this.listCat)
        },
        addLink(){
        if(this.cat){
          if(!this.listCat[this.cat]){
            this.listCat[this.cat] = [this.link]
          } else {
            this.listCat[this.cat].push(this.link)
          }
        } else {
          this.catError = true
          //faire une alerte flash
        }  
          console.table(this.listCat)
        },
        removeLink: function (index) {
          this.linkArray.splice(index, 1);
        }
    }
})