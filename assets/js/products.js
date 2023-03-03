const arrivalsProducts = [
    {
        id: 0,
        images: ['first-slider_slide1.png'],
        category: "Kids",
        className: "kids",
        title: "Yellow T-Shirt",
        price: {
            new: 180,
            old: 300,
        },
        off: "40%",
        tag: "",
        rate: 4,
        qty: 1,
        total: 0,
    },

    {
        id: 1,
        images: ['first-slider_slide2.png'],
        category: "Women",
        className: "women",
        title: "Ethnic Kurti",
        price: {
            new: 220,
            old: 250,
        },
        off: "12%",
        tag: "",
        rate: 4,
        qty: 1,
        total: 0,
    },

    {
        id: 2,
        images: ['first-slider_slide3.png'],
        category: "Women",
        className: "women",
        title: "Kurtis, Tunics & Tops",
        price: {
            new: 280,
            old: 350,
        },
        off: "20%",
        tag: "New",
        rate: 4,
        qty: 1,
        total: 0,
    },

    {
        id: 3,
        images: ['first-slider_slide4.png'],
        category: "Men",
        className: "men",
        title: "Round Neck T-shirt",
        price: {
            new: 120,
            old: 150,
        },
        off: "20%",
        tag: "",
        rate: 4,
        qty: 1,
        total: 0,
    },
];

