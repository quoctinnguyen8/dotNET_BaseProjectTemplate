/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Sellers init js
*/

// get colors array from the string
function getChartColorsArray(chartId) {
    if (document.getElementById(chartId) !== null) {
        var colors = document.getElementById(chartId).getAttribute("data-colors");
        if (colors) {
            colors = JSON.parse(colors);
            return colors.map(function (value) {
                var newValue = value.replace(" ", "");
                if (newValue.indexOf(",") === -1) {
                    var color = getComputedStyle(document.documentElement).getPropertyValue(
                        newValue
                    );
                    if (color) return color;
                    else return newValue;
                } else {
                    var val = value.split(",");
                    if (val.length == 2) {
                        var rgbaColor = getComputedStyle(
                            document.documentElement
                        ).getPropertyValue(val[0]);
                        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                        return rgbaColor;
                    } else {
                        return newValue;
                    }
                }
            });
        } else {
            console.warn('data-colors Attribute not found on:', chartId);
        }
    }
}


function loadCharts() {
    //Chart-seller 1
    var sellerlinecolor1 = getChartColorsArray("chart-seller1");
    if (sellerlinecolor1) {
        var sparklineoptions1 = {
            series: [{
                data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
            },],
            chart: {
                type: "area",
                height: 50,
                sparkline: {
                    enabled: true,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [20, 100, 100, 100],
                },
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            colors: sellerlinecolor1,
            tooltip: {
                fixed: {
                    enabled: false,
                },
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return "";
                        },
                    },
                },
                marker: {
                    show: false,
                },
            },
        };
        var sparklinechart1 = new ApexCharts(
            document.querySelector("#chart-seller1"),
            sparklineoptions1
        );
        sparklinechart1.render();
    }

    //Chart-seller 2
    var sellerlinecolor2 = getChartColorsArray("chart-seller2");
    if (sellerlinecolor2) {
        var sparklineoptions2 = {
            series: [{
                data: [12, 14, 2, 47, 42, 15, 35, 75, 20, 67, 89],
            },],
            chart: {
                type: "area",
                height: 50,
                sparkline: {
                    enabled: true,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [20, 100, 100, 100],
                },
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            colors: sellerlinecolor2,
            tooltip: {
                fixed: {
                    enabled: false,
                },
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return "";
                        },
                    },
                },
                marker: {
                    show: false,
                },
            },
        };
        var sparklinechart2 = new ApexCharts(
            document.querySelector("#chart-seller2"),
            sparklineoptions2
        );
        sparklinechart2.render();
    }

    //Chart-seller 3
    var sellerlinecolor3 = getChartColorsArray("chart-seller3");
    if (sellerlinecolor3) {
        var sparklineoptions3 = {
            series: [{
                data: [45, 20, 8, 42, 30, 5, 35, 79, 22, 54, 64],
            },],
            chart: {
                type: "area",
                height: 50,
                sparkline: {
                    enabled: true,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [20, 100, 100, 100],
                },
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            colors: sellerlinecolor3,
            tooltip: {
                fixed: {
                    enabled: false,
                },
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return "";
                        },
                    },
                },
                marker: {
                    show: false,
                },
            },
        };
        var sparklinechart3 = new ApexCharts(
            document.querySelector("#chart-seller3"),
            sparklineoptions3
        );
        sparklinechart3.render();
    }

    //Chart-seller 4
    var sellerlinecolor4 = getChartColorsArray("chart-seller4");
    if (sellerlinecolor4) {
        var sparklineoptions4 = {
            series: [{
                data: [26, 15, 48, 12, 47, 19, 35, 19, 85, 68, 50],
            },],
            chart: {
                type: "area",
                height: 50,
                sparkline: {
                    enabled: true,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [20, 100, 100, 100],
                },
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            colors: sellerlinecolor4,
            tooltip: {
                fixed: {
                    enabled: false,
                },
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return "";
                        },
                    },
                },
                marker: {
                    show: false,
                },
            },
        };
        var sparklinechart4 = new ApexCharts(
            document.querySelector("#chart-seller4"),
            sparklineoptions4
        );
        sparklinechart4.render();
    }

    //Chart-seller 5
    var sellerlinecolor5 = getChartColorsArray("chart-seller5");
    if (sellerlinecolor5) {
        var sparklineoptions5 = {
            series: [{
                data: [60, 67, 12, 49, 6, 78, 63, 51, 33, 8, 16],
            },],
            chart: {
                type: "area",
                height: 50,
                sparkline: {
                    enabled: true,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [20, 100, 100, 100],
                },
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            colors: sellerlinecolor5,
            tooltip: {
                fixed: {
                    enabled: false,
                },
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return "";
                        },
                    },
                },
                marker: {
                    show: false,
                },
            },
        };
        var sparklinechart5 = new ApexCharts(
            document.querySelector("#chart-seller5"),
            sparklineoptions5
        );
        sparklinechart5.render();
    }

    //Chart-seller 6
    var sellerlinecolor6 = getChartColorsArray("chart-seller6");
    if (sellerlinecolor6) {
        var sparklineoptions6 = {
            series: [{
                data: [78, 63, 51, 33, 8, 16, 60, 67, 12, 49,],
            },],
            chart: {
                type: "area",
                height: 50,
                sparkline: {
                    enabled: true,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [20, 100, 100, 100],
                },
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            colors: sellerlinecolor6,
            tooltip: {
                fixed: {
                    enabled: false,
                },
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return "";
                        },
                    },
                },
                marker: {
                    show: false,
                },
            },
        };
        var sparklinechart6 = new ApexCharts(
            document.querySelector("#chart-seller6"),
            sparklineoptions6
        );
        sparklinechart6.render();
    }

    //Chart-seller 7
    var sellerlinecolor7 = getChartColorsArray("chart-seller7");
    if (sellerlinecolor7) {
        var sparklineoptions7 = {
            series: [{
                data: [15, 35, 75, 20, 67, 8, 42, 30, 5, 35],
            },],
            chart: {
                type: "area",
                height: 50,
                sparkline: {
                    enabled: true,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [20, 100, 100, 100],
                },
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            colors: sellerlinecolor7,
            tooltip: {
                fixed: {
                    enabled: false,
                },
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return "";
                        },
                    },
                },
                marker: {
                    show: false,
                },
            },
        };
        var sparklinechart7 = new ApexCharts(
            document.querySelector("#chart-seller7"),
            sparklineoptions7
        );
        sparklinechart7.render();
    }

    //Chart-seller 8
    var sellerlinecolor8 = getChartColorsArray("chart-seller8");
    if (sellerlinecolor8) {
        var sparklineoptions8 = {
            series: [{
                data: [45, 32, 68, 55, 36, 10, 48, 25, 74, 54],
            },],
            chart: {
                type: "area",
                height: 50,
                sparkline: {
                    enabled: true,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [20, 100, 100, 100],
                },
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            colors: sellerlinecolor8,
            tooltip: {
                fixed: {
                    enabled: false,
                },
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return "";
                        },
                    },
                },
                marker: {
                    show: false,
                },
            },
        };
        var sparklinechart8 = new ApexCharts(
            document.querySelector("#chart-seller8"),
            sparklineoptions8
        );
        sparklinechart8.render();
    }
}


