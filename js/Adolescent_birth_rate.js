


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('mySlider');

    const maximum = 64.45;
    const minimun = 41.27;
    // const one = (maximum - minimun) / 100
    const one = 0.2318;

    const value_chart = document.querySelector('.value_chart1')
    const value_box = document.querySelector('.value-box1')
    const value_number = document.querySelector('.value_number1')
    slider.addEventListener('input', function() {
        sliderValue = slider.value;

        if(sliderValue >= 2000 && sliderValue <= 2023){
            value_box.style.opacity = 1;

            var releventData = AdolescentBirthRate.filter(data => (data.year) == sliderValue)
            var value = releventData[0].value;
            value_number.innerText = value
            const percent = parseInt((value - minimun)/one)

            value_chart.style.width =percent + "%";
        }else if(sliderValue < 2000){
            value_box.style.opacity = 0.5;
            value_chart.style.width =100 + "%";
            value_number.innerText = maximum
        }
    });
});

AdolescentBirthRate = [
    {
        "location": "world",
        "year": "2000",
        "value": "64.45"
    },
    {
        "location": "world",
        "year": "2001",
        "value": "63.83"
    },
    {
        "location": "world",
        "year": "2002",
        "value": "61.9"
    },
    {
        "location": "world",
        "year": "2003",
        "value": "60.07"
    },
    {
        "location": "world",
        "year": "2004",
        "value": "57.06"
    },
    {
        "location": "world",
        "year": "2005",
        "value": "53.39"
    },
    {
        "location": "world",
        "year": "2006",
        "value": "51.89"
    },
    {
        "location": "world",
        "year": "2007",
        "value": "51.9"
    },
    {
        "location": "world",
        "year": "2008",
        "value": "52.96"
    },
    {
        "location": "world",
        "year": "2009",
        "value": "51.98"
    },
    {
        "location": "world",
        "year": "2010",
        "value": "52"
    },
    {
        "location": "world",
        "year": "2011",
        "value": "51.62"
    },
    {
        "location": "world",
        "year": "2012",
        "value": "51.4"
    },
    {
        "location": "world",
        "year": "2013",
        "value": "51.16"
    },
    {
        "location": "world",
        "year": "2014",
        "value": "50.77"
    },
    {
        "location": "world",
        "year": "2015",
        "value": "47.16"
    },
    {
        "location": "world",
        "year": "2016",
        "value": "45.63"
    },
    {
        "location": "world",
        "year": "2017",
        "value": "44.89"
    },
    {
        "location": "world",
        "year": "2018",
        "value": "44.05"
    },
    {
        "location": "world",
        "year": "2019",
        "value": "43.34"
    },
    {
        "location": "world",
        "year": "2020",
        "value": "42.71"
    },
    {
        "location": "world",
        "year": "2021",
        "value": "42.45"
    },
    {
        "location": "world",
        "year": "2022",
        "value": "41.84"
    },
    {
        "location": "world",
        "year": "2023",
        "value": "41.27"
    }
]
// var max = 0;
// var min = 1000000000000000;
// for(var i = 0;i < data.length;i++){
//     if(data[i].value <= min){
//         min = data[i].value;
//     }
//     console.log("minimum value is : ", min);

// }
// for(var i = 0;i < data.length;i++){
//     if(data[i].value >= max){
//         max = data[i].value;
//     }
//     console.log("maximum value is : ", max);

// }


