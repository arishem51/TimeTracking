const data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]

const App = () => {
    let content = document.getElementById('divContent')
    const query = (id) => document.getElementById(id);
    const render = (params ='daily') => {
        content.innerHTML = data.reduce((total, item, index) => {
            return total += `<div class="item${index + 2} item ">
            <div class="item__content">
                <div>
                    <span class="fw-bold">${item.title}</span>
                    <img src="./images/icon-ellipsis.svg" alt="">
                </div>
                <h1 id='current'>${item.timeframes[params].current} hrs</h1>
                <p id='previous'>Last Week - ${item.timeframes[params].previous} hrs</p>
            </div>
        </div>`
        }, `<div class="item1 item">
        <div class="item1__content">
            <img src="./images/image-jeremy.png" alt="">
            <p>Report For</p>
            <h2>Jeremy Robson</h2>
        </div>
        <div class="item1__text">
            <span id='daily'>Daily</span>
            <span id='weekly'>Weekly</span>
            <span id='monthly'>Monthly</span>
        </div>
    </div>`);
        const queryRender = params => {
            query(params).addEventListener('click',()=>{
                render(params)
            })
        }

        queryRender('daily')
        queryRender('weekly')
        queryRender('monthly')
    }
    render()
}

App()
