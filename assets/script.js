const offcanvasMenu = document.getElementById('offcanvasMenu');
const hamburgerButton = document.querySelector('.hamburger-btn');

// ハンバーガー → ×
offcanvasMenu.addEventListener('show.bs.offcanvas', function () {
    hamburgerButton.classList.add('active');
});

// × → ハンバーガー
offcanvasMenu.addEventListener('hide.bs.offcanvas', function () {
    hamburgerButton.classList.remove('active');
});


// メニュー内のリンク
const menuLinks = document.querySelectorAll('#offcanvasMenu .nav-link');

menuLinks.forEach(function (link) {

    link.addEventListener('click', function (event) {

        const href = link.getAttribute('href');

        // offcanvasを取得
        const offcanvas =
            bootstrap.Offcanvas.getInstance(offcanvasMenu);

        // hrefがない場合は何もしない
        if (!href) return;


        // -------------------------
        // ① 同じページ内リンク
        // #works
        // #about
        // #contact
        // -------------------------
        if (href.startsWith('#') && href.length > 1) {

            event.preventDefault();

            const target = document.querySelector(href);

            if (!target) return;

            offcanvas.hide();

            // 閉じ終わってからスクロール
            offcanvasMenu.addEventListener(
                'hidden.bs.offcanvas',
                function () {

                    target.scrollIntoView({
                        behavior: 'smooth'
                    });

                },
                { once: true }
            );
        }


        // -------------------------
        // ② 別ページへのリンク
        // index.html
        // index.html#works
        // pikaru.html など
        // -------------------------
        else {

            event.preventDefault();

            offcanvas.hide();

            // 閉じ終わってからページ移動
            offcanvasMenu.addEventListener(
                'hidden.bs.offcanvas',
                function () {

                    window.location.href = href;

                },
                { once: true }
            );
        }

    });

});