const showingArrivalsProducts = arrivalsProducts.map((product, index) =>
    `
                        <div class="splide__slide ${product.className} ${product.className}-slide">
                            <div class="slide-item">
                                <div class="slide-img offed-img">
                                    
                                    <div class="img-new-badge">${product.tag !== "" ? product.tag : ""}</div> 
                                
                                    <div class="img-off-badge">${product.off}</div>

                                    <div class="photo-badges">
                                        <div class="heart-badge">
                                            <button>    
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M1.45022 11.3758C0.151129 7.58508 1.66936 3.2523 5.92743 1.97023C8.16725 1.29469 10.6395 1.693 12.5016 3.00222C14.2632 1.72921 16.8262 1.29921 19.0636 1.97023C23.3217 3.2523 24.8496 7.58508 23.5517 11.3758C21.5299 17.3845 12.5016 22.0126 12.5016 22.0126C12.5016 22.0126 3.53991 17.4546 1.45022 11.3758Z"
                                                          stroke="#323232" stroke-width="2" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path opacity="0.4"
                                                          d="M17.3447 5.83313C18.6402 6.22465 19.5555 7.3053 19.6657 8.57379"
                                                          stroke="#323232" stroke-width="2" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                </svg>
                                            </button>
                                        </div>

                                        <div class="photo-badge">
                                            <button> 
                                                <svg width="23" height="22" viewBox="0 0 23 22" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M15.7694 0C19.5023 0 22.011 2.61464 22.011 6.50516V15.4948C22.011 19.3854 19.5023 22 15.7694 22H6.23058C2.50326 22 0 19.3854 0 15.4948V6.50516C0 2.61464 2.50326 0 6.23058 0H15.7694ZM15.7694 1.65414H6.23058C3.45053 1.65414 1.65414 3.5586 1.65414 6.50516V15.4948C1.65414 18.4425 3.45053 20.3459 6.23058 20.3459H15.7694C18.5561 20.3459 20.3569 18.4425 20.3569 15.4948V6.50516C20.3569 3.5586 18.5561 1.65414 15.7694 1.65414ZM16.4741 11.1372C16.4811 11.1429 16.4879 11.1485 16.5023 11.1619L16.5236 11.1823C16.5279 11.1864 16.5327 11.1911 16.5379 11.1962L16.5994 11.2573C16.7983 11.4564 17.348 12.0178 18.9862 13.7C19.3049 14.0264 19.2993 14.5502 18.9718 14.8689C18.6454 15.1898 18.1205 15.1799 17.8018 14.8535C17.8018 14.8535 15.5423 12.5344 15.3813 12.3778C15.2103 12.2377 14.9357 12.1561 14.6656 12.1826C14.391 12.2102 14.144 12.3414 13.9686 12.5542C11.4058 15.6629 11.3749 15.6927 11.333 15.7335C10.3869 16.662 8.85955 16.6466 7.92992 15.6982C7.92992 15.6982 6.90436 14.6572 6.88672 14.6362C6.63198 14.4002 6.17764 14.4157 5.90526 14.7035L4.21805 16.4822C4.05484 16.6543 3.83649 16.7403 3.61815 16.7403C3.41303 16.7403 3.20902 16.6653 3.04912 16.5131C2.71719 16.1999 2.70396 15.675 3.01825 15.3453L4.70326 13.5666C5.59539 12.6193 7.10065 12.573 8.05233 13.4662L9.10877 14.5381C9.40321 14.8358 9.8818 14.8413 10.1773 14.5502C10.2887 14.419 12.6905 11.5022 12.6905 11.5022C13.1471 10.9486 13.7911 10.6068 14.5068 10.5362C15.2236 10.4733 15.9194 10.6817 16.4741 11.1372ZM7.2321 5.10455C8.75611 5.10565 9.99451 6.34515 9.99451 7.86585C9.99451 9.38876 8.75501 10.6283 7.2321 10.6283C5.70919 10.6283 4.4708 9.38876 4.4708 7.86585C4.4708 6.34295 5.70919 5.10455 7.2321 5.10455ZM7.231 6.75869C6.62117 6.75869 6.12493 7.25493 6.12493 7.86585C6.12493 8.47678 6.62117 8.97413 7.2321 8.97413C7.84303 8.97413 8.34037 8.47678 8.34037 7.86585C8.34037 7.25603 7.84303 6.75979 7.231 6.75869Z"
                                                          fill="#323232"/>
                                                </svg>
                                            </button>
                                        </div>

                                        <div class="cart-badge">
                                            <button onclick="saveItemsInLocal(${index}, arrivalsProducts)">                                        
                                                <svg width="21" height="22" viewBox="0 0 21 22" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M10.3842 0C13.1592 0 15.4517 2.11451 15.7344 4.8189L15.8133 4.81983C17.3527 4.81983 19.2245 5.84223 19.8562 8.70984L20.6938 15.1935C20.9943 17.2861 20.6185 18.9646 19.5748 20.1686C18.5365 21.3662 16.893 22 14.8217 22H5.95873C3.68355 22 2.09845 21.4426 1.11215 20.2971C0.121595 19.1483 -0.20965 17.4252 0.127966 15.1766L0.951832 8.77885C1.49329 5.84542 3.47333 4.81983 5.0064 4.81983C5.13875 3.5994 5.68906 2.43837 6.56209 1.56811C7.56538 0.571186 8.94875 0 10.3619 0H10.3842ZM15.8133 6.41236H5.0064C4.5382 6.41236 2.97328 6.60134 2.52419 9.02622L1.70457 15.3963C1.43808 17.1831 1.64405 18.4763 2.31822 19.2587C2.9839 20.0316 4.17511 20.4075 5.95873 20.4075H14.8217C15.9343 20.4075 17.4536 20.1856 18.3709 19.126C19.0992 18.2862 19.3498 17.0356 19.1162 15.408L18.2891 8.98269C17.9367 7.39972 17.0066 6.41236 15.8133 6.41236ZM13.4806 9.36819C13.9201 9.36819 14.3012 9.72492 14.3012 10.1645C14.3012 10.604 13.9689 10.9607 13.5294 10.9607H13.4806C13.041 10.9607 12.6843 10.604 12.6843 10.1645C12.6843 9.72492 13.041 9.36819 13.4806 9.36819ZM7.29083 9.36819C7.73037 9.36819 8.11151 9.72492 8.11151 10.1645C8.11151 10.604 7.77814 10.9607 7.3386 10.9607H7.29083C6.85129 10.9607 6.49457 10.604 6.49457 10.1645C6.49457 9.72492 6.85129 9.36819 7.29083 9.36819ZM10.381 1.59253H10.365C9.366 1.59253 8.39243 1.9949 7.68641 2.69668C7.1113 3.26921 6.73516 4.02187 6.61349 4.81934L14.1294 4.81963C13.8566 2.99541 12.2791 1.59253 10.381 1.59253Z"
                                                          fill="#323232"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <img src="./assets/images/${product.images}" alt="${product.category}-clothes">
                                </div>
                                <div class="slide-info">
                                    <div class="grouping">
                                        <span>${product.category}</span>
                                        <img src="./assets/images/stars.png" alt="rating-stars">
                                    </div>
                                    <div class="item-name">
                                        <p>${product.title}</p>
                                    </div>
                                    <div class="item-price">
                                        <p>$${product.price.new} <span>$${product.price.old}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
`
);

document.querySelector('.new-arrivals-list').innerHTML = showingArrivalsProducts.join("");


