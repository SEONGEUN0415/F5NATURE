
$(function () {
    //prevent a link
    $("a").click(function (e) {
        e.preventDefault();
    });

    //start script😀😀😀😀😀😀
    // new cont02
    let newBtn = $(".new .normal");
    newBtn.click(function () {
        $(this).next().slideToggle();
        //siblings(): 나를제외한 모든 형제 선택자
        //next(): 바로 뒤에 있는 형제 선택자
        //nextAll(): 뒤에 있는 모든 형제선택자
        //prev
        //prevAll
        $(this).toggleClass("on");
    }); //newBtn end

    //product cont03
    //jquery Tap Menu 구현
    let productMenu = $(".product .product__menu li");
    let productList = $(".product .product__list");

    //$(this).index()=>클릭한 index값 찾기
    //eq() => index값 걸정
    //productMenu[3] => jqeury방식: productMenu.eq(3)
    //eq($(this).index())
    productMenu.click(function () {
        productMenu.removeClass("on");
        $(this).addClass("on");
        productList.removeClass("on");
        productList.eq($(this).index()).addClass("on");
    }); //productMenu end

    //best cont04
    let bestLink = $(".best .item--big a");
    let bestImage = $(".item--big figure img");
    let bestTitle = $(".best .item--big h4");
    let bestText = $(".best .item--big strong");
    let bestSmallItem = $(".best .item--small .item");

    if ($(window).width() < 600) {
        bestSmallItem.click(function () {
        bestSmallItem.find("img").css({
            opacity: "0.3",
        });
        $(this).find("img").css({
            opacity: "1",
        });
        let thisLink = $(this).find("a").attr("href");
        let thisImage = $(this).find("img").attr("src");
        let thisTitle = $(this).find("h4").text();
        let thisText = $(this).find("strong").text();
        bestLink.attr("href", thisLink);
        bestImage.attr("src", thisImage);
        bestTitle.text(thisTitle);
        bestText.text(thisText);
    });
    } else {
        bestSmallItem.mouseenter(function () {
        bestSmallItem.find("img").css({
            opacity: "0.3",
        });
        $(this).find("img").css({
            opacity: "1",
        });
        let thisLink = $(this).find("a").attr("href");
        let thisImage = $(this).find("img").attr("src");
        let thisTitle = $(this).find("h4").text();
        let thisText = $(this).find("strong").text();
        bestLink.attr("href", thisLink);
        bestImage.attr("src", thisImage);
        bestTitle.text(thisTitle);
        bestText.text(thisText);
    });
    }

   

    //md swiper

    if ($(window).width() < 481) {
        $(".md .swiper").removeClass("md_pick_slides");
    } else {
        var swiper = new Swiper(".md_pick_slides", {
            slidesPerView: 2.5,
            spaceBetween: 25,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                767: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 35,
                },
                1280: {
                    slidesPerView: 5.5,
                    spaceBetween: 35,
                },
            },
        });
    }

    //cont05 img_box
    let imageBoxImage =
        document.querySelectorAll(".image__box figure");
    let imageBoxNextBtn = document.querySelector(
        ".image__box .slide_btn"
    );
    let imageBoxPage = document.querySelector(
        ".image__box .slide__pagination"
    );

    for (let i = 0; i < imageBoxImage.length; i++) {
        imageBoxPage.innerHTML += "<li></li>";
    }
    let pageBtn = document.querySelectorAll(
        ".slide__pagination li"
    );
    pageBtn[0].classList.add("on");

    //click pagination button
    for (let i = 0; i < pageBtn.length; i++) {
        pageBtn[i].addEventListener("click", () => {
            pageBtn.forEach((item) => {
                item.classList.remove("on");
            });
            pageBtn[i].classList.add("on");
            imageBoxImage.forEach((item) => {
                item.classList.remove("on");
            });
            imageBoxImage[i].classList.add("on");
        });
    }
    //click next button
    let index = 0;
    imageBoxNextBtn.addEventListener("click", () => {
        index++;
        if (index >= pageBtn.length) {
            index = 0;
        }

        imageBoxImage.forEach((item) => {
            item.classList.remove("on");
        });
        imageBoxImage[index].classList.add("on");

        pageBtn.forEach((item) => {
            item.classList.remove("on");
        });
        pageBtn[index].classList.add("on");
    });

    //slide 
    setInterval(() => {
        index++;
        if (index >= pageBtn.length) {
            index = 0;
        }
        imageBoxImage.forEach((item) => {
            item.classList.remove("on");
        });
        imageBoxImage[index].classList.add("on");

        pageBtn.forEach((item) => {
            item.classList.remove("on");
        });
        pageBtn[index].classList.add("on");
    }, 2000); //setInterval()

    //click company info
    $(".company_info-mobile").click(function () {
        $(this).next().toggle();
        $(this).toggleClass("on");
    });
}); /* script end */