var url = "/velzon/json/";
var sellerListData = '';
var editList = false;

var prevButton = document.getElementById('page-prev');
var nextButton = document.getElementById('page-next');
var currentPage = 1;
var itemsPerPage = 8;

//seller list by json
var getJSON = function (jsonurl, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url + jsonurl, true);
    xhr.responseType = "json";
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};


// get json
getJSON("seller-list.json", function (err, data) {
    if (err !== null) {
        console.log("Something went wrong: " + err);
    } else {
        sellerListData = data;
        loadSellerList(sellerListData, currentPage);
        sortElementsById();
    }
});


// loadSellerList
function loadSellerList(datas, page) {
    var pages = Math.ceil(datas.length / itemsPerPage)
    if (page < 1) page = 1
    if (page > pages) page = pages;
    document.getElementById("seller-list").innerHTML = '';
    for (var i = (page - 1) * itemsPerPage; i < (page * itemsPerPage) && i < datas.length; i++) {
        if (datas[i]) {
            var trendingBadge = datas[i].trending ? '<div class="ribbon ribbon-info ribbon-shape trending-ribbon"><i class="ri-flashlight-fill text-white align-bottom"></i> <span class="trending-ribbon-text">Trending</span></div>' : "";
            document.getElementById("seller-list").innerHTML += '<div class="col-xl-3 col-lg-6">\
        <div class="card ribbon-box right overflow-hidden">\
            <div class="card-body text-center p-4">\
                '+trendingBadge+'\
                <img src="'+ datas[i].shop[0].img + '" alt="' + datas[i].shop[0].img_alt + '" height="45">\
                <h5 class="mb-1 mt-4"><a href="apps-ecommerce-seller-details.html" class="link-primary">'+ datas[i].shop[0].name + '</a></h5>\
                <p class="text-muted mb-4">'+ datas[i].seller + '</p>\
                <div class="row justify-content-center">\
                    <div class="col-lg-8">\
                        <div id="chart-seller'+ datas[i].id + '" data-colors=\'["' + datas[i].chartColor + '"]\'  dir="ltr"></div>\
                    </div>\
                </div>\
                <div class="row mt-4">\
                    <div class="col-lg-6 border-end-dashed border-end">\
                        <h5>'+ datas[i].stock + '</h5>\
                        <span class="text-muted">Item Stock</span>\
                    </div>\
                    <div class="col-lg-6">\
                        <h5>'+ datas[i].wallet_balance + '</h5>\
                        <span class="text-muted">Wallet Balance</span>\
                    </div>\
                </div>\
                <div class="mt-4">\
                    <a href="apps-ecommerce-seller-details.html" class="btn btn-light w-100">View Details</a>\
                </div>\
            </div>\
        </div>\
    </div>';
        }
    }

    paginationEvents();
    pageEvent(datas);
    selectedPage();
    currentPage == 1 ? prevButton.parentNode.classList.add('disabled') : prevButton.parentNode.classList.remove('disabled');
    currentPage == pages ? nextButton.parentNode.classList.add('disabled') : nextButton.parentNode.classList.remove('disabled');
    loadCharts();
}

