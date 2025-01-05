const footer=()=>{
    let card = `<div class="footer-links">
            <div class="col col-1">
                <p>Get email offers & the latest from Smart Rashan shop</p>
                <div class="footer-form">
                    <label>Enter Email</label>
                    <div class="email"><input type="email"> <img
                            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1651757968673/images/svg-icons/UI-Information.svg?yocs=o_s_"
                            height="17px"></div>
                    <label>Confirm Email</label>
                    <div class="email"><input type="email"><button>Submit</button></div>
                </div>
                <div class="social-media">
                    <label>GET CONNECTED</label>
                    <ul class="social-media-icon">
                        <li><img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1651757968673/images/svg-icons/Social-fb-reverse.svg?yocs=o_s_"
                                height="20px" style="background-color:#3460a1; border-radius: 20px; padding:10px;"></li>
                        <li><img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1651757968673/images/svg-icons/Social-twitter-reverse.svg?yocs=o_s_"
                                height="20px" style="background-color:#28aae1; border-radius: 20px; padding:10px;"></li>
                        <li><img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1651757968673/images/svg-icons/Social-ig-reverse.svg?yocs=o_s_"
                                height="20px" style="background-color:#35648b; border-radius: 18px; padding:10px;"></li>
                        <li><img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1651757968673/images/svg-icons/Social-tiktok-reverse.svg?yocs=o_s_"
                                height="20px" style="background-color:#000; border-radius: 20px;padding:10px;"></li>
                        <li><img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1651757968673/images/svg-icons/Social-youtube-reverse.svg?yocs=o_s_"
                                height="20px" style="background-color:#ee3138; border-radius: 16px;padding:10px;"></li>
                        <li><img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1651757968673/images/svg-icons/Social-pinterest-reverse.svg?yocs=o_s_"
                                height="20px" style="background-color:#ce2129; border-radius: 20px;padding:10px;"></li>
                    </ul>
                </div>
            </div>

            <div class="help-btn">
                <p style="margin-left: 20px;">LET US HELP</p>
            </div>

            <div class="col col-2">
                <p>CUSTOMER CARE</p>
                <ul>
                    <li>Help & FAQs</li>
                    <li> Shipping</li>
                    <li> Returns</li>
                    <li>Order Tracking</li>
                    <li> Contact Us</li>
                </ul>
            </div>


            <div class="col col-3">
                <p>MY ACCOUNT</p>
                <ul>
                    <li>Sign In or Sign Up</li>
                    <li>Order Tracking</li>
                    <li>To Buy List</li>
                </ul>
            </div>


           
        </div>
        <div class="footer-img"><img class="img"
                src="https://p7.hiclipart.com/preview/869/1021/297/food-cartoon-grocery-store-supermarket-illustration-and-parents-buy-food-in-the-supermarket.jpg">
        </div>
        <div class="end">
            <p id='copy'>© my smart rashan shop, Inc. All Rights Reserved.</p>
        </div>`;
   document.getElementsById("footer").innerHTML = card;
};
footer();