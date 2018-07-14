            //menu dynamic with json data
            var data = {
                menu: [{
                    name: 'Beranda',
                    link: '0',
                    class: 'icon-sprite-menu _home',
                    sub: null
                }, {
                    name: 'Akun Saya',
                    link: '0',
                    class: 'icon-sprite-menu _account',
                    sub: null
                }, {
                    name: 'Produk',
                    link: '#',
                    class: 'icon-sprite-menu _product',
                    sub: [{
                        name: 'Arsenal',
                        link: '0-0',
                        sub: null
                    }, {
                        name: 'Liverpool',
                        link: '0-1',
                        sub: null
                    }, {
                        name: 'Manchester United',
                        link: '0-2',
                        sub: null
                    }]
                }, {
                    name: 'Promo',
                    link: '0',
                    class: 'icon-sprite-menu _promo',
                    sub: null
                }, {
                    name: 'Aktivitas',
                    link: '#',
                    class: 'icon-sprite-menu _activity',
                    sub: [{
                        name: 'LOOPiah',
                        link: '0-0',
                        sub: null
                    }, {
                        name: 'LOOP Kepo 2018',
                        link: '0-1',
                        sub: null
                    }, {
                        name: 'LOOP Squad 2018',
                        link: '0-2',
                        sub: null
                    }, {
                        name: 'Ensikloopedia X Ruangguru',
                        link: '0-2',
                        sub: null
                    }, {
                        name: 'HYPBarengLOOP',
                        link: '0-2',
                        sub: null
                    }]
                }, {
                    name: 'Artikel',
                    link: '#',
                    class: 'icon-sprite-menu _article',
                    sub: [{
                        name: 'Entertainment',
                        link: '0-0',
                        sub: null
                    }, {
                        name: 'Lifestyle & Fashion',
                        link: '0-1',
                        sub: null
                    }, {
                        name: 'LOOPspirasi',
                        link: '0-2',
                        sub: null
                    }, {
                        name: 'Sportainment',
                        link: '0-2',
                        sub: null
                    }, {
                        name: 'Techno & Games',
                        link: '0-2',
                        sub: null
                    }]
                }, {
                    name: 'LOOP Channel',
                    link: '0',
                    class: 'icon-sprite-menu _channel',
                    sub: null
                }, {
                    name: ' BELI PAKET',
                    link: '0',
                    class: 'icon-sprite-menu _buy',
                    class_li: 'red-menu_nav',
                    sub: null
                }]
            };
            var datas = JSON.stringify(data);
            localStorage.setItem("menuList", datas);
            var menuList = JSON.parse(localStorage.getItem("menuList"));
//            console.log(getItem);
            
            var getMenuItem = function (itemData) {
                var icons = $("<div>").addClass(itemData.class);
                //buat dua kondisi ketika tidak ada sub maka ada div didalam a
                if(itemData.class){
                    var item = $("<li>")
                        .append(
                    $("<a>", {
                        href: '#' + itemData.link,
                        html: itemData.name
                    }).prepend(
                    icons
                    ));   
                } else {
                    var item = $("<li>")
                        .append(
                    $("<a>", {
                        href: '#' + itemData.link,
                        html: itemData.name
                    }));   
                }
                
                //untuk kondisi beli paket
                if(itemData.class_li){
                    var item = $("<li class="+itemData.class_li+">")
                        .append(
                    $("<a>", {
                        href: '#' + itemData.link,
                        html: itemData.name
                    }));   
                    setTimeout(function(){
                        $("<div>").addClass(itemData.class).prependTo(".red-menu_nav a")
                    }, 500);
                }

                if (itemData.sub) {
                    var subList = $("<ul class='dropdown-menu' role='menu'>");
                    $.each(itemData.sub, function () {
                        subList.append(getMenuItem(this));
                    });
                    var divs = "";
                    var dropdown = $("<li class='dropdown'>")
                            .append(
                                "<a class='dropdown-toggle' data-toggle='dropdown' href='"+itemData.link+"' aria-expanded='false'><div class='"+itemData.class+"'></div>"+itemData.name+"<span class='fa fa-angle-down'></span></a>"
                            );
                    dropdown.append(subList);
                    return dropdown;
                }
                return item;
            };

            var $menu = $("#menu-sidebar");
            $.each(menuList.menu, function () {
                $menu.append(
                    getMenuItem(this)
                );
            });
            //$menu.menu();