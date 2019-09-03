
/**

 * The set of statements that are executed in the browser console to try out

 * jQuery selectors

 */



// Select all of the anchor elements on the page using the `$` as shorthand

// for the `jQuery` function

$("a");



// The long version of the function

jQuery("a");



// Get all elements that contain a class of `card_image`

$(".card_image");

/**

 * The set of statements that are executed in the browser console to try out

 * jQuery selectors

 */



// Append a span to every paragraph

$("p").append("<span>lorem ipsum</span>");



// Remove all links using the remove function

$("a").remove();



// Empty all div elements that have a class of card

$("div.card").empty();





// Get all elements that contain an ID of `logoNav`

$("#logoNav");



// Get all anchors that are direct children of paragraphs

$("p>a");



// Get all anchor elements that are descendants of paragraphs

$("p a");



// Get all list item elements that are direct children of unordered lists

$("ul>li");



// Get all list item elements that are descendants of unordered lists

$("ul li");



// Get the first anchor element from the DOM

$("a:first");


// Get the last anchor element from the DOM

$("a:last");



// Select all header elements (h1, h2, h3, h4, h5, h6)

$(":header");

/**

 * The set of statements that are executed in the browser console to try out

 * jQuery selectors

 */



// Modify the contents of all of the paragraph elements on the page

$("p").text("New text");
