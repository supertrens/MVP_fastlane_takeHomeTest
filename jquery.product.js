/* Copyright (c) 2018 MVP Fastlane (Take home project) 
 * Programmer: Ernst Pierre(pitrens.studio@gmail.com) http://pieduc.com
 * Version : 0.1
 * Requires: jQuery 1.2+
 */

let schema = {
    product:{
        availability :"",
        brand:"",
        categories: [],
        currency:"",
        description: "",
        image_url:"",
        product_id : 0,
        price: {
            list: "",
            sale: ""
        },
        rating:0.0,
        rating_count : 0,
        title: "",
        url  : ""
    }
	
}

function scrapeData() {
    let product = schema.product
    // jQuery here…
    
    return answerQ3(product)
}

function answerQ1(product){
     /* for the 'title' I select only the first element, 
     * otherwise the title will be read twice.
     * since we have an araia-label that will be added to the object
     */
    product.title = $("h1.psp-product-name:eq(0)").text().trim()
    product.price.list = $("#psp-regular-price").text().trim()
    product.price.sale = $("#psp-sale-price").text().trim()

    product.description = $(".pdp-about-details-equit").text().trim()
    // get more details 
    $('.pdp-about-list li.pdp-about-bullet').each(function() {
        let text = $(this).text().trim()
        product.description += ` ${text} ` //ES6 syntax
    });

    //product.categories =
    $('.main-breadcrumbs li').each(function() {
        let text = $(this).text().trim()
        product.categories.push(text)
    });

    return product
}

function answerQ2(product){
    $('#psp-sizedropdown-menu li').each(function() {

        let id = $(this).attr("data-sku")
        let outOfStock = $(this).attr("data-outofstock").toLowerCase();

        // If outOfStock is true , so the product is not available
        const availability = outOfStock === "true" ? false : true

        product.availability = availability
        product.product_id = id
    });
    return product
}

function answerQ3(product){

/********************HERE IS THE CODE FOR QUESTION 1 ********************/
 product = answerQ1(product)
   
/********************HERE IS THE CODE FOR QUESTION 2 ********************/
//Q2-1
  product = answerQ2(product)

//Complete the Json data
  product.currency = $(".psp-product-regularprice").attr("content")
  product.image_url = $(".item-image").attr("src")

  return product

}
