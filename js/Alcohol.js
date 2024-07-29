
// console.log(one);
// const one = 0.2318;

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('mySlider');

    const maximum = 5.894227;
    const minimun = 5.0060863;
    const one = (maximum - minimun) / 100

    const value_chart = document.querySelector('.value_chart2')
    const value_box = document.querySelector('.value-box2')
    const value_number = document.querySelector('.value_number2')
    slider.addEventListener('input', function() {
        sliderValue = slider.value;

        if(sliderValue >= 2000 && sliderValue <= 2023){
            value_box.style.opacity = 1;

            var releventData = Alcohol.filter(data => (data.year) == sliderValue)
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
 
const Alcohol = [
    {
        "location": "world",
        "year": "2000",
        "value": "5.108837"
    },
    {
        "location": "world",
        "year": "2005",
        "value": "5.0060863"
    },
    {
        "location": "world",
        "year": "2010",
        "value": "5.720461"
    },
    {
        "location": "world",
        "year": "2015",
        "value": "5.894227"
    },
    {
        "location": "world",
        "year": "2019",
        "value": "5.4347816"
    }
]



