import React from "react";
import Image from "next/image"
import firstImage from "assets/how_to/howto4.jpg"
import secondImage from "assets/how_to/howto5.jpg"
import thirdImage from "assets/how_to/howto.jpg"
import fourthImage from "assets/how_to/howto2.jpg"
import fifthImage from "assets/how_to/howto3.jpg"
import sixthImage from "assets/how_to/howto6.jpg"


const HowToPage: React.FC = () => {

    return (
        <section className="flex flex-col items-center mx-auto w-full max-w-[480px]">
            <div>
                <h2 className="text-2xl font-bold">How to Use this Store</h2>
                <p>
                    Hello there! This Page is meant to show you how to use this site. This store was built to enable customers shop for shoes, create order links and share those links to the vendor without having to take unnecessary screenshots or making needless downloads.
                </p>
            </div>
            <div>
                <h3 className="font-bold text-xl pb-3 pt-2">How to Shop</h3>
                <ol>
                    <li>
                        <span className="font-bold">Home page:</span>
                        <span>
                            <Image
                                width={400}
                                height={500}
                                src={firstImage}
                                alt="first image"
                                className="w-full p-2"
                            />
                        </span>
                        clicking the logo anyway would take you back to the home page. click the menu at the top left to open menu bar and view brands
                        click the cart/bag icon at the top right to open your cart. click the SHOP NOW button to scroll quickly to new products
                    </li>
                    <li>
                        <span className="font-bold">New drops:</span>
                        <span>
                            <Image
                                width={400}
                                height={500}
                                src={secondImage}
                                alt="second image"
                                className="w-full p-2"
                            />
                        </span>
                        still on the home page if you scroll down, you find the new drops section, click SHOP NEW DROPS to view all new drops
                    </li>
                    <li>
                        <span className="font-bold">Menu and Brands:</span>
                        <span>
                            <Image
                                width={400}
                                height={500}
                                src={thirdImage}
                                alt="third image"
                                className="w-full p-2"
                            />
                        </span>
                        click the menu to view this modal, select any brand of your choice to view available products
                    </li>
                    <li>
                        <span className="font-bold">Detail page:</span>
                        <span>
                            <Image
                                width={400}
                                height={500}
                                src={fourthImage}
                                alt="fourth image"
                                className="w-full p-2"
                            />
                        </span>
                        on clicking a product you get the detail view, select a shoe size and add to cart
                    </li>
                    <li>
                        <span className="font-bold">Cart:</span>
                        <span>
                            <Image
                                width={400}
                                height={500}
                                src={fifthImage}
                                alt="fifth image"
                                className="w-full p-2"
                            />
                        </span>
                        after selecting what you want, view your cart adjust setting as you want and click the checkout button
                    </li>
                    <li>
                        <span className="font-bold">CheckOut:</span>
                        <span>
                            <Image
                                width={400}
                                height={500}
                                src={sixthImage}
                                alt="sixth image"
                                className="w-full p-2"
                            />
                        </span>
                        if successful, you get an alert with your order url, COPY IT!
                    </li>
                    <li>
                        <span className="font-bold">Finally:</span>
                        send your url to our <span className="underline underline-offset-auto text-[rgba(74,105,226,1)]"><a href="https://wa.me/08164752529">whatsapp vendor </a></span>, who will communicate with you details about your order.

                    </li>
                </ol>
            </div>
        </section>

    );
};

export default HowToPage;