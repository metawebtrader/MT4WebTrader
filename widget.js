(function() {
    function g(f, c, e) {
        var d = document.createElement("iframe");
        d.setAttribute("allowfullscreen", "allowfullscreen");
        d.setAttribute("name", e);
        d.style.width = "100%";
        d.style.height = "100%";
        d.style.border = "none";
        d.addEventListener("load", function() {
            d.removeAttribute("name")
        });
        d.setAttribute("src", c);
        f.appendChild(d)
    }
    window.MetaTraderWebTerminal = function(f, c) {
        var e = document.getElementById(f);
        if (e) {
            var d;
            d = "";
            try {
                d = document.cookie.match(new RegExp("(?:^|; )" + "_wt_uniq".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))
            } catch (h) {}
            d = d ? decodeURIComponent(d[1]) : "";
            d || (d = window.localStorage ? window.localStorage.getItem("_wt_uniq") : void 0,
            d = d ? d : "5192630850019237373");
            var b = d;
            try {
                document.cookie = "_wt_uniq=" + b + "; path=/;"
            } catch (k) {}
            window.localStorage && window.localStorage.setItem("_wt_uniq", b);
            b = [];
            Boolean(c.mobile) && b.push("m=1");
            var a = c.version;
            4 != a && 5 != a || b.push("version=" + a);
            (a = c.login) && b.push("login=" + a);
            (a = c.server) && b.push("trade_server=" + a);
            (a = c.servers) && b.push("servers=" + a.join(","));
            a = c.startMode;
            "open_demo" !== a && "create_demo" !== a || b.push("startup_mode=" + a);
            Boolean(c.demoAllServers) && b.push("demo_all_servers=1");
            Boolean(c.demoAllowPhone) && b.push("demo_show_phone=1");
            a = c.language || c.lang;
            -1 !== "en ru de es pt zh ja ar bg fr id ms pl th tr vi ko hi uz uk da hu fa sk hr cs et sr sl nl fi el he it lv lt ro sv mn zt tg".indexOf(a) && b.push("lang=" + a);
            a = c.colorScheme;
            "black_on_white" !== a && "yellow_on_black" !== a && "green_on_black" !== a || b.push("color_scheme=" + a);
            (a = c.utmCampaign) && b.push("utm_campaign=" + a);
            (a = c.utmSource) && b.push("utm_source=" + a);
            !1 === c.savePassword && b.push("save_password=off");
            (a = c.symbols) && a.length && b.push("symbols=" + a.join(","));
            (a = c.demoType) && b.push("demo_type=" + a);
            (a = c.demoName) && b.push("demo_name=" + a);
            (a = c.demoFirstName) && b.push("demo_first_name=" + a);
            (a = c.demoSecondName) && b.push("demo_second_name=" + a);
            (a = c.demoEmail) && b.push("demo_email=" + a);
            (a = c.demoLeverage) && b.push("demo_leverage=" + a);
            g(e, "https://metatraderweb.app/trade" + (b.length ? "?" + b.join("&") : ""), d)
        }
    }
}
)();
