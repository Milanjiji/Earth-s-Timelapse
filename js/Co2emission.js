

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('mySlider');

    const maximum = Math.max(...Object.values(Co2Emissions).map(({value}) => parseFloat(value)));
    const minimun = Math.min(...Object.values(Co2Emissions).map(({value}) => parseFloat(value)));
    const one = (maximum - minimun) / 100

    const value_chart = document.querySelector('.value_chart5')
    const value_box = document.querySelector('.value-box5')
    const value_number = document.querySelector('.value_number5')
    slider.addEventListener('input', function() {
        sliderValue = slider.value;

        if(sliderValue >= 1780 && sliderValue <= 2022){
            value_box.style.opacity = 1;

            var releventData = Co2Emissions.filter(data => (data.year) == sliderValue)
            var value = releventData[0].value;
            // value = Math.floor(value * 100) / 100;
            value_number.innerText = value
            const percent = parseInt((value - minimun)/one)

            value_chart.style.width =percent + "%";

        }else if(sliderValue < 1780){
            value_box.style.opacity = 0.5;
            value_chart.style.width =1 + "%";
            value_number.innerText = minimun
        }
    });
});



const Co2Emissions = [
    {
        "location": "world",
        "year": "1780",
        "value": "0.017820267"
    },
    {
        "location": "world",
        "year": "1790",
        "value": "0.02189629"
    },
    {
        "location": "world",
        "year": "1800",
        "value": "0.033286307"
    },
    {
        "location": "world",
        "year": "1801",
        "value": "0.032386728"
    },
    {
        "location": "world",
        "year": "1802",
        "value": "0.04067251"
    },
    {
        "location": "world",
        "year": "1803",
        "value": "0.029698573"
    },
    {
        "location": "world",
        "year": "1804",
        "value": "0.031827636"
    },
    {
        "location": "world",
        "year": "1805",
        "value": "0.031196972"
    },
    {
        "location": "world",
        "year": "1806",
        "value": "0.032529123"
    },
    {
        "location": "world",
        "year": "1807",
        "value": "0.035875093"
    },
    {
        "location": "world",
        "year": "1808",
        "value": "0.035049245"
    },
    {
        "location": "world",
        "year": "1809",
        "value": "0.03574179"
    },
    {
        "location": "world",
        "year": "1810",
        "value": "0.03861839"
    },
    {
        "location": "world",
        "year": "1811",
        "value": "0.03910187"
    },
    {
        "location": "world",
        "year": "1812",
        "value": "0.039486334"
    },
    {
        "location": "world",
        "year": "1813",
        "value": "0.039604392"
    },
    {
        "location": "world",
        "year": "1814",
        "value": "0.040314633"
    },
    {
        "location": "world",
        "year": "1815",
        "value": "0.041331157"
    },
    {
        "location": "world",
        "year": "1816",
        "value": "0.042843517"
    },
    {
        "location": "world",
        "year": "1817",
        "value": "0.04607607"
    },
    {
        "location": "world",
        "year": "1818",
        "value": "0.047710717"
    },
    {
        "location": "world",
        "year": "1819",
        "value": "0.046950724"
    },
    {
        "location": "world",
        "year": "1820",
        "value": "0.04639832"
    },
    {
        "location": "world",
        "year": "1821",
        "value": "0.047355454"
    },
    {
        "location": "world",
        "year": "1822",
        "value": "0.048832577"
    },
    {
        "location": "world",
        "year": "1823",
        "value": "0.050612494"
    },
    {
        "location": "world",
        "year": "1824",
        "value": "0.051373772"
    },
    {
        "location": "world",
        "year": "1825",
        "value": "0.053823054"
    },
    {
        "location": "world",
        "year": "1826",
        "value": "0.05403541"
    },
    {
        "location": "world",
        "year": "1827",
        "value": "0.05747962"
    },
    {
        "location": "world",
        "year": "1828",
        "value": "0.057907857"
    },
    {
        "location": "world",
        "year": "1829",
        "value": "0.0572159"
    },
    {
        "location": "world",
        "year": "1830",
        "value": "0.07627875"
    },
    {
        "location": "world",
        "year": "1831",
        "value": "0.07101679"
    },
    {
        "location": "world",
        "year": "1832",
        "value": "0.06967444"
    },
    {
        "location": "world",
        "year": "1833",
        "value": "0.070330165"
    },
    {
        "location": "world",
        "year": "1834",
        "value": "0.07464083"
    },
    {
        "location": "world",
        "year": "1835",
        "value": "0.08151876"
    },
    {
        "location": "world",
        "year": "1836",
        "value": "0.08904739"
    },
    {
        "location": "world",
        "year": "1837",
        "value": "0.08804953"
    },
    {
        "location": "world",
        "year": "1838",
        "value": "0.08733766"
    },
    {
        "location": "world",
        "year": "1839",
        "value": "0.09005479"
    },
    {
        "location": "world",
        "year": "1840",
        "value": "0.097056426"
    },
    {
        "location": "world",
        "year": "1841",
        "value": "0.0994163"
    },
    {
        "location": "world",
        "year": "1842",
        "value": "0.104824804"
    },
    {
        "location": "world",
        "year": "1843",
        "value": "0.10675982"
    },
    {
        "location": "world",
        "year": "1844",
        "value": "0.11398057"
    },
    {
        "location": "world",
        "year": "1845",
        "value": "0.12393704"
    },
    {
        "location": "world",
        "year": "1846",
        "value": "0.12545872"
    },
    {
        "location": "world",
        "year": "1847",
        "value": "0.1352484"
    },
    {
        "location": "world",
        "year": "1848",
        "value": "0.13686027"
    },
    {
        "location": "world",
        "year": "1849",
        "value": "0.14522752"
    },
    {
        "location": "world",
        "year": "1850",
        "value": "0.15385547"
    },
    {
        "location": "world",
        "year": "1851",
        "value": "0.1551192"
    },
    {
        "location": "world",
        "year": "1852",
        "value": "0.1616655"
    },
    {
        "location": "world",
        "year": "1853",
        "value": "0.16903472"
    },
    {
        "location": "world",
        "year": "1854",
        "value": "0.1983029"
    },
    {
        "location": "world",
        "year": "1855",
        "value": "0.20197801"
    },
    {
        "location": "world",
        "year": "1856",
        "value": "0.21502298"
    },
    {
        "location": "world",
        "year": "1857",
        "value": "0.21674007"
    },
    {
        "location": "world",
        "year": "1858",
        "value": "0.21971354"
    },
    {
        "location": "world",
        "year": "1859",
        "value": "0.23261489"
    },
    {
        "location": "world",
        "year": "1860",
        "value": "0.2545674"
    },
    {
        "location": "world",
        "year": "1861",
        "value": "0.26710698"
    },
    {
        "location": "world",
        "year": "1862",
        "value": "0.27152237"
    },
    {
        "location": "world",
        "year": "1863",
        "value": "0.28880972"
    },
    {
        "location": "world",
        "year": "1864",
        "value": "0.310433"
    },
    {
        "location": "world",
        "year": "1865",
        "value": "0.3285574"
    },
    {
        "location": "world",
        "year": "1866",
        "value": "0.33789563"
    },
    {
        "location": "world",
        "year": "1867",
        "value": "0.360665"
    },
    {
        "location": "world",
        "year": "1868",
        "value": "0.36957112"
    },
    {
        "location": "world",
        "year": "1869",
        "value": "0.3909979"
    },
    {
        "location": "world",
        "year": "1870",
        "value": "0.39751005"
    },
    {
        "location": "world",
        "year": "1871",
        "value": "0.4210403"
    },
    {
        "location": "world",
        "year": "1872",
        "value": "0.463626"
    },
    {
        "location": "world",
        "year": "1873",
        "value": "0.4899655"
    },
    {
        "location": "world",
        "year": "1874",
        "value": "0.45645648"
    },
    {
        "location": "world",
        "year": "1875",
        "value": "0.4924599"
    },
    {
        "location": "world",
        "year": "1876",
        "value": "0.49678734"
    },
    {
        "location": "world",
        "year": "1877",
        "value": "0.5038972"
    },
    {
        "location": "world",
        "year": "1878",
        "value": "0.50514203"
    },
    {
        "location": "world",
        "year": "1879",
        "value": "0.5378026"
    },
    {
        "location": "world",
        "year": "1880",
        "value": "0.6031159"
    },
    {
        "location": "world",
        "year": "1881",
        "value": "0.62059504"
    },
    {
        "location": "world",
        "year": "1882",
        "value": "0.6510816"
    },
    {
        "location": "world",
        "year": "1883",
        "value": "0.68749815"
    },
    {
        "location": "world",
        "year": "1884",
        "value": "0.69031864"
    },
    {
        "location": "world",
        "year": "1885",
        "value": "0.69036317"
    },
    {
        "location": "world",
        "year": "1886",
        "value": "0.6959667"
    },
    {
        "location": "world",
        "year": "1887",
        "value": "0.7253166"
    },
    {
        "location": "world",
        "year": "1888",
        "value": "0.7970655"
    },
    {
        "location": "world",
        "year": "1889",
        "value": "0.79146993"
    },
    {
        "location": "world",
        "year": "1890",
        "value": "0.85456306"
    },
    {
        "location": "world",
        "year": "1891",
        "value": "0.88967717"
    },
    {
        "location": "world",
        "year": "1892",
        "value": "0.89069086"
    },
    {
        "location": "world",
        "year": "1893",
        "value": "0.87403756"
    },
    {
        "location": "world",
        "year": "1894",
        "value": "0.8988176"
    },
    {
        "location": "world",
        "year": "1895",
        "value": "0.946655"
    },
    {
        "location": "world",
        "year": "1896",
        "value": "0.97138184"
    },
    {
        "location": "world",
        "year": "1897",
        "value": "1.0107269"
    },
    {
        "location": "world",
        "year": "1898",
        "value": "1.0588747"
    },
    {
        "location": "world",
        "year": "1899",
        "value": "1.1484411"
    },
    {
        "location": "world",
        "year": "1900",
        "value": "1.199232"
    },
    {
        "location": "world",
        "year": "1901",
        "value": "1.2307372"
    },
    {
        "location": "world",
        "year": "1902",
        "value": "1.2517458"
    },
    {
        "location": "world",
        "year": "1903",
        "value": "1.3532422"
    },
    {
        "location": "world",
        "year": "1904",
        "value": "1.3571923"
    },
    {
        "location": "world",
        "year": "1905",
        "value": "1.432905"
    },
    {
        "location": "world",
        "year": "1906",
        "value": "1.4836785"
    },
    {
        "location": "world",
        "year": "1907",
        "value": "1.676299"
    },
    {
        "location": "world",
        "year": "1908",
        "value": "1.5976069"
    },
    {
        "location": "world",
        "year": "1909",
        "value": "1.6497104"
    },
    {
        "location": "world",
        "year": "1910",
        "value": "1.716262"
    },
    {
        "location": "world",
        "year": "1911",
        "value": "1.73124"
    },
    {
        "location": "world",
        "year": "1912",
        "value": "1.8065919"
    },
    {
        "location": "world",
        "year": "1913",
        "value": "1.9446292"
    },
    {
        "location": "world",
        "year": "1914",
        "value": "1.7521608"
    },
    {
        "location": "world",
        "year": "1915",
        "value": "1.7155751"
    },
    {
        "location": "world",
        "year": "1916",
        "value": "1.8405812"
    },
    {
        "location": "world",
        "year": "1917",
        "value": "1.9117817"
    },
    {
        "location": "world",
        "year": "1918",
        "value": "1.8731953"
    },
    {
        "location": "world",
        "year": "1919",
        "value": "1.6123312"
    },
    {
        "location": "world",
        "year": "1920",
        "value": "1.8576044"
    },
    {
        "location": "world",
        "year": "1921",
        "value": "1.6189123"
    },
    {
        "location": "world",
        "year": "1922",
        "value": "1.683432"
    },
    {
        "location": "world",
        "year": "1923",
        "value": "1.893368"
    },
    {
        "location": "world",
        "year": "1924",
        "value": "1.8824672"
    },
    {
        "location": "world",
        "year": "1925",
        "value": "1.8860849"
    },
    {
        "location": "world",
        "year": "1926",
        "value": "1.8362813"
    },
    {
        "location": "world",
        "year": "1927",
        "value": "1.9864538"
    },
    {
        "location": "world",
        "year": "1928",
        "value": "1.9602886"
    },
    {
        "location": "world",
        "year": "1929",
        "value": "2.084881"
    },
    {
        "location": "world",
        "year": "1930",
        "value": "1.9021566"
    },
    {
        "location": "world",
        "year": "1931",
        "value": "1.6854303"
    },
    {
        "location": "world",
        "year": "1932",
        "value": "1.5044751"
    },
    {
        "location": "world",
        "year": "1933",
        "value": "1.5680304"
    },
    {
        "location": "world",
        "year": "1934",
        "value": "1.6880137"
    },
    {
        "location": "world",
        "year": "1935",
        "value": "1.7537812"
    },
    {
        "location": "world",
        "year": "1936",
        "value": "1.9043846"
    },
    {
        "location": "world",
        "year": "1937",
        "value": "2.014623"
    },
    {
        "location": "world",
        "year": "1938",
        "value": "1.8747287"
    },
    {
        "location": "world",
        "year": "1939",
        "value": "1.9639443"
    },
    {
        "location": "world",
        "year": "1940",
        "value": "2.122051"
    },
    {
        "location": "world",
        "year": "1941",
        "value": "2.153978"
    },
    {
        "location": "world",
        "year": "1942",
        "value": "2.1315649"
    },
    {
        "location": "world",
        "year": "1943",
        "value": "2.15036"
    },
    {
        "location": "world",
        "year": "1944",
        "value": "2.1663656"
    },
    {
        "location": "world",
        "year": "1945",
        "value": "1.7885866"
    },
    {
        "location": "world",
        "year": "1946",
        "value": "1.9376519"
    },
    {
        "location": "world",
        "year": "1947",
        "value": "2.1292646"
    },
    {
        "location": "world",
        "year": "1948",
        "value": "2.2258415"
    },
    {
        "location": "world",
        "year": "1949",
        "value": "2.103328"
    },
    {
        "location": "world",
        "year": "1950",
        "value": "2.37238"
    },
    {
        "location": "world",
        "year": "1951",
        "value": "2.5092719"
    },
    {
        "location": "world",
        "year": "1952",
        "value": "2.4968188"
    },
    {
        "location": "world",
        "year": "1953",
        "value": "2.5189998"
    },
    {
        "location": "world",
        "year": "1954",
        "value": "2.522121"
    },
    {
        "location": "world",
        "year": "1955",
        "value": "2.7107303"
    },
    {
        "location": "world",
        "year": "1956",
        "value": "2.829694"
    },
    {
        "location": "world",
        "year": "1957",
        "value": "2.8642392"
    },
    {
        "location": "world",
        "year": "1958",
        "value": "2.8864362"
    },
    {
        "location": "world",
        "year": "1959",
        "value": "2.9810743"
    },
    {
        "location": "world",
        "year": "1960",
        "value": "3.1088755"
    },
    {
        "location": "world",
        "year": "1961",
        "value": "3.0682025"
    },
    {
        "location": "world",
        "year": "1962",
        "value": "3.1172154"
    },
    {
        "location": "world",
        "year": "1963",
        "value": "3.2123766"
    },
    {
        "location": "world",
        "year": "1964",
        "value": "3.3127992"
    },
    {
        "location": "world",
        "year": "1965",
        "value": "3.389065"
    },
    {
        "location": "world",
        "year": "1966",
        "value": "3.4821656"
    },
    {
        "location": "world",
        "year": "1967",
        "value": "3.5207915"
    },
    {
        "location": "world",
        "year": "1968",
        "value": "3.6382928"
    },
    {
        "location": "world",
        "year": "1969",
        "value": "3.800649"
    },
    {
        "location": "world",
        "year": "1970",
        "value": "4.031552"
    },
    {
        "location": "world",
        "year": "1971",
        "value": "4.111967"
    },
    {
        "location": "world",
        "year": "1972",
        "value": "4.2195787"
    },
    {
        "location": "world",
        "year": "1973",
        "value": "4.357756"
    },
    {
        "location": "world",
        "year": "1974",
        "value": "4.257117"
    },
    {
        "location": "world",
        "year": "1975",
        "value": "4.1897635"
    },
    {
        "location": "world",
        "year": "1976",
        "value": "4.341634"
    },
    {
        "location": "world",
        "year": "1977",
        "value": "4.387014"
    },
    {
        "location": "world",
        "year": "1978",
        "value": "4.444167"
    },
    {
        "location": "world",
        "year": "1979",
        "value": "4.4903517"
    },
    {
        "location": "world",
        "year": "1980",
        "value": "4.38398"
    },
    {
        "location": "world",
        "year": "1981",
        "value": "4.2029867"
    },
    {
        "location": "world",
        "year": "1982",
        "value": "4.094062"
    },
    {
        "location": "world",
        "year": "1983",
        "value": "4.0465407"
    },
    {
        "location": "world",
        "year": "1984",
        "value": "4.112731"
    },
    {
        "location": "world",
        "year": "1985",
        "value": "4.176523"
    },
    {
        "location": "world",
        "year": "1986",
        "value": "4.163081"
    },
    {
        "location": "world",
        "year": "1987",
        "value": "4.21461"
    },
    {
        "location": "world",
        "year": "1988",
        "value": "4.30166"
    },
    {
        "location": "world",
        "year": "1989",
        "value": "4.2841187"
    },
    {
        "location": "world",
        "year": "1990",
        "value": "4.2799"
    },
    {
        "location": "world",
        "year": "1991",
        "value": "4.296785"
    },
    {
        "location": "world",
        "year": "1992",
        "value": "4.1085906"
    },
    {
        "location": "world",
        "year": "1993",
        "value": "4.087606"
    },
    {
        "location": "world",
        "year": "1994",
        "value": "4.0692253"
    },
    {
        "location": "world",
        "year": "1995",
        "value": "4.096046"
    },
    {
        "location": "world",
        "year": "1996",
        "value": "4.163014"
    },
    {
        "location": "world",
        "year": "1997",
        "value": "4.13037"
    },
    {
        "location": "world",
        "year": "1998",
        "value": "4.0637503"
    },
    {
        "location": "world",
        "year": "1999",
        "value": "4.0926967"
    },
    {
        "location": "world",
        "year": "2000",
        "value": "4.147293"
    },
    {
        "location": "world",
        "year": "2001",
        "value": "4.1206822"
    },
    {
        "location": "world",
        "year": "2002",
        "value": "4.1582055"
    },
    {
        "location": "world",
        "year": "2003",
        "value": "4.324224"
    },
    {
        "location": "world",
        "year": "2004",
        "value": "4.4195943"
    },
    {
        "location": "world",
        "year": "2005",
        "value": "4.5122457"
    },
    {
        "location": "world",
        "year": "2006",
        "value": "4.6083193"
    },
    {
        "location": "world",
        "year": "2007",
        "value": "4.683315"
    },
    {
        "location": "world",
        "year": "2008",
        "value": "4.704022"
    },
    {
        "location": "world",
        "year": "2009",
        "value": "4.565362"
    },
    {
        "location": "world",
        "year": "2010",
        "value": "4.7678533"
    },
    {
        "location": "world",
        "year": "2011",
        "value": "4.8686357"
    },
    {
        "location": "world",
        "year": "2012",
        "value": "4.878096"
    },
    {
        "location": "world",
        "year": "2013",
        "value": "4.8592534"
    },
    {
        "location": "world",
        "year": "2014",
        "value": "4.8325562"
    },
    {
        "location": "world",
        "year": "2015",
        "value": "4.775163"
    },
    {
        "location": "world",
        "year": "2016",
        "value": "4.719525"
    },
    {
        "location": "world",
        "year": "2017",
        "value": "4.740302"
    },
    {
        "location": "world",
        "year": "2018",
        "value": "4.7850013"
    },
    {
        "location": "world",
        "year": "2019",
        "value": "4.770166"
    },
    {
        "location": "world",
        "year": "2020",
        "value": "4.4647303"
    },
    {
        "location": "world",
        "year": "2021",
        "value": "4.654845"
    },
    {
        "location": "world",
        "year": "2022",
        "value": "4.658219"
    }
]