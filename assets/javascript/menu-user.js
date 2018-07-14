var menu_user = {
        menu: [{
            name: 'Akun Saya',
            link: '0',
            class: 'icon-sprite-menu _account',
            sub: null
        }, {
            name: 'Feed',
            link: '0',
            class: 'icon-sprite-menu _feed',
            sub: null
        }, {
            name: 'Community',
            link: '0',
            class: 'icon-sprite-menu _community',
            sub: null
        }, {
            name: 'Share Yout Story',
            link: '0',
            class: 'icon-sprite-menu _shareyourstory',
            sub: null
        }, {
            name: 'LOOP Squad',
            link: '0',
            class: 'icon-sprite-menu _loopsquad',
            sub: null
        }, {
            name: 'LOOPiah',
            link: '0',
            class: 'icon-sprite-menu _loopiah',
            add_label: [{
                name_class: 'notif-user_poin',
                id: "label-putar",
                text: 'kesempatan putar',
            }],
            sub: null
        }, {
            name: 'Redeem Center',
            link: '0',
            class: 'icon-sprite-menu _redeemcenter',
            sub: null
        }, {
            name: 'Keluar',
            link: '0',
            class: 'icon-sprite-menu _signout',
            sub: null
        }]
    };
    var menu_user = JSON.stringify(menu_user);
    localStorage.setItem("userMenuList", menu_user);
    var userMenuList = JSON.parse(localStorage.getItem("userMenuList"));

    var getMenuItemUser = function (itemData) {
        var icons = $("<div>").addClass(itemData.class);
        //buat dua kondisi ketika tidak ada sub maka ada div didalam a
        if(itemData.add_label){
            var item = $("<li>")
                    .append(
                $("<a>", {
                    href: '#' + itemData.link,
                    html: itemData.name
                }).prepend(
                icons
                ).append($("<div id='putar-notif'>").addClass(itemData.add_label[0].name_class).text(itemData.add_label[0].text).append($('<div>').addClass('putar-badge').text("1")))); 
            } else {
                var item = $("<li>")
                        .append(
                    $("<a>", {
                        href: '#' + itemData.link,
                        html: itemData.name
                    }).prepend(
                    icons
                    ));   
            }       

        return item;
    };

    var $menuItemUser = $("#menu-user_nav");
    $.each(userMenuList.menu, function () {
        $menuItemUser.append(
            getMenuItemUser(this)
        );
    });  