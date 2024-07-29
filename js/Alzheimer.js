
// console.log(one);
// const one = 0.2318;

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('mySlider');

    const maximum = 21.237547;
    const minimun = 9.557819;
    const one = (maximum - minimun) / 100

    const value_chart = document.querySelector('.value_chart3')
    const value_box = document.querySelector('.value-box3')
    const value_number = document.querySelector('.value_number3')
    slider.addEventListener('input', function() {
        sliderValue = slider.value;

        if(sliderValue >= 2000 && sliderValue <= 2019){
            value_box.style.opacity = 1;

            var releventData = AlzheimerData.filter(data => (data.year) == sliderValue)
            var value = releventData[0].value;
            value = Math.floor(value * 100) / 100;
            value_number.innerText = value
            const percent = parseInt((value - minimun)/one)

            value_chart.style.width =percent + "%";

        }else if(sliderValue < 2000){
            value_box.style.opacity = 0.5;
            value_chart.style.width =1 + "%";
            value_number.innerText = minimun
        }
    });
});

const AlzheimerData = [
    {
        "location": "world",
        "year": "2000",
        "value": "9.557819"
    },
    {
        "location": "world",
        "year": "2001",
        "value": "10.267346"
    },
    {
        "location": "world",
        "year": "2002",
        "value": "10.8148"
    },
    {
        "location": "world",
        "year": "2003",
        "value": "11.329527"
    },
    {
        "location": "world",
        "year": "2004",
        "value": "11.289652"
    },
    {
        "location": "world",
        "year": "2005",
        "value": "11.606016"
    },
    {
        "location": "world",
        "year": "2006",
        "value": "12.451065"
    },
    {
        "location": "world",
        "year": "2007",
        "value": "12.970224"
    },
    {
        "location": "world",
        "year": "2008",
        "value": "13.843633"
    },
    {
        "location": "world",
        "year": "2009",
        "value": "14.012537"
    },
    {
        "location": "world",
        "year": "2010",
        "value": "14.465929"
    },
    {
        "location": "world",
        "year": "2011",
        "value": "15.484603"
    },
    {
        "location": "world",
        "year": "2012",
        "value": "16.46352"
    },
    {
        "location": "world",
        "year": "2013",
        "value": "17.088467"
    },
    {
        "location": "world",
        "year": "2014",
        "value": "17.466896"
    },
    {
        "location": "world",
        "year": "2015",
        "value": "18.142693"
    },
    {
        "location": "world",
        "year": "2016",
        "value": "18.812256"
    },
    {
        "location": "world",
        "year": "2017",
        "value": "20.036911"
    },
    {
        "location": "world",
        "year": "2018",
        "value": "20.879725"
    },
    {
        "location": "world",
        "year": "2019",
        "value": "21.237547"
    }
]


