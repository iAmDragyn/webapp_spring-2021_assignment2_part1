# webapp_spring2021_Assignment2-part1
# Assignment 2 Part 1

**Names:** Tammy Husnetdinova and Alex Verkest<br>
<br>
**Class:** CSCI4800-E01 <br>
<br>
**Date:** 3/15/21 <br>
<br>
**Assignment:** 2 Part 1 for Google Books Site <br>
<br>
**Learning objectives:** Our goal was to learn more about Vue.js and APIs by adding more functionality and features to our existing Google Book Search site from Classwork 3 on Javascript and Classwork on Vue.js. The main objectives were to add pagination for search results with next and previous buttons, refine the existing template for result display to list the authors correctly and not show undefined items. Some other features that were added in this version are thumbnails, main category/genre that the book belongs to, description, and price in USD. All of the above data fields were added from the JSON object of each book using Google Books API methods. <br>
<br>
**Technologies used:** HTML5, CSS3, Native Javascript, Vue.js for code, Visual Studio Code for development and testing, Google Chrome browser for testing, Windows 10 OS <br>
<br>
**Justification in design choices:** We decided to go with Vue.js for the visual infrastructure of our Google Books website, because it's what we've become most familiar with throughout the course. For layout and additional attributes to display, we decided that the thumbnail should go first, followed by title, author, year, publisher, and accompanied by information like main category/genre, a brief description, and a price. Some of these additional fields were not available for all books, but if you scroll through enough, there should be some with all fields present. Pagination was done using Vue and plain Javascript and works to display the next set of books available. <br>
<br>
**Extra features:**  No extra features to document. <br>
<br>
**Nu HTML Checker status:** Nu HTML checked passed for all html elements and rules; however, there were warnings about vue syntax within html tags, such as @submit, :key, v-if, v-for. We believe we still pass the tests though, because we followed the rules used by Dr. Jafarian for integrating any vue into our html. <br>
<br>
**Check it out:**  https://iamdragyn.github.io/webapp_spring-2021_assignment2_part1/
<br>
<br>
