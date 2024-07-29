

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('mySlider');

    const maximum = Math.max(...Object.values(ChildMortalityRate).map(({value}) => parseFloat(value)));
    const minimun = Math.min(...Object.values(ChildMortalityRate).map(({value}) => parseFloat(value)));
    const one = (maximum - minimun) / 100

    const value_chart = document.querySelector('.value_chart8')
    const value_box = document.querySelector('.value-box8')
    const value_number = document.querySelector('.value_number8')
    slider.addEventListener('input', function() {
        sliderValue = slider.value;

        if(sliderValue >= 1950 && sliderValue <= 2019){
            value_box.style.opacity = 1;

            var releventData = ChildMortalityRate.filter(data => (data.year) == sliderValue)
            var value = releventData[0].value;
            // value = Math.floor(value * 100) / 100;
            value_number.innerText = value
            const percent = parseInt((value - minimun)/one)

            value_chart.style.width =percent + "%";

        }else if(sliderValue < 1950){
            value_box.style.opacity = 0.5;
            value_chart.style.width =1 + "%";
            value_number.innerText = minimun
        }
    });
});



const ChildMortalityRate = [
    {
        "location": "world",
        "year": "1950",
        "value": "20.62"
    },
    {
        "location": "world",
        "year": "1951",
        "value": "20.28"
    },
    {
        "location": "world",
        "year": "1952",
        "value": "19.78"
    },
    {
        "location": "world",
        "year": "1953",
        "value": "19.43"
    },
    {
        "location": "world",
        "year": "1954",
        "value": "19.07"
    },
    {
        "location": "world",
        "year": "1955",
        "value": "18.75"
    },
    {
        "location": "world",
        "year": "1956",
        "value": "18.39"
    },
    {
        "location": "world",
        "year": "1957",
        "value": "18.17"
    },
    {
        "location": "world",
        "year": "1958",
        "value": "19.78"
    },
    {
        "location": "world",
        "year": "1959",
        "value": "22.19"
    },
    {
        "location": "world",
        "year": "1960",
        "value": "27.61"
    },
    {
        "location": "world",
        "year": "1961",
        "value": "21.01"
    },
    {
        "location": "world",
        "year": "1962",
        "value": "17.47"
    },
    {
        "location": "world",
        "year": "1963",
        "value": "16.37"
    },
    {
        "location": "world",
        "year": "1964",
        "value": "16"
    },
    {
        "location": "world",
        "year": "1965",
        "value": "16.08"
    },
    {
        "location": "world",
        "year": "1966",
        "value": "15.77"
    },
    {
        "location": "world",
        "year": "1967",
        "value": "15.49"
    },
    {
        "location": "world",
        "year": "1968",
        "value": "14.86"
    },
    {
        "location": "world",
        "year": "1969",
        "value": "14.53"
    },
    {
        "location": "world",
        "year": "1970",
        "value": "14.2"
    },
    {
        "location": "world",
        "year": "1971",
        "value": "13.92"
    },
    {
        "location": "world",
        "year": "1972",
        "value": "13.56"
    },
    {
        "location": "world",
        "year": "1973",
        "value": "13.23"
    },
    {
        "location": "world",
        "year": "1974",
        "value": "12.94"
    },
    {
        "location": "world",
        "year": "1975",
        "value": "12.72"
    },
    {
        "location": "world",
        "year": "1976",
        "value": "12.48"
    },
    {
        "location": "world",
        "year": "1977",
        "value": "12.15"
    },
    {
        "location": "world",
        "year": "1978",
        "value": "11.85"
    },
    {
        "location": "world",
        "year": "1979",
        "value": "11.54"
    },
    {
        "location": "world",
        "year": "1980",
        "value": "11.23"
    },
    {
        "location": "world",
        "year": "1981",
        "value": "10.98"
    },
    {
        "location": "world",
        "year": "1982",
        "value": "10.74"
    },
    {
        "location": "world",
        "year": "1983",
        "value": "10.55"
    },
    {
        "location": "world",
        "year": "1984",
        "value": "10.34"
    },
    {
        "location": "world",
        "year": "1985",
        "value": "9.95"
    },
    {
        "location": "world",
        "year": "1986",
        "value": "9.66"
    },
    {
        "location": "world",
        "year": "1987",
        "value": "9.39"
    },
    {
        "location": "world",
        "year": "1988",
        "value": "9.14"
    },
    {
        "location": "world",
        "year": "1989",
        "value": "8.87"
    },
    {
        "location": "world",
        "year": "1990",
        "value": "8.66"
    },
    {
        "location": "world",
        "year": "1991",
        "value": "8.51"
    },
    {
        "location": "world",
        "year": "1992",
        "value": "8.33"
    },
    {
        "location": "world",
        "year": "1993",
        "value": "8.17"
    },
    {
        "location": "world",
        "year": "1994",
        "value": "8.1"
    },
    {
        "location": "world",
        "year": "1995",
        "value": "7.91"
    },
    {
        "location": "world",
        "year": "1996",
        "value": "7.76"
    },
    {
        "location": "world",
        "year": "1997",
        "value": "7.61"
    },
    {
        "location": "world",
        "year": "1998",
        "value": "7.46"
    },
    {
        "location": "world",
        "year": "1999",
        "value": "7.31"
    },
    {
        "location": "world",
        "year": "2000",
        "value": "7.12"
    },
    {
        "location": "world",
        "year": "2001",
        "value": "6.95"
    },
    {
        "location": "world",
        "year": "2002",
        "value": "6.78"
    },
    {
        "location": "world",
        "year": "2003",
        "value": "6.6"
    },
    {
        "location": "world",
        "year": "2004",
        "value": "6.44"
    },
    {
        "location": "world",
        "year": "2005",
        "value": "6.24"
    },
    {
        "location": "world",
        "year": "2006",
        "value": "6.04"
    },
    {
        "location": "world",
        "year": "2007",
        "value": "5.83"
    },
    {
        "location": "world",
        "year": "2008",
        "value": "5.65"
    },
    {
        "location": "world",
        "year": "2009",
        "value": "5.47"
    },
    {
        "location": "world",
        "year": "2010",
        "value": "5.31"
    },
    {
        "location": "world",
        "year": "2011",
        "value": "5.11"
    },
    {
        "location": "world",
        "year": "2012",
        "value": "4.91"
    },
    {
        "location": "world",
        "year": "2013",
        "value": "4.75"
    },
    {
        "location": "world",
        "year": "2014",
        "value": "4.58"
    },
    {
        "location": "world",
        "year": "2015",
        "value": "4.39"
    },
    {
        "location": "world",
        "year": "2016",
        "value": "4.16"
    },
    {
        "location": "world",
        "year": "2017",
        "value": "4"
    },
    {
        "location": "world",
        "year": "2018",
        "value": "3.85"
    },
    {
        "location": "world",
        "year": "2019",
        "value": "3.71"
    }
]