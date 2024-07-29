

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('mySlider');

    const maximum = Math.max(...Object.values(CancerDeathRate).map(({value}) => parseFloat(value)));
    const minimun = Math.min(...Object.values(CancerDeathRate).map(({value}) => parseFloat(value)));
    const one = (maximum - minimun) / 100

    const value_chart = document.querySelector('.value_chart7')
    const value_box = document.querySelector('.value-box7')
    const value_number = document.querySelector('.value_number7')
    slider.addEventListener('input', function() {
        sliderValue = slider.value;

        if(sliderValue >= 1950 && sliderValue <= 2020){
            value_box.style.opacity = 1;

            var releventData = CancerDeathRate.filter(data => (data.year) == sliderValue)
            var value = releventData[0].value;
            // value = Math.floor(value * 100) / 100;
            value_number.innerText = value
            const percent = parseInt((value - minimun)/one)

            value_chart.style.width = percent + "%";

        }else if(sliderValue < 1950){
            value_box.style.opacity = 0.5;
            value_chart.style.width =1 + "%";
            value_number.innerText = minimun
        }
    });
});


const CancerDeathRate = [
    {
        "location": "united kingdom",
        "year": "1950",
        "value": "157.27017"
    },
    {
        "location": "united kingdom",
        "year": "1951",
        "value": "156.8317"
    },
    {
        "location": "united kingdom",
        "year": "1952",
        "value": "157.59587"
    },
    {
        "location": "united kingdom",
        "year": "1953",
        "value": "156.57422"
    },
    {
        "location": "united kingdom",
        "year": "1954",
        "value": "158.21255"
    },
    {
        "location": "united kingdom",
        "year": "1955",
        "value": "158.47493"
    },
    {
        "location": "united kingdom",
        "year": "1956",
        "value": "158.96487"
    },
    {
        "location": "united kingdom",
        "year": "1957",
        "value": "158.4167"
    },
    {
        "location": "united kingdom",
        "year": "1958",
        "value": "159.73636"
    },
    {
        "location": "united kingdom",
        "year": "1959",
        "value": "160.2637"
    },
    {
        "location": "united kingdom",
        "year": "1960",
        "value": "160.25688"
    },
    {
        "location": "united kingdom",
        "year": "1961",
        "value": "160.09996"
    },
    {
        "location": "united kingdom",
        "year": "1962",
        "value": "161.05467"
    },
    {
        "location": "united kingdom",
        "year": "1963",
        "value": "161.3545"
    },
    {
        "location": "united kingdom",
        "year": "1964",
        "value": "162.4152"
    },
    {
        "location": "united kingdom",
        "year": "1965",
        "value": "162.85732"
    },
    {
        "location": "united kingdom",
        "year": "1966",
        "value": "163.61678"
    },
    {
        "location": "united kingdom",
        "year": "1967",
        "value": "163.99289"
    },
    {
        "location": "united kingdom",
        "year": "1968",
        "value": "166.82191"
    },
    {
        "location": "united kingdom",
        "year": "1969",
        "value": "167.9473"
    },
    {
        "location": "united kingdom",
        "year": "1970",
        "value": "167.58553"
    },
    {
        "location": "united kingdom",
        "year": "1971",
        "value": "166.66495"
    },
    {
        "location": "united kingdom",
        "year": "1972",
        "value": "167.56357"
    },
    {
        "location": "united kingdom",
        "year": "1973",
        "value": "168.0328"
    },
    {
        "location": "united kingdom",
        "year": "1974",
        "value": "168.78804"
    },
    {
        "location": "united kingdom",
        "year": "1975",
        "value": "167.82785"
    },
    {
        "location": "united kingdom",
        "year": "1976",
        "value": "170.59984"
    },
    {
        "location": "united kingdom",
        "year": "1977",
        "value": "168.81918"
    },
    {
        "location": "united kingdom",
        "year": "1978",
        "value": "170.20354"
    },
    {
        "location": "united kingdom",
        "year": "1979",
        "value": "170.4813"
    },
    {
        "location": "united kingdom",
        "year": "1980",
        "value": "169.55959"
    },
    {
        "location": "united kingdom",
        "year": "1981",
        "value": "166.6462"
    },
    {
        "location": "united kingdom",
        "year": "1982",
        "value": "166.69409"
    },
    {
        "location": "united kingdom",
        "year": "1983",
        "value": "168.41241"
    },
    {
        "location": "united kingdom",
        "year": "1984",
        "value": "173.01459"
    },
    {
        "location": "united kingdom",
        "year": "1985",
        "value": "172.43658"
    },
    {
        "location": "united kingdom",
        "year": "1986",
        "value": "170.47897"
    },
    {
        "location": "united kingdom",
        "year": "1987",
        "value": "170.61792"
    },
    {
        "location": "united kingdom",
        "year": "1988",
        "value": "171.51552"
    },
    {
        "location": "united kingdom",
        "year": "1989",
        "value": "170.94792"
    },
    {
        "location": "united kingdom",
        "year": "1990",
        "value": "168.82921"
    },
    {
        "location": "united kingdom",
        "year": "1991",
        "value": "167.45244"
    },
    {
        "location": "united kingdom",
        "year": "1992",
        "value": "166.68095"
    },
    {
        "location": "united kingdom",
        "year": "1993",
        "value": "162.85098"
    },
    {
        "location": "united kingdom",
        "year": "1994",
        "value": "160.51663"
    },
    {
        "location": "united kingdom",
        "year": "1995",
        "value": "158.056"
    },
    {
        "location": "united kingdom",
        "year": "1996",
        "value": "155.26538"
    },
    {
        "location": "united kingdom",
        "year": "1997",
        "value": "151.5354"
    },
    {
        "location": "united kingdom",
        "year": "1998",
        "value": "150.77625"
    },
    {
        "location": "united kingdom",
        "year": "1999",
        "value": "147.34549"
    },
    {
        "location": "united kingdom",
        "year": "2000",
        "value": "144.53355"
    },
    {
        "location": "united kingdom",
        "year": "2001",
        "value": "146.43669"
    },
    {
        "location": "united kingdom",
        "year": "2002",
        "value": "145.14964"
    },
    {
        "location": "united kingdom",
        "year": "2003",
        "value": "142.45438"
    },
    {
        "location": "united kingdom",
        "year": "2004",
        "value": "139.94664"
    },
    {
        "location": "united kingdom",
        "year": "2005",
        "value": "138.00128"
    },
    {
        "location": "united kingdom",
        "year": "2006",
        "value": "137.00809"
    },
    {
        "location": "united kingdom",
        "year": "2007",
        "value": "135.89929"
    },
    {
        "location": "united kingdom",
        "year": "2008",
        "value": "134.27702"
    },
    {
        "location": "united kingdom",
        "year": "2009",
        "value": "131.5915"
    },
    {
        "location": "united kingdom",
        "year": "2010",
        "value": "130.03084"
    },
    {
        "location": "united kingdom",
        "year": "2011",
        "value": "129.06073"
    },
    {
        "location": "united kingdom",
        "year": "2012",
        "value": "128.6588"
    },
    {
        "location": "united kingdom",
        "year": "2013",
        "value": "126.25813"
    },
    {
        "location": "united kingdom",
        "year": "2014",
        "value": "124.72168"
    },
    {
        "location": "united kingdom",
        "year": "2015",
        "value": "123.351006"
    },
    {
        "location": "united kingdom",
        "year": "2016",
        "value": "122.72516"
    },
    {
        "location": "united kingdom",
        "year": "2017",
        "value": "119.9948"
    },
    {
        "location": "united kingdom",
        "year": "2018",
        "value": "121.38994"
    },
    {
        "location": "united kingdom",
        "year": "2019",
        "value": "116.20921"
    },
    {
        "location": "united kingdom",
        "year": "2020",
        "value": "114.84977"
    },
    {
        "location": "united states",
        "year": "1950",
        "value": "141.0546"
    },
    {
        "location": "united states",
        "year": "1951",
        "value": "139.72354"
    },
    {
        "location": "united states",
        "year": "1952",
        "value": "141.27036"
    },
    {
        "location": "united states",
        "year": "1953",
        "value": "141.49948"
    },
    {
        "location": "united states",
        "year": "1954",
        "value": "141.22122"
    },
    {
        "location": "united states",
        "year": "1955",
        "value": "141.21388"
    },
    {
        "location": "united states",
        "year": "1956",
        "value": "141.89107"
    },
    {
        "location": "united states",
        "year": "1957",
        "value": "141.8789"
    },
    {
        "location": "united states",
        "year": "1958",
        "value": "139.66469"
    },
    {
        "location": "united states",
        "year": "1959",
        "value": "139.58078"
    },
    {
        "location": "united states",
        "year": "1960",
        "value": "141.07108"
    },
    {
        "location": "united states",
        "year": "1961",
        "value": "140.59435"
    },
    {
        "location": "united states",
        "year": "1962",
        "value": "140.62996"
    },
    {
        "location": "united states",
        "year": "1963",
        "value": "141.70555"
    },
    {
        "location": "united states",
        "year": "1964",
        "value": "141.33353"
    },
    {
        "location": "united states",
        "year": "1965",
        "value": "142.72743"
    },
    {
        "location": "united states",
        "year": "1966",
        "value": "143.30132"
    },
    {
        "location": "united states",
        "year": "1967",
        "value": "144.12642"
    },
    {
        "location": "united states",
        "year": "1968",
        "value": "145.27016"
    },
    {
        "location": "united states",
        "year": "1969",
        "value": "144.89545"
    },
    {
        "location": "united states",
        "year": "1970",
        "value": "145.7533"
    },
    {
        "location": "united states",
        "year": "1971",
        "value": "144.85208"
    },
    {
        "location": "united states",
        "year": "1972",
        "value": "145.94026"
    },
    {
        "location": "united states",
        "year": "1973",
        "value": "145.90549"
    },
    {
        "location": "united states",
        "year": "1974",
        "value": "147.16289"
    },
    {
        "location": "united states",
        "year": "1975",
        "value": "144.70374"
    },
    {
        "location": "united states",
        "year": "1976",
        "value": "146.18571"
    },
    {
        "location": "united states",
        "year": "1977",
        "value": "146.74261"
    },
    {
        "location": "united states",
        "year": "1978",
        "value": "147.53032"
    },
    {
        "location": "united states",
        "year": "1979",
        "value": "146.68095"
    },
    {
        "location": "united states",
        "year": "1980",
        "value": "148.34332"
    },
    {
        "location": "united states",
        "year": "1981",
        "value": "147.61397"
    },
    {
        "location": "united states",
        "year": "1982",
        "value": "148.82741"
    },
    {
        "location": "united states",
        "year": "1983",
        "value": "149.93874"
    },
    {
        "location": "united states",
        "year": "1984",
        "value": "150.07083"
    },
    {
        "location": "united states",
        "year": "1985",
        "value": "150.20029"
    },
    {
        "location": "united states",
        "year": "1986",
        "value": "150.06197"
    },
    {
        "location": "united states",
        "year": "1987",
        "value": "149.79605"
    },
    {
        "location": "united states",
        "year": "1988",
        "value": "149.76562"
    },
    {
        "location": "united states",
        "year": "1989",
        "value": "150.33247"
    },
    {
        "location": "united states",
        "year": "1990",
        "value": "152.73228"
    },
    {
        "location": "united states",
        "year": "1991",
        "value": "152.13118"
    },
    {
        "location": "united states",
        "year": "1992",
        "value": "150.85713"
    },
    {
        "location": "united states",
        "year": "1993",
        "value": "150.61853"
    },
    {
        "location": "united states",
        "year": "1994",
        "value": "149.48247"
    },
    {
        "location": "united states",
        "year": "1995",
        "value": "148.0002"
    },
    {
        "location": "united states",
        "year": "1996",
        "value": "145.92844"
    },
    {
        "location": "united states",
        "year": "1997",
        "value": "143.40282"
    },
    {
        "location": "united states",
        "year": "1998",
        "value": "141.01329"
    },
    {
        "location": "united states",
        "year": "1999",
        "value": "140.67679"
    },
    {
        "location": "united states",
        "year": "2000",
        "value": "137.92169"
    },
    {
        "location": "united states",
        "year": "2001",
        "value": "135.46497"
    },
    {
        "location": "united states",
        "year": "2002",
        "value": "133.66238"
    },
    {
        "location": "united states",
        "year": "2003",
        "value": "131.21318"
    },
    {
        "location": "united states",
        "year": "2004",
        "value": "128.24155"
    },
    {
        "location": "united states",
        "year": "2005",
        "value": "126.78566"
    },
    {
        "location": "united states",
        "year": "2006",
        "value": "124.679344"
    },
    {
        "location": "united states",
        "year": "2007",
        "value": "122.715294"
    },
    {
        "location": "united states",
        "year": "2008",
        "value": "121.69535"
    },
    {
        "location": "united states",
        "year": "2009",
        "value": "119.54206"
    },
    {
        "location": "united states",
        "year": "2010",
        "value": "118.069984"
    },
    {
        "location": "united states",
        "year": "2011",
        "value": "115.7902"
    },
    {
        "location": "united states",
        "year": "2012",
        "value": "114.47089"
    },
    {
        "location": "united states",
        "year": "2013",
        "value": "112.31933"
    },
    {
        "location": "united states",
        "year": "2014",
        "value": "111.020515"
    },
    {
        "location": "united states",
        "year": "2015",
        "value": "109.13923"
    },
    {
        "location": "united states",
        "year": "2016",
        "value": "106.98014"
    },
    {
        "location": "united states",
        "year": "2017",
        "value": "104.64722"
    },
    {
        "location": "united states",
        "year": "2018",
        "value": "102.31732"
    },
    {
        "location": "united states",
        "year": "2019",
        "value": "99.95339"
    },
    {
        "location": "united states",
        "year": "2020",
        "value": "98.2412"
    }
]