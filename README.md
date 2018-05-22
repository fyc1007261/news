# Global News Overview

> A Vue.js project by YiFan Cai, FanXu Jiang, Xiao Zhou, Dongqi Li, RuiZhe Tong, SE, SJTU.

## I. Build Setup

``` bash
# Attention!! Built files are meant to be served over an HTTP server.
# Opening index.html over file:// won't work.

# install dependencies
# Some dependencies may not be successfully installed, but it does not matter.
npm install

# serve with hot reload at localhost:8080
# If chrome driver is not successfully installed, which is very common, 
# just manually type the address into the browser.
npm run dev

# build for production with minification
npm run build

# run unit tests
# It usually causes some error, causing the website of testing not working, 
# but it does not matter. The test can still run correctly.
# Coverage report is in ./test/unit/coverage
npm run unit
```

## II. An introduction of this website

​	This website is for users to read and share news from all over the world.  Different from common news websites, in this website, news are classified by regions. Also, users can publish firsthand news they discover. Each piece of news has a *heat* value, which will also be shown. Others users can comment on news, either like or dislike, to increase or decrease the *heat* value. News with higher *heat* can be more easily recognized by users. In this way, really important news can be spread and those useless pieces of news will be buried.  

## III.  Functions of this website in detail

##### 	1. Read news from selected continent

​	In this project, the world is divided into 4 parts: America, Africa, Europe, and Asia&Pacific. Users click on the corresponding area in the map, and news from this area of the world will be shown in the left text-frame.

##### 	2.  Comment on news

​	After reading the news, click on either *Like* or *Dislike*. The heat of news will change, and you successfully make a contribution to the website community.

##### 	3. Publish news

​	You are allowed to publish your firsthand news on the website, you need to select a region and input the content of the news. The heat of your news will be initialized by zero. Your news can be hotter when other users like your news click *Like* on it.

##### 4. Automatic sorting

​	After a news published, all pieces of news will be sorted based on its *heat*. Therefore, users will always see news with higher *heat* first. 

## IV.  Division of work  

​	Cai Yifan offered the original project and did most work on writing the .travis.yml file. 

​ Zhou Xiao made the PPT .

## V.   Notes

​ This program is integrated by Travis CI and deployed on Github and displayed on the Github Page.
​ The Travis CI address is https://www.travis-ci.org/fyc1007261/news
​ The Github Page is https://fyc1007261.github.io/News-overview/#