function fetchIdFromObj(member) {
    return parseInt(member.id);
}

function findNextId() {
    if (sellerListData.length === 0) {
        return 0;
    }
    var lastElementId = fetchIdFromObj(sellerListData[sellerListData.length - 1]),
        firstElementId = fetchIdFromObj(sellerListData[0]);
    return (firstElementId >= lastElementId) ? (firstElementId + 1) : (lastElementId + 1);
}

function sortElementsById() {
    var manySellerList = sellerListData.sort(function (a, b) {
        var x = fetchIdFromObj(a);
        var y = fetchIdFromObj(b);

        if (x > y) {
            return -1;
        }
        if (x < y) {
            return 1;
        }
        return 0;
    })

    loadSellerList(manySellerList, currentPage);
}

function selectedPage() {
    var pagenumLink = document.getElementById('page-num').getElementsByClassName('clickPageNumber');
    for (var i = 0; i < pagenumLink.length; i++) {
        if (i == currentPage - 1) {
            pagenumLink[i].parentNode.classList.add("active");
        } else {
            pagenumLink[i].parentNode.classList.remove("active");
        }
    }
};


// paginationEvents
function paginationEvents() {
    var numPages = function numPages() {
        return Math.ceil(sellerListData.length / itemsPerPage);
    };

    function clickPage() {
        document.addEventListener('click', function (e) {
            if (e.target.nodeName == "A" && e.target.classList.contains("clickPageNumber")) {
                currentPage = e.target.textContent;
                loadSellerList(sellerListData, currentPage);
            }
        });
    };

    function pageNumbers() {
        var pageNumber = document.getElementById('page-num');
        pageNumber.innerHTML = "";
        // for each page
        for (var i = 1; i < numPages() + 1; i++) {
            pageNumber.innerHTML += "<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>" + i + "</a></div>";
        }
    }

    prevButton.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            loadSellerList(sellerListData, currentPage);
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentPage < numPages()) {
            currentPage++;
            loadSellerList(sellerListData, currentPage);
        }
    });

    pageNumbers();
    clickPage();
    selectedPage();
}

// pageEvent
function pageEvent(data) {
    if (data.length == 0) {
        document.getElementById("pagination-element").style.display = "none";
        document.getElementById("noresult").classList.remove("d-none");
    } else {
        document.getElementById("pagination-element").style.display = "flex";
        document.getElementById("noresult").classList.add("d-none");
    }

    var pageNumber = document.getElementById('page-num');
    pageNumber.innerHTML = "";
    var dataPageNum = Math.ceil(data.length / itemsPerPage)
    // for each page
    for (var i = 1; i < dataPageNum + 1; i++) {
        pageNumber.innerHTML += "<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>" + i + "</a></div>";
    }
}


// Search result list
var searchResultList = document.getElementById("searchResultList");
searchResultList.addEventListener("keyup", function () {
    var inputVal = searchResultList.value.toLowerCase();
    function filterItems(arr, query) {
        return arr.filter(function (el) {
            return el.shop[0].name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || el.seller.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
    }
    var filterData = filterItems(sellerListData, inputVal);
    loadSellerList(filterData, currentPage);
});


// choices category input
var categoryInput = new Choices(document.getElementById('category-select'), {
    searchEnabled: false,
});

categoryInput.passedElement.element.addEventListener('change', function (event) {
    var categoryInputValue = event.detail.value;
    if (event.detail.value != "All") {
        var filterData = sellerListData.filter(listdata => listdata.category == categoryInputValue);
    } else {
        var filterData = sellerListData;
    }
    loadSellerList(filterData, currentPage);
}, false);