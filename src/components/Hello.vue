<template>
  <div class="hello">

    <div class="textFrame">
      <h2  v-bind:style="{}">News</h2>
      <h3 style="color:red">HEAT: {{g_heat}}</h3>
      <div style="height: 65vmin">{{message}}</div>
      <button class="next" @click="delete_n_next()">Delete and Next</button>
      <button class="like" @click="dislike()">Dislike</button>
      <button class="like" @click="like()">Like</button>
    </div>
    <div class="title">The world is in your eyes.</div>
    <button class="AMB" @click="Am_click()">America</button>
    <button class="ASB" @click="As_click()">Asia & Pacific</button>
    <button class="EUB" @click="Eu_click()">Europe</button>
    <br>
    <button class="AFB" @click="Af_click()">Africa</button>
    <button class="PUB" @click="pub_click()">Publish my news</button>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  methods: {
    sort: function () {
      // sort the news based on the heat value
      let len = this.newsArr.length
      for (let i = 0; i < len; i++) {
        let maxHeat = this.newsArr[i].heat
        let index = i
        for (let j = i; j < len; j++) {
          if (this.newsArr[j].heat >= maxHeat) {
            maxHeat = this.newsArr[j].heat
            index = j
          }
        }
        let temp = this.newsArr[i]
        this.newsArr[i] = this.newsArr[index]
        this.newsArr[index] = temp
      }
    },
    createNews: function (r, c, h) {
      let news = Object()
      news.region = r   // region should be 'Af', 'Am', 'As' or 'Eu'.
      news.content = c  // the content of the news.
      news.heat = h // the heat of the news
      news.cmt = 0 // whether the user has commented on this news.
      this.newsArr.push(news)
      this.sort()
    },
    init: function () {
      this.createNews('Af', 'Andrew Harding: What Ramaphosa victory means for South Africa', 30)
      this.createNews('As', 'Asia is driving the Bitcoin craze?', 70)
      this.createNews('Eu', 'UK to soften Brexit impact on European banks!', 70)
      this.createNews('Am', 'Kobe Bryant Jersey Retirement on Dec.19th!', 100)
      this.inited = 1
    },
    delete_n_next: function () {
      if (this.pos === -1) {
        alert('No news to delete!')
        return false
      }
      if (this.g_region === 'Am') {
        this.newsArr.splice(this.pos, 1)
        this.Am_click()
      }
      if (this.g_region === 'As') {
        this.newsArr.splice(this.pos, 1)
        this.As_click()
      }
      if (this.g_region === 'Af') {
        this.newsArr.splice(this.pos, 1)
        this.Af_click()
      }
      if (this.g_region === 'Eu') {
        this.newsArr.splice(this.pos, 1)
        this.Eu_click()
      }
      return true
    },
    like: function () {
      if (this.inited === 0) {
        alert('You cannot comment on this.')
        return
      }
      let currentObj = this.newsArr[this.pos]
      if (currentObj.cmt === 0) {
        currentObj.cmt = 1
        currentObj.heat += 1
        let msg = 'Success! The heat of the news is now ' + currentObj.heat.toString() + '.'
        alert(msg)
        this.g_heat += 1
        return true
      } else {
        alert('Sorry, you have already commented on this news.')
        return false
      }
    },
    dislike: function () {
      if (this.inited === 0) {
        alert('You cannot comment on this.')
        return
      }
      let currentObj = this.newsArr[this.pos]
      if (currentObj.cmt === 0) {
        currentObj.cmt = 1
        currentObj.heat -= 1
        let msg = 'Success! The heat of the news is now ' + currentObj.heat.toString() + '.'
        alert(msg)
        this.g_heat -= 1
        return true
      } else {
        alert('Sorry, you have already commented on this news.')
        return false
      }
    },
    pub_click: function (test = false, testReg = 'Asia') {
      var region, info
      while (true) {
        if (test) region = testReg
        else region = prompt('Please input the region of your news', 'Asia')
        if (region === null) return false
        region = region.toLowerCase()
        if (region === 'asia') {
          region = 'As'
          break
        } else if (region === 'america') {
          region = 'Am'
          break
        } else if (region === 'europe') {
          region = 'Eu'
          break
        } else if (region === 'africa') {
          region = 'Af'
          break
        }
        alert('Error! Only "America", "Africa", "Europe", "Asia" are valid inputs.')
      }
      while (true) {
        if (test) info = 'SJTU SE Group3 did a good job in their project!'
        else info = prompt('Please describe the news:', 'SJTU SE Group3 did a good job in their project!')
        if (info !== null) break
      }
      this.createNews(region, info, 0)
      alert('Success!')
    },
    Am_click: function () {
      if (this.inited === 0) {
        this.init()
      }
      let found = 0
      for (let i = 0; i < this.newsArr.length; i++) {
        if (this.newsArr[i].region === 'Am') {
          found = 1
          this.pos = i
          this.g_region = 'Am'
          this.g_heat = this.newsArr[i].heat
          this.message = this.newsArr[i].content
          break
        }
      }
      if (found === 0) {
        this.message = 'No news from America'
        this.g_heat = 0
        this.pos = -1
      }
    },
    Af_click: function () {
      if (this.inited === 0) {
        this.init()
      }
      let found = 0
      for (let i = 0; i < this.newsArr.length; i++) {
        if (this.newsArr[i].region === 'Af') {
          found = 1
          this.pos = i
          this.g_region = 'Af'
          this.g_heat = this.newsArr[i].heat
          this.message = this.newsArr[i].content
          break
        }
      }
      if (found === 0) {
        this.message = 'No news from Africa'
        this.g_heat = 0
        this.pos = -1
      }
    },
    As_click: function () {
      if (this.inited === 0) {
        this.init()
      }
      let found = 0
      for (let i = 0; i < this.newsArr.length; i++) {
        if (this.newsArr[i].region === 'As') {
          found = 1
          this.pos = i
          this.g_region = 'As'
          this.message = this.newsArr[i].content
          this.g_heat = this.newsArr[i].heat
          break
        }
      }
      if (found === 0) {
        this.message = 'No news from Asia'
        this.g_heat = 0
        this.pos = -1
      }
    },
    Eu_click: function () {
      if (this.inited === 0) {
        this.init()
      }
      let found = 0
      for (let i = 0; i < this.newsArr.length; i++) {
        if (this.newsArr[i].region === 'Eu') {
          found = 1
          this.pos = i
          this.g_region = 'Eu'
          this.message = this.newsArr[i].content
          this.g_heat = this.newsArr[i].heat
          break
        }
      }
      if (found === 0) {
        this.message = 'No news from Europe'
        this.g_heat = 0
        this.pos = -1
      }
    }
  },
  data () {
    return {
      pos: 0, // the index of news presented in the array.
      g_heat: 0, // the heat of news presented
      inited: 0, // 0 of not initialized.
      g_region: 0, // region should be 'Af', 'Am', 'As' or 'Eu' after initialized.
      message: 'Click on the map to fetch news!',
      newsArr: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  height: 6vmin;
  width: 20vmin;
  font-size: 4vmin;
}
h1 {
  font-weight: bolder;
  font-size:6vmin;
  margin-bottom: 2vmin;
}
h2{
  margin: 5vmin;
  font-weight: bolder;
  font-size: 4vmin;
}
p{
  font-weight: bolder;
  font-size: 4vmin;
}
.hello{
  float: left;
  width:200vmin;
  margin-top: 0;
  word-wrap: break-word;
}
.textFrame{
  margin-top:3vmin;
  margin-left: 3vmin;
  float: left;
  width: 40vmin;
  height: 90vmin;
  background: rgba(222,222,221,0.3);
}
ul {
  float: right;
  margin-top: 10vmin;
  list-style-type: none;
}
li {
  float: left;
  display: inline-block;
}
a {
  color: #42b983;
}
.next{
  float: right;
  font-size: 2vmin;
  margin-bottom:2vmin;
  width: 18vmin;
  height: 4vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
  vertical-align: center;
}
.like{
  float: right;
  font-size: 2vmin;
  margin-bottom:2vmin;
  width: 9vmin;
  height: 4vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
  vertical-align: center;
}

.AMB{
  text-align: center;
  background: none;
  border: 0;
  float: left;
  margin-left: 0;
  margin-top: 10vmin;
  width: 40vmin;
  height: 60vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.EUB{
  background: none;
  border: 0;
  float: left;
  margin-left: 7vmin;
  margin-top: 10vmin;
  width: 25vmin;
  height: 15vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.ASB{
  margin-top: 10vmin;
  background: none;
  border: 0;
  float: right;
  margin-right: 35vmin;
  width:45vmin;
  height:60vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.AFB{
  background: none;
  border: 0;
  float: bottom;
  margin-left: 3vmin;
  width: 28vmin;
  height: 40vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.PUB{
  float: left;
  margin-top:5vmin;
  margin-left: 35vmin;
  width:40vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.title{
  float:top;
  margin-left: 50vmin;
  width: 100vmin;
  vertical-align: top;
  text-align: center;
  font-size: 7vmin;
  color: darkslategrey;
}

</style>
