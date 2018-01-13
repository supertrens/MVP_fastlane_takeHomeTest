/* Copyright (c) 2018 MVP Fastlane (Take home project) 
 * Programmer: Ernst Pierre(pitrens.studio@gmail.com) http://pieduc.com
 * Version : 0.1
 */

const schema = {
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
        details: {
            color: "",
            size: ""
        },
        rating: 0.0,
        rating_count: 0,
        title: "",
        url: "",
        variations: []
    }
}
/*
 * In this function I will getthe product ID from the URL 
 * and append it to the API URLto 
 * Be able to get data from API call
 */
function get() {
    //read the url from the browser
    const myUrl = $(location).attr('href');
    //get the last part 
    const lastPart = myUrl.split("/").reverse()[0];
    //take the prID which is the value before '?'
    const productID = lastPart.split("?")[0];
    return productID;
}

//custom URL
const productID = getID();
const myUrl = `https://www.ae.com/api/catalog/v1/products/${productID}`;


//This is the main function, It will simply  call the apicall function
function scrapeData() {
    /************************First make the API call ************************/
    apiCall();
}


/*I make the ajax request here to fetch the data and distribuate the data to
 * All the other functions throug answerQ3 which is a compound function of 
 * answerQ1 and answerQ2
 */
function apiCall() {

    const request = $.ajax({
        url: myUrl,
        type: "GET",
    });

    request.done(function(feed) {
        answerQ3(feed);
    });

}

/* This function will recieve  two parametes 'product' and 'Json_query'
 * @product is the product schema that we will modify and send back
 * @Json_query is the Json data recieved from the API endpoint.
 * The function will modify (according to the exercise requirement Q1)
 * - product.title
 * - product.price.list
 * - product.price.sale
 * - product.description
 * - product.categories
 * @return product
 * PS) I left the old code in comment(I used dom manipulation at first)
 */
function answerQ1(product, Json_query) {

    //product.title = $("h1.psp-product-name:eq(0)").text().trim();
    product.title = Json_query.prdName;

    // let price   = $("#psp-regular-price").text().trim();
    // product.price.list = parseFloat(price);

    let price   = Json_query.convertedListPrice;
    // //remove any comma from the price string and convert them to float
    price = price.replace(/,/g,"");
    product.price.list = parseFloat(price);


    // let sale    = $("#psp-sale-price").text().trim();    
    
    let sale = Json_query.convertedSalePrice;
    sale  = sale.replace(/,/g,"");
    //check if the sale variable as a value before convert it to float
    product.price.sale = sale === "" ? "" : parseFloat(sale);


    // product.description = $(".pdp-about-details-equit").text().trim();
    // // get more details 
    // $('.pdp-about-list li.pdp-about-bullet').each(function() {
    //     let text = $(this).text().trim()
    //     product.description += ` ${text} ` //ES6 syntax
    // });

    //get the main description
    product.description = Json_query.leadingEquity;

    //add extra information
    const extraDetail = Json_query.equityBullets;
    for (let detail of extraDetail)
        product.description = `${product.description} ${detail} `;

    //product.categories =
    $('.main-breadcrumbs li').each(function() {
        let text = $(this).text().trim()
        product.categories.push(text)
    });
    console.log(product);
    return product
}


/* This function will recieve  two parametes 'product' and 'Json_query'
 * @product is the product schema that we will modify and send back
 * @Json_query is the Json data recieved from the API endpoint.
 * The function will modify (according to the exercise requirement Q2)
 * - product.product_id
 * - product.availability
 * - product.details.color
 * - product.details.size
 * - product.variations
 * @return product
 */
function answerQ2(product, Json_query) {

    const activePoductQuery = Json_query.colorImageSelectionData['001'];

    product.product_id = Json_query.prdId;
    product.availability = Json_query.isAvailable;

    // product.details.color=$(".psp-product-color").text().trim();
    product.details.color = activePoductQuery.colorName;
    product.details.size = activePoductQuery.sizedd[0].sizeName;


    //Get the variation of the product
    const sizes = activePoductQuery.sizedd;
    for (size of sizes)
        product.variations.push({
            "id": size.tenDigitSkuId,
            "sizeName": size.sizeName,
            "availability": size.isAvailable
        });

    return product;
}


/* This function will recieve  one parameter ''feed'
 * @feed is the Json data recieved from the API endpoint.
 * The function will call the functions answerQ1 and answerQ2
 * ( Acording to Q3 requirement). And it will modify 
 * - product.currency 
 * - product.brand 
 * - product.image_url
 * - product.product.url 
 * - product.rating_count
 * - product.rating
 * @return product
 */
function answerQ3(feed) {


    let product = schema.product;
    const Json_query = feed.response.value.data;
    /********************HERE IS THE CODE FOR QUESTION 1 ********************/
    product = answerQ1(product, Json_query);

    /********************HERE IS THE CODE FOR QUESTION 2 ********************/
    // Q2-1
    product = answerQ2(product, Json_query);

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
    product.rating_count = rating_count === "" ? 0 : parseFloat(rating_count)
    product.rating = rating === "" ? 0 : parseFloat(rating)

    return product
}