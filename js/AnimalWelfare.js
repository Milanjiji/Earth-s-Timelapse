
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('mySlider');

    const maximum = Math.max(...Object.values(AnimalWelfare).map(({value}) => parseFloat(value)));
    const minimun = Math.min(...Object.values(AnimalWelfare).map(({value}) => parseFloat(value)));
    const one = (maximum - minimun) / 100

    const value_chart = document.querySelector('.value_chart4')
    const value_box = document.querySelector('.value-box4')
    const value_number = document.querySelector('.value_number4')
    slider.addEventListener('input', function() {
        sliderValue = slider.value;

        if(sliderValue >= 1961 && sliderValue <= 2022){
            value_box.style.opacity = 1;

            var releventData = AnimalWelfare.filter(data => (data.year) == sliderValue)
            var value = releventData[0].value;
            // value = Math.floor(value * 100) / 100;
            value_number.innerText = value
            const percent = parseInt((value - minimun)/one)

            value_chart.style.width =percent + "%";

        }else if(sliderValue < 1961){
            value_box.style.opacity = 0.5;
            value_chart.style.width =1 + "%";
            value_number.innerText = minimun
        }
    });
});

const AnimalWelfare = [
    {
        "location": "world",
        "year": "1961",
        "value": "8359806543"
    },
    {
        "location": "world",
        "year": "1962",
        "value": "8682058585"
    },
    {
        "location": "world",
        "year": "1963",
        "value": "9123820810"
    },
    {
        "location": "world",
        "year": "1964",
        "value": "9437889655"
    },
    {
        "location": "world",
        "year": "1965",
        "value": "10131220967"
    },
    {
        "location": "world",
        "year": "1966",
        "value": "10360694702"
    },
    {
        "location": "world",
        "year": "1967",
        "value": "11304450173"
    },
    {
        "location": "world",
        "year": "1968",
        "value": "11654943098"
    },
    {
        "location": "world",
        "year": "1969",
        "value": "12354123771"
    },
    {
        "location": "world",
        "year": "1970",
        "value": "13313062738"
    },
    {
        "location": "world",
        "year": "1971",
        "value": "13798777273"
    },
    {
        "location": "world",
        "year": "1972",
        "value": "14641944998"
    },
    {
        "location": "world",
        "year": "1973",
        "value": "15221208310"
    },
    {
        "location": "world",
        "year": "1974",
        "value": "15776781972"
    },
    {
        "location": "world",
        "year": "1975",
        "value": "16006121823"
    },
    {
        "location": "world",
        "year": "1976",
        "value": "16973381143"
    },
    {
        "location": "world",
        "year": "1977",
        "value": "17967297696"
    },
    {
        "location": "world",
        "year": "1978",
        "value": "19065101468"
    },
    {
        "location": "world",
        "year": "1979",
        "value": "20428279266"
    },
    {
        "location": "world",
        "year": "1980",
        "value": "21445416465"
    },
    {
        "location": "world",
        "year": "1981",
        "value": "22459996524"
    },
    {
        "location": "world",
        "year": "1982",
        "value": "23171253783"
    },
    {
        "location": "world",
        "year": "1983",
        "value": "23739760756"
    },
    {
        "location": "world",
        "year": "1984",
        "value": "24177517528"
    },
    {
        "location": "world",
        "year": "1985",
        "value": "25178877499"
    },
    {
        "location": "world",
        "year": "1986",
        "value": "26410924883"
    },
    {
        "location": "world",
        "year": "1987",
        "value": "28281869406"
    },
    {
        "location": "world",
        "year": "1988",
        "value": "29368521485"
    },
    {
        "location": "world",
        "year": "1989",
        "value": "29802522889"
    },
    {
        "location": "world",
        "year": "1990",
        "value": "31293308194"
    },
    {
        "location": "world",
        "year": "1991",
        "value": "32359763273"
    },
    {
        "location": "world",
        "year": "1992",
        "value": "33634192623"
    },
    {
        "location": "world",
        "year": "1993",
        "value": "35323528592"
    },
    {
        "location": "world",
        "year": "1994",
        "value": "36843637386"
    },
    {
        "location": "world",
        "year": "1995",
        "value": "39206857745"
    },
    {
        "location": "world",
        "year": "1996",
        "value": "40209027904"
    },
    {
        "location": "world",
        "year": "1997",
        "value": "41732854130"
    },
    {
        "location": "world",
        "year": "1998",
        "value": "42706227510"
    },
    {
        "location": "world",
        "year": "1999",
        "value": "44928100506"
    },
    {
        "location": "world",
        "year": "2000",
        "value": "46568953671"
    },
    {
        "location": "world",
        "year": "2001",
        "value": "48190256046"
    },
    {
        "location": "world",
        "year": "2002",
        "value": "49862182284"
    },
    {
        "location": "world",
        "year": "2003",
        "value": "50708327333"
    },
    {
        "location": "world",
        "year": "2004",
        "value": "51693154252"
    },
    {
        "location": "world",
        "year": "2005",
        "value": "54179140250"
    },
    {
        "location": "world",
        "year": "2006",
        "value": "55034078650"
    },
    {
        "location": "world",
        "year": "2007",
        "value": "58272504595"
    },
    {
        "location": "world",
        "year": "2008",
        "value": "60847573091"
    },
    {
        "location": "world",
        "year": "2009",
        "value": "62764460546"
    },
    {
        "location": "world",
        "year": "2010",
        "value": "64189070140"
    },
    {
        "location": "world",
        "year": "2011",
        "value": "65977798185"
    },
    {
        "location": "world",
        "year": "2012",
        "value": "67403711254"
    },
    {
        "location": "world",
        "year": "2013",
        "value": "68376582602"
    },
    {
        "location": "world",
        "year": "2014",
        "value": "69827564568"
    },
    {
        "location": "world",
        "year": "2015",
        "value": "72125502288"
    },
    {
        "location": "world",
        "year": "2016",
        "value": "73609927025"
    },
    {
        "location": "world",
        "year": "2017",
        "value": "76836323751"
    },
    {
        "location": "world",
        "year": "2018",
        "value": "78232011029"
    },
    {
        "location": "world",
        "year": "2019",
        "value": "80230359359"
    },
    {
        "location": "world",
        "year": "2020",
        "value": "81048386639"
    },
    {
        "location": "world",
        "year": "2021",
        "value": "81771153602"
    },
    {
        "location": "world",
        "year": "2022",
        "value": "83297073699"
    }
]

