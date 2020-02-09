// ==UserScript==
// @name         Imgur Redirect
// @namespace    http://imgur.com/
// @version      1.0.0
// @description  I hate imgurs new change for nsfw content and more importantly the change doesn't even fix what the problem was, it just hides it, at the expense of users, so fuck them.  Also >needing a phone to make an account
// @author       SketchFile
// @match        https://imgur.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
     //Setting Var's
    var URL = window.location.href;     //grabs the full url link
    var ID = URL.slice(18)     //defines the start point of the cut from the url to be 18 characters from the left (the character length of imgur's hostname including a /
    var toAppend = "https://imgur.com/".concat(ID)+"/embed?pub=true";      //What I want the full URL to be
    var SoleAppend = "/embed?pub=true"     //What I want to add to the URL if it is not there
    var Check = URL.substring(URL.length - SoleAppend.length);     //Checks that the end of URL is the length of URL - SoleAppend (meaning if SoleAppend is not there this is wrong)
    var KeepAdding = true     //Switch to make it stop reloading.  This took ages to figure out and I'm still not sure I understand it.

if ( Check !== SoleAppend &&KeepAdding)     //if Check does not equal SoleAppend and KeepAdding is true then....
{window.location = toAppend;     //set window location to ToAppend
    KeepAdding = false}     //and set KeepAdding to false


//This literally took me like 15 hours to do, I have zero coding experience or knowledge.  I almost quit several times out of being frustrangry.
//Shout out to NeonTom's discord who let me vent like a lunatic when I was frustrangry (The switch to make it stop reloading took roughly 10 of the 15 hours of even figuring out it was needed or even a thing)
//Shout ot to NeonTom himself who helped out a lot and contributed the basic format of the final code that I ended up adding to and tweaking to get it to work.
})();