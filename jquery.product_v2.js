/* Copyright (c) 2018 MVP Fastlane (Take home project) 
 * Programmer: Ernst Pierre(pitrens.studio@gmail.com) http://pieduc.com
 * Version : 0.1
 * Requires: jQuery 1.2+
 */

var schema = {
    product: {
        availability: "",
        brand: "",
        categories: [],
        currency: "",
        description: "",
        image_url: "",
        product_id: 0,
        price: {
            list: 0.0,
            sale: 0.0
        },
        details:{
            color:"",
            size :""
        },
        rating: 0.0,
        rating_count: 0,
        title: "",
        url: "",
        variations: []
    }
}

var myUrl = "https://www.ae.com/api/catalog/v1/products/1164_9216_337";

function scrapeData() {
   
    /************************First make the API call ************************/

     apiCall();
     
}

function apiCall() {
    
    var request = $.ajax({
         url: myUrl,
         type: "GET",
    });
 
    request.done(function( feed ) {
        answerQ3(feed);
    });
 
    request.fail(function( jqXHR, textStatus ) {
        console.log("error");
    });
}

function answerQ1(product , Json_query) {
    
    
    /* for the 'title' I select only the first element, 
     * otherwise the title will be read twice.
     * since we have an araia-label that will be added to the object
     */
    //product.title = $("h1.psp-product-name:eq(0)").text().trim();
    product.title = Json_query.prdName;

    // let price   = $("#psp-regular-price").text().trim();
    // //remove any comma from the price string and convert them to float
    // price = price.replace(/,/g,"");
    // product.price.list = parseFloat(price);
    product.price.list = parseFloat(Json_query.listPrice);


    // let sale    = $("#psp-sale-price").text().trim();    
    // sale  = sale.replace(/,/g,"");
    // //check if the sale variable as a value before convert it to float
    // product.price.sale = sale === "" ? "" : parseFloat(sale);
    product.price.sale = parseFloat(Json_query.salePrice);
   

    // product.description = $(".pdp-about-details-equit").text().trim();
    // // get more details 
    // $('.pdp-about-list li.pdp-about-bullet').each(function() {
    //     let text = $(this).text().trim()
    //     product.description += ` ${text} ` //ES6 syntax
    // });

    //get the main description
    product.description = Json_query.leadingEquity;

    //add extra information
    let extraDetail = Json_query.equityBullets;
    for(let detail of extraDetail)
        product.description = `${product.description} ${detail} `;

    //product.categories =
    $('.main-breadcrumbs li').each(function() {
        let text = $(this).text().trim()
        product.categories.push(text)
    });
    console.log(product);
    return product
}

function answerQ2(product , Json_query) {
    $('#psp-sizedropdown-menu li').each(function( count) {

        let id = Json_query.prdID;
        let outOfStock =$(this).attr("data-outofstock").toLowerCase();
        
       
        //to take the first in the list as the active li
        if(count === 0){
            const size = $("#psp-sizedropdown-menu li:eq(0) a").attr("data-size");
            product.product_id = id;
            product.details.size=size;
        }


        // If outOfStock is true , so the product is not available
        const availability = outOfStock === "true" ? false : true

        product.availability = availability
        
        product.variations.push({
            "id": id,
            "availability": availability
        })
        product.details.color=$(".psp-product-color").text().trim()
       
    })
    return product
}


function answerQ3(feed) {

    console.log(feed);
    let product = schema.product;
    const Json_query = feed.response.value.data;
    /********************HERE IS THE CODE FOR QUESTION 1 ********************/
    product = answerQ1(product , Json_query);

    /********************HERE IS THE CODE FOR QUESTION 2 ********************/
   // Q2-1
    product = answerQ2(product , Json_query);

    //Complete the Json data
    // product.currency = $(".psp-product-regularprice , .psp-product-listprice").attr("content")
    product.currency = Json_query.currencyCode;
    product.brand = Json_query.brandName;

    // product.image_url = $(".item-image").attr("src")
    product.image_url = `https:${Json_query.largeimages['001'][0]}`; //ES6 syntax
    // product.url = $(location).attr('href')
    product.url = `https://www.ae.com${Json_query.pageUrl}`; //ES6 syntax


    const rating_count = $(".BVRRNonZeroCount .BVRRNumber:eq(0)").text().trim()
    const rating = $(".BVRRRatingNumber").text().trim()
    //the rating and the rating_count might be undefined if no review had been added
    //so we check, if it's a number we display it , else we set them as 0
    product.rating_count = rating_count ==="" ? 0 : parseFloat(rating_count)
    product.rating =  rating ==="" ? 0 : parseFloat(rating)

    return product
}