const trendingProducts = [
    {
        id: 4,
        images: ['kid model.png'],
        category: "Kids",
        className: "kids",
        title: "Kurti Full Sleev",
        price: {
            new: 200,
            old: 300,
        },
        off: "33%",
        rate: 4,
        sale: 2324,
        qty: 1,
        total: 0,
    },

    {
        id: 5,
        images: ['hindi women.png'],
        category: "Women",
        className: "women",
        title: "Silk Saree - Printied ",
        price: {
            new: 320,
            old: 410,
        },
        off: "22%",
        rate: 4,
        sale: 2324,
        qty: 1,
        total: 0,
    },

    {
        id: 6,
        images: ['men model uk.png'],
        category: "Men",
        className: "men",
        title: "Multi Purpose Jacket",
        price: {
            new: 510,
            old: 705,
        },
        off: "28%",
        rate: 4,
        sale: 2324,
        qty: 1,
        total: 0,
    },

    {
        id: 7,
        images: ['men model polo.png'],
        category: "Men",
        className: "men",
        title: "Jacket",
        price: {
            new: 400,
            old: 480,
        },
        off: "17%",
        rate: 4,
        sale: 2324,
        qty: 1,
        total: 0,
    },

];

const showingTrendingProducts = trendingProducts.map((product, index) =>
    `
                        <div class="splide__slide">
                            <div class="slide-item slide-1">
                                <div class="slide-img offed-img">

                                    <div class="photo-badges">
                                        <div class="heart-badge">
                                        <button> 
                                            <svg width="24" height="23" viewBox="0 0 25 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M1.45022 11.3758C0.151129 7.58508 1.66936 3.2523 5.92743 1.97023C8.16725 1.29469 10.6395 1.693 12.5016 3.00222C14.2632 1.72921 16.8262 1.29921 19.0636 1.97023C23.3217 3.2523 24.8496 7.58508 23.5517 11.3758C21.5299 17.3845 12.5016 22.0126 12.5016 22.0126C12.5016 22.0126 3.53991 17.4546 1.45022 11.3758Z"
                                                      stroke="#323232" stroke-width="2" stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path opacity="0.4"
                                                      d="M17.3447 5.83313C18.6402 6.22465 19.5555 7.3053 19.6657 8.57379"
                                                      stroke="#323232" stroke-width="2" stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                        </div>

                                        <div class="photo-badge">
                                        <button> 
                                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M15.7694 0C19.5023 0 22.011 2.61464 22.011 6.50516V15.4948C22.011 19.3854 19.5023 22 15.7694 22H6.23058C2.50326 22 0 19.3854 0 15.4948V6.50516C0 2.61464 2.50326 0 6.23058 0H15.7694ZM15.7694 1.65414H6.23058C3.45053 1.65414 1.65414 3.5586 1.65414 6.50516V15.4948C1.65414 18.4425 3.45053 20.3459 6.23058 20.3459H15.7694C18.5561 20.3459 20.3569 18.4425 20.3569 15.4948V6.50516C20.3569 3.5586 18.5561 1.65414 15.7694 1.65414ZM16.4741 11.1372C16.4811 11.1429 16.4879 11.1485 16.5023 11.1619L16.5236 11.1823C16.5279 11.1864 16.5327 11.1911 16.5379 11.1962L16.5994 11.2573C16.7983 11.4564 17.348 12.0178 18.9862 13.7C19.3049 14.0264 19.2993 14.5502 18.9718 14.8689C18.6454 15.1898 18.1205 15.1799 17.8018 14.8535C17.8018 14.8535 15.5423 12.5344 15.3813 12.3778C15.2103 12.2377 14.9357 12.1561 14.6656 12.1826C14.391 12.2102 14.144 12.3414 13.9686 12.5542C11.4058 15.6629 11.3749 15.6927 11.333 15.7335C10.3869 16.662 8.85955 16.6466 7.92992 15.6982C7.92992 15.6982 6.90436 14.6572 6.88672 14.6362C6.63198 14.4002 6.17764 14.4157 5.90526 14.7035L4.21805 16.4822C4.05484 16.6543 3.83649 16.7403 3.61815 16.7403C3.41303 16.7403 3.20902 16.6653 3.04912 16.5131C2.71719 16.1999 2.70396 15.675 3.01825 15.3453L4.70326 13.5666C5.59539 12.6193 7.10065 12.573 8.05233 13.4662L9.10877 14.5381C9.40321 14.8358 9.8818 14.8413 10.1773 14.5502C10.2887 14.419 12.6905 11.5022 12.6905 11.5022C13.1471 10.9486 13.7911 10.6068 14.5068 10.5362C15.2236 10.4733 15.9194 10.6817 16.4741 11.1372ZM7.2321 5.10455C8.75611 5.10565 9.99451 6.34515 9.99451 7.86585C9.99451 9.38876 8.75501 10.6283 7.2321 10.6283C5.70919 10.6283 4.4708 9.38876 4.4708 7.86585C4.4708 6.34295 5.70919 5.10455 7.2321 5.10455ZM7.231 6.75869C6.62117 6.75869 6.12493 7.25493 6.12493 7.86585C6.12493 8.47678 6.62117 8.97413 7.2321 8.97413C7.84303 8.97413 8.34037 8.47678 8.34037 7.86585C8.34037 7.25603 7.84303 6.75979 7.231 6.75869Z"
                                                      fill="#323232"/>
                                            </svg>
                                        </button>
                                        </div>

                                        <div class="cart-badge">
                                            <button onclick="saveItemsInLocal(${index}, trendingProducts)">
                                                <svg width="24" height="25" viewBox="0 0 21 22" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M10.3842 0C13.1592 0 15.4517 2.11451 15.7344 4.8189L15.8133 4.81983C17.3527 4.81983 19.2245 5.84223 19.8562 8.70984L20.6938 15.1935C20.9943 17.2861 20.6185 18.9646 19.5748 20.1686C18.5365 21.3662 16.893 22 14.8217 22H5.95873C3.68355 22 2.09845 21.4426 1.11215 20.2971C0.121595 19.1483 -0.20965 17.4252 0.127966 15.1766L0.951832 8.77885C1.49329 5.84542 3.47333 4.81983 5.0064 4.81983C5.13875 3.5994 5.68906 2.43837 6.56209 1.56811C7.56538 0.571186 8.94875 0 10.3619 0H10.3842ZM15.8133 6.41236H5.0064C4.5382 6.41236 2.97328 6.60134 2.52419 9.02622L1.70457 15.3963C1.43808 17.1831 1.64405 18.4763 2.31822 19.2587C2.9839 20.0316 4.17511 20.4075 5.95873 20.4075H14.8217C15.9343 20.4075 17.4536 20.1856 18.3709 19.126C19.0992 18.2862 19.3498 17.0356 19.1162 15.408L18.2891 8.98269C17.9367 7.39972 17.0066 6.41236 15.8133 6.41236ZM13.4806 9.36819C13.9201 9.36819 14.3012 9.72492 14.3012 10.1645C14.3012 10.604 13.9689 10.9607 13.5294 10.9607H13.4806C13.041 10.9607 12.6843 10.604 12.6843 10.1645C12.6843 9.72492 13.041 9.36819 13.4806 9.36819ZM7.29083 9.36819C7.73037 9.36819 8.11151 9.72492 8.11151 10.1645C8.11151 10.604 7.77814 10.9607 7.3386 10.9607H7.29083C6.85129 10.9607 6.49457 10.604 6.49457 10.1645C6.49457 9.72492 6.85129 9.36819 7.29083 9.36819ZM10.381 1.59253H10.365C9.366 1.59253 8.39243 1.9949 7.68641 2.69668C7.1113 3.26921 6.73516 4.02187 6.61349 4.81934L14.1294 4.81963C13.8566 2.99541 12.2791 1.59253 10.381 1.59253Z"
                                                          fill="#323232"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <img src="./assets/images/${product.images}" alt="${product.category}-clothes">
                                </div>
                                <div class="slide-info">
                                    <div class="grouping">
                                        <span>${product.category}</span>
                                        <img src="./assets/images/stars.png" alt="rating-stars">
                                    </div>
                                    <div class="item-name">
                                        <p>${product.title}</p>
                                    </div>
                                    <div class="item-price">
                                        <p>$${product.price.new} <span>$${product.price.old}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
`
);

document.querySelector('.trending-collection-list').innerHTML = showingTrendingProducts.join('');


document.addEventListener("DOMContentLoaded", () => {
    const newBadge = document.querySelectorAll(".img-new-badge");
    newBadge.forEach((item) => {
        if (item.innerHTML !== "") {
            item.style.display = "flex";
        } else {
            item.style.cssText = "display: none !important;"
        }
    })
    updateCartBadge()
})

function updateCartBadge() {
    const cartBadge = document.querySelectorAll(".cart-number-badge")
    const getLocal = JSON.parse(localStorage.getItem("final products"));
    cartBadge.forEach(item => {
        getLocal ? item.innerHTML = JSON.parse(localStorage.getItem("final products")).length : item.innerHTML = '0';
    })
}

function saveItemsInLocal(index, array) {
    let product = array[index]
    let localSt = localStorage.getItem("final products");
    let result = [];
    if (localSt) {
        result = JSON.parse(localSt);
        const foundedProduct = result.find(p => p.id === product.id);
        if (foundedProduct) {
            foundedProduct.qty++;
        } else {
            result.push(product)
        }
    } else {
        result.push(product)
    }
    localStorage.setItem("final products", JSON.stringify(result));
    updateCartBadge()
}