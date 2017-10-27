
    var chart_config = {
        chart: {
            container: "#theTree",

            animateOnInit: true,
            connectors : {
                type: "curve"
            },

            node: {
                collapsable: true,
                collapsed: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700/*,
                /*connectorsAnimation: "bounce",
                connectorsSpeed: 700*/
            }
        },
        nodeStructure: {
            image: "img/GnuLinux.png",
            collapsable: true,
            collapsed: true,
            children: [
                {
                    image: "img/debian-based.png",
                    collapsed: true,
                    children: [
                        {
                            image: "img/ubuntu.png",
                            collapsed:true,
                            collapsable: true,
                            children: [
                                {
                                    image: "img/gnome.svg",
                                    link: {
                                        href:"http://openmindsclub.net"
                                    }
                                },
                                {
                                    image: "img/unity.jpg"
                                }
                            ]
                        }
                    ]
                },
                {
                    image: "img/archlinux.png",
                    //childrenDropLevel: 1,
                    collapsed: true,
                    children: [
                        {
                            image: "img/manjaro.png",
                        },
                        {
                            image: "img/archlinux.png"
                        }
                    ]
                }

            ]
        }
    